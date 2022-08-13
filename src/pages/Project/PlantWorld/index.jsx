import React, { useState } from "react";
import styled, { css } from "styled-components";
import { a, useSpring } from "react-spring";
import { useSpringCarousel } from "react-spring-carousel";
import { device } from "../../../constant";

function Carousel() {
  const [active, setActive] = useState(1);
  const List = [
    {
      id: 1,
      title: "Dracaena Trifasciata",
      image: "/assets/Images/4.png",
      desc: "One of the most effective houseplants in air purification.",
    },

    {
      id: 2,
      title: "Crassula Ovata",
      image: "/assets/Images/3.png",
      desc: "One of the most effective houseplants in air purification.",
    },
    {
      id: 3,
      title: "Browningia Hertlingiana",
      image: "/assets/Images/1.png",
      desc: "One of the most effective houseplants in air purification.",
    },
    {
      id: 4,
      title: "Haworthiopsis Attenuata ",
      image: "/assets/Images/5.png",
      desc: "One of the most effective houseplants in air purification.",
    },
    {
      id: 5,
      title: "Chlorophytum Comosum",
      image: "/assets/Images/2.png",
      desc: "One of the most effective houseplants in air purification.",
    },
    {
      id: 6,
      title: "Dracaena Trifasciata",
      image: "/assets/Images/4.png",
      desc: "One of the most effective houseplants in air purification.",
    },

    {
      id: 7,
      title: "Crassula Ovata",
      image: "/assets/Images/3.png",
      desc: "One of the most effective houseplants in air purification.",
    },
    {
      id: 8,
      title: "Browningia Hertlingiana",
      image: "/assets/Images/1.png",
      desc: "One of the most effective houseplants in air purification.",
    },
    {
      id: 9,
      title: "Haworthiopsis Attenuata ",
      image: "/assets/Images/5.png",
      desc: "One of the most effective houseplants in air purification.",
    },
  ];

  const {
    slideToPrevItem,
    slideToNextItem,
    carouselFragment,
    useListenToCustomEvent,
  } = useSpringCarousel({
    itemsPerSlide: 6,
    gutter: 30,
    withLoop: true,
    startEndGutter: 100,

    items: List.map((o) => ({
      id: o.id,
      renderItem: (
        <CardBoxWrapper isActive={o.id === active}>
          <BackgroundCard isActive={o.id === active} />
          <Image src={o.image} isActive={o.id === active} />
          <ItemText isActive={o.id === active}>
            <h3>{o.title}</h3>
            <div>{o.desc}</div>
          </ItemText>
        </CardBoxWrapper>
      ),
    })),
  });

  useListenToCustomEvent((event) => {
    if (event.eventName === "onSlideStartChange") {
      setActive(event.nextItem.index + 1);
    }
  });

  const onScrollHandler = (e) => {
    if (e.deltaY > 0) {
      slideToNextItem();
    } else {
      slideToPrevItem();
    }
  };

  return (
    <Container>
      <HeaderWrapper>
        <OptionWrapper>
          <Option>Home</Option>
          <Option>Plant Finder</Option>
          <Option>Product</Option>
          <Option>About Us</Option>
          <Option>Contacts</Option>
          <Option>My Plants</Option>
        </OptionWrapper>
      </HeaderWrapper>
      <FirstWrapper>
        <InnerWrapper>
          <Headtext>Go Green</Headtext>
          <TextWrapper>
            <BoldText>The world of plants</BoldText>
            <Text>
              Discover everything you need to know about your plants, treat them
              with kindness and they will take care of you.
            </Text>
          </TextWrapper>
          <Text>Our Favourite this week</Text>{" "}
        </InnerWrapper>
      </FirstWrapper>

      <SliderWrapper>
        <SliderContainer onWheel={onScrollHandler}>
          {carouselFragment}
        </SliderContainer>
      </SliderWrapper>
    </Container>
  );
}

export default Carousel;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #d9e5e4;
  overflow: hidden;
  
  /* @media ${device.forMobileOnly} {
    margin: 0;
    justify-content: flex-start;
    height: fit-content;
  }
  @media ${device.forTabletPortraitOnly} {
    margin: 0;
    justify-content: flex-start;
    height: fit-content;
  } */
`;

const wrapperCommon = css`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const innerWrapperCommon = css`
  width: 75%;
  height: 100%;
`;

const HeaderWrapper = styled.div`
  ${wrapperCommon}
  height: 60px;
`;

const OptionWrapper = styled.div`
  ${innerWrapperCommon}
  display: flex;
  align-items: center;
`;

const Option = styled.div`
  margin-right: 2rem;
  padding-right: 2rem;

  :hover {
    cursor: pointer;
    color: #5e9270;
  }
`;

const FirstWrapper = styled.div`
  ${wrapperCommon}
  padding-top: 6rem;
`;

const InnerWrapper = styled.div`
  ${innerWrapperCommon}
`;

const Headtext = styled.div`
  font-size: 25px;
  color: #5e9270;
`;

const TextWrapper = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  padding: 2rem 0;
  margin-bottom: 30px;
`;

const BoldText = styled.div`
  font-size: 60px;
  font-weight: 600;
  color: #1a2e35;
  width: 30%;
  margin-right: 40px;
  line-height: 80px;
`;

const Text = styled.div`
  width: 30%;
  padding: 10px;
  font-size: 16px;
`;

const SliderWrapper = styled.div`
  height: 350px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SliderContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const CardBoxWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  transform-origin: bottom;
  transform: ${({ isActive }) => (isActive ? "scale(1.2)" : "scale(0.9)")};
`;

const BackgroundCard = styled.div`
  background: #e8f0ef;
  height: 80%;
  width: 100%;
  position: absolute;
  bottom: 0;
  right: 0;

  border-radius: 15px;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

const Image = styled.img`
  width: 250px;
  height: auto;
  position: absolute;
  bottom: -10px;
  left: 0;
  transition: all 0.3s ease-in-out;
  transform-origin: bottom;
  transform: ${({ isActive }) =>
    isActive ? "scale(1.2) translateY(-40px)" : "scale(1) translateY(0px)"};
`;

const ItemText = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20%;
  display: flex;
  flex-direction: column;
  width: 80%;

  h3 {
    font-weight: 600;
    font-size: 18px;
  }

  div {
    display: ${({ isActive }) => (isActive ? "block" : "none")};
    font-size: 12px;
  }
`;
