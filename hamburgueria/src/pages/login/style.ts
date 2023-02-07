import styled from "styled-components";

export const Container = styled.main`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;

text-align: left;

width: 100%;
max-width: 370px;
height: 100vh;

margin: 0 auto;
padding: 32px 16px;
gap: 16px;

form{
    display: flex;
    flex-direction: column;
    
    padding: 16px;

    border: 2px solid var(--grey-0);
    box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
    border-radius: 5px;

    h3{
        color: var(--grey-1);
        font-weight: 700;
        margin-bottom: 16px;
    }

    input{
        border: .125rem solid var(--grey-1);
    }
    
    label{
        margin-bottom: 16px;
    }

    button{
        width: 100%;
        height: 50px;
    }

    label + button{
        margin-top: 8px;
    }

    button + p {
        color: var(--grey-50);
        text-align: center;
        
        margin: 16px 0;
    }

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        
        width: 100%;
        height: 50px;

        background-color: var(--grey-0);
        color: var(--grey-30);

        border: .125rem solid transparent;
        border-radius: .5rem;

        font-weight: 600;
        text-decoration: none;
    }

    a:hover {
        background-color: var(--grey-20);
    } 
}

@media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    max-width: 1023px;

    form{
        width: 50%;

       button + p{
        padding: 0 80px;
       }
    }

}
`