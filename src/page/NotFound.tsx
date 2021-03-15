import styled from 'styled-components';

export function NotFound() {
  return <PageNotFound>404. Page Not Found</PageNotFound>;
}

const PageNotFound = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  color: ${(p) => p.theme.color.fontColor(0.8)};
`;
