import styled from "styled-components"
import Titulos from "../Titulos"
import Textos from "../Textos"

export default function Sobre() {

    const ContainerEstilizado = styled.section`
        margin: 4em 0;
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
    &:hover{
        transform: scale(1.1);
    }
`
    return (
        <>
            <ContainerEstilizado>
                <ContainerBannerPrincipal>
                    <ImagemBanner src="../imagens/galeria/bannerDoceBarra.jpeg" />
                </ContainerBannerPrincipal>
            </ContainerEstilizado>
            <Titulos>Sobre nós</Titulos>
            <Textos>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus omnis nisi, officia iusto at accusamus dignissimos doloremque error temporibus repellat! Possimus odio mollitia consequuntur, corrupti id in quisquam laudantium? Iusto?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel voluptates iusto dolores itaque in praesentium. Ex aut expedita quidem placeat obcaecati, est magni maxime, dolore laudantium accusamus explicabo itaque accusantium?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse harum expedita tenetur corporis aperiam sapiente maiores iste magni ipsa perspiciatis beatae, pariatur impedit veritatis excepturi laudantium? Ipsum nostrum dolore asperiores?
            </Textos>
        </>
    )
}