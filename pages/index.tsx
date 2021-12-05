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
          content="Leandro Costa, Desenvolvedor Web e Mobile, formado em Analise e Desenvolvimento de Sistemas pelo IFMT, atualmente trabalhando como Quality Process Analyst na Sicredi Vale do Cerrado."
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
              Trabalho no desenvolvimento de aplicações web e mobile com foco na
              experiência de usuário
            </h2>
            <p id="green-text">
              Tecnologias: PowerBi, JavaScript, TypeScript, NodeJS, NextJS,
              Flutter, React Native e Servidores Linux (Apache e Nginx)
            </p>
          </RightText>
        </Hello>
      </Container>
    </>
  );
}
