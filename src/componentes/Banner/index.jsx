import styled from "styled-components";
import Titulos from "../Titulos";
import Textos from "../Textos";
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
    }
`
const Logo = styled.img`
    max-width: 100%;
    width: 350px;

    @media (max-width:768px){
        display: none;
    }
`
const SaberMaisEstilizado = styled.div`
    box-sizing: border-box;
    max-width: 40rem;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 1em 0;

    @media (max-width:768px){
        width: 100%;
        text-align: center;
        align-items: center;
        justify-content: center;
    }   

`
export default function Banner() {
    return (
        <Container>
            <SaberMaisEstilizado>
                <Titulos>
                    Venda do Mineiro
                </Titulos>
                <Textos>
                    Venha saborear e experienciar a exclusividade de nossos produtos, diretamente de Minas
                    Venha saborear e experienciar a exclusividade de nossos produtos, diretamente
                </Textos>
                <Botoes>
                    <BiSolidCheese />
                    Saiba mais
                </Botoes>
            </SaberMaisEstilizado>
            <SaberMaisEstilizado>
                <Logo src="./public/imagens/galeria/logo.svg" alt="logo"></Logo>
            </SaberMaisEstilizado>
        </Container>
    )
}