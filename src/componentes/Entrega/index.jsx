import styled from "styled-components";
import Titulos from "../Titulos";
import Textos from "../Textos";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
const ContainerEntrega = styled.div`
background-color: var(--amarelo);
border-radius: 20px;
padding: 2em;
display: grid;
align-items: center;
grid-template-columns: 1fr 1fr;
margin: 2em 0;
`
const ImagemEstilizada = styled.img`
height:100%;
background-color: #509afa;
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
    justify-content: flex-start;
    margin: 0;
    svg{
        font-size: 22px;
        color: #000000;
    }
`
const Container = styled.section`
padding: 5em 1em;
`


export default function Entrega() {

    return (
        <>
            <Container>
                <Titulos>Entregas</Titulos>
                <ContainerEntrega id="entregas">
                    <InfoEntregaEstilizada>
                        <Titulos>Levamos até você</Titulos>
                        <Textos>Descubra a diversidade deliciosa dos nossos produtos, diretamente da terra do queijo, irresistíveis que proporcionam uma experiência gastronômica única.</Textos>
                        <TextoInformativo>Entregamos na capital e na grande São Paulo <FaLocationDot /> </TextoInformativo>
                        <TextoInformativo> Horários:  Terça á Sábado: 08:00 às 18:00 <FaClock /> </TextoInformativo>
                    </InfoEntregaEstilizada>
                    <ContainerImagem>
                        <ImagemEstilizada src="./public/imagens/personagem.svg" />
                    </ContainerImagem>
                </ContainerEntrega>
            </Container>
        </>
    )
}