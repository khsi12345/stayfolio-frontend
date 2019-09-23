import React, {
  memo, useState, useEffect,
} from 'react';
import styled from 'styled-components';
import theme from 'Components/Theme';

const getBrowserWidth = () => window.innerWidth;

const Paginatioin = memo(() => {
  const [browserWidth, setBrowserWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', () => {
      setBrowserWidth(getBrowserWidth());
    });
    return window.removeEventListener('resize', () => {
      setBrowserWidth(getBrowserWidth());
    });
  }, []);
  return (
    <PaginatioinWrap>
      <PaginatioinContainer>
        <PaginatioinNumberBoxWrap>
          { browserWidth >= 769 ? (
            <>
              <PaginatioinNumberBoxContainer first>
                <Icon className="fas fa-angle-double-left" />
              </PaginatioinNumberBoxContainer>
              <PaginatioinNumberBoxContainer>
                <Icon className="fas fa-angle-left" />
              </PaginatioinNumberBoxContainer>
              <PaginatioinNumberBoxContainer>
                {1}
              </PaginatioinNumberBoxContainer>
              <PaginatioinNumberBoxContainer>
                {2}
              </PaginatioinNumberBoxContainer>
              <PaginatioinNumberBoxContainer>
                {3}
              </PaginatioinNumberBoxContainer>
              <PaginatioinNumberBoxContainer>
                {4}
              </PaginatioinNumberBoxContainer>
              <PaginatioinNumberBoxContainer>
                {5}
              </PaginatioinNumberBoxContainer>
              <PaginatioinNumberBoxContainer>
                {6}
              </PaginatioinNumberBoxContainer>
              <PaginatioinNumberBoxContainer>
                {7}
              </PaginatioinNumberBoxContainer>
              <PaginatioinNumberBoxContainer>
                <Icon className="fas fa-angle-right" />
              </PaginatioinNumberBoxContainer>
              <PaginatioinNumberBoxContainer last>
                <Icon className="fas fa-angle-double-right" />
              </PaginatioinNumberBoxContainer>
            </>
          )
            : (
              <>
                <PaginatioinNumberBoxContainer first>
                  <Icon className="fas fa-angle-double-left" />
                </PaginatioinNumberBoxContainer>
                <PaginatioinNumberBoxContainer>
                  <Icon className="fas fa-angle-left" />
                </PaginatioinNumberBoxContainer>
                <PaginatioinNumberBoxContainer tablet>
                  {1}
                </PaginatioinNumberBoxContainer>
                <PaginatioinNumberBoxContainer>
                  <Icon className="fas fa-angle-right" />
                </PaginatioinNumberBoxContainer>
                <PaginatioinNumberBoxContainer last>
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
const PaginatioinNumberBoxContainer = styled.a`
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
`;
const Icon = styled.i`
`;
export default Paginatioin;
