import styled from "styled-components";

const BotoesEstilizados = styled.button`
    padding: 15px 25px;
    border-radius: 10px;
    background: var(--marrom);
    cursor: pointer;
    align-items: center;
    display: flex;
    gap: 10px;
    border: transparent;
    color: var(--amarelo-claro);
    font-weight: bold;

    & svg{
        color: var(--amarelo);
    }
`;

const Link = styled.a`
    display: flex;
    text-decoration: none;
    box-sizing: border-box;
`;

export default function Botoes({ children }) {
    return (
        <>
            <Link href="Sobre">
                <BotoesEstilizados>
                    {children}
                </BotoesEstilizados>
            </Link>
        </>
    );
}
