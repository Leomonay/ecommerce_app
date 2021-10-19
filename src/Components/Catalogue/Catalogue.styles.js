import styled from "styled-components";

export const Fondo = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;

    @media (max-width: 850px) {
        grid-template-columns: repeat(2, 1fr);
        max-width: 90%;
    }

    @media (max-width: 500px) {
        grid-template-columns: repeat(1, 1fr);
        max-width: 90%;
    }
`;

export const SidebarAndProductsContainer = styled.div`
    max-width: 90%;
    margin: 2rem auto;
    display: grid;
    grid-template-columns: 1fr 3.5fr;

    @media (max-width: 500px) {
        max-width: 97%;
        gap: 5%;
    }
`;
