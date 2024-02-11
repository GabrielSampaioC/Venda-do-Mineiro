import styled from "styled-components";

const BotoesEstilizados = styled.button`
    padding: 15px;
    border-radius: 10px;
    background: var(--amarelo);
    cursor: pointer;
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
