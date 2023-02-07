import styled from "styled-components";

export const Div = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content:space-between ;

height: max-content;
padding: 0 1rem 1rem 1rem;
gap: 1.25rem;

background-color: var(--grey-0);

span{
    width: 100%;
    height: .125rem;
    background-color: var(--grey-20);
}

div{
    display: flex;
    justify-content: space-between;

    width: 100%;
}

div p{
    color: var(--grey-50);
    font-weight: 600;
}

button{
    width: 100%;
    height: 3.75rem;

    background-color: var(--grey-20);
    color: var(--grey-50);
}

button:hover{
    background-color: var(--grey-20) ;
    color: var(--grey-1);
}
`