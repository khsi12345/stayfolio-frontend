/*eslint-disable */

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { device } from 'Components/Device';
import Layout from 'Components/Layout';
import Magazine from 'Components/Magazine';
import Pagination from 'Components/Pagination';

const Magazines = () => {
  const [nextId, setId] = useState(0);

  const handlePage = (id) => {
    setId((id - 1) * 5);
  };

  return (
    <Layout>
      <Helmet>
        <title>Magazines | WeRbnb</title>
      </Helmet>
      <MagazinesWrap>
        <Magazine offset={nextId} limit={nextId+5} />
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
