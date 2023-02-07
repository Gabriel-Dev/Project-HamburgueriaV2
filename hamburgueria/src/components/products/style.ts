import styled from "styled-components";

export const Section = styled.section`
ul{
    display: flex;
    flex-wrap: nowrap;
    align-items: center;

    width: 100%;
    gap: 1rem;

    overflow: auto;
}

h1{
    text-align: left;
    padding: 1rem 0;
    margin-bottom: 1rem;
}

h1 span{
    color: var(--grey-50);
}

h2{
    width: 100%;
    padding: 2rem;

    font-size: 18px;
    text-align: center;

    background-color: var(--grey-0);
    color: var(--grey-50)
}

@media (min-width: 768px) {
  ul{
    flex-wrap: wrap;
  }
}

`