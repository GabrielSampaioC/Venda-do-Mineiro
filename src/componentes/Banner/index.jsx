import styled from "styled-components";
import Titulos from "../Titulos";

const Container = styled.section`
    min-height: 60vh;
    align-items: center;
    display:flex;
`
const Logo = styled.img`
    max-width: 100%;
    width: 350px;
`
const SecaoFluida = styled.div`
    display: flex;
    flex-direction: column;
`
const SecaoConteudo = styled.div`
    max-width: 1500px;
    display:flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 80vw;
`
export default function Conteudo() {
    return (
        <Container>
            <SecaoConteudo>
            <SecaoFluida>
                <Titulos>Venda do mineiro</Titulos>
                <p>Venha saborear e experienciar a exclusividade de nossos produtos, diretamente de Minas </p>
                <a href="#"><button>Saiba mais</button></a>
            </SecaoFluida>
                <div>
                <Logo src="./public/imagens/logo.svg" alt="logo"></Logo>
                </div>
            </SecaoConteudo>
        </Container>
    )
}