import { Link, useParams } from "react-router-dom";
import videos from "./cardapio.json";
import Titulos from "../../componentes/Titulos";
import styled from "styled-components";
import Textos from "../../componentes/Textos";
import { IoArrowBackCircleOutline } from "react-icons/io5";


const LinkEstilizado = styled(Link)`
    text-decoration: none;
    margin: 1em 0;
    color: black;
    font-size: 20px;
    text-align: center;
    padding: 5px;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    
`
const ContainerCardapio = styled.section`
    max-width: 1440px;
    margin: 0 auto;
    padding: 3em 1em;

`
const ContainerBanner = styled.div`
    overflow: hidden;
    border-radius: 20px;
`
const ImagemBanner = styled.img`
    width: 100%;
    max-height: 24rem;
    overflow: hidden;
    object-fit: cover;
    transition: transform 0.2s ease-in-out;
    &:hover{
        transform: scale(1.1);
    }
`
const ListaItensEstilizada = styled.ul`
    display: flex;
    background-color: var(--amarelo);
    border-radius: 20px;
    width: 100%;
    height: 10rem;
    justify-content: space-between;
    padding: 0;
    cursor: pointer;
     &:hover{
        background-color: red;
        & img {
        transform: scale(0.98);
        border: var(--amarelo) 2px solid;
        opacity: 1;
        border-radius: 30px;
    }
    }
`
const ListaDisplay = styled.ul`
    display: grid;
    justify-content: space-between;
    padding: 0;
    grid-template-columns: repeat(2,1fr);
    gap: 10px 20px;
`
const ImgItensEstilizada = styled.img`
    width: 10rem ;
    border-radius: 20px;
    object-fit: cover;
    opacity: 0.9;
    margin: 5px;
    border: var(--amarelo) 1px solid;
    transition: 0.5s ease-out;
    overflow: hidden;
`
const ListaItemTitulo = styled.h2`
    text-decoration:none;
    text-transform:uppercase;
`
const DescricaoEstilizada = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-left: 2em;

`
export default function Cardapio() {
    const parametros = useParams();
    const video = videos.find((video) => video.id === Number(parametros.id));

    return (
        <>
        <ContainerCardapio>
        <LinkEstilizado to={"/"}><IoArrowBackCircleOutline />Voltar</LinkEstilizado>
            {video ? (
                <>
                    {video.itens.map((item) => (
                        <div key={item.categoria}>
                            <ContainerBanner>
                            <ImagemBanner src={item.banner}/>
                            </ContainerBanner>
                            <Titulos>{item.categoria}</Titulos>
                            <ListaDisplay>
                                {item.subitens.map((subitem, index) => (
                                    <ListaItensEstilizada key={index}>
                                    <DescricaoEstilizada>
                                    <ListaItemTitulo key={index}><Textos>{subitem.nome}</Textos></ListaItemTitulo>
                                    <p>descricao do produto</p>
                                    </DescricaoEstilizada>
                                    <ImgItensEstilizada src={item.banner}/>
                                    </ListaItensEstilizada>
                                ))}
                            </ListaDisplay>
                        </div>
                    ))}
                </>
            ) : (
                <Textos>Vídeo não encontrado</Textos>
            )}
         </ContainerCardapio>
        </>
    );
}
