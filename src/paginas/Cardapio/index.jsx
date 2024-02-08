import { Link, useParams } from "react-router-dom";
import videos from "./cardapio.json";
import Titulos from "../../componentes/Titulos";
import styled from "styled-components";
import Textos from "../../componentes/Textos";


const BotaoVoltar = styled.button`
    background: red;
    text-decoration: none;
    margin: 1em 0;
    
`
const ContainerCardapio = styled.section`
    max-width: 1440px;
    margin: 0 auto;
    padding: 3em 1em;
`
const ImagemBanner = styled.img`
    width: 100%;
    max-height: 20rem;
    border-radius: 20px;
    object-fit: cover;
`

export default function Cardapio() {
    const parametros = useParams();
    const video = videos.find((video) => video.id === Number(parametros.id));

    return (
        <>
        <ContainerCardapio>
        <BotaoVoltar><Link to={"/"}>Voltar</Link></BotaoVoltar>
            {video ? (
                <>
                    {video.itens.map((item) => (
                        <div key={item.categoria}>
                            <ImagemBanner src={item.banner}/>
                            <Titulos>{item.categoria}</Titulos>
                            <ul>
                                {item.subitens.map((subitem, index) => (
                                    <li key={index}>{subitem.nome}</li>
                                ))}
                            </ul>
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
