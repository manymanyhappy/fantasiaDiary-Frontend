import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import * as d3 from 'd3';

const D3Wrapper = styled.div`
  display: flex;
  width: 900px;
  height: 800px;
  background-color: rosybrown;
  margin-top: 100px;
`;

const FantasiaD3Graph = ({ list }) => {
  const [ data, setData ] = useState([25, 30, 45, 60, 20]);

  const svg = useRef();

  const ref = useRef();

  useEffect(() => {
    const xScale = d3.scaleLinear()
                      .domain([0, 100])
                      .range([10, 290]);

    const svgElement = d3.select(ref.current);

    const axisGenerator = d3.axisBottom(xScale);

    svgElement.append('g')
              .call(axisGenerator);
}, []);

  return (
    <D3Wrapper>
      <svg
        ref={ref}
      />
    </D3Wrapper>
  );
};

export default FantasiaD3Graph;
