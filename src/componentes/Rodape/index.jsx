import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { FaCreditCard } from "react-icons/fa6";
import { PiMoneyFill } from "react-icons/pi";
import { FaPix } from "react-icons/fa6";




const RodapeEstilizado = styled.footer`
    background: var(--marrom);
    align-items: center;
    padding: 1.5em 1em;
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
    color: var(--amarelo-claro);
    font-weight: bold;

    svg{
        font-size: 22px;
    }
`
const DescricaoFooter = styled.div`
    color: var(--amarelo-claro);
    font-size: 1.1rem;
    gap: 20px;
    display: flex;
    flex-direction: column;
    text-align: center;
    line-height: 2rem;

    @media  (min-width: 768px) {
        padding: 1em 1em 0 1em;
        gap: 15px;
    }
`
const PagamentosContainer = styled.div`
    display: flex;
    text-align: center;
    justify-content: space-between;
    flex-direction: column;
    margin: 1.5em 0;

    @media  (min-width: 768px) {
        flex-direction: row;
        margin: 0;
        justify-content: center;
        align-items: center;
    }
`
const PagamentosIcones = styled.div`

@media  (min-width: 1200px) {
    svg{
        margin: 20px;
    }
    }

    svg{
        margin: 5px 10px;
        font-size: 22px;
        color: var(--amarelo)
    }
    
`
export default function Rodape() {
    return (
        <>
            <RodapeEstilizado id="contato">
                <Container >
                    <LogoFooter src="./imagens/galeria/logo.png" alt="logo" />
                    <DescricaoFooter>
                        <div>
                        <b>&copy; Venda do mineiro </b> - Baseado no Projeto <BotaoRedesLink href="https://www.marybin.com.br">Mary Bin</BotaoRedesLink>
                        </div>
                        <div>
                        <b>Funcionamento: </b> <b>Segunda a Sexta</b>: 08h às 18h. <b>Sábados</b>: 10h às 16h.
                        </div>
                        <PagamentosContainer>
                            <div>
                                <b>Pagamentos:</b>
                            </div>
                            <PagamentosIcones>
                            <FaCreditCard />
                            <PiMoneyFill />
                            <FaPix />
                            </PagamentosIcones>
                        </PagamentosContainer>
                    </DescricaoFooter>
                    <div>
                        <Span>Nossas redes</Span>
                        <ContainerRedes>
                            <BotaoRedesLink href="https://wa.me/5511987769633"><BlocoEstilizado>{<FaWhatsapp />}</BlocoEstilizado></BotaoRedesLink>
                            <BotaoRedesLink href="https://www.instagram.com/vendasdomineiro/"><BlocoEstilizado>{<FaInstagram />}</BlocoEstilizado></BotaoRedesLink>
                        </ContainerRedes>
                    </div>
                </Container>
            </RodapeEstilizado>
        </>
    )
}
