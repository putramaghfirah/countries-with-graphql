import React from 'react';
import styled from 'styled-components';

export function Card({
  cardWidth,
  cardHeight,
  children,
}: {
  cardWidth?: string;
  cardHeight?: string;
  children: React.ReactNode;
}) {
  return (
    <Container width={cardWidth} heigth={cardHeight}>
      {children}
    </Container>
  );
}

const Container = styled.div<{ width?: string; heigth?: string }>`
  margin: auto;
  width: ${(p) => p.width};
  text-align: center;
  height: ${(p) => p.heigth};
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  transition: 0.1s;
  color: ${(p) => p.theme.color.fontColor(1)};
  :hover {
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
    border: none;
  }
`;
