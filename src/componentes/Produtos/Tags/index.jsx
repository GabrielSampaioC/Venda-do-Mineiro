import React, { useState } from 'react'; // Adicionando importação do useState
import styled from 'styled-components';
import tags from './tags.json';

const BotaoTags = styled.button`
    border-radius: 20px;
    margin: 0 5px;
    padding: 10px 20px;
    border: 1px solid yellow;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
    background: ${(props) => (props.$ativo ? '#e0c605' : '#ffffff')};
    color: ${(props)=> (props.$ativo ? '#ffffff' : '#e0c605' )};
`;

const BarraTags = styled.div`
    display: flex;
    margin: 1em 0;
`;

const Tags = ({ setTag }) => {

    const [botaoAtivo, setBotaoAtivo] = useState(null);
    const AlterarBotaoAtivo = (index) => {
        setBotaoAtivo(index === botaoAtivo ? index : index);
    };

    return (
        <BarraTags>
            {tags.map((tag, index) => (
                <BotaoTags key={tag.id}
                    onClick={() => {
                        setTag(tag.tag);
                        AlterarBotaoAtivo(index);
                    }}
                    $ativo={index === botaoAtivo}>
                    {tag.titulo}
                </BotaoTags>
            ))}
        </BarraTags>
    );
};

export default Tags;
