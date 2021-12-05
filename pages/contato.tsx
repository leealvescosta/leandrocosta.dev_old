/* eslint-disable prettier/prettier */
import { useCallback, useState } from 'react';
import Head from 'next/head';
import { ToastContainer, toast } from 'react-toastify';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

import {
  Container,
  SocialMedia,
  CopyToClipBoard,
  Contact,
  Form,
} from '../styles/contato/styles';

export default function Contato(): JSX.Element {
  const [loading, setLoading] = useState(0);

  const onHandleSubmit = useCallback((event) => {
    event.preventDefault();

    const inputs = document.getElementsByTagName('input');
    const description = document.getElementsByTagName('textarea')[0].value;

    const formData = {
      name: inputs[0].value,
      email: inputs[1].value,
      subject: inputs[2].value,
      description,
    };

    if (
      formData.name === '' ||
      formData.email === '' ||
      formData.subject === '' ||
      formData.description === ''
    ) {
      toast('📝 Favor preencher todos os campos', {
        position: 'top-center',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        bodyStyle: {
          fontFamily: 'Source Sans Pro',
          fontSize: 18,
          color: '#272727',
        },
      });
      return;
    }

    toast.info('📤 Enviando e-mail...', {
      position: 'top-center',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      bodyStyle: { fontFamily: 'Source Sans Pro', fontSize: 20 },
    });

    setLoading(1);

    fetch('https://formspree.io/f/mwkyegbe', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.status === 200) {
          toast.success('🚀 E-mail enviado com sucesso!', {
            position: 'top-center',
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            bodyStyle: { fontFamily: 'Source Sans Pro', fontSize: 20 },
          });
        } else {
          toast.error('😓 Erro ao enviar o e-mail', {
            position: 'top-center',
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            bodyStyle: { fontFamily: 'Source Sans Pro', fontSize: 20 },
          });
        }

        for (let i = 0; i < 3; i += 1) {
          inputs[i].value = '';
        }

        document.getElementsByTagName('textarea')[0].value = '';

        setLoading(0);
      })
      .catch(() => {
        toast.error('😓 Erro ao enviar o e-mail', {
          position: 'top-center',
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          bodyStyle: { fontFamily: 'Source Sans Pro', fontSize: 20 },
        });

        setLoading(0);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Contato | Leandro Costa</title>
        <meta name="og:title" property="og:title" content="Fale comigo..." />
        <meta
          name="description"
          content="Meu E-mail, Instagram, GitHub e LinkedIn"
        />
      </Head>
      <Container>
        <Contact>
          <img src="/assets/profile.jpg" alt="It's me, Leandro Costa!" />
          <SocialMedia>
            <CopyToClipBoard>
              <GrMail size={30} />
              <p id="clipboard">contato@leandrocosta.dev</p>
            </CopyToClipBoard>
            <a
              href="https://www.linkedin.com/in/leandrocostadev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />
              <p>Leandro Costa</p>
            </a>
            <a
              href="https://www.github.com/leealvescosta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} />
              <p>leealvescosta</p>
            </a>
            <a
              href="https://www.instagram.com/leandrocosta.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={30} />
              <p>@leandrocosta.dev</p>
            </a>
          </SocialMedia>
        </Contact>
        <Form onSubmit={onHandleSubmit} loading={loading}>
          <h1>Fale comigo ...</h1>
          <input type="text" name="name" placeholder="Nome" />
          <br />
          <input type="email" name="email" placeholder="E-mail" />
          <br />
          <input type="text" name="subject" placeholder="Assunto" />
          <br />
          <textarea name="description" placeholder="Descrição" cols={80} />
          <br />
          <button type="submit">enviar</button>
        </Form>
        <ToastContainer
          position="top-center"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Container>
    </>
  );
}
