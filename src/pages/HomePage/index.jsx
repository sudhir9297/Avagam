import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function HomePage() {
  const List = [
    {
      id: 1,
      name: "Plant World",
      image: "https://i.imgur.com/qkKy8.jpg",
      link: "plant-world",
    },
    {
      id: 2,
      name: "working",
      image: "https://i.imgur.com/qkKy8.jpg",
      link: "plant-world",
    },
  ];

  return (
    <MainWrapper>
      <Container>
        {List.map((o) => (
          <Link to={`/project/${o.link}`} key={o.id}>
            <CardBox key={o.id}>{o.name}</CardBox>
          </Link>
        ))}
      </Container>
    </MainWrapper>
  );
}

export default HomePage;

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  gap: 2.2rem;
  grid-auto-flow: dense;
  padding: 2rem;
`;

const CardBox = styled.div`
  background: #fff;
  padding: 2rem;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 6px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  /* box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px; */
`;
