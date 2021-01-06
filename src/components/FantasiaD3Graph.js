import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import {
  line,
  select,
  axisRight,
  axisBottom,
  scaleLinear,
  curveCardinal
} from 'd3';

const D3Wrapper = styled.div`
  display: flex;
  width: 800px;
  height: 800px;
  justify-content: center;
  align-items: center;
  margin-top: 100px;

  svg {
    width: 700px;
    height: 700px;
    background: #2c313b;
    overflow: visible;
  }
`;

const FantasiaD3Graph = ({ list }) => {
  const data = list.map(item => item[0]);
  const D3Domain = list.map(item => item[2]);

  const svgRef = useRef();

  useEffect(() => {
    const svg = select(svgRef.current);

    const xScale = scaleLinear()
      .domain([0, D3Domain.length - 1])
      .range([0, 700]);

    const yScale = scaleLinear()
      .domain([-1, 1])
      .range([700, 0]);

    const centerScale = scaleLinear()
      .range([0, 700]);

    const xAxis = axisBottom(xScale)
      .ticks(list.length)
      .tickSize(10)
      .tickFormat((d) => { return d;});

      svg
      .select('.x-axis')
      .style('transform', 'translateY(700px)')
      .call(xAxis)
      .attr('stroke-width', '3px');

    const yAxis = axisRight(yScale)
      .ticks(4)
      .tickSize(10);

    svg
      .select('.y-axis')
      .style('transform', 'translateX(700px)')
      .call(yAxis);

    const centerAxis = axisBottom(centerScale)
      .ticks(0);

    svg
      .select('.center-axis')
      .style('transform', 'translateY(350px)')
      .call(centerAxis)
      .attr('color', 'grey')
      .attr('stroke-width', '2px');

    const myLine = line()
      .x((value, index) => xScale(index))
      .y(yScale)
      .curve(curveCardinal);

      svg
        .selectAll('.line')
        .data([data])
        .join('path')
        .attr('class', 'line')
        .attr('d', myLine)
        .attr('fill', 'none')
        .attr('stroke', '#7dc7f4')
        .attr('stroke-width', '4px');
}, [ data ]);

  return (
    <D3Wrapper>
      <svg ref={svgRef}>
        <g className='x-axis' />
        <g className='y-axis' />
        <g className='center-axis' />
        <circle />
      </svg>
    </D3Wrapper>
  );
};

export default FantasiaD3Graph;
