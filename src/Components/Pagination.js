import React, {
  memo, useState, useEffect, useMemo, useCallback, useRef,
} from 'react';
import styled from 'styled-components';
import { getBrowserWidth } from 'Util/resize';
import theme from 'Components/Theme';

const Paginatioin = memo((props) => {
  // console.log('함수 컴포넌트 시작!');
  // console.log(props);
  // console.log(getBrowserWidth())
  // const width = useMemo( () => getBrowserWidth(window.innerWidth), []);
  // console.log(width);
  const [browserWidth, setBrowserWidth] = useState(window.innerWidth);
  const btnRef = useRef();
  // console.log(browserWidth);
  // console.log('함수본체');
  useEffect(() => {
    // console.log('Effect');
    getBrowserWidth(setBrowserWidth);
  }, []);
  // console.log('함수끝');
  const currentPage = () => {
    // console.log('22222', e.target.innerHTML);
    // console.log('~~~~~~', btnRef.current.innerHTML);
    // <PaginatioinNumberBoxContainer {e.target.innerHTML === btnRef.current.innerHTML}
  };
  return (
    <PaginatioinWrap>
      <PaginatioinContainer>
        <PaginatioinNumberBoxWrap>
          { browserWidth >= 769 ? (
            <>
              <PaginatioinNumberBoxContainer first noneactive>
                <Icon className="fas fa-angle-double-left" />
              </PaginatioinNumberBoxContainer>
              <PaginatioinNumberBoxContainer noneactive>
                <Icon className="fas fa-angle-left" />
              </PaginatioinNumberBoxContainer>
              {/* {pageBtn()} */}
              <PaginatioinNumberBoxContainer
                ref={btnRef}
                onClick={(event) => {
                  props.handleClick(1);
                  currentPage(event);
                }}
              >
                {1}
              </PaginatioinNumberBoxContainer>
              <PaginatioinNumberBoxContainer
                ref={btnRef}
                onClick={(event) => {
                  props.handleClick(2);
                  currentPage(event);
                }}
              >
                {2}
              </PaginatioinNumberBoxContainer>
              <PaginatioinNumberBoxContainer
                ref={btnRef}
                onClick={(event) => {
                  props.handleClick(3);
                  currentPage(event);
                }}
              >
                {3}
              </PaginatioinNumberBoxContainer>
              <PaginatioinNumberBoxContainer
                ref={btnRef}
                onClick={(event) => {
                  props.handleClick(4);
                  currentPage(event);
                }}
              >
                {4}
              </PaginatioinNumberBoxContainer>
              <PaginatioinNumberBoxContainer
                ref={btnRef}
                onClick={(event) => {
                  props.handleClick(5);
                  currentPage(event);
                }}
              >
                {5}
              </PaginatioinNumberBoxContainer>
              <PaginatioinNumberBoxContainer
                ref={btnRef}
                onClick={(event) => {
                  props.handleClick(6);
                  currentPage(event);
                }}
              >
                {6}
              </PaginatioinNumberBoxContainer>
              <PaginatioinNumberBoxContainer
                ref={btnRef}
                onClick={(event) => {
                  props.handleClick(7);
                  currentPage(event);
                }}
              >
                {7}
              </PaginatioinNumberBoxContainer>
              <PaginatioinNumberBoxContainer noneactive>
                <Icon className="fas fa-angle-right" />
              </PaginatioinNumberBoxContainer>
              <PaginatioinNumberBoxContainer last noneactive>
                <Icon className="fas fa-angle-double-right" />
              </PaginatioinNumberBoxContainer>
            </>
          )
            : (
              <>
                <PaginatioinNumberBoxContainer first noneactive>
                  <Icon className="fas fa-angle-double-left" />
                </PaginatioinNumberBoxContainer>
                <PaginatioinNumberBoxContainer noneactive>
                  <Icon className="fas fa-angle-left" />
                </PaginatioinNumberBoxContainer>
                <PaginatioinNumberBoxContainer tablet>
                  {1}
                </PaginatioinNumberBoxContainer>
                <PaginatioinNumberBoxContainer noneactive>
                  <Icon className="fas fa-angle-right" />
                </PaginatioinNumberBoxContainer>
                <PaginatioinNumberBoxContainer last noneactive>
                  <Icon className="fas fa-angle-double-right" />
                </PaginatioinNumberBoxContainer>
              </>
            )}
        </PaginatioinNumberBoxWrap>
      </PaginatioinContainer>
    </PaginatioinWrap>
  );
});

const PaginatioinWrap = styled.div` 
  display: flex;
`;
const PaginatioinContainer = styled.ul`
  display:inline-block;
  margin: 20px auto 60px;
  padding-left: 0;
  border-radius: 3px;
`;
const PaginatioinNumberBoxWrap = styled.li`
  display: inline;
`;
const PaginatioinNumberBoxContainer = styled.button`
  margin: 0 5px;
  margin-left: ${(props) => (props.first ? '0px' : '')};
  padding: ${(props) => (props.tablet ? '8px 30px' : '8px 15px')};
  font-size: 14px;
  border: 0;
  box-shadow: 0 1px 1px rgba(100, 100, 100, .3);
  line-height: 1.5;
  color: ${theme.FooterGrayFont};
  background-color: ${theme.MainWhite};
  border-top-left-radius: ${(props) => (props.first ? '3px' : '')};
  border-bottom-left-radius: ${(props) => (props.first ? '3px' : '')};
  border-top-right-radius: ${(props) => (props.last ? '3px' : '')};
  border-bottom-right-radius: ${(props) => (props.last ? '3px' : '')};
  cursor: pointer;
  :focus {
    color: ${(props) => (props.first ? `${theme.MainBlack}` : props.noneactive ? `${theme.MainBlack}` : `${theme.MainWhite}`)};
    background-color: ${(props) => (props.first ? `${theme.MainWhite}}` : props.noneactive ? `${theme.MainWhite}` : `${theme.MainBlack}`)};
  }
`;
const Icon = styled.i`
`;
export default Paginatioin;
