import React, { useState } from 'react';
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
    background: ${(props) => (props.ativo ? '#d5e005' : '#e0e0e0')};
`;

const BarraTags = styled.div`
    display: flex;
    margin: 1em 0;
`;

const Tags = () => {
    const [botaoAtivo, setBotaoAtivo] = useState(null);
    const AlterarBotaoAtivo = (index) =>
     { setBotaoAtivo(index) === botaoAtivo ? null : index;
    }

    return (
        <BarraTags>
            {tags.map((tag, index) => (
                <BotaoTags
                    key={tag.id}
                    onClick={() => AlterarBotaoAtivo(index) }
                    ativo={index === botaoAtivo}
                >
                    {tag.titulo}
                </BotaoTags>
            ))}
        </BarraTags>
    );
};

export default Tags;
