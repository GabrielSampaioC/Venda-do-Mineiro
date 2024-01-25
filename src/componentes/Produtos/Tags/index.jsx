import styled from "styled-components";
import tags from "./tags.json"

const BotaoTags = styled.button`
     border-radius: 20px;
     margin: 0 5px;
     padding: 10px 20px;
     
`
const BarraTags = styled.div`
    display: flex;

`
const Tags = ()=> {
    return(
        <>
        <BarraTags>
        {tags.map( tag => <BotaoTags key={tag.id}>{tag.titulo}</BotaoTags>)}
        </BarraTags>
        </>
    )
}

export default Tags;