import styled from "styled-components";
const balls = require("../../assets/img/balls.png");

export const Div = styled.div`

img{
    width: 14.375rem;
    height: 2.1875rem;
}

p{
    font-weight: 500;
    
    color: var(--grey-50) ;
    span{
        font-weight: 700;
        color: #000;
    }
}

img + div{
    display: flex;
    align-items: center;
    
    margin-top: 1rem;
    padding: 1rem;
    gap: 1rem;

    border: .0625rem solid var(--grey-20);
    box-shadow: 0rem .25rem 2.5rem -1.25rem rgba(0, 0, 0, 0.25);
    border-radius: .3125rem;

    @media (min-width: 48rem) {
        max-width: 23.125rem;
    }


    svg{
        min-width: 3.75rem;
        height: 3.75rem;

        padding: 1.125rem;

        border-radius: .3125rem;
        background-color: rgba(39, 174, 96, 0.1);

        line,path{
            color: var(--color-primary);
        }
    }
}

@media (min-width: 48.125rem){
    position: absolute;
    right: 1rem;

    .balls{
        margin-top: 2rem;
        width: 11.375rem;
        height: 5rem;

        background-image: url(${balls});
    }  
}

`
