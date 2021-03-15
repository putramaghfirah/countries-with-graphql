import { ReactNode } from 'react';
import styled from 'styled-components';

export function Card({
  cardWidth,
  cardHeight,
  children,
}: {
  cardWidth?: string;
  cardHeight?: string;
  children: ReactNode;
}) {
  return (
    <Container width={cardWidth} heigth={cardHeight}>
      {children}
    </Container>
  );
}

const Container = styled.div<{ width?: string; heigth?: string }>`
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  transition: 0.3s;
  color: ${(p) => p.theme.color.fontColor(1)};
  :hover {
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
    outline-style: none;
    outline: none;
    border: none;
  }
  display: flex;
  @media only screen and (min-width: 700px) {
    width: ${(p) => p.width};
    height: ${(p) => p.heigth};
    margin: 20px auto;
  }
  @media only screen and (max-width: 695px) {
    margin: 20px;
    display: block;
    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;
