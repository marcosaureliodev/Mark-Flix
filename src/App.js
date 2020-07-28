import React from 'react';
import styled from 'styled-components'
import Menu from './components/Menu'
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

//agrupador de conteudos nas categorias no App.
const AppWrapper = styled.div`
background: var(--grayDark);
`;
//============================================

function App() {
  return (
    <AppWrapper >
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é front-and? Trabalhando na área os termos HTMl, CSS e JavaScript faram parte da rotina dos desenvolvedores(as). Mais o que eles fazem a final? Descubra com a Vanessa!"}
        />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[4]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[5]}
      />

      <Footer />
    </AppWrapper>
  );
}

export default App;
