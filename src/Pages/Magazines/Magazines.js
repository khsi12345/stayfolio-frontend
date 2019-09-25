import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { device } from 'Components/Device';
import Layout from 'Components/Layout';
import Magazine from 'Components/Magazine';
import Pagination from 'Components/Pagination';
import { getMagazines } from 'Util/service';


const Magazines = () => {
  const [items, setItems] = useState([]);
  const handlePage = (id) => {
    getMagazines(`http://10.58.1.146:8000/magazines?offset=${(id - 1) * 5}&limit=${(id - 1) * 5 + 5}`, setItems);
  };
  useEffect(() => {
    getMagazines('http://10.58.1.146:8000/magazines?offset=0', setItems);
  }, []);
  return (
    <Layout>
      <MagazinesWrap>
        <Magazine limit={5} />
      </MagazinesWrap>
      <Pagination handleClick={handlePage} />
    </Layout>
  );
};

const MagazinesWrap = styled.div`
  margin-top: 70px;
  @media ${device.tablet} {
    margin-top: 102px;
  }
`;

export default Magazines;
