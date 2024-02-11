import styled from "styled-components";
import Textos from "../Textos";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const RodapeEstilizado = styled.footer`
    background: var(--amarelo);
    align-items: center;
    padding: 1.5em 0;
    border-radius: 10px 10px;
`
const ContainerRedes = styled.div`
    display: inline-flex;
    padding: 1em;
`
const Span = styled.span`
    display: flex;
    justify-content: center;
 `

const BlocoEstilizado = styled.div`
    background-color: var(--marrom);
    border-radius: 5px;
    padding: 1em;
    margin: 0 10px;
    color: white;
`

const Container = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const LogoFooter = styled.img`
    width: 100px;
`
const BotaoRedesLink = styled.a`
    text-decoration: none;
`
export default function Rodape() {



    return (
        <>
            <RodapeEstilizado>
                <Container >
                <LogoFooter src="./public/imagens/logo.svg" alt="logo" />
                <Textos>all rights reserved</Textos>
                <div>
                    <Span>Nossas redes</Span>
                    <ContainerRedes>
                    <BotaoRedesLink href="https://wa.me/5511986691592"><BlocoEstilizado>{<FaWhatsapp />}</BlocoEstilizado></BotaoRedesLink>
                    <BotaoRedesLink href="https://www.instagram.com/vendasdomineiro/"><BlocoEstilizado>{<FaInstagram />}</BlocoEstilizado></BotaoRedesLink>
                    </ContainerRedes>
                </div>
                </Container>
            </RodapeEstilizado>
        </>
    )
}
