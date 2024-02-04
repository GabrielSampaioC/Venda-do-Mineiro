import Cabecalho from "./componentes/Cabecalho";
import Banner from "./componentes/Banner";
import styled from "styled-components";
import EstilosGlobais from "./componentes/EstilosGlobais";
import Produtos from "./componentes/Produtos";
import { useState, useEffect } from "react";
import Galeria from "./componentes/Galeria";
import fotos from "./fotos.json";
import Entrega from "./componentes/Entrega";
import Rodape from "./componentes/Rodape";

const FundoEstilizado = styled.div`
    background-color: rgb(169,199,99);
    width:100%;
    min-height:80vh;
`
const AppContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`
const MainContainer = styled.main`
    background-color: var(--branco);
    width:100%;
    font-family: var(--fonte-principal);
`

function App() {

  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos)
  const [tag, setTag] = useState(0);

  useEffect(() => {
    const fotosFiltradas = fotos.filter(foto => {
      const filtrarItens = !tag || foto.tagId === tag;

      return filtrarItens;
    })
    setFotosDaGaleria(fotosFiltradas)
  }, [tag])

  return (
    <>
      <EstilosGlobais />
      <FundoEstilizado>
        <AppContainer>
          <Cabecalho />
          <Banner />
        </AppContainer>
      </FundoEstilizado>
      <MainContainer>
        <AppContainer>
          <Produtos>
            <Galeria fotos={fotosDaGaleria} setTag={setTag} />
          </Produtos>
          <Entrega />
        </AppContainer>
      </MainContainer>
      <Rodape />

    </>
  )
}

export default App;
