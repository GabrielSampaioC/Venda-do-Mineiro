import styled from "styled-components"
import Titulos from "../Titulos"
import Textos from "../Textos"

const ContainerProdutos = styled.section`
    padding: 5em 1em;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export default function Produtos({children}) {
    return (
        <ContainerProdutos id="produtos">
            <Titulos>
                Produtos
            </Titulos>
            <Textos>
                Venha descobrir a magia além dos nossos derivados de tradição mineira, explore a variedade e o sabor único de todos os nossos produtos.
            </Textos>
            {children}
        </ContainerProdutos>
    )
}