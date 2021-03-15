import { Link } from 'react-router-dom';
import styled from 'styled-components';

export function Navbar() {
  return (
    <Wrapper width="100vw" height="3.5rem">
      <Title>Countries</Title>
      <Item>
        <Link to="/">Home</Link>
      </Item>
      <Item>
        <Link to="/about">About</Link>
      </Item>
    </Wrapper>
  );
}

const Wrapper = styled.nav<{ width: string; height: string }>`
  width: ${(p) => p.width};
  height: ${(p) => p.height};
  display: flex;
  background-color: #f8f9fa;
  align-items: center;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
  color: ${(p) => p.theme.color.fontColor(0.9)};
`;

const Title = styled.p`
  opacity: 0.9;
  padding: 20px;
  font-size: 21px;
  font-weight: 700;
  font-style: italic;
`;

const Item = styled.li`
  list-style: none;
  padding: 10px;
  a {
    text-decoration: none;
    color: ${(p) => p.theme.color.fontColor(0.7)};
    transition: 0.3s;
  }

  a:hover {
    color: ${(p) => p.theme.color.fontColor(1)};
  }
`;

// const Search = styled.input`
//   margin: 0 0 0 10px;
//   width: 300px;
//   height: 30px;
//   background-color: ${(p) => p.theme.color.backgroundColor};
//   border-radius: 10px 0 0 10px;
//   border: 1px solid rgba(0, 0, 0, 0.15);
//   outline-style: none;
//   transition: 0.18s;

//   :focus {
//     /* border-radius: 10px 0 0 10px; */
//     border: 1px solid rgba(0, 0, 0, 0.5);
//   }
// `;
