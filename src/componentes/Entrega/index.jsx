import styled from "styled-components";
import Titulos from "../Titulos";
import Textos from "../Textos";

const ContainerEntrega = styled.div`
background-color: var(--amarelo-claro);
border-radius: 20px;
padding: 0 2em 2em 2em;
display: grid;
align-items: center;
grid-template-columns: 1fr 1fr;
margin: 2em 0;
@media  (max-width: 768px) {
        display: flex;
        text-align: center;
        padding: 20px;
        flex-direction: column;
    }

@media  (min-width: 768px) {
        display: flex;
        padding: 20px;
        flex-direction: column;
    }

@media  (min-width: 1200px) {
        display: grid;
        padding: 50px;
    }
`
const ImagemEstilizada = styled.img`
    max-height: 400px;
    border-radius: 20px;
    filter: drop-shadow(2px 4px 6px black);

@media  (max-width: 768px) {

        padding: 0;
        width: 100%;
        margin: 1em 0;
    }

@media  (min-width: 768px) {
        display: none;
    }

@media  (min-width: 1200px) {
        display: flex;
    }
`

const InfoEntregaEstilizada = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
@media  (max-width: 768px) {
        text-align: center;
    }

`
const ContainerImagem = styled.div`
    display: flex;
    justify-content: flex-end;
`
const TextoInformativo = styled.p`
    font-size: 1.1rem;
    align-items: center;
    gap: 10px;
    text-align: justify;
    line-height: 1.5em;
    margin: 0;
    padding: 10px;
    @media  (max-width: 768px) {
        display: block;
        text-align: justify;
        flex-direction: column;
    }

`
const Container = styled.section`
    padding: 5em 1em;

`
const InfoEstilizada = styled.div`
    background: var(--amarelo);
    border-radius: 20px;
    padding: 5px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

`
const InfoPrioritaria = styled.b`
    margin: 0 5px;
    padding:0;
    color: var(--marrom);
    font-size: 1.2rem;
`

const TextoGrifado = styled.p`
    color: var(--amarelo-escuro);
    font-weight: bold;
`


export default function Entrega() {

    return (
        <>
            <Container>
                <ContainerEntrega id="entregas">
                    <InfoEntregaEstilizada>
                        <Titulos>Levamos até você</Titulos>
                        <Textos>Nosso carro de entregas está a caminho, trazendo consigo uma seleção preparada dos melhores sabores. Deixe-nos cuidar do transporte enquanto você aguarda ansiosamente para desfrutar de cada iguaria.</Textos>
                        <TextoInformativo><InfoPrioritaria>Locais de entrega:</InfoPrioritaria> <TextoGrifado>São Paulo, Cajamar, Santana de Parnaíba, Pirapora do bom Jesus e Carapicuíba.</TextoGrifado></TextoInformativo>
                        <InfoEstilizada>
                            <TextoInformativo><InfoPrioritaria>Horários: Segunda a Sexta:</InfoPrioritaria> 08h às 18h.<InfoPrioritaria>Sábados:</InfoPrioritaria> 10h às 16h.</TextoInformativo>
                        </InfoEstilizada>

                    </InfoEntregaEstilizada>
                    <ContainerImagem>
                        <ImagemEstilizada src="./imagens/galeria/carroEntrega2.png" />
                    </ContainerImagem>
                </ContainerEntrega>
            </Container>
        </>
    )
}   