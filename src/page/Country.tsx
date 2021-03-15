import { Card } from '../component/Card';
import React, { useState } from 'react';
import { gql, useLazyQuery } from '@apollo/client';
import { InputGroup, Input, Icon } from 'rsuite';
import styled from 'styled-components';
import { List, Loader } from 'rsuite';

type Countries = {
  name: string;
  capital: string;
  population: number;
  flag: {
    svgFile: string;
  };
  officialLanguages: [
    {
      name: string;
    }
  ];
  currencies: [
    {
      name: string;
      code: string;
      symbol: string;
    }
  ];
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
      population
      flag {
        svgFile
      }
      officialLanguages {
        name
      }
      currencies {
        name
        code
        symbol
      }
    }
  }
`;

export function Country() {
  const [search, setSearch] = useState<string>('');

  const [getCountry, { loading, data, error }] = useLazyQuery(GET_COUNTRY);
  function handleChange(val: string) {
    setSearch(val);
  }

  function toTitleCase(str: string) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
  function handleEnter() {
    getCountry({
      variables: {
        name: toTitleCase(search),
      },
    });
  }
  // if (loading) return <h1>Loading...</h1>;
  // if (error) return <h1>Error...{error.message}</h1>;
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
      {loading && <Loader center={true} content="Loading..." />}
      {error && <Loading>Error...{error.message}</Loading>}
      {data &&
        data.Country.map((val: Countries, index: number) => {
          return (
            <Card key={index} cardWidth="450px">
              <Image src={val.flag.svgFile}></Image>
              <Content>
                <List bordered>
                  <List.Item>Country Name : {val.name}</List.Item>
                  <List.Item>Capital : {val.capital}</List.Item>
                  <List.Item>Population : {val.population}</List.Item>
                  <List.Item>
                    Language : {val.officialLanguages[index].name}
                  </List.Item>
                  <List.Item>
                    Currencies : {val.currencies[index].name}
                  </List.Item>
                  <List.Item>Code : {val.currencies[index].code}</List.Item>
                  <List.Item>Symbol : {val.currencies[index].symbol}</List.Item>
                </List>
              </Content>
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

export const Image = styled.img`
  width: 150px;
  height: 150px;
  margin: 20px 0 20px 20px;
  @media only screen and (max-width: 695px) {
    margin: 0 10px;
  }
`;

const Content = styled.div`
  padding: 20px;
  @media only screen and (max-width: 695px) {
    padding: 0 10px 10px 10px;
  }
`;

const Loading = styled.p`
  text-align: center;
`;
