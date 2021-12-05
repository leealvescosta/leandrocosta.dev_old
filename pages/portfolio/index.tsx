/* eslint-disable prettier/prettier */
import Head from 'next/head';

import { Container, Project, Text } from '../../styles/portfolio/styles';

export default function Portfolio(): JSX.Element {
  return (
    <>
      <Head>
        <title>Portfolio | Leandro Costa</title>
        <meta name="og:title" property="og:title" content="Portfolio" />
        <meta
          name="description"
          content="Graduação, experiências e meus projetos"
        />
      </Head>
      <Container>
        <h1>Experiências | Qualificações</h1>
        <strong>
          - Graduação:
          <span>
            {' '}
            Graduado em Análise e Desenvolvimento de Sistemas no IFMT
          </span>
        </strong>
        <strong>
          - Freelancer:
          <span>
            {' '}
            Atuo como desenvolvedor freelancer web e mobile com Flutter desde
            fevereiro de 2019
          </span>
        </strong>
        <strong>
          - Emprego atual:
          <span>
            {' '}
            Trabalho como Quality Process Analyst na{' '}
            <a
              href="https://sicredi.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sicredi
            </a>{' '}
            com foco na criação e melhorias de processos internos e automações
            com{' '}
            <a
              href="https://uipath.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              UiPath
            </a>{' '}
            .
          </span>
        </strong>
        <strong>
          - Empregos anteriores:
          <span>
            {' '}
            Fui Office Manager na{' '}
            <a
              href="https://novo.campoverde.mt.gov.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Prefeitura Municipal de Campo Verde
            </a>{' '}
            onde atuava na tributação Municipal, assim como levantamentos
            estratégicos e inovação.
          </span>
        </strong>

        <h1>Projetos</h1>

        <Project>
          <img
            src="/assets/logo_crescer.png"
            alt="Plataforma Crescer - Sicredi"
          />
          <Text>
            <strong>
              - Função:
              <span> Desenvolvedor Web</span>
            </strong>
            <br />
            <strong>
              - Descrição:
              <span>
                {' '}
                <a
                  href="https://plataformacrescer.com.br/beta/UI/index.php"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Programa Crescer
                </a>{' '}
                é uma plataforma de aprendizado onde novos associados Sicredi
                aprendem mais sobre o Cooperativismo e como sua parte faz
                diferença (feito com PHP + MySQL).
              </span>
            </strong>
          </Text>
        </Project>

        <Project>
          <img src="/assets/logo_crescer.png" alt="leandrocosta.dev logo" />
          <Text>
            <strong>
              - Função:
              <span> Desenvolvedor Fullstack</span>
            </strong>
            <br />
            <strong>
              - Descrição:
              <span>
                {' '}
                <a href="/" target="_blank" rel="noopener noreferrer">
                  Leandro Costa Dev
                </a>{' '}
                é o site que você está acessando. Criado zero absoluto, desde a
                concepção da arquitetura, design e desenvolvimento com NextJS.
              </span>
            </strong>
          </Text>
        </Project>
      </Container>
    </>
  );
}
