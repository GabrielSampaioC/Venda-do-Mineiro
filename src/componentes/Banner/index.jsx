import styled from "styled-components";
import Titulos from "../Titulos";
import Textos from "../Textos";
import Botoes from "../Botoes";

const Container = styled.section`
    min-height: 75vh;
    align-items:center;
    display: flex;
    justify-content: space-between;
    padding: 1em;
`
const Logo = styled.img`
    max-width: 100%;
    width: 350px;
`
const SaberMaisEstilizado = styled.div`
    box-sizing: border-box;
    max-width: 40vw;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 1em 0;
`
export default function Conteudo() {
    return (
        <Container>
            <SaberMaisEstilizado>
                <Titulos>
                    Venda do mineiro
                </Titulos>
                <Textos>
                    Venha saborear e experienciar a exclusividade de nossos produtos, diretamente de Minas
                    Venha saborear e experienciar a exclusividade de nossos produtos, diretamente de
                    Venha saborear e experienciar a exclusividade de nossos produtos
                </Textos>
                <Botoes>
                    Saiba mais
                </Botoes>
            </SaberMaisEstilizado>
            <SaberMaisEstilizado>
                <Logo src="./public/imagens/logo.svg" alt="logo"></Logo>
            </SaberMaisEstilizado>
        </Container>
    )
}