import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function HomePage() {
  const List = [
    {
      id: 1,
      name: "Plant World",
      image:
        "https://default-vessel.s3.ap-south-1.amazonaws.com/avagam-bucket/plant-world.png",
      link: "plant-world",
    },
    {
      id: 2,
      name: "working...",
      image:
        "https://aakaar.s3.ap-south-1.amazonaws.com/textures/Default/default-image.jpg",
      link: "plant-world",
    },
  ];

  return (
    <MainWrapper>
      <Container>
        {List.map((o) => (
          <Link to={`/project/${o.link}`} key={o.id}>
            <CardBox key={o.id}>
              <Image src={o.image} />
              <Text>{o.name}</Text>
            </CardBox>
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

  a {
    color: black;
    text-decoration: none;
  }
`;

const CardBox = styled.div`
  background: #fff;
  padding: 0.4rem;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 6px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  display: flex;
  flex-direction: column;
  height: fit-content;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 3px;
`;

const Text = styled.div`
  width: 100%;
  font-size: 12px;
  text-decoration: none;
  margin-top: 10px;
`;
