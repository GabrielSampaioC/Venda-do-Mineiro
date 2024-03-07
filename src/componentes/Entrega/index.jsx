import styled from "styled-components";
import Titulos from "../Titulos";
import Textos from "../Textos";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
const ContainerEntrega = styled.div`
background-color: var(--amarelo-claro);
border-radius: 20px;
padding: 2em;
display: grid;
align-items: center;
grid-template-columns: 1fr 1fr;
margin: 2em 0;
`
const ImagemEstilizada = styled.img`
height:100%;
border-radius: 20px;
`
const InfoEntregaEstilizada = styled.div`
display: flex;
flex-direction: column;
gap: 2em;
`
const ContainerImagem = styled.div`
    display: flex;
    text-align: center;
    justify-content: flex-end;
`
const TextoInformativo = styled.p`
    font-size: 14px;
    align-items: center;
    display: flex;
    gap: 10px;
    justify-content:space-between;
    margin: 0 2em;
    svg{
        font-size: 22px;
        color: #5f2e00;
    }
`
const Container = styled.section`
padding: 5em 1em;
`
const InfoEstilizada = styled.div`
    background: var(--amarelo);
    border-radius: 20px;
    padding: 15px;
    max-width: 20vw;
    color: #5f2e00;
`
const InfoPrioritaria = styled.b`
    margin: 0;
    padding:0;
`

export default function Entrega() {

    return (
        <>
            <Container>
                <ContainerEntrega id="entregas">
                    <InfoEntregaEstilizada>
                        <Titulos>Levamos até você</Titulos>
                        <Textos>Descubra a diversidade deliciosa dos nossos produtos, diretamente da terra do queijo, irresistíveis que proporcionam uma experiência gastronômica única.</Textos>
                        <InfoEstilizada>
                        <TextoInformativo>Entregas realizadas na Capital e Grande SP <FaLocationDot /> </TextoInformativo>
                        </InfoEstilizada>
                        <InfoEstilizada>
                        <TextoInformativo><InfoPrioritaria>De Terça á Sábado:</InfoPrioritaria> Das 08h às 18h <FaClock /> </TextoInformativo>
                        </InfoEstilizada>
                    </InfoEntregaEstilizada>
                    <ContainerImagem>
                        <ImagemEstilizada src="./public/imagens/personagem.svg" />
                    </ContainerImagem>
                </ContainerEntrega>
            </Container>
        </>
    )
}