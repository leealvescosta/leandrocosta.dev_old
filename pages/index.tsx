/* eslint-disable prettier/prettier */
import Head from 'next/head';
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
          content="Leandro Costa, Web and Mobile Developer, graduated in Systems Analysis and Development at IFMT, currently working as QA Advisor at Sicredi."
        />
      </Head>
      <Container>
        <Hello>
          <Left>
            <img src="/assets/profile.jpg" alt="It's me, Leandro Costa!" />
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
            <h1>Developer</h1>
            <h2>
              Working on development web and mobile focusing on user experience.
            </h2>
            <p id="green-text">
              Stacks: Dart, Flutter, JavaScript, NextJS, NodeJS, React, React
              Native, automation's With UiPath, Power Bi Analysis and Linux
              Server.
            </p>
          </RightText>
        </Hello>
      </Container>
    </>
  );
}
