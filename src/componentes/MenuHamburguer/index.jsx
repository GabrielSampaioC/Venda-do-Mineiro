import { IoCloseCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { useEffect, useRef } from "react";

const Container = styled.section`
    position: fixed;
    width: 60%;
    height: 100%;
    top:0;
    right:0;
    bottom: 0;
    z-index: 5;
    align-items: flex-start;
    justify-content: flex-end;
    background-color: var(--marrom);
    opacity: 0;
    pointer-events: none;
    transition: 0.5s ease-in-out;
    transform: translateX(50px);
    box-shadow: 1px 1px 1px 1px;

    svg{
        position: absolute;
        top: 1rem;
        right: 1rem;
        color: var(--amarelo-claro);
    }

    ${({isVisible}) => isVisible && css`
        opacity: 1;
        pointer-events: auto;
        transition: 0.5s ease-in-out;
        transform: translateX(0px);
        display: flex;
    `}
`;

const BlurOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(5px);
    z-index: 3;
`;

const ListaEstilizada = styled.nav`
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 6rem 0;
    gap: 30px;
    transform: scale(0.7);
    transition: transform 0.7s ease-in-out;
    justify-content: flex-end;
    align-items: flex-end;
    transform: scale(1.2);
    padding: 1em;

    ${({ isVisible }) => isVisible && css`
        transform: scale(1.2);
    `}
`;

const ItemEstilizado = styled(Link)`
    font-size: 1rem;
    font-weight: 400;
    color: var(--amarelo-claro);
    text-decoration: none;
    margin: 0;

`;
const BotaoEstilizado = styled(Link)`
    background-color: var(--amarelo-claro);
    border-radius: 40px;
    padding: 10px 15px;
    border: transparent;
    color: var(--marrom);
    font-weight: 600;
    text-decoration: none;
    font-size: 0.9rem;
    & :hover {
        cursor: pointer;
    }
`

const ListaItem = styled.li`
    margin: 0 10px;
`;

export default function MenuHamburguer({ menuIsVisible, setMenuIsVisible }) {
    const menuRef = useRef(null);

    useEffect(() => {
        document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
        
        
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuIsVisible(false);
            }
        }

        
        if (menuIsVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuIsVisible, setMenuIsVisible]);

    const handleMenuItemClick = () => {
        setMenuIsVisible(false);
    };

    const handleBlurOverlayClick = () => {
        setMenuIsVisible(false);
    };

    return (
        <>
            {menuIsVisible && <BlurOverlay onClick={handleBlurOverlayClick} />}
            <Container isVisible={menuIsVisible} ref={menuRef}>
                <IoCloseCircleOutline size={45} onClick={() => setMenuIsVisible(!menuIsVisible)} />
                <ListaEstilizada isVisible={menuIsVisible}>
                    <ListaItem>
                        <ItemEstilizado to="/#Inicio" onClick={handleMenuItemClick}>Início</ItemEstilizado>
                    </ListaItem>
                    <ListaItem>
                        <ItemEstilizado to="/#Sobre" onClick={handleMenuItemClick}>Sobre</ItemEstilizado>
                    </ListaItem>
                    <ListaItem>
                        <ItemEstilizado to="/#produtos" onClick={handleMenuItemClick}>Produtos</ItemEstilizado>
                    </ListaItem>
                    <ListaItem>
                        <BotaoEstilizado to="#contato" onClick={handleMenuItemClick}> Contato </BotaoEstilizado>
                    </ListaItem>
                </ListaEstilizada>
            </Container>
        </>
    );
}
