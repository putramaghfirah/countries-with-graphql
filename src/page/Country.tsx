import { Card } from '../component/Card';
import React, { useState } from 'react';
import { gql, useLazyQuery } from '@apollo/client';
import { InputGroup, Input, Icon } from 'rsuite';
import styled from 'styled-components';
import { List } from 'rsuite';

type Countries = {
  name: string;
  capital: string;
};

const styles = {
  width: 300,
  marginLeft: '10px',
};

const GET_COUNTRY = gql`
  query GetCountry($name: String!) {
    Country(name: $name) {
      name
      capital
    }
  }
`;

export function Country() {
  const [search, setSearch] = useState<string>('');

  const [getCountry, { loading, data, error }] = useLazyQuery(GET_COUNTRY);
  function handleChange(val: string) {
    setSearch(val);
  }

  function handleEnter() {
    getCountry({
      variables: {
        name: search,
      },
    });
  }
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error...{error.message}</h1>;
  return (
    <React.Fragment>
      <Wrapper>
        <InputGroup style={styles}>
          <Input
            placeholder="Ex: Indonesia"
            onPressEnter={handleEnter}
            onChange={handleChange}
          />
          <InputGroup.Addon>
            <Icon icon="search" />
          </InputGroup.Addon>
        </InputGroup>
      </Wrapper>
      {data &&
        data.Country.map((val: Countries) => {
          return (
            <Card cardWidth="300px">
              <List bordered>
                <List.Item>Country Name : {val.name}</List.Item>
                <List.Item>Capital : {val.capital}</List.Item>
              </List>
            </Card>
          );
        })}
    </React.Fragment>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;
