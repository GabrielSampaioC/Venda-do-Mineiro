import styled from "styled-components"
import Titulos from "../Titulos"
import Textos from "../Textos"
import BordaEstilizada from "../BarraEstilizada"

const ContainerEstilizado = styled.section`
margin: 2em 0;
padding: 1rem;

@media  (max-width: 768px) {
    padding: 1rem;
}
`

const ContainerBannerPrincipal = styled.div`
overflow: hidden;
border-radius: 20px;
`
const ImagemBanner = styled.img`
width: 100%;
max-height: 24rem;
overflow: hidden;
object-fit: cover;
transition: transform 0.2s ease-in-out;
@media  (max-width: 768px) {
    max-height: 7rem;
    margin: 1em 0;
    border-radius: 20px;
}
&:hover{
transform: scale(1.1);
}
`

export default function Sobre() {


    return (
        <>
            <ContainerEstilizado id="Sobre">
                <ContainerBannerPrincipal>
                    <ImagemBanner src="../imagens/galeria/bannerDoceBarra.jpeg" />
                </ContainerBannerPrincipal>

            <Titulos>Sobre nós</Titulos>
            <BordaEstilizada/>
            <Textos>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus omnis nisi, officia iusto at accusamus dignissimos doloremque error temporibus repellat! Possimus odio mollitia consequuntur, corrupti id in quisquam laudantium? Iusto?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel voluptates iusto dolores itaque in praesentium. Ex aut expedita quidem placeat obcaecati, est magni maxime, dolore laudantium accusamus explicabo itaque accusantium?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse harum expedita tenetur corporis aperiam sapiente maiores iste magni ipsa perspiciatis beatae, pariatur impedit veritatis excepturi laudantium? Ipsum nostrum dolore asperiores?
            </Textos>
            </ContainerEstilizado>
        </>
    )
}