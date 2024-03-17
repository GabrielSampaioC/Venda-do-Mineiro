import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const RodapeEstilizado = styled.footer`
    background: var(--marrom);
    align-items: center;
    padding: 1.5em 0;
    border-radius: 10px 10px 0px 0px;

`
const ContainerRedes = styled.div`
    display: inline-flex;
    padding: 20px;
`
const Span = styled.span`
    display: flex;
    justify-content: center;
    color: var(--amarelo-claro);
    font-weight: bold;
    font-size: 1.1rem;
 `

const BlocoEstilizado = styled.div`
    background-color: var(--amarelo);
    border-radius: 5px;
    padding: 10px;
    margin: 0 10px;
    color: var(--marrom);
    font-weight: bold;
`

const Container = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @media  (max-width: 768px) {
        flex-direction: column;
        margin: 0;
        text-align: center;
        gap: 2.5rem;
    }
`
const LogoFooter = styled.img`
    width: 100px;
`
const BotaoRedesLink = styled.a`
    text-decoration: none;

    svg{
        font-size: 22px;
    }
`
const DescricaoFooter = styled.p`
    color: var(--amarelo-claro);
    font-size: 1.2rem;
`
export default function Rodape() {



    return (
        <>
            <RodapeEstilizado>
                <Container >
                <LogoFooter src="./public/imagens/galeria/logo.svg" alt="logo" />
                <DescricaoFooter> <b>&copy; Venda do mineiro </b> - Todos os direitos reservados</DescricaoFooter>
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
