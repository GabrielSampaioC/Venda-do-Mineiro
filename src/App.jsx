import Banner from "./componentes/Banner";
import styled from "styled-components";
import EstilosGlobais from "./componentes/EstilosGlobais";
import Produtos from "./componentes/Produtos";
import { useState, useEffect } from "react";
import Galeria from "./componentes/Galeria";
import fotos from "./fotos.json";
import Entrega from "./componentes/Entrega";
import Sobre from "./componentes/Sobre";

const FundoEstilizado = styled.div`
    background-color: var(--amarelo-claro);
    min-height:80vh;

    @media (max-width:768px){

}   

`
const AppContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;

  @media (max-width:768px){
    margin: 0;
}   
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
      <EstilosGlobais/>
      <FundoEstilizado>
        <AppContainer>
          <Banner />
        </AppContainer>
      </FundoEstilizado>
        <AppContainer>
          <Sobre/>
          <Produtos>
            <Galeria fotos={fotosDaGaleria} setTag={setTag} />
          </Produtos>
          <Entrega />
        </AppContainer>
    </>
  )
}
export default App;
