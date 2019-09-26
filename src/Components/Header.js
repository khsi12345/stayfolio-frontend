import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { showAlert, closeAlert } from 'Store/Actions';
import { device } from 'Components/Device';
import theme from 'Components/Theme';
import Logo from 'Images/Logo.png';
import Close from 'Images/Close.png';

const Header = (props) => {
  // bars on/off 세팅 로직
  const [bars, setBars] = useState(false);
  const handleBars = () => {
    setBars(!bars);
  };

  // 로그인 / 로그아웃 상태 변화 로직
  const [token, setToken] = useState(localStorage.getItem('stayfolio_token'));
  const logout = () => {
    localStorage.clear();
    setToken(false);
    setBars(false);
    props.showAlert({ message: '로그아웃 되었습니다!' });
  };
  // console.log('header props!', props);
  return (
    <>
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
                  <SearchIcon
                    onClick={() => props.showAlert({
                      message: '검색기능 점검 중입니다.',
                    })}
                    className="fas fa-search"
                  />
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
                  <SocialAnchor
                    href="https://stayfolio.blog.me/"
                    target="_blank"
                  >
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
                {token ? (
                  <LoginContainer>
                    <Link to="/mypage">MYPAGE</Link>
                    <Divider>or</Divider>
                    <Logout onClick={logout}>LOGOUT</Logout>
                  </LoginContainer>
                ) : (
                  <LoginContainer>
                    <Link to="/login">LOGIN</Link>
                    <Divider>or</Divider>
                    <Link to="/signup">REGISTER</Link>
                  </LoginContainer>
                )}
              </LoginWrap>
            </TopNav>
            <MainNav>
              <Link to="/">
                <NavList selected={props.location.pathname === '/'}>
                  HOME
                </NavList>
              </Link>
              <Link to="/about">
                <NavList selected={props.location.pathname === '/about'}>
                  ABOUT
                </NavList>
              </Link>
              <Link to="/magazines">
                <NavList selected={props.location.pathname === '/magazines'}>
                  MAGAZINE
                </NavList>
              </Link>
              <Link to="/picks">
                <NavList selected={props.location.pathname === '/picks'}>
                  PICK
                </NavList>
              </Link>
              <Link>
                <NavBooking onClick={() => {
                  props.showAlert({ message: '불편을 드려 죄송합니다. 기능 점검 중입니다.' });
                }}
                >BOOKING
                </NavBooking>
              </Link>
            </MainNav>
            <BarsNav>
              <BarsIcon className="fas fa-bars" onClick={handleBars} />
            </BarsNav>
          </NavWrap>
        </HeaderContainer>
      </HeaderWrap>
      {bars && (
        <BarsMenuWrap>
          <BarsHeader>
            {token ? (
              <BarsLogin>
                <BarsAnchor to="/mypage">MYPAGE</BarsAnchor>or
                <Logout onClick={logout}> LOGOUT</Logout>
              </BarsLogin>
            ) : (
              <BarsLogin>
                <BarsAnchor href="/login">LOGIN</BarsAnchor>or
                <BarsAnchor href="/signup">REGISTER</BarsAnchor>
              </BarsLogin>
            )}
            <CloseBtnWrap onClick={handleBars}>
              <CloseBtn src={Close} />
            </CloseBtnWrap>
          </BarsHeader>
          <BarsNavList>
            <BarsLink href="/">HOME</BarsLink>
            <BarsLink href="/about">ABOUT</BarsLink>
            <BarsLink href="/magazines">MAGAZINE</BarsLink>
            <BarsLink href="/picks">PICK</BarsLink>
          </BarsNavList>
        </BarsMenuWrap>
      )}
    </>
  );
};

const HeaderWrap = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  z-index: 99;
  border-bottom: 1px solid ${theme.BorderLightGray};
  background-color: #fff;
  height: 70px;
  @media ${device.tablet} {
    height: 102px;
    justify-content: space-between;
  }
  @media ${device.desktop} {
    height: 102px;
    justify-content: center;
  }
`;

const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  @media ${device.tablet} {
    justify-content: center;
  }
`;

const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  @media ${device.tablet} {
    display: flex;
    width: 40%;
  }
  @media ${device.wide} {
    display: flex;
    width: 50%;
  }
`;

const LogoImg = styled.img`
  width: 42px;
  margin-left: 10px;
  @media ${device.tablet} {
    width: 66px;
    margin-left: 20px;
  }
`;

const Copy = styled.p`
  color: ${theme.FontGray};
  font-size: 13px;
  line-height: 18px;
  margin-left: 40px;
  display: none;
  @media ${device.tablet} {
    display: block;
  }
`;

const NavWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: none;
  @media ${device.tablet} {
    border-left: 1px solid ${theme.BorderLightGray};
    border-right: 1px solid ${theme.BorderLightGray};
    width: 60%;
  }
  @media ${device.wide} {
    width: 50%;
  }
`;

const TopNav = styled.div`
  display: none;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid ${theme.BorderLightGray};
  @media ${device.tablet} {
    display: flex;
  }
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
  display: flex;
  justify-content: space-around;
  width: 30%;
  height: 100%;
  border-left: 1px solid ${theme.BorderLightGray};
  border-right: 1px solid ${theme.BorderLightGray};
  color: ${theme.FontGray};
`;

const SocialIconList = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialAnchor = styled.a``;

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
  display: none;
  justify-content: space-around;
  align-items: center;
  height: 50%;
  color: #000;
  font-weight: 700;
  line-height: 48px;
  font-size: 13px;
  @media ${device.tablet} {
    display: flex;
  }
`;

const NavList = styled.p`
  ${(props) => props.selected && 'box-shadow: inset 0 -3px 0 0 #000'}
`;

const NavBooking = styled.span`
  background-color: ${theme.MainBlack};
  color: #fff;
  padding: 4px 8px;
  line-height: 50px;
`;

const BarsNav = styled.div`
  display: flex;
  margin-right: 8px;
  cursor: pointer;
  @media ${device.tablet} {
    display: none;
  }
`;

const BarsIcon = styled.i`
  font-size: 20px;
`;

const BarsMenuWrap = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 99;
  background-color: #fff;
  border-bottom: 1px solid ${theme.BorderLightGray};
`;

const BarsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  border-bottom: 1px solid ${theme.BorderLightGray};
`;

const BarsLogin = styled.span`
  font-size: 13px;
  margin-left: 24px;
`;

const BarsAnchor = styled.a`
  font-size: 12px;
  padding: 0 4px;
  letter-spacing: 0.4px;
  &:first-child {
    padding-left: 0;
  }
`;

const CloseBtnWrap = styled.div`
  padding: 25px;
  text-align: center;
  border-left: 1px solid ${theme.BorderLightGray};
  cursor: pointer;
`;

const CloseBtn = styled.img`
  width: 18px;
`;

const BarsNavList = styled.div`
  display: flex;
  flex-direction: column;
`;

const BarsLink = styled.a`
  display: flex;
  align-items: center;
  height: 70px;
  border-bottom: 1px solid ${theme.BorderLightGray};
  padding: 26px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`;

const Logout = styled.span`
  cursor: pointer;
`;

const mapDispatchToProps = (dispatch) => ({
  showAlert: (options) => dispatch(showAlert(options)),
  closeAlert: () => dispatch(closeAlert()),
});

export default compose(withRouter, connect(null, mapDispatchToProps))(Header);
