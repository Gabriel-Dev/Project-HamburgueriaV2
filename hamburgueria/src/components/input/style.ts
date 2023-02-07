import styled from "styled-components";

export const Label = styled.label`
span{
    color: var(--grey-30);
    font-size: 12px;
    background-color: var(--white);

    position: relative;
    top: 8px;
    left: 8px;

    padding: 5px;
}

input{
    display: flex;
    align-items: center;
    padding: 1rem;

    height: 3.75rem;
    width: 100%;

    background-color: var(--white);

    border: .125rem solid var(--grey-20);
    border-radius: .5rem;

    font-size: 16px ;
    
    ::placeholder{
        color: var(--grey-20);
    }
}

.red{
    border: 2px solid var(--color-negative);
}

.green{
    border: 2px solid var(--color-primary);
}

`

