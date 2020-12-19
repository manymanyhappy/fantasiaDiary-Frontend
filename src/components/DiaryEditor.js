import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import format from 'date-fns/format';
import styled from 'styled-components';
import PacmanLoader from 'react-spinners/PacmanLoader';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import { saveDiary } from '../utils/api';
import { TOKEN } from '../constants/index';

import Header from './Hearder';

const ContentWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const LeftBlockWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 11.1%;
`;

const RightBlockWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #f0f2f5;

  .loading_box {
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 90%;
    height: 100%;
    z-index: 100;
    background-color: #081752;
    opacity: 80%;
  }

  .loading_indicator {
    display: flex;
    width: 80%;
    height: 300px;
    margin-left: 80px;
    margin-top: 200px;
    justify-content: center;
    align-items: center;
  }

  .loading_text {
    display: flex;
    width: 30%;
    height: 100px;
    justify-content: center;
    align-items: center;
    margin-left: 550px;
    font-size: 22px;
    color: #E4D097;
    letter-spacing: 4px;
  }
`;

const DiaryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 900px;
  width: 50%;
  background-color: #081752;
  border-radius: 10px;

  .title_box {
    display: flex;
    align-items: center;
    padding: 20px;
    width: 90%;
    height: 60px;
    margin-bottom: 70px;
    border-left: 5px solid #E4D097;
    font-size: 31px;
    letter-spacing: 2px;
    color: #E4D097;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .wrapper-class{
    width: 95%;
    margin: 0 auto;
    margin-bottom: 20px;
  }

  .editor {
    height: 450px !important;
    padding: 20px !important;
    margin-top: 50px;
    border-radius: 10px !important;
    background-color: #f3eddc;
  }

  .button {
    display: flex;
    justify-content: center;
    font-size: 20px;
    letter-spacing: 8px;
    padding: 20px;
    width: 300px;
    border: none;
    border-bottom: 2px solid #E4D097;
    outline: none;
    background: none;
    border-radius: 20px;
    color: #E4D097;

    &:hover {
      background-color: #E4D097;
      transition: all ease 0.2s;
      color: #081752;
    }
  }
`;

const DiaryEditor = () => {
  const [ editorState, setEditorState ] = useState(EditorState.createEmpty());
  const [ isLoading, setIsLoading ] = useState(false);
  const userData = useSelector(state => state.login.userData);

  const history = useHistory();

  const currentYear = format(new Date(), 'yyyy');
  const currentMonth = format(new Date(), 'MM');
  const currentDate = format(new Date(), 'd');

  const userToken = localStorage.getItem(TOKEN); // token을 넘기는 방식 바꾸기

  let contentState = editorState.getCurrentContent();
  let originalDiaryText = convertToRaw(contentState);

  const todayDiary = {
    creator: userData._id,
    yearAndMonth: `${currentYear}-${currentMonth}`,
    date: currentDate,
    details: JSON.stringify(convertToRaw(contentState)),
    fantasia_diary: ''
  };

  const onEditorStateChange = editorState => {
    setEditorState(editorState);
  };

  const requestSave = async () => {
    setIsLoading(true);

    await saveDiary(
      todayDiary,
      originalDiaryText,
      userToken,
      history,
      setIsLoading
      );

  };

  return (
    <ContentWrapper>
      <LeftBlockWrapper>
        <Header />
      </LeftBlockWrapper>
      <RightBlockWrapper >
        {
          isLoading &&
          <div className='loading_box'>
            <div className='loading_indicator'>
              <PacmanLoader
                size={100}
                color={'#E4D097'}
                loading={isLoading}
              />
            </div>
            <div className='loading_text'>
              <span>😇 일기를 저장하고있어요 😇 </span>
            </div>
          </div>
        }
        <DiaryWrapper>
          <div className='title_box'>
            {currentYear}년 {currentMonth}월 {currentDate}일 환상의 일기장
          </div>
          <Editor
            // 에디터와 툴바 모두에 적용되는 클래스
            wrapperClassName='wrapper-class'
            // 에디터 주변에 적용된 클래스
            editorClassName='editor'
            // 툴바 주위에 적용된 클래스
            toolbarClassName='toolbar-class'
            // 툴바 설정
            toolbar={{
              // inDropdown: 해당 항목과 관련된 항목을 드롭다운으로 나타낼것인지
              list: { inDropdown: true },
              textAlign: { inDropdown: true },
              link: { inDropdown: true },
              history: { inDropdown: false },
            }}
            placeholder="내용을 작성해주세요."
            // 한국어 설정
            localization={{
              locale: 'ko',
            }}
            // 초기값 설정
            editorState={editorState}
            // 에디터의 값이 변경될 때마다 onEditorStateChange 호출
            onEditorStateChange={onEditorStateChange}
          />
          <button
            className='button'
            onClick={requestSave}
          >
            일기장 등록하기
          </button>
        </DiaryWrapper>
      </RightBlockWrapper>
    </ContentWrapper>
  );
};

export default DiaryEditor;
