import React from 'react';
import styled from 'styled-components';
import { device } from 'Components/Device';
import theme from 'Components/Theme';

const MagazineContainer = props => {
  const { result } = props;
  return (
    <MagazineDetail>
      <MagazineImageWrap>
        <MagazineImage src={result.url} />
        <MagazineCover href="/">
          <MagazineCoverButton>
            <MagazineCoverIcon className="fa fa-search" />
            VIEW
          </MagazineCoverButton>
        </MagazineCover>
      </MagazineImageWrap>
      <MagazineContentWrap>
        <MagazineContentHeader>
          <MagazineContentTitle>
            <MagazineContentTitleAnchor href="/">
              {result.title}
            </MagazineContentTitleAnchor>
          </MagazineContentTitle>
          <MagazineContentType>
            {result.type} |{' '}
            <MagazineContentLocation>{result.location}</MagazineContentLocation>
          </MagazineContentType>
        </MagazineContentHeader>
        <MagazineContentBody>
          <MagazineContentSubtitle>
            <MagazineContentSubtitleAnchor href="/">
              {result.subtitle}
            </MagazineContentSubtitleAnchor>
          </MagazineContentSubtitle>
          <MagazineContentDescription>
            {result.description}
          </MagazineContentDescription>
          <MagazineContentMore href="/">SHOW MORE +</MagazineContentMore>
        </MagazineContentBody>
      </MagazineContentWrap>
    </MagazineDetail>
  );
};

const MagazineDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1140px;
  margin-bottom: 30px;
  @media ${device.desktop} {
    flex-direction: row;
    height: inherit;
  }
`;

const MagazineImageWrap = styled.div`
  position: relative;
  overflow: hidden;
  line-height: 0;
  width: 100%;
  @media ${device.desktop} {
    max-width: 760px;
    max-height: 415px;
  }
`;

const MagazineImage = styled.img`
  width: 100%;
  margin-top: -40px;
  ${MagazineImageWrap}:hover & {
    transform: scale(1.2, 1.2);
    transition: all 0.3s;
  }
`;

const MagazineCover = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  ${MagazineImageWrap}:hover & {
    opacity: 1;
    transition: all 0.3s;
  }
`;

const MagazineCoverButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 30px;
  border: 2px solid #fff;
  border-radius: 5px;
  color: #fff;
  font-size: 12px;
  font-weight: 400;
  line-height: 30px;
`;

const MagazineCoverIcon = styled.i`
  font-size: 11px;
  color: #fff;
  margin-right: 3px;
`;

const MagazineContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: -2px;
  padding: 30px 30px;
  background-color: #fff;
  @media ${device.desktop} {
    width: 380px;
    margin-top: 0;
    max-height: 415px;
  }
`;

const MagazineContentHeader = styled.div`
  padding: 20px 0;
  border-top: 3px solid ${theme.BorderBlack};
  border-bottom: 1px solid ${theme.BorderGray};
`;

const MagazineContentTitle = styled.h2`
  font-size: 21px;
  font-weight: 500;
  line-height: 1.1;
`;

const MagazineContentTitleAnchor = styled.a`
  &:hover {
    text-decoration: underline;
  }
`;

const MagazineContentType = styled.p`
  font-size: 13px;
  padding: 2px 0;
  margin-top: 5px;
`;

const MagazineContentLocation = styled.span`
  font-size: 13px;
  color: ${theme.FontGray};
`;

const MagazineContentBody = styled.div`
  border-bottom: none;
  padding-bottom: 0;
  @media ${device.tablet} {
    border-bottom: 1px solid ${theme.BorderGray};
    padding-bottom: 20px;
  }
`;

const MagazineContentSubtitle = styled.h3`
  margin: 25px 0 10px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.1;
`;

const MagazineContentSubtitleAnchor = styled.a``;

const MagazineContentDescription = styled.p`
  height: 156px;
  overflow: hidden;
  padding-top: 10px;
  color: ${theme.FontGray};
  font-size: 14px;
  line-height: 150%;
  display: none;
  padding-bottom: 0;

  @media ${device.tablet} {
    display: block;
    padding-bottom: 20px;
  }
`;

const MagazineContentMore = styled.a`
  display: inline-block;
  color: ${theme.FontDarkGray};
  padding: 4px 0;
  font-size: 11px;
  font-weight: 600;
  line-height: 150%;
`;

export default MagazineContainer;
