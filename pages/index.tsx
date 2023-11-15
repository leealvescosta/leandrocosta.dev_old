/* eslint-disable prettier/prettier */
import Head from 'next/head';
import React from 'react';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

import {
  Container,
  Hello,
  Left,
  SocialMedia,
  RightText,
} from '../styles/home/styles';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Home | Leandro Costa</title>
        <meta name="og:title" property="og:title" content="Leandro Costa" />
        <meta
          name="description"
          content="Leandro Costa, RPA Developer and Data Analyst, graduated in Systems Development at IFMT, currently working as Process Assessor at Sicredi."
        />
      </Head>
      <Container>
        <Hello>
          <Left>
            <img src="/assets/me.jpg" alt="It's me, Leandro Costa!" />
            <SocialMedia>
              <a
                href="https://www.instagram.com/leandrocosta.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={36} />
              </a>
              <a
                href="https://www.linkedin.com/in/leandrocostadev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size={36} />
              </a>
              <a
                href="https://www.github.com/leealvescosta"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={36} />
              </a>
            </SocialMedia>
          </Left>
          <RightText>
            <h1>RPA Developer</h1>
            <h2>
              Working as Process Assessor at{' '}
              <a
                href="https://www.sicredi.com.br/coop/valedocerrado/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sicredi
              </a>
            </h2>
            <p id="green-text">
              Stacks: UiPath, Python, Data Analysis, Flutter, JavaScript,
              NextJS, NodeJS and Linux Servers.
            </p>
          </RightText>
        </Hello>
      </Container>
    </>
  );
}
