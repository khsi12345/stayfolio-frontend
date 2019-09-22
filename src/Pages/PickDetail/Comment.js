import React, { memo } from 'react';
import styled from 'styled-components';
import { device } from 'Components/Device';
import theme from 'Components/Theme';

export default memo(() => (
  <CommentWrap>
    <CommentContainer>
      <CommentBox>
        <Comment>
          <InnerComment>
            <CommentTextAreaBox placeholder="댓글을 입력해주세요" />
          </InnerComment>
          <CommentButtonWrap>
            <CommentButton>
              <CommentButtonSpan1>Reply</CommentButtonSpan1>
              <CommentButtonSpan2 />
            </CommentButton>
          </CommentButtonWrap>
        </Comment>
      </CommentBox>
      <EmptyComment>첫번째 댓글을 달아주세요 :)</EmptyComment>
    </CommentContainer>
  </CommentWrap>
));

const CommentWrap = styled.div`
  padding: 15px 0;
  font-size: 14px;
  line-height: 1.428571429;
  background-color: ${theme.MainWhite}; 
  @media ${device.tablet} {
    padding: 20px;
  }
  @media ${device.desktop} {
    padding: 30px 30px 0 30px;
  }
`;
const CommentContainer = styled.div`
  padding: 0;
  @media ${device.tablet} {
    padding: 15px 0 0 0;
    border-top: 1px solid ${theme.ButtonLightGrayBG};
    border-bottom: 1px solid ${theme.ButtonLightGrayBG};
    background-color: ${device.MainWhite};
    font-size:14px;
    line-height: 1.428571429;
  }
`;
const CommentBox = styled.form`
  font-size:14px;
  line-height: 1.428571429;
`;
const Comment = styled.div`
  display: block;
  @media ${device.desktop} {
    display: flex;
    font-size:14px;
    line-height: 1.428571429;
  }
`;
const InnerComment = styled.div`
  padding: 15px 0;
  @media ${device.tablet} {
    font-size:14px;
    line-height: 1.428571429;
    position: relative;
    padding: 0 15px;
  }
  @media ${device.desktop} {
    width: 75%;
  }
`;
const CommentTextAreaBox = styled.textarea`
  display: flex;
  width: 100%;
  height: 120px;
  border: 1px solid ${theme.LightGrayBG};
  border-radius: 3px;
  background-color: ${theme.CommentGray};
  resize: none;
  :focus {
    outline: none;
  }
`;
const CommentTextArea = styled.form`

`;
const CommentButtonWrap = styled.div`
    position: relative;
    padding: 0;
    @media ${device.tablet} {
      padding: 0 15px;
    }
    @media ${device.desktop} {
      width: 25%;
    }
`;
const CommentButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: #2d3039;
  cursor: pointer;
  @media ${device.desktop} {
    width: 100%;
    height: 120px;
    border: 0;
    border-radius: 3px;
    font-size: 18px;
    text-align: center;
    color: ${theme.MainWhite};
  }
`;
const CommentButtonSpan1 = styled.span`
  position: relative;
  display: inline-block;
  z-index: 3;
  font-size: 18px;
  text-align: center;
  color: ${theme.MainWhite};
`;
const CommentButtonSpan2 = styled.span`
  position: absolute;
  display: inline-block;
  margin-top: 0;
  width: 32px;
  height: 32px;
  top: 50%;
  z-index: 2;
  opacity: 0;
  pointer-events: none;
  color: ${theme.MainWhite};
  font-size: 18px;
  text-align: center;
`;
const EmptyComment = styled.div`
  /* margin-top: 20px; */
  padding: 20px 0;
  text-align: center;
  font-size: 14px;
  line-height: 1.428571429;
  color: ${theme.FontLessGray};
`;