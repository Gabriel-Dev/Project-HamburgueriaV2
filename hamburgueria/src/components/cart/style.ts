import styled from "styled-components";

export const Background = styled.div`
width: 100%;
height: 100vh;

position: fixed;
top: 0;
left: 0;

display: flex;
align-items: center;
justify-content: center;

background-color: #00000045;

.modal{
    width: 100%;
    max-width: 390px;
    height: max-content;

    border-radius: .3125rem;
    overflow: hidden;
    margin: 0 1rem;

    animation: open 0.7s ;
    
    @keyframes open {
        0%{
            transform: translateY(-400px);
            opacity: 0.2;
        }
        100%{
            transform: translateY(0);
            opacity: 1;
        }
    }

>span{
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: var(--color-primary);
    color: var(--white);

    height: 4.0625rem;

    padding: 0 1rem;

    svg{
        width: 1.375rem;
        height: 1.375rem;

        cursor: pointer;
    }
}

    ul{
        display: flex;
        flex-direction: column;

        height: max-content;
        max-height: 19.375rem;

        background-color: var(--grey-0);
        
        overflow: auto;
        padding: 1rem;
        gap: 1rem;

    .empty{
        display: flex;
        flex-direction: column;
        justify-content: center;

        height: 9.875rem;
        gap: 1rem;

        background-color: var(--grey-0);
        border-radius: 0rem 0rem .3125rem .3125rem;

        h3{
            color: var(--grey-1);
        }
        small{
            font-size: .875rem;
        }
    }
}

}

`