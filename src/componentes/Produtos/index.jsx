import styled from "styled-components"
import Titulos from "../Titulos"
import Textos from "../Textos"
import BordaEstilizada from "../BarraEstilizada"

const ContainerProdutos = styled.section`
    padding: 2em 1em;
    display: flex;
    flex-direction: column;
    gap: 20px;
    
    @media (max-width:768px) {
        margin:0;
    }
`

export default function Produtos({children}) {
    return (
        <ContainerProdutos id="produtos">
            <div>
            <Titulos>
                Produtos
            </Titulos>
            <BordaEstilizada/>
            </div>
            <Textos>
            Explore nossa coleção diversificada e descubra o sabor único que torna cada item uma verdadeira joia culinária. É hora de embarcar em uma jornada de delícias e se apaixonar pela magia dos produtos que só Minas tem a oferecer.
            </Textos>
            {children}
        </ContainerProdutos>
    )
}