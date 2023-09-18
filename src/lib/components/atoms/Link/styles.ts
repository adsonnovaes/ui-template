import styled from 'styled-components';

export const Content = styled.div`
  a {
    color: #0089CC;
    text-decoration-color: #0089CC;

    font-family: 'Roboto',sans-serif;
    font-weight: 700;

    &:hover {
      opacity: 0.8;
    }

    a:link, 
    a:visited, 
    a:active{
      color: #0089CC;
    }
  }
`; 

// export const StyledLink = styled.a`
//   color: #0089CC;
//   text-decoration-color: #0089CC;

//   font-family: 'Roboto',sans-serif;
//   font-weight: 700;

//   &:hover {
//     opacity: 0.8;
//   }

//   a:link, 
//   a:visited, 
//   a:active{
//     color: #0089CC;
//   }
// `;