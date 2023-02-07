import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`

* {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
}

:root {
    --white: #FFFFFF;
    --color-primary: #219653;
    --color-primary-50: #27AE60;
    --color-secondary: #EB5757;
    --grey-1: #333333;
    --grey-50: #828282;
    --grey-30: #999999;
    --grey-20: #E0E0E0;
    --grey-0: #F5F5F5;
    --color-negative: #e60000;
    --color-warning: #FFCD07;
    --color-sucess: #168821;
    --color-information: #155BCB;
}

body{
    font-family: 'Inter', sans-serif;
    font-size: .875rem;
    font-weight: 500;
}

ul{
    list-style: none;
}

button {
    font-family: 'Inter', sans-serif;
    cursor: pointer;
}

h1{
    font-size: 1.625rem;
}

h2{
    font-size: 1.375rem;
}

h3{
    font-size: 1.125rem;
}

h4{
    font-size: .875rem;
    font-weight: 700;
}

small{
    font-size: .75rem;
    color: var(--grey-50);
}

.error{
    position: relative;
    top: -0.5rem;
    left: .25rem;

    font-size: .75rem;
    color: var(--color-negative);
}

`