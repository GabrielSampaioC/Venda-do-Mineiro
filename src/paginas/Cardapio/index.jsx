import { Link, useParams } from "react-router-dom";
import videos from "./cardapio.json";
import Titulos from "../../componentes/Titulos";
import styled from "styled-components";

const BotaoVoltar = styled.button`
    background: red;
    text-decoration: none;
    
`

export default function Cardapio() {
    const parametros = useParams();
    const video = videos.find((video) => video.id === Number(parametros.id));

    return (
        <>
            {video ? (
                <>
                    <BotaoVoltar><Link to={"/"}>Voltar</Link></BotaoVoltar>
                    <Titulos>{video.titulo}</Titulos>
                    {video.itens.map((item) => (
                        <div key={item.categoria}>
                            <img alt={item.banner}></img>
                            <h2>{item.categoria}</h2>
                            <ul>
                                {item.subitens.map((subitem, index) => (
                                    <li key={index}>{subitem.nome}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </>
            ) : (
                <p>Vídeo não encontrado</p>
            )}
        </>
    );
}
