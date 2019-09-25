import React, {
  memo, useState, useEffect, useCallback,
} from 'react';
import styled from 'styled-components';
import { getApi } from 'Util/service';
import Layout from 'Components/Layout';
import PickItem from 'Components/PickItem';
import Pagination from 'Components/Pagination';
import theme from 'Components/Theme';
import { device } from 'Components/Device';


const Picks = memo((props) => {
  const [getPick, setPick] = useState([]);
  console.log(props);
  useEffect(() => {
    getApi('http://10.58.5.100:8080/pick?offset=0&limit=12', setPick);
  }, []);

  const LoadPicks = () => {
    if (getPick.data && getPick.data !== undefined) {
      return getPick.data.result.map((ele) => (
        <PickItem
          key={ele.pick_id}
          id={ele.pick_id}
          name={ele.place_info.name}
          eng={ele.identifier}
          des={ele.title}
          location={ele.place_info.city}
          minpr={ele.place_info.price_min}
          maxpr={ele.place_info.price_max}
          targets={ele.place_info.targets}
          type={ele.place_info.place_type}
          img={ele.main_image_url}
        />
      ));
    }
  };

  const pageChangeHandler = (id) => {
    // console.log(id * 12 - 1, id * 12 + 12);
    getApi(`http://10.58.5.100:8080/pick?offset=${(id - 1) * 12}&limit=${(id - 1) * 12 + 12}`, setPick);
  };
  return (
    <>
      {/* ${console.log('렌더렌더')} */}
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
                {LoadPicks()}
              </PickMain>
              <Pagination handleClick={pageChangeHandler} />
            </PickMainContainer>
          </PickMainWrap>
        </PickWrap>
      </Layout>
    </>
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
export default Picks;
