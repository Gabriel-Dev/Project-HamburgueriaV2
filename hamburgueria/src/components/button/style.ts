import styled from "styled-components";

export const StyledButton = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0rem 1.25rem;
gap: .625rem;

width: 6.6875rem;
height: 2.5rem;

background-color: var(--color-primary);
color: var(--white);

border: .125rem solid transparent;
border-radius: .5rem;

font-weight: 600;

:hover{
    background-color: var(--color-primary-50);
}
`