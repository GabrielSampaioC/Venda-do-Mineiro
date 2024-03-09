import styled from "styled-components";
import Titulos from "../Titulos";
import Textos from "../Textos";

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
max-height: 350px;
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
    gap: 10px;
    text-align: left;
    line-height: 1.5em;
    margin: 0;
    padding: 10px;

`
const Container = styled.section`
    padding: 5em 1em;
`
const InfoEstilizada = styled.div`
    background: var(--amarelo);
    border-radius: 30px;
    padding: 10px 0;
    display: flex;
    justify-content: center;
`
const InfoPrioritaria = styled.b`
    margin: 0;
    padding:0;
    color: var(--marrom);
    font-size: 1rem;
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
                            <TextoInformativo><InfoPrioritaria>Local de entrega:</InfoPrioritaria> São Paulo, Cajamar, Santana de Parnaíba, Pirapora do bom Jesus e Carapicuíba.</TextoInformativo>
                        </InfoEstilizada>

                        <TextoInformativo><InfoPrioritaria>Terça a Sábado:</InfoPrioritaria> Das 08h às 18h.</TextoInformativo>
                    </InfoEntregaEstilizada>
                    <ContainerImagem>
                        <ImagemEstilizada src="./public/imagens/galeria/mapa.png" />
                    </ContainerImagem>
                </ContainerEntrega>
            </Container>
        </>
    )
}