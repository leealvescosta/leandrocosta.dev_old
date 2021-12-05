/* eslint-disable prettier/prettier */
import React from 'react';
import Head from 'next/head';
import { FaGithub } from 'react-icons/fa';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';

import { Container, Button, ButtonsContainer } from '../styles/links/styles';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Links | Leandro Costa</title>
        <meta name="og:title" property="og:title" content="Leandro Costa" />
        <meta
          name="description"
          content="Links do GitHub, LinkedIn e Instagram"
        />
      </Head>
      <Container>
        <img src="/assets/berg.png" alt="Foto de perfil Berg" />
        <ButtonsContainer>
          <a
            href="https://www.instagram.com/leandrocosta.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button color="#e23dcc">
              <BsInstagram size={26} color="#fff" />
              <h1>Instagram</h1>
            </Button>
          </a>

          <a
            href="https://www.linkedin.com/in/leandrocostadev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button color="#2B83D0">
              <BsLinkedin size={26} color="#fff" />
              <h1>LinkedIn</h1>
            </Button>
          </a>

          <a
            href="https://www.github.com/leealvescosta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>
              <FaGithub size={30} color="#fff" />
              <h1>GitHub</h1>
            </Button>
          </a>
        </ButtonsContainer>
      </Container>
    </>
  );
};

export default Home;
