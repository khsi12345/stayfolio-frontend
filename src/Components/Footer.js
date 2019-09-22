import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { device } from 'Components/Device';
import theme from 'Components/Theme';

const Footer = () => (
  <FooterWrap>
    <FooterMenu>
      <FooterMenuList>
        <Link to="/about">About</Link>
      </FooterMenuList>
      <FooterMenuList>
        <Link to="/">4point of view</Link>
      </FooterMenuList>
      <FooterMenuList>
        <Link to="/">Contact us</Link>
      </FooterMenuList>
    </FooterMenu>
    <FooterDetailWrap>
      <FooterPrivacy>
        <Link to="/">
          <PrivacyList>개인정보취급방침</PrivacyList>
        </Link>
        <Divider>|</Divider>
        <Link to="/">
          <PrivacyList>이용약관</PrivacyList>
        </Link>
      </FooterPrivacy>
      <FooterDetail>- 상호 : (주)스테이폴리오 - 대표자 : 이상묵</FooterDetail>
      <FooterDetail>
        - 소재지 : 서울특별시 종로구 자하문로9길 24, 2층(통인동)
      </FooterDetail>
      <FooterDetail>
        - TEL : 1670-4123
      </FooterDetail>
      <FooterDetail>
        - 사업자등록번호: 676-87-00055
      </FooterDetail>
      <FooterDetail>
        - 통신판매업신고 : 제2015-서울종로-0499호
      </FooterDetail>
      <FooterDetail>
        - 관광사업자등록 : 일반여행업 2018-000049호(종로구청)
      </FooterDetail>
      <FooterDetail>&nbsp;</FooterDetail>
      <FooterDetail>
        * 스테이폴리오의 모든 거래에 대한 책임과 환불, 민원 등의 처리는
        스테이폴리오에서 진행합니다.
      </FooterDetail>
      <FooterDetail>
        * 자세한 문의는 웹사이트의 Contact 또는 유선(1670-4123)으로 가능합니다.
      </FooterDetail>
      <FooterDetail>
        COPYRIGHT©2015 STAYFOLIO. ALL RIGHTS RESERVED.
      </FooterDetail>
    </FooterDetailWrap>
  </FooterWrap>
);

const FooterWrap = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 345px;
  padding: 40px 0;
  background-color: ${theme.FooterBG};
`;

const FooterMenu = styled.ul`
  display: flex;
  justify-content: center;
  max-width: 1170px;
  width: 100%;
  padding-bottom: 40px;
  border-bottom: 1px solid ${theme.FooterDarkGrayFont};
`;

const FooterMenuList = styled.li`
  color: ${theme.FooterLightGrayFont};
  font-size: 14px;
  line-height: 1.4;
  padding: 0 10px;
`;

const FooterDetailWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1170px;
  width: 100%;
  padding: 20px;
`;

const FooterPrivacy = styled.div`
  display: flex;
  justify-content: center;
  color: ${theme.FooterGrayFont};
  font-size: 12px;
  padding-bottom: 12px;
  line-height: 1.4;
`;

const PrivacyList = styled.p`
  color: ${theme.FooterGrayFont};
  &:hover {
    color: ${theme.MainBlack};
  }
`;

const Divider = styled.p`
  color: ${theme.FooterGrayFont};
  padding: 0 3px;
`;

const FooterDetail = styled.div`
  color: ${theme.FooterDarkGrayFont};
  font-size: 12px;
  line-height: 1.6;
  text-align: center;
`;

export default Footer;
