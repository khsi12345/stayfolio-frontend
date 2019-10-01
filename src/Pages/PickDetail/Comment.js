import React, {
  memo, useState, useEffect, useRef,
} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { showAlert, closeAlert } from 'Store/Actions';
import { commentPostApi, commentDelApi, getApi } from 'Util/service';
import { device } from 'Components/Device';
import theme from 'Components/Theme';
import CommentItem from './CommentItem';

const Comment = memo((props) => {
  const [getToken, setToken] = useState(localStorage.getItem('stayfolio_token'));
  const [text, setText] = useState();
  const commentText = useRef('');
  const [comment, setComment] = useState([]);

  useEffect(() => {
    getApi(`http://15.164.171.176:8000/pick_comment/${props.id}`, setComment);
  }, [props.id]);

  const textChangeHandle = (e) => {
    setText(e.target.value);
  };
  const commentClick = () => {
    if (getToken === null || getToken === '' || getToken === undefined) {
      props.showAlert({ message: '로그인을 먼저 해주세요 :)' });
    }
  };
  const addComment = () => {
    const commentData = commentPostApi(`http://15.164.171.176:8000/pick_comment/${props.id}`, getToken, text);
    commentData.then((response) => {
      if (response.status === 200) {
        getApi(`http://15.164.171.176:8000/pick_comment/${props.id}`, setComment);
      }
    });
    commentData.catch((error) => {
      props.showAlert({ message: '댓글 작성이 실패했습니다.' });
    });

    setText('');
  };
  const delComment = (commentId) => {
    const result = commentDelApi(`http://15.164.171.176:8000/pick_comment/${props.id}/${commentId}/editing`, getToken);
    result.then((response) => {
      if (response.status === 200) {
        getApi(`http://15.164.171.176:8000/pick_comment/${props.id}`, setComment);
      }
    });
  };
  const modifedComment = (getModifedCommentItemContent, commentId) => {
    const result = commentPostApi(`http://15.164.171.176:8000/pick_comment/${props.id}/${commentId}/editing`, getToken, getModifedCommentItemContent);
    result.then((response) => {
      if (response.status === 200) {
        getApi(`http://15.164.171.176:8000/pick_comment/${props.id}`, setComment);
      }
    });
    result.catch((error) => {
      props.showAlert({ message: '댓글 수정이 실패했습니다.' });
    });
  };
  const LoadCommentItems = () => {
    if (comment.data) {
      return comment.data.data.map((ele, index) => (
        <CommentItem
          delComment={delComment}
          modifedComment={modifedComment}
          key={ele.comment_id}
          id={ele.comment_id}
          userName={ele.user_email}
          content={ele.content}
        />
      ));
    }
  };
  return (
    <CommentWrap>
      <CommentContainer>
        <CommentBox>
          <OuterComment>
            <InnerComment>
              <CommentTextAreaBox
                placeholder="댓글을 입력해주세요"
                onChange={textChangeHandle}
                onClick={commentClick}
                value={text}
                ref={commentText}
              />
            </InnerComment>
            <CommentButtonWrap>
              <CommentButton
                type="button"
                onClick={() => {
                  commentClick();
                  addComment();
                }}
              >
                <CommentButtonSpan1>Reply</CommentButtonSpan1>
                <CommentButtonSpan2 />
              </CommentButton>
            </CommentButtonWrap>
          </OuterComment>
        </CommentBox>
        {comment.data !== undefined && comment.data.data.length > 0
          ? LoadCommentItems() : <EmptyComment>첫번째 댓글을 달아주세요 :)</EmptyComment>}
      </CommentContainer>
    </CommentWrap>
  );
});

const CommentWrap = styled.div`
  padding: 15px 0;
  font-size: 14px;
  line-height: 1.428571429;
  background-color: ${theme.MainWhite}; 
  @media ${device.desktop} {
    padding: 30px 0 0 0;
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
const OuterComment = styled.div`
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
  }
  @media ${device.desktop} {
    width: 75%;
    padding-right: 15px;
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
const CommentButtonWrap = styled.div`
    position: relative;
    padding-top: 15px;
    @media ${device.tablet} {
    }
    @media ${device.desktop} {
      padding-left: 15px;
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
  padding: 20px 0;
  text-align: center;
  font-size: 14px;
  line-height: 1.428571429;
  color: ${theme.FontLessGray};
`;

const mapDispatchToProps = (dispatch) => ({
  showAlert: (options) => dispatch(showAlert(options)),
  closeAlert: () => dispatch(closeAlert()),
});

export default connect(null, mapDispatchToProps)(Comment);
