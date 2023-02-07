import styled from "styled-components";

export const Container = styled.main`
display: flex;
flex-direction: column;
justify-content: center;

margin: 0 auto ;
text-align: left;

width: 100%;
max-width: 370px;
height: 100vh;

padding: 16px;
gap: 16px;

form{
    display: flex;
    flex-direction: column;

    padding: 2rem 1rem;

    border: .125rem solid var(--grey-0);
    box-shadow: 0rem 0rem 1.875rem -1.25rem rgba(0, 0, 0, 0.25);
    border-radius: .3125rem;
    
    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1rem;

        h3{
            color: var(--grey-1);
            font-weight: 700;
        }

        a{
            color: var(--grey-50);
            font-size: .875rem;
        }
        a:hover{
            color: var(--grey-1)
        }
    }

    input{
        border: .125rem solid var(--grey-1);
    }

    label{
        margin-bottom: 1rem;
    }

    button{
        width: 100%;
        height: 3.125rem;

        background-color: var(--grey-0);
        color: var(--grey-50);
    }

    button:hover {
        background-color: var(--grey-20);
    }
  
}

@media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    max-width: 1023px;

    >div{
        position: relative;
        left: 1rem;
    }

    form{
        width: 50%;
        margin-left: 100px;
    }
}

`