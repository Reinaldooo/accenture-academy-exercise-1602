import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;
    &:hover {
      color: #666;
    }
    svg {
      margin-right: 0.5rem;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  margin: 5rem auto;
  align-items: center;
  color: #889;

  & > div {
    margin-left: 3rem;

    h1 {
      margin-bottom: 1rem;
    }

    p + p {
      margin-top: 1.5rem;
      display: flex;
      align-items: center;

      svg {
        margin-right: 0.5rem;
      }
    }
  }

  img {
    height: 10rem;
    border-radius: 50%;
  }
`;
