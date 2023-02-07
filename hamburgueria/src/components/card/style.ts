import styled from "styled-components";

export const Li = styled.li`
display: flex;
flex-direction: column;

gap: 1rem;

min-width: 18.75rem;
height: 21.625rem;

border: .125rem solid var(--grey-20);
overflow: hidden;

text-align: left;

:hover{
    box-shadow: 0rem .25rem 2.625rem -0.75rem rgba(0, 0, 0, 0.25);
    
    span{
        background-color: white;
    }
}

span{
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 18.75rem;
    height: 9.375rem;

    background-color: var(--grey-0);

    overflow: hidden;
    margin-bottom: .625rem;
}

span img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}

div{
    display: flex;
    flex-direction: column;

    gap: 1rem;
    padding: 0 1rem;
}

div p {
    font-size: .875rem;
    color: var(--color-primary);
    font-weight: 600;
}
`