import { useParams } from "react-router-dom";
import cardapios from "./cardapio.json";
import Titulos from "../../componentes/Titulos";
import styled from "styled-components";
import Textos from "../../componentes/Textos";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import BordaEstilizada from "../../componentes/BarraEstilizada"; 

const LinkEstilizado = styled.a`
    text-decoration: none;
    margin-top: 3em;
    color: var(--marrom);
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    padding: 5px;
    display: inline-flex;
    align-items: center;
    gap: 10px;
`;

const ContainerCardapio = styled.section`
    max-width: 1440px;
    margin: 0 auto;
    padding: 3em 1em;
`;

const ContainerBanner = styled.div`
    overflow: hidden;
    border-radius: 20px;
    margin: 3em 0;
    @media  (max-width: 768px) {
        display: none;
    }
`;

const ImagemBanner = styled.img`
    width: 100%;
    max-height: 24rem;
    overflow: hidden;
    object-fit: cover;
    transition: transform 0.2s ease-in-out;
    @media  (max-width: 768px) {
        display: none;
    }
    &:hover{
        transform: scale(1.1);
    }
`;

const ListaItensEstilizada = styled.ul`
    display: flex;
    background-color: var(--amarelo-claro);
    border-radius: 30px;
    height: 10rem;
    justify-content: space-between;
    padding: 10px 0;
    cursor: pointer;
    transition: transform ease-in-out 0.5s;

    @media  (max-width: 768px) {
        display: flex;
        text-align: center;
        flex-direction: column;
        height: 100%;
        width: 100%;
    }
     &:hover{
        transition: 0.5s;
        background-color:#dfd19a;
        & img {
        border: var(--amarelo) 2px solid;
        opacity: 1;
        border-radius: 35px;
        transform: scale(1.02);
    }
    }
`;

const ListaDisplay = styled.ul`
    display: grid;
    justify-content: space-between;
    padding: 0;
    grid-template-columns: repeat(2,1fr);
    gap: 10px 20px;
    margin: 2em 0;

    @media  (max-width: 768px) {
        display: flex;
        text-align: center;
        flex-direction: column;
    }
    @media  (min-width: 768px) {
        display: flex;
        flex-direction: column;
    }
    @media  (min-width: 1200px) {
        display: grid;
        grid-template-columns: repeat(2,1fr);
    }
`;

const ImgItensEstilizada = styled.img`
    width: 10rem ;
    border-radius: 20px;
    object-fit: cover;
    opacity: 0.95;
    margin: 5px;
    border: transparent 2px solid;
    transition: 0.4s ease-out;
    overflow: hidden;
    @media  (max-width: 768px) {
        width: calc(100% - 40px);
        height: 200px;
        align-self: center;
        margin-bottom: 10px;
    }
`;

const TextoEstilizado = styled.p`
    color: var(--marrom);
    padding: 10px 0;
    margin: 0;
    text-align: justify;
    font-size: 12px;

`
const ListaItemTitulo = styled.h2`
    text-decoration:none;
    text-transform:uppercase;
    font-weight: bold;
    font-size: 1.3rem;
    color: var(--marrom);
`;

const DescricaoEstilizada = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-left: 2em;
    width: 65%;
    float: left;
    flex-wrap: wrap;
    @media  (max-width: 768px) {
        margin: 10px;
    }
`;

const ContainerEstilizado = styled.div`
    margin: 10px 0;
`;

export default function Cardapio() {
    const parametros = useParams();
    const cardapio = cardapios.find((cardapio) => cardapio.id === Number(parametros.id));

    return (
        <>
        <ContainerCardapio>
        <LinkEstilizado href="/#produtos"><IoArrowBackCircleOutline />Voltar</LinkEstilizado>
            {cardapio ? (
                <>
                    {cardapio.itens.map((item) => (
                        <ContainerEstilizado key={item.categoria}>
                            <ContainerBanner>
                            <ImagemBanner src={item.banner}/>
                            </ContainerBanner>
                            <Titulos>{item.categoria}</Titulos>
                            <BordaEstilizada/>
                            <ListaDisplay>
                                {item.subitens.map((subitem, index) => (
                                    <ListaItensEstilizada key={index}>
                                    <DescricaoEstilizada>
                                    <ListaItemTitulo key={index}>{subitem.nome}</ListaItemTitulo>
                                    <TextoEstilizado>{subitem.descricao}</TextoEstilizado>
                                    </DescricaoEstilizada>
                                    <ImgItensEstilizada src={subitem.foto}/>
                                    </ListaItensEstilizada>
                                ))}
                            </ListaDisplay>
                        </ContainerEstilizado>
                    ))}
                </>
            ) : (
                <Textos>Vídeo não encontrado</Textos>
            )}
         </ContainerCardapio>
        </>
    );
}
