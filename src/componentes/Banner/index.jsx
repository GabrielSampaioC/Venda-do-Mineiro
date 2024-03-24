import styled from "styled-components";
import Titulos from "../Titulos";
import Botoes from "../Botoes";
import { BiSolidCheese } from "react-icons/bi";

const Container = styled.section`
    min-height: 80vh;
    align-items:center;
    display: flex;
    justify-content: space-between;
    padding: 1em;

    @media (max-width:768px){
        flex-direction: column;
        justify-content: center;
        min-height: 100vh;
    }
    @media (max-width:1000px){
        justify-content: center;
        text-align: center;
    }

`
const Logo = styled.img`
    max-width: 100%;
    width: 350px;

    @media (max-width:1000px){
        display: none;
    }
`
const SaberMaisEstilizado = styled.div`
    box-sizing: border-box;
    max-width: 40rem;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 1em;

    @media (max-width:768px){
        width: 100%;
        text-align: center;
        align-items: center;
        gap: 10px;
    }

`
const TextoEstilizado = styled.p`
    font-size: 20px;
    color: black;
    font-weight: 400;
    text-align: justify;
    margin: 1em 0;
    text-decoration: none;
    line-height: 1.5em;

    @media (max-width:768px){
        padding: 0 10px;
    }
`
export default function Banner() {
    return (
        <Container id="Inicio">
            <SaberMaisEstilizado>
                <Titulos>
                    Venda do Mineiro
                </Titulos>
                <TextoEstilizado>
                    Venha saborear e experienciar a exclusividade de nossos produtos, diretamente de Minas
                    Venha saborear e experienciar a exclusividade de nossos produtos, diretamente
                </TextoEstilizado>
                <Botoes>
                    <BiSolidCheese />
                    Saiba mais
                </Botoes>
            </SaberMaisEstilizado>
            <SaberMaisEstilizado>
                <Logo src="./imagens/galeria/logo.png" alt="logo"></Logo>
            </SaberMaisEstilizado>
        </Container>
    )
}