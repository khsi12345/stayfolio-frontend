import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { device } from 'Components/Device';
import theme from 'Components/Theme';
import MagazineContainer from 'Components/MagazineContainer';
import Data from 'Data/magazine.json';

const getMagazines = async (url, setData) => {
  const response = await axios.get(url);
  setData(response.data.items);
};

const Magazine = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getMagazines('http://10.58.3.43:8080/magazines?offset=0', setItems);
  }, []);

  return (
    <MagazineWrap>
      <MagazineHeader>
        <MagazineTitleWrap>
          <MagazineTitle>MAGAZINE</MagazineTitle>
          <MagazineTitleDescription>
            매주 한번 스테이폴리오가 이야기하는 유니크한 공간!
          </MagazineTitleDescription>
        </MagazineTitleWrap>
        <MagazineButtonWrap>
          <Link to="/magazines">
            <MagazineMoreButton>
              READ <br />
              MORE MAGAZINE
            </MagazineMoreButton>
          </Link>
        </MagazineButtonWrap>
      </MagazineHeader>
      {items.length !== 0
        && items.map((el, i) => <MagazineContainer items={el} key={i} />)}
    </MagazineWrap>
  );
};

const MagazineWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
`;

const MagazineHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1140px;
  margin: 60px 0 10px;
  padding: 30px 0 40px;
  border-top: 7px solid ${theme.BorderBlack};
`;

const MagazineTitleWrap = styled.div`
  line-height: 1.1;
`;

const MagazineTitle = styled.h3`
  font-size: 32px;
  font-weight: 700;
`;

const MagazineTitleDescription = styled.p`
  color: ${theme.FontGray};
  margin-top: 3px;
`;
const MagazineButtonWrap = styled.div`
  display: none;
  @media ${device.mobile} {
    display: block;
  }
`;

const MagazineMoreButton = styled.button`
  color: ${theme.FontDarkGray};
  height: 48px;
  font-size: 12px;
  padding: 10px 15px;
  text-align: left;
  line-height: 1.1;
  background-color: inherit;
  border: 1px solid ${theme.BorderBlack};
  font-weight: 400;
  cursor: pointer;
  &:hover {
    color: ${theme.MainBlack};
  }
  &:active,
  &:focus {
    border: 1px solid ${theme.BorderBlack};
  }
`;

export default Magazine;
