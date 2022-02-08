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
          content="Graduation, experiencies and projects"
        />
      </Head>
      <Container>
        <h1>Experiencies | Qualifications</h1>
        <strong>
          - Graduation:
          <span> Graduated in Systems Analysis and Development at IFMT</span>
        </strong>
        <strong>
          - Freelancer:
          <span>
            {' '}
            Working as a Freelancer creating apps and websites since 2019.
          </span>
        </strong>
        <strong>
          - Working Actually:
          <span>
            {' '}
            Working as QA Analyst at{' '}
            <a
              href="https://sicredi.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sicredi
            </a>{' '}
            focused on creating and improving internal processes from scratch
            and automation's with{' '}
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
          - Others works:
          <span>
            {' '}
            Office Manager at{' '}
            <a
              href="https://novo.campoverde.mt.gov.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Prefeitura Municipal de Campo Verde
            </a>{' '}
            Worked in Municipal taxation, as well as surveys strategic and
            innovation.
          </span>
        </strong>

        <h1>Projects</h1>

        <Project>
          <img src="/assets/crescer.png" alt="Plataforma Crescer - Sicredi" />
          <Text>
            <strong>
              - Function:
              <span> Web Developer</span>
            </strong>
            <br />
            <strong>
              - Description:
              <span>
                {' '}
                <a
                  href="https://plataformacrescer.com.br/beta/UI/index.php"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Programa Crescer
                </a>{' '}
                is a learning platform where new Sicredi associates learn more
                about Cooperativism and how their part makes difference (made
                with PHP + MySQL).
              </span>
            </strong>
          </Text>
        </Project>

        <Project>
          <img src="/assets/Logo nbg.png" alt="leandrocosta.dev logo" />
          <Text>
            <strong>
              - Function:
              <span> Developer</span>
            </strong>
            <br />
            <strong>
              - Description:
              <span>
                {' '}
                <a href="/" target="_blank" rel="noopener noreferrer">
                  Leandro Costa Dev
                </a>{' '}
                this website. Absolute zero has been created since architecture
                conception, design and development with NextJS.
              </span>
            </strong>
          </Text>
        </Project>
      </Container>
    </>
  );
}
