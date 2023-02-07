import styled from "styled-components";

export const StyledHeader= styled.header`
display: flex;
align-items: center;

background-color: var(--grey-0);

width: 100%;
height: 5rem;

.container{
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 1rem;
    padding: 0 1rem;

    width: 100%;
    max-width: 87.5rem ;

    margin: 0 auto;
    position: relative;

    img {
        width: 9.375rem;
        height: 1.375rem;
    }

    form{
        display: flex;
        flex-direction: column;
        position: relative;
        
        position: absolute;
        top: -1.125rem;
        left: .375rem;
        z-index: 2;

        width: 98%;

        span{
            padding: 0;
        }

        button{
            position: absolute;
            top: .625rem;
            right: 1rem;

            max-width: 3.75rem;

            svg{
                width: 1.875rem;
                height: 1.875rem;
                color: var(--white);
            }
        }
    }   

    div{
       display: flex;
       align-items: center;

       gap: 1.25rem;
       
       svg{
            width: 1.5625rem;
            height: 1.5625rem;

            padding: 1px;

            color: var(--grey-30);
            cursor: pointer;
        }

        svg:hover{
            color: var(--color-primary);
        }

        .cart{
            position: relative;
            margin-right: .5rem;
            
            div{
                display: flex;
                justify-content: center;

                position: absolute;
                top: -0.8125rem;
                left: .9375rem;

                width: 1.25rem;
                height: 1.375rem;

                border-radius: .4375rem;
                background-color: var(--color-primary);
                
                color: var(--white);
                font-weight: 700;
            }
        }
    }

    @media (min-width: 768px) {
        form{
            position: sticky;
            width: 23.125rem;
        }

        >div{
            width: 100%;
            justify-content: flex-end;
        }
        }
}   

`