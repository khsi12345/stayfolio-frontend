import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getMagazineDetail } from 'Util/service';
import { device } from 'Components/Device';
import theme from 'Components/Theme';
import Layout from 'Components/Layout';
import Map from 'Components/Map';

const MagazineDetail = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getMagazineDetail(`http://10.58.1.146:8000/magazines/${props.match.params.id}`, setData);
  }, [props.match.params.id]);
  // const {
  //   title, title_image_url, title_text_image_url, identifier, intro, footer_image_url, contents,
  // } = data;
  return (
    <Layout>
      <MagazineDetailWrap>
        <MainTitle style={{ backgroundImage: `url(${data.title_image_url})` }}>
          <MainImage src={data.title_text_image_url} />
        </MainTitle>
        <IntroWrap>
          <IntroLogo src={data.logo_url} />
        </IntroWrap>
        <WhyWrap style={data.contents && { backgroundImage: `url(${data.contents[0].image_url})` }}>
          <DetailContainer>
            <DetailDividerWrap>
              <DividerLight />
              <DetailDividerTextLight>WHY</DetailDividerTextLight>
              <DividerLight />
            </DetailDividerWrap>
            <DetailTitleWrap>
              <DetailTitleLight>
                {data.contents && data.contents[0].header.map((el) => el)}
              </DetailTitleLight>
            </DetailTitleWrap>
            <DetailDescriptionWrap>
              <DetailDescriptionBodyLight>
                {data.contents && data.contents[0].description[0]}<br /><br />
                {data.contents && data.contents[0].description[2]}
              </DetailDescriptionBodyLight>
              <DetailDescriptionBodyLight>
                {data.contents && data.contents[0].description[1]}<br /><br />
                {data.contents && data.contents[0].description[3]}
              </DetailDescriptionBodyLight>
            </DetailDescriptionWrap>
          </DetailContainer>
        </WhyWrap>
        <PeopleWrap>
          <DetailContainer>
            <DetailDividerWrap>
              <DividerDark />
              <DetailDividerTextDark>PEOPLE</DetailDividerTextDark>
              <DividerDark />
            </DetailDividerWrap>
            <DetailTitleWrap>
              <DetailTitleDark>
                {data.contents && data.contents[1].header.map((el) => el)}
              </DetailTitleDark>
            </DetailTitleWrap>
            <DetailDescriptionWrap>
              <DetailDescriptionBodyDark>
                {data.contents && data.contents[1].description[0]}<br /><br />
                {data.contents && data.contents[1].description[2]}
              </DetailDescriptionBodyDark>
              <DetailDescriptionBodyDark>
                {data.contents && data.contents[1].description[0]}<br /><br />
                {data.contents && data.contents[1].description[2]}
              </DetailDescriptionBodyDark>
            </DetailDescriptionWrap>
          </DetailContainer>
        </PeopleWrap>
        {data.footer_image_url !== 'https://www.stayfolio.com' && <DivideImageWrap style={{ backgroundImage: `url(${data.footer_image_url})` }} />}
        <LocationWrap>
          <DetailContainer>
            <DetailDividerWrap>
              <DividerDark />
              <DetailDividerTextDark>LOCATION</DetailDividerTextDark>
              <DividerDark />
            </DetailDividerWrap>
            <DetailTitleWrap>
              <DetailTitleDark>
                {data.contents && data.contents[2].header.map((el) => el)}
              </DetailTitleDark>
            </DetailTitleWrap>
            <DetailDescriptionWrap>
              <DetailDescriptionBodyDark>
                {data.contents && data.contents[2].description[0]}<br /><br />
                {data.contents && data.contents[2].description[2]}
              </DetailDescriptionBodyDark>
              <DetailDescriptionBodyDark>
                {data.contents && data.contents[2].description[0]}<br /><br />
                {data.contents && data.contents[2].description[2]}
              </DetailDescriptionBodyDark>
            </DetailDescriptionWrap>
          </DetailContainer>
        </LocationWrap>
        <Map />
        <AddressWrap>
          <DetailContainer>
            <DetailDividerWrap>
              <DividerDark />
              <DetailDividerTextDark>ADDRESS</DetailDividerTextDark>
              <DividerDark />
            </DetailDividerWrap>
            <DetailAddressWrap>
              <DetailDescriptionBodyDark>
                <IntroWrap>
                  <IntroLogo src={data.logo_url} />
                </IntroWrap>
              </DetailDescriptionBodyDark>
              <DetailDescriptionBodyDark>
                {data.contents && data.place.full_address} <br />
                {data.contents && data.place.website} <br />
                {data.contents && data.place.phone}
              </DetailDescriptionBodyDark>
            </DetailAddressWrap>
          </DetailContainer>
        </AddressWrap>
        <ReserveButtonWrap>
          <ReserveButton href={`/picks/${props.match.params.id}`}>스테이소도 예약하기</ReserveButton>
        </ReserveButtonWrap>
      </MagazineDetailWrap>
    </Layout>
  );
};

const MagazineDetailWrap = styled.div`
  margin-top: 70px;
  background-color: #fff;
  @media ${device.tablet} {
    margin-top: 102px;
  }
`;

const MainTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  overflow: hidden;
  background-position: center center;
  background-size: cover;
  @media ${device.desktop} {
    height: 800px;
  }
`;

const MainImage = styled.img`
  width: 1200px;
  @media ${device.desktop} {
    width: inherit;
  }
`;

const IntroWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;

  @media ${device.desktop} {
    height: 360px;
  }
`;

const IntroLogo = styled.img`
  width: 260px;
`;

const DetailWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 130px 0;
  background-position: center center;
  background-size: cover;
`;

const WhyWrap = styled(DetailWrap.withComponent('div'))``;

const PeopleWrap = DetailWrap.withComponent('div');

const LocationWrap = DetailWrap.withComponent('div');

const AddressWrap = styled(DetailWrap.withComponent('div'))`
  padding-bottom: 60px;
`;

const DetailContainer = styled.div`
  width: 100%;
  max-width: 960px;
  padding: 0 15px;
`;

const DetailDividerWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const DetailDividerTextLight = styled.h3`
  padding: 0 20px;
  color: #fff;
  font-size: 22px;
  font-weight: 700;
  text-align: center;
`;

const DetailDividerTextDark = styled.h3`
  padding: 0 20px;
  color: ${theme.MainBlack}
  font-size: 22px;
  font-weight: 700;
  text-align: center;
`;

const DividerLight = styled.div`
  height: 1px;
  width: 100%;
  background-color: rgba(255, 255, 255, .5);
`;

const DividerDark = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${theme.BorderGray};
`;

const DetailTitleWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 60px 0;
`;

const DetailTitleLight = styled.h3`
  max-width: 600px;
  color: #fff;
  font-size: 24px;
  line-height: 140%;
  font-weight: 300;
  text-align: center;
  @media ${device.tablet} {
    font-size: 35px;
  }
`;

const DetailTitleDark = styled.h3`
  max-width: 600px;
  color: ${theme.MainBlack};
  font-size: 24px;
  line-height: 140%;
  font-weight: 300;
  text-align: center;
  @media ${device.tablet} {
    font-size: 35px;
  }
`;

const DetailDescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.desktop} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const DetailAddressWrap = styled(DetailDescriptionWrap.withComponent('div'))`
  text-align: center;
  align-items: center;
  border-bottom: 1px solid ${theme.BorderGray};
  padding: 20px;
`;

const DetailDescriptionBodyLight = styled.div`
  width: 100%;
  color: #fff;
  font-size: 16px;
  line-height: 180%;
  padding: 0 20px;
  @media ${device.desktop} {
    width: 48%;
  }
`;

const DetailDescriptionBodyDark = styled.div`
  width: 100%;
  color: ${theme.FontGray};
  font-size: 16px;
  line-height: 180%;
  padding: 0 20px;
  @media ${device.desktop} {
    width: 48%;
  }
`;

const DivideImageWrap = styled.div`
  height: 300px;
  overflow: hidden;
  background-position: center center;
  background-size: cover;
`;

const ReserveButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 60px;
`;

const ReserveButton = styled.a`
  padding: 20px;
  font-size: 16px;
  color: #fff;
  background-color: ${theme.MainBlack};
  cursor: pointer;
`;

export default MagazineDetail;
