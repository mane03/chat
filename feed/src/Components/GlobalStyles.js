import { createGlobalStyle} from "styled-components"


export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
  
  ::placeholder,
  .post__input {
    color: ${({ theme }) => theme.text};
  }
  
  .classes,
  .account,
  .suggested {
    background: ${({ theme }) => theme.blockColor};
  }
  
  .homework__list {
    background: ${({ theme }) => theme.homework};
  }
  
  .post,
  .posts{
    background: ${({ theme }) => theme.posts};
  }
  
  
`