import React, { memo, useState } from 'react';
import styled from 'styled-components';
import theme from 'Components/Theme';

export default memo(({
  delComment, id, userName, content,
}) => {
  const [date, setDate] = useState(new Date());
  // console.log(props);
  return (
    <CommentList>
      <CommentItemWrap>
        <CommentImgBox>
          <CommentImg src="https://stayfolio.com/system/users/avatars/000/023/353/original/657de53cc281e14695f21138dfc806f9860cd2e7.png?1568615366" />
          <CommentName>{userName}</CommentName>
        </CommentImgBox>
        <CommentContentsWrap>
          <CommentTime>
            {date.getFullYear()}-{date.getMonth() + 1}-{date.getDate()} {date.getHours()}:{date.getMinutes()}
          </CommentTime>
          <CommentDel id={id} onClick={delComment}>
                  삭제
          </CommentDel>
          <CommentText>
            {content}
          </CommentText>
        </CommentContentsWrap>
      </CommentItemWrap>
    </CommentList>
  );
});

const CommentList = styled.div`
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
`;
const CommentItemWrap = styled.div`
  padding: 20px 0 10px 0;
  display: flex;
`;
const CommentImgBox = styled.div`
  width: 25%;
`;
const CommentImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 512px;
  display: block;
  margin: 0 auto;
`;
const CommentName = styled.p`
  font-size: 16px;
  text-align: center;
  padding-top: 10px;
  margin: 0 0 10px;
`;
const CommentContentsWrap = styled.div`
  width: 75%;
`;
const CommentTime = styled.p`
  display: inline;
  margin-right: 10px;
  font-size: 13px;
  color: #a1a1a1;
`;
const CommentDel = styled.a`
  cursor: pointer;
  font-size: 13px;
  color: ${theme.FooterGrayFont};
`;
const CommentText = styled.div`
  color: #7a7a7a;
  word-break: break-all;
  word-wrap: break-word;
`;
