import Head from 'next/head'
import styles from '../styles/Home.module.css'
import styled from '@emotion/styled'

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const BlogTitle = styled.h1`
  color: #0070f3;
  text-decoration: none;
  text-align: center;
`;

const title: string = 'next.js + Typescript'


export default function Home() {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Main>
        <BlogTitle className={styles.title}>
          {title}
        </BlogTitle>
      </Main>

    </Container>
  )
}
