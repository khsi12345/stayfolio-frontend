import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from 'Components/Theme';
import { device } from 'Components/Device';

import Logo from 'Images/Logo.png';

const HeaderWrap = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${theme.BorderLightGray};
  background-color: #fff;
  height: 102px;
`;

const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 15px;
  display: flex;
  justify-content: center;
`;

const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;

const LogoImg = styled.img`
  margin-left: 20px;
  width: 66px;
`;

const Copy = styled.p`
  color: ${theme.FontGray};
  font-size: 13px;
  line-height: 18px;
  margin-left: 40px;
`;

const NavWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  border-left: 1px solid ${theme.BorderLightGray};
  border-right: 1px solid ${theme.BorderLightGray};
`;

const TopNav = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid ${theme.BorderLightGray};
`;

const SearchWrap = styled.div`
  width: 40%;
  padding: 0 20px 0 30px;
`;

const SearchContainer = styled.div`
  display: flex;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1px;
  font-size: 13px;
  line-height: 25px;
  color: ${theme.FontDarkGray};
  border: none;
  &:placeholder {
    color: ${theme.FontDarkGray};
  }
`;

const SearchIcon = styled.i`
  font-size: 14px;
  line-height: 25px;
  padding-top: 2px;
  color: ${theme.FontGray};
  cursor: pointer;
`;

const SocialWrap = styled.ul`
  width: 30%;
  height: 100%;
  border-left: 1px solid ${theme.BorderLightGray};
  border-right: 1px solid ${theme.BorderLightGray};
  display: flex;
  justify-content: space-around;
  color: ${theme.FontGray};
`;

const SocialIconList = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialAnchor = styled.a`
  padding: 18px 16px;
`;

const SocialIcon = styled.i`
  font-size: 14px;
  color: ${theme.FontGray};
`;

const SocialImg = styled.img`
  height: 12px;
`;

const LoginWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
`;

const LoginContainer = styled.div`
  display: flex;
  font-size: 10px;
`;

const Divider = styled.p`
  padding: 0 4px;
`;

const MainNav = styled.div`
  height: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #000;
  font-weight: 700;
  line-height: 48px;
  font-size: 13px;
`;

const NavList = styled.p`
  ${props =>
    props.home && `border-bottom: 3px solid #000; margin-bottom: 2px;`};
`;

const NavBooking = styled.span`
  background-color: ${theme.MainBlack};
  color: #fff;
  padding: 5px 8px;
  margin-right: 16px;
`;

const Header = () => (
  <HeaderWrap>
    <HeaderContainer>
      <LogoWrap>
        <Link to="/">
          <LogoImg src={Logo} />
        </Link>
        <Copy>
          Where to go, <br />
          Here to stay STAYFOLIO
        </Copy>
      </LogoWrap>
      <NavWrap>
        <TopNav>
          <SearchWrap>
            <SearchContainer>
              <SearchInput placeholder="Search" />
              <SearchIcon className="fas fa-search" />
            </SearchContainer>
          </SearchWrap>
          <SocialWrap>
            <SocialIconList>
              <SocialAnchor
                href="https://www.facebook.com/stayfolio"
                target="_blank"
              >
                <SocialIcon className="fab fa-facebook-f" />
              </SocialAnchor>
            </SocialIconList>
            <SocialIconList>
              <SocialAnchor
                href="https://www.instagram.com/stayfolio/"
                target="_blank"
              >
                <SocialIcon className="fab fa-instagram" />
              </SocialAnchor>
            </SocialIconList>
            <SocialIconList>
              <SocialAnchor href="https://stayfolio.blog.me/" target="_blank">
                <SocialImg src="https://stayfolio.com/images/main/ad596eb8.naver.png" />
              </SocialAnchor>
            </SocialIconList>
            <SocialIconList>
              <SocialAnchor
                href="https://brunch.co.kr/@stayfolio#magazines"
                target="_blank"
              >
                <SocialImg src="https://stayfolio.com/images/main/40dfa72b.brunch.png" />
              </SocialAnchor>
            </SocialIconList>
          </SocialWrap>
          <LoginWrap>
            <LoginContainer>
              <Link to="/">LOGIN</Link>
              <Divider>or</Divider>
              <Link to="/">REGISTER</Link>
            </LoginContainer>
          </LoginWrap>
        </TopNav>
        <MainNav>
          <Link to="/">
            <NavList home>HOME</NavList>
          </Link>
          <Link to="/">
            <NavList>ABOUT</NavList>
          </Link>
          <Link to="/">
            <NavList>MAGAZINE</NavList>
          </Link>
          <Link to="/">
            <NavList>PICK</NavList>
          </Link>
          <Link to="/">
            <NavList>EVENT</NavList>
          </Link>
          <Link to="/">
            <NavBooking>BOOKING</NavBooking>
          </Link>
        </MainNav>
      </NavWrap>
    </HeaderContainer>
  </HeaderWrap>
);

export default Header;
