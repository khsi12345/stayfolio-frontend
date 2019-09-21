import React, { memo, useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Layout from 'Components/Layout';
import PickItem from 'Components/PickItem';
import Pagination from 'Components/Pagination';
import theme from 'Components/Theme';
import { device } from 'Components/Device';

const getPicks = async (url, setData) => {
  const response = await axios.get(url);
  setData(response);
};
const Pick = memo(() => {
  const [getPick, setPick] = useState([]);

  useEffect(() => {
    getPicks('http://10.58.5.78:8080/pick', setPick);
  }, []);
  console.log('i', getPick);

  const LoadPciks = () => {
    console.log(getPick, '1111');
    if (getPick.data) {
      console.log(getPick, '22');
      return getPick.data.map((ele) => (
        // <Link to="">
        <PickItem
          key={ele.pick_id}
          name={ele.place_info.name}
          eng={ele.identifier}
          des={ele.title}
          location={ele.place_info.city}
          minpr={ele.place_info.price_min}
          maxpr={ele.place_info.price_max}
          targets={ele.place_info.targets}
        />
        // </Link>
      ));
    }
    // return Item;
    // console.log(Item);
  };

  return (
    <Layout>
      <PickWrap>
        <PickMainWrap>
          <PickMainHeader>
            PICK
            <PickMainHeaderSmall>
              매일 하루 한번! 스테이폴리오가 추천합니다!
            </PickMainHeaderSmall>
          </PickMainHeader>
          <PickMainContainer>
            <PickMain>
              {LoadPciks()}
              <PickItem />
              <PickItem />
              <PickItem />
              <PickItem />
              <PickItem />
              <PickItem />
              <PickItem />
              <PickItem />
              <PickItem />
              <PickItem />
              <PickItem />
              <PickItem />
            </PickMain>
            <Pagination />
          </PickMainContainer>
        </PickMainWrap>
      </PickWrap>
    </Layout>
  );
});

const PickWrap = styled.div`
  margin-top: 162px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 15px;
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
`;

const PickMainWrap = styled.div``;
const PickMainHeader = styled.h2`
  margin-top: 60px;
  margin-bottom: 10px;
  padding: 30px 0 40px;
  border-top: 7px solid ${theme.DarkGrayBG};
  height: 125px;
  font-weight: 700;
  font-size: 32px;
`;
const PickMainHeaderSmall = styled.small`
  display: block;
  margin-top: 3px;
  color: ${theme.FontGray};
  font-weight: 400;
  font-size: 14px;
`;
const PickMainContainer = styled.div``;
const PickMain = styled.div`
  display: flex;
  margin: 0 -15px;
  flex-wrap: wrap;
  justify-content: space-evenly;
  &::before {
    display: table;
    content: ' ';
  }
  &::after {
    display: table;
    content: ' ';
    clear: both;
  }
`;
export default Pick;
