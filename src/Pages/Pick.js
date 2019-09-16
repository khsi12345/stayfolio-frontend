import React , {memo}from 'react';
import styled from 'styled-components'
import theme from 'Components/Theme';
import {device} from 'Components/Device';


const PickWrap = styled.div`
  margin-top: 102px;
  margin-left: auto;
  margin-right: auto;
  min-height: 934px;
  @media ${device.tablet} {
    width: 750px;
  }
  @media ${device.desktop} {
    width: 970px;
  }
  @media ${device.wide} {
    width: 1170px;
  }
`

const PickMainWrap = styled.div`
`
const PickMainHeader = styled.h2`
  margin-top: 60px;
  margin-bottom: 10px;
  padding: 30px 0 40px;
  border-top: 7px solid ${theme.DarkGrayBG};
  height: 125px;
  font-weight: 700;
  font-size: 32px;
`
const PickMainHeaderSmall = styled.small`
  display:block;
  margin-top: 3px;
  color: ${theme.FontGray};
  font-weight: 400;
  font-size: 14px;

`
const PickMainContainer = styled.div`
`
const PickMain = styled.div`
  margin: 0 -15px;
  &::before {
    display: table;
    content: " ";
  }
  &::after {
    display: table;
    content: " ";
    clear: both;
  }
`
// const PickPageNum = styled.div`
// `
const Pick = memo( () => {
    return(
      <>
        <PickWrap>
          <PickMainWrap>
            <PickMainHeader>
              PICK
              <PickMainHeaderSmall>매일 하루 한번! 스테이폴리오가 추천합니다!</PickMainHeaderSmall>
            </PickMainHeader>
            <PickMainContainer>
              <PickMain />
            </PickMainContainer>
          </PickMainWrap>
        </PickWrap>
      </>
    )
});

export default Pick;

