import React from 'react';
import styled from 'styled-components';
import { device } from 'Components/Device';
import theme from 'Components/Theme';
import Layout from 'Components/Layout';
import Map from 'Components/Map';
import Data from 'Data/magazine.json';

const MagazineDetail = () => (
  <Layout>
    <MagazineDetailWrap>
      <MainTitle>
        <MainImage src="https://www.stayfolio.com/system/pictures/images/000/037/172/original/379053e99b5d64a10330ebaba5f1136da461a818.png?1565659661" />
      </MainTitle>
      <IntroWrap>
        <IntroLogo src="https://www.stayfolio.com/system/pictures/images/000/037/149/original/74004f7f6772d3a7471ac7d04c905dafae3730d7.png?1565604357" />
      </IntroWrap>
      <WhyWrap>
        <DetailContainer>
          <DetailDividerWrap>
            <DividerLight />
            <DetailDividerTextLight>WHY</DetailDividerTextLight>
            <DividerLight />
          </DetailDividerWrap>
          <DetailTitleWrap>
            <DetailTitleLight>
              또 하나의 작은 섬이 되어 되돌아갈 장소를 제안하는 스테이소도
            </DetailTitleLight>
          </DetailTitleWrap>
          <DetailDescriptionWrap>
            <DetailDescriptionBodyLight>
                스테이소도는 우도에서 온전한 하루를 보내지 않으면 알 수 없는 밤의 이야기를 전하고, 머물수록 그 머묾의 시간에 가치와 의미를 더해가는 특별한 스테이로 태어날 수 있었다. 우도를 반나절 여행지가 아닌, 오래 머물게 하는 섬으로 만들고 싶었던 건축주와 그 비슷한 생각의 결과 가치를 공유하는 사람들이 만난 덕분이었다. 낮의 시간에 가려져 감춰져 있던 우도의 매력을 일찍이 알아보고 지랩을 먼저 찾아간 건 나은이네 가족이었다. 나은이네 가족은 지랩이 그동안 제주도에서 진행해왔던 여러 프로젝트를 관심 있게 지켜본 것 이상으로 지랩이 추구해온 가치와 방향성에 깊이 공감하고 있었다. 화려함과 현람함과는 궤를 달리하는 건축의 가치로 제주다움의 풍토에 녹아들고, 성공보다는 성장을, 또 상생하는 관계로서 제주 사람들의 마음까지 얻는 그들이라면, 막연히 꿈꿔왔지만 섣불리 시도할 수는 없었던 공간을 우도에 만들 수 있으리라는 확신이 들었던 것이다. 그래서인지 나은이네 가족은 지랩 측에서의 거듭된 만류와 거절에도 지랩을 다시 찾아갔다.<br /><br />
                나은이네 가족은 사람들에게 좀처럼 잘 알려지지 않았던, 우도의 해질녘과 드넓게 펼쳐진 바다에 붉은 빛 가득 들어차는 노을빛을 담고, 밤의 시간들을 거닐고 음미할 수 있는 공간을 짓고 싶었다. 머무르게 하는 스테이로 도시 관광객의 속도가 아닌, 자연의 정연한 시간의 흐름에 따라 비교적 느리게 흘러가는 우도 사람들의 삶의 속도를 느끼게도 하고 싶었다. 그리고 무엇보다 그 공간이 우도의 자연과 마을, 풍토에 잘 녹아들어 자신들의 스테이가 우도만의 대체 불가할 지역성과 섬의 정체성을 확장해나가는 방식이길 바랐다. 신축이지만 마치 이곳에 오래전부터 자리해 있었던 집처럼 우도의 땅에 최대한 동화될 수 있고, 우도 특유의 마감이 두드러지게 나타나게 할 공간을 짓고 싶었던 것이다.
            </DetailDescriptionBodyLight>
            <DetailDescriptionBodyLight>
                이에 지랩은 우도가 섬 안의 섬이면서 제주다운 모든 모습들을 집약적으로, 소박하고도 간결하게 담아내고 있다는 사실에 착안했다. 섬이 포개어 들어가 있다는 느낌에 집중해 우도 안의 우도를 닮은 또 하나의 작은 섬을 만들기로 결정 하는가 하면, 우도의 특징과 정체성이 공간 안팎으로 구현되어 일관된 미학으로 서로 유연하게 넘나들 수 있도록 디자인했다. 즉, 우도의 소박한 정취를 내부로도 한껏 끌어 들여 내부에 자리해 있어도 우도 전경 한가운데 서 있는 듯한 느낌을 주기 위한 설계적인 노력을 기울였다.<br /><br />
                뿐만 아니라 건축 설계와 더불어 실내 디자인, 스타일링, 공간 브랜딩까지 맡아서 디자인하는 지랩 덕분으로, 그 공간과 우도에 ‘머무르게 하는 섬’이라는 새로운 정체성까지 덧입힐 수 있었다. 섬에서의 시간을 더욱 가치 있고 충만하게 할 스토리와 유니크한 콘텐츠를 직접 기획해 담았고, 잘 알려지지 않은 우도의 숨은 매력을 이끌어 내기 위해 노력했다. 스테이소도는 우도에서의 머무는 공간 외에도 소도 내에서 다채로운 쉼을 가능하게 할 거리들을 최대한으로 갖추어, 라이프스타일의 제안이라는 대체 불가한 감성까지 더했다. 이렇듯 스테이소도가 지금의 완성도 높은 공간으로 사람의 마음을 움직이고 열게 하는 스테이로 다가설 수 있는 데에는 많은 사람들의 노력과 곱절의 매만짐, 그리고 오랜 시간이 필요 했다. 우도에 대한 각별하고도 진심 어린 마음 없이는 불가능 했을 그런 고된 여정이었다. 그렇게 스테이소도는 많은 사람들의 고립을 자처하게 할, 우도에서의 가치 있고 의미 있는 머묾을 위한 작은 섬 같은 공간으로 태어났다.
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
              머루르게 하는 스테이로 우도에 새로운 정체성과 활기를 불어넣은 사람들
            </DetailTitleDark>
          </DetailTitleWrap>
          <DetailDescriptionWrap>
            <DetailDescriptionBodyDark>
                레베카 솔닛에 따르면 어떤 장소는 우리에게 “되돌아갈 어딘가”, 즉 “연속성”을 제공한다. 장소는 “우리 삶의 일부분을 서로 연결”하고 “일관성을 유지하게 함”으로써 친근함을 전하는 것이다(『멀고도 가까운』). 그런데 이 장소는 내가 태어난 고향일 필요도, 내 삶의 공간과 가까울 필요도 없다. 크고 작을 사소한 이유로도 어떤 장소는 편안함을 주고, 내 정체성의 일부로 녹아들기도 한다. 중요한 것은 그 장소에 새겨지는 연결성의 감각과 이야기이지 물리적 조건이나 거리가 아니다.<br /><br />
                섬은 그것이 갖는 물리적, 지형적 특징으로 인해 고립과 탈출이라는 이미지를 연상시킨다. 엘리자베스 제닝스의 「섬」 (“The Island”)에서처럼 “적대적인” 본토를 벗어나 섬으로의 여행을 자처하는 사람들이 있는가하면, 다니엘 디포의 『로빈슨 크루소』만큼은 아니다 하더라도 의도치 않게 섬에 고립되기도 한다. 사면이 바다로 둘러싸여 있는 섬은 육지의 일부여도 연결보다는 본토로부터의 분리와 고립에의 느낌이 강하고, 더욱 통제 불가능하고 불확실한 상황을 연출한다. 그래서인지 섬은 배제와 고립이라는 불안을 가중시켜 머묾보다는 탈출이라는 반동적 움직임을 불러일으킨다. 하지만 그러한 비자발적인 고립의 느낌을 주는 섬에서 조차 내가 친근함을 느낄 수 있고 편안히 되돌아가 쉴 수 있는 어떤 ‘장소’가 있다면, 그 섬은 한없이 ‘머물고 싶어지는 곳’이 된다. 본토나 육지에서 보다 더없이 연결되어 있다는 느낌을 주면서 말이다. 그 ‘탈출’을 감행하는 움직임이 언제나 섬에서 본토로 이뤄지는, 한 방향의 것은 아니다. 솔닛이 말하는, 나의 이야기가 깃드는 장소를 필요로 할 뿐이다.
            </DetailDescriptionBodyDark>
            <DetailDescriptionBodyDark>
                우도는 제주도의 8개의 유인도 중 가장 인기 있는 섬이지만, 반나절 여행 코스로만 손꼽혔지 하루 이상의 숙박을 하거나 머무는 지역으로 사람들에게 각인되지는 않았다. 섬 안의 섬이 주는 고립과 불안의 느낌 때문인지 기이한 속도감에 쫓겨 마지막 도항선이 끊기기 전 주요 스팟을 빠르게 돌고 나가는 것이 보통이다. 하지만 우도의 ‘진짜’ 모습은 제주섬으로 돌아가는 모든 배편이 끊기는 해질녘부터다. 마지막 도항선이 떠나고 나면 우도에 적요가 내려앉고, 기분 좋은 적막 가운데 ‘해가 지는 제주도’를 찬찬히 지켜볼 수 있다. 우도에서의 24시간을 보내지 않고서는 경험하지 못할 밤의 시간들이다.<br /><br />
                지랩의 우도에서의 첫 프로젝트는 그러한 섬이 상기시켰던 부정적 연상들을 거스르고, 우도에 대해 사람들이 가졌을 기존의 이미지를 탈피시키기 위한 방향으로 출현했다. 섬 안의 섬이 주는 불안을 덜고, 우도에서의 고립을 자처하게 만드는 스테이를 만들어 우도에서 머무는 하루가 잊지 못할 의미 있는 경험이 될 수 있도록 디자인했다. 지랩은 우도라는 섬 자체의 특징과 형상, 느낌을 은유해 섬 안의 작은 섬이라는 뜻의 ‘소도’, 스테이소도를 만들었고, 특징적인 공간적 경험과 더불어 일관된 맥락을 가진 (공간적) 브랜드 정체성으로 녹여내었다. 그 결과 기존의 우도의 섬과 밤이라는 고독과 고립, 닫힘의 이미지를 덜어내고, 우도에서의 하루가 완전한 고립만이 아닌, 연결되어 있는 고립이자 채우기 위한 머묾의 시간임을 각인시키는 스테이를 완성시킬 수 있었다. 그렇게 스테이소도는 우도에 들어선 누군가에게 ‘되돌아갈 어딘가’, 연결된 감각을 전하는 ‘작은 섬’이 되어 우도에서의 특별한 시간을 선물한다.
            </DetailDescriptionBodyDark>
          </DetailDescriptionWrap>
        </DetailContainer>
      </PeopleWrap>
      <DivideImageWrap />
      <LocationWrap>
        <DetailContainer>
          <DetailDividerWrap>
            <DividerDark />
            <DetailDividerTextDark>LOCATION</DetailDividerTextDark>
            <DividerDark />
          </DetailDividerWrap>
          <DetailTitleWrap>
            <DetailTitleDark>
              멀고도 가까운, 섬 안의 섬 우도
            </DetailTitleDark>
          </DetailTitleWrap>
          <DetailDescriptionWrap>
            <DetailDescriptionBodyDark>
                제주 동쪽 끝에 위치한 우도는 해안선 길이가 17km정도인 크지 않은 섬이다. 지형적, 지질적 특징 덕분에 우도 8경이라는, 독특한 해안 절경을 자랑하며 해마다 수많은 관광객들을 끌어들이지만, 마지막 도항선 시간에 맞춰 반나절 안으로 돌아가는 여행지로만 알려져 있지 그 이상의 시간을 보내는 곳으로는 알려지지 않았다. 우도와 관련한 여행책자들이나, 제주관광 공사가 운영하는 포털에서도 우도를 그렇게 소개하고 있다. 제주도가 요 근래 오버투어리즘으로 몸살을 앓을 만큼, 제주를 경험하려는 사람들과 다양한 컨텐츠들이 넘쳐나고 있지만, 우도와 관련한 정보가 크게 새로울 게 없고 한 두 페이지 이상 넘어가지 않는 걸 보면 그 관심이 우도에까지 미치지 못하고 있음이 확실해 보인다. 이것이 대체로 많은 사람들이 우도에 대해 가지고 있을 이미지이자 낮의 시간들이다.<br /><br />
                하지만 짧은 시간 내 최대한 많은 것을 둘러보고 나가려는 마음과 속도를 조금 늦춘다면, 기꺼운 마음으로 마지막 도항선이 끊기는 그 이후의 시간들까지 그 머묾을 허락한다면 우도는 그간 제주섬 여행으로는 보지 못했을 선물 같은 시간들과 풍경들을 선물 보따리처럼 풀어 놓는다. 우도에는 제주섬과는 다르게 흘러가는 우도만의 삶과 시간의 궤적이 있고, 밤의 질서 정연한 시간들이 있다. 하루 내내 많은 관광객들로 북적이다가도 마지막 도항선이 떠나고 나면 노을과 함께 좀처럼 느끼기 힘들었던 고요함과 한적함이 우도 전체에 내려앉는다.
            </DetailDescriptionBodyDark>
            <DetailDescriptionBodyDark>
                낮에는 건축가 정기용의 표현대로 “수많은 오름들을 거느리며” “영산다운 면모”를 위시할 한라산을 볼 수 있다던 그 방향으로 해가 내려 앉아 핏빛 가득 머금은 노을빛이 제주도와 바다를 물들이는 장면을 바라볼 수 있다(『기억의 풍경』). 우도는 그런 곳이다. 적당한 거리를 두고서, 제주섬을 육지처럼 바라보며 그 아름다움에 빠져들 수 있게 한다. 거기다 우도는 해녀 문화와 밭담, 산담 등 제주 사람들의 삶과 풍토를 집약해 잘 간직하고 있는 곳이어서, 마을길에 잠시 들어서기만 해도 하늘과 맞닿아 있는 바다와 해안가에 낮게 내려앉은 집들, 그리고 돌담으로 얼기설기 구분되어 있는 밭들까지 겹겹이 쌓여든 제주다움의 그 풍경을 그림처럼 한눈에 담을 수도 있다.<br /><br />
                우도 내 작은 섬이 되어 조용히 내려앉은 스테이소도는 이 모두를 가능하게 할 위치에 자리해있다. 서쪽 해안가로 면(面)하고 있어 방파제를 두른 작은 포구 너머로 해가지는 제주를 편안히 바라볼 수 있는가하면, 우도 사람들이 일년주기에 따라 다르게 나는 제철 해산물을 작업해서 널어놓고, 저마다의 일상을 살아가는 곳이다. 물질을 끝내고 돌아오는 해녀들의 모습도 볼 수 있다. 우도 해안길은 밤수지맨드라미 책방처럼 최근 우도의 매력을 느낀 젊은 사람들이 유입해 들어와 새로운 활기를 더하기도 했다. 스테이소도 역시 조용하고 절제된 형태로 주변과 관계 맺기 위해 노력했다. 눈에 보이는 벽을 둘러 세워 폐쇄적인 공간을 만들지 않았고, 경계 없는 열린 공간으로 다가섰다. 그렇게 우도의 섬과 밤에 내맡기는 의미 있는 공간 경험을 선사하는 스테이가 되어 우도 해안길에 건강한 흐름을 들이는 방식으로 등장할 수 있었다.
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
                <IntroLogo src="https://www.stayfolio.com/system/pictures/images/000/037/149/original/74004f7f6772d3a7471ac7d04c905dafae3730d7.png?1565604357" />
              </IntroWrap>
            </DetailDescriptionBodyDark>
            <DetailDescriptionBodyDark>
                제주특별자치도 제주시 우도면 우도해안길 496-1 <br />
                http://staysodo.co.kr | jeju.staysodo@gmail.com <br />
                0504-0904-2305
            </DetailDescriptionBodyDark>
          </DetailAddressWrap>
        </DetailContainer>
      </AddressWrap>
      <ReserveButtonWrap>
        <ReserveButton>스테이소도 예약하기</ReserveButton>
      </ReserveButtonWrap>
    </MagazineDetailWrap>
  </Layout>
);

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
  background-image: url("https://www.stayfolio.com/system/pictures/images/000/037/173/original/92dd993182250f2524dd309b3708ebc44c3cc26b.jpg?1565659699");
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

const WhyWrap = styled(DetailWrap.withComponent('div'))`
  background-image: url("https://www.stayfolio.com/system/pictures/images/000/036/555/original/eff101a8a7051a3b1c270e85d8e076ac1445739d.jpg?1565060660");
`;

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
  background-image: url("https://www.stayfolio.com/system/pictures/images/000/036/552/original/1e5de2ed59ba179c496dd63f58e950bca36aacf5.jpg?1565059063");
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
