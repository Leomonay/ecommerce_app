import styled from "styled-components";

export const Fondo = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
`;

export const SidebarAndProductsContainer = styled.div`
    max-width: 1200px;
    margin: 2rem auto;
    display: grid;
    grid-template-columns: 1fr 3.5fr;
`;
