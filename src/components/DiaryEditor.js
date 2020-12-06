import React, { useState } from 'react';
import format from 'date-fns/format';
import styled from 'styled-components';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import Header from './Hearder';

const ContentWrapper = styled.div`
  display: flex;
  height: 90vh;
`;

const LeftBlockWrapper = styled.div`
  display: flex;
  padding: 90px;
`;

const RightBlockWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95vh;
  width: 100%;
`;

const DiaryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 900px;
  width: 50%;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  .title_box {
    display: flex;
    align-items: center;
    padding: 20px;
    width: 90%;
    height: 60px;
    margin-bottom: 70px;
    border-left: 3px solid rosybrown;
    font-size: 31px;
    letter-spacing: 2px;
    color: rgba(0, 0, 0, 0.7);
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
    background-color: rgba(0, 0, 0, 0.1);
  }

  .button {
    display: flex;
    justify-content: center;
    font-size: 20px;
    letter-spacing: 8px;
    padding: 20px;
    width: 300px;
    border: none;
    border-bottom: 2px solid rosybrown;
    outline: none;
    background: none;
  }
`;

const DiaryEditor = () => {
  const [ editorState, setEditorState ] = useState(EditorState.createEmpty());

  const currentYear = format(new Date(), 'yyyy');
  const currentMonth = format(new Date(), 'MM');
  const currentDate = format(new Date(), 'd');

  const onEditorStateChange = editorState => {
    setEditorState(editorState);

    const contentState = editorState.getCurrentContent();
    console.log('content State', convertToRaw(contentState));
  };

  return (
    <ContentWrapper>
      <LeftBlockWrapper>
        <Header />
      </LeftBlockWrapper>
      <RightBlockWrapper >
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
          <button className='button'>일기장 등록하기</button>
        </DiaryWrapper>
      </RightBlockWrapper>
    </ContentWrapper>
  );
};

export default DiaryEditor;
