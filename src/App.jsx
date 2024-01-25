import Cabecalho from "./componentes/Cabecalho";
import Banner from "./componentes/Banner";
import styled from "styled-components";
import EstilosGlobais from "./componentes/EstilosGlobais";
import Produtos from "./componentes/Produtos";

const FundoEstilizado = styled.div`
    background-color: rgb(169,199,99);
    width:100%;
    min-height:100vh;
`
const AppContainer = styled.div`
  max-width: 1440px;
  max-height: 100vh;
  margin: 0 auto;
`
const MainContainer = styled.section`
    background-color: rgb(255,255,255);
    width:100%;
    min-height:100vh;
`

function App() {
  return (
    <>
      <EstilosGlobais />
      <FundoEstilizado>
        <AppContainer>
          <Cabecalho />
          <Banner />
        </AppContainer>
        <MainContainer>
          <AppContainer>
            <Produtos />
          </AppContainer>
        </MainContainer>
      </FundoEstilizado>
    </>
  )
}

export default App
