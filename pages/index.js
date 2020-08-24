import Head from 'next/head';
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 h1 {
   font-size: 2rem;
 }
`;
const Container = styled.div`
  text-align: center;
  background: red;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>SSR styled-components with Next.js Starter</title>
      </Head>
      <Container>
        <GlobalStyle />
        <h1>Hello, world!</h1>
        <button className="prettier-class" id="prettier-id" onClick={() => alert('Clicked')}>
          Click Here
        </button>
      </Container>
    </>
  );
}
