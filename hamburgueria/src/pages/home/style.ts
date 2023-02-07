import styled from "styled-components";

export const Main = styled.main`
display: flex;
flex-direction: column;

width: 100%;
max-width: 87.5rem;

margin: 0 auto;
padding: 1rem;
gap: 2rem;

@media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
    
    section{
        width: 100%;
    }

    ul{
        justify-content: center;
        gap: 3.75rem;
    }
}

`