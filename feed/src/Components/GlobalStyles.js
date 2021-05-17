import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
  
  ::placeholder,
  .post__input,
  .post__helpBtn,
  .comment__add,
  .link,
  .addHomework__input {
    color: ${({ theme }) => theme.text};
  }
  
  .link:hover {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
  }
  
  .classes,
  .account,
  .suggested,
  .homeworks {
    background: ${({ theme }) => theme.blockColor};
  }

  .comment__add{
    background: ${({ theme }) => theme.commentBg};
  }

  .homework__list,
  .homeworks__background,
  .addHomework__form {
    background: ${({ theme }) => theme.homework};
  }
  
  .smChat__single:hover {
    background: ${({ theme }) => theme.commentBg};
  }
  
  .smChat {
    background: ${({ theme }) => theme.smChat};
  }
  
  .post,
  .posts {
    background: ${({ theme }) => theme.posts};
  }
`;
