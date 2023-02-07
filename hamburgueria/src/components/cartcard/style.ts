import styled from "styled-components";

export const Li = styled.li`
display: flex;
align-items: center;

min-height: 80px;
max-height: 80px;
gap: 1rem;

position: relative;

span img {
    background-color: var(--grey-20);
    width: 4.375rem;
    height: 4.375rem;
}

span + span {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;

    height: 5rem;
    padding: 1rem 0;

    white-space: nowrap;
    overflow: hidden;
    width: 35%;
}

.counter {
    display: flex;
    flex-direction: column;

    width: 1rem;
    max-height: 3.375rem;
    gap: .125rem;

    background-color: var(--white);

    button{
        background-color: var(--grey-1);
        border: 1px solid transparent;
        color: var(--white);

        cursor: pointer;
    }
}



div + button{
    background-color: transparent;
    color: var(--grey-50);

    height: max-content;
    width: max-content;

    padding: 0;
    font-size: .75rem;

    position: absolute;
    top: .875rem;
    right: 0;
}

div + button:hover{
    background-color: transparent;
    color: var(--grey-1);
}
`