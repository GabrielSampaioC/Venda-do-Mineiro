import styled from "styled-components"
import Titulos from "../Titulos"
import Textos from "../Textos"

const ContainerEntrega = styled.div`
background-color: yellow;
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
const Icone = styled.img`
    width: 25px;
    margin: 5px 15px 0 15px;
`


export default function Entrega(){

    return(
        <>
        <Titulos>Entregas</Titulos>
        <ContainerEntrega id="entregas">
            <InfoEntregaEstilizada>
                <Titulos>Levamos até você</Titulos>
                <Textos>Descubra a diversidade deliciosa dos nossos produtos, diretamente da terra do queijo, irresistíveis que proporcionam uma experiência gastronômica única.</Textos>
                <Textos>Entregamos na capital e na grande São Paulo<Icone src="./public/imagens/LocationIcon.svg"/> </Textos>
                <Textos> Terça á Sábado: 08:00 às 18:00 <Icone src="./public/imagens/clock.svg"/> </Textos>
            </InfoEntregaEstilizada>
            <ContainerImagem>
                <ImagemEstilizada src="./public/imagens/personagem.svg"/>
            </ContainerImagem>
        </ContainerEntrega>
        </>
    )
}