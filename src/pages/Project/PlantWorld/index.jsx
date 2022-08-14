import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { a, useSpring } from "react-spring";
import { useSpringCarousel } from "react-spring-carousel";
import { device } from "../../../constant";
import { Link } from "react-router-dom";

function Carousel() {
  const [active, setActive] = useState(1);
  const [noOfItem, setNoOfItem] = useState(6);

  const handleSize = (innerWidth) => {
    if (innerWidth < 599) {
      return setNoOfItem(3);
    }
    if (innerWidth < 899) {
      return setNoOfItem(3);
    }
    if (innerWidth < 1199) {
      return setNoOfItem(4);
    }
    return setNoOfItem(6);
  };

  useEffect(() => {
    handleSize(window.innerWidth);

    window.addEventListener("resize", (e) => handleSize(e.target.innerWidth));
    return () => {
      window.removeEventListener("resize", (e) =>
        handleSize(e.target.innerWidth)
      );
    };
  }, []);

  const List = [
    {
      id: 1,
      title: "Dracaena Trifasciata",
      image:
        "https://default-vessel.s3.ap-south-1.amazonaws.com/avagam-bucket/4.png",
      desc: "One of the most effective houseplants in air purification.",
    },
    {
      id: 2,
      title: "Crassula Ovata",
      image:
        "https://default-vessel.s3.ap-south-1.amazonaws.com/avagam-bucket/3.png",
      desc: "One of the most effective houseplants in air purification.",
    },
    {
      id: 3,
      title: "Browningia Hertlingiana",
      image:
        "https://default-vessel.s3.ap-south-1.amazonaws.com/avagam-bucket/1.png",
      desc: "One of the most effective houseplants in air purification.",
    },
    {
      id: 4,
      title: "Haworthiopsis Attenuata ",
      image:
        "https://default-vessel.s3.ap-south-1.amazonaws.com/avagam-bucket/5.png",
      desc: "One of the most effective houseplants in air purification.",
    },
    {
      id: 5,
      title: "Chlorophytum Comosum",
      image:
        "https://default-vessel.s3.ap-south-1.amazonaws.com/avagam-bucket/2.png",
      desc: "One of the most effective houseplants in air purification.",
    },
    {
      id: 6,
      title: "Dracaena Trifasciata",
      image:
        "https://default-vessel.s3.ap-south-1.amazonaws.com/avagam-bucket/4.png",
      desc: "One of the most effective houseplants in air purification.",
    },
    {
      id: 7,
      title: "Crassula Ovata",
      image:
        "https://default-vessel.s3.ap-south-1.amazonaws.com/avagam-bucket/3.png",
      desc: "One of the most effective houseplants in air purification.",
    },
    {
      id: 8,
      title: "Browningia Hertlingiana",
      image:
        "https://default-vessel.s3.ap-south-1.amazonaws.com/avagam-bucket/1.png",
      desc: "One of the most effective houseplants in air purification.",
    },
    {
      id: 9,
      title: "Haworthiopsis Attenuata ",
      image:
        "https://default-vessel.s3.ap-south-1.amazonaws.com/avagam-bucket/5.png",
      desc: "One of the most effective houseplants in air purification.",
    },
  ];

  const {
    slideToPrevItem,
    slideToNextItem,
    carouselFragment,
    useListenToCustomEvent,
  } = useSpringCarousel({
    itemsPerSlide: noOfItem,
    gutter: 30,
    withLoop: true,
    startEndGutter: 100,

    items: List.map((o) => ({
      id: o.id,
      renderItem: (
        <CardBoxWrapper isActive={o.id === active}>
          <BackgroundCard isActive={o.id === active} />
          <Image src={o.image} isActive={o.id === active} draggable={false} />
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
          <Link to="/">
            <Option>Go Back</Option>
          </Link>
        </OptionWrapper>
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

  @media ${device.forMobileOnly} {
    display: none;
  }
`;

const OptionWrapper = styled.div`
  ${innerWrapperCommon}
  display: flex;
  align-items: center;

  a {
    color: #1a2e35;
    text-decoration: none;
  }
`;

const Option = styled.div`
  margin: 1rem;
  padding: 1rem;
  color: #1a2e35;
  white-space: nowrap;
  :hover {
    cursor: pointer;
    color: #5e9270;
  }

  @media ${device.forTabletLandscapeOnly} {
    padding: 0.6rem;
  }

  @media ${device.forTabletPortraitOnly} {
    padding: 0rem;
    margin: 0.6rem;
  }
`;

const FirstWrapper = styled.div`
  ${wrapperCommon}
  padding-top: 6rem;

  @media ${device.forMobileOnly} {
    padding-top: 2rem;
    padding-bottom: 3rem;
  }

  @media ${device.forTabletPortraitOnly} {
    padding-top: 4rem;
    padding-bottom: 3rem;
  }

  @media ${device.forTabletLandscapeOnly} {
    padding: 2rem 0;
  }
`;

const InnerWrapper = styled.div`
  ${innerWrapperCommon}

  @media ${device.forMobileOnly} {
    width: 100%;
    padding: 0 10px;
  }

  @media ${device.forTabletPortraitOnly} {
    width: 60%;
    padding: 0 10px;

  }
  @media ${device.forTabletLandscapeOnly} {
    width: 60%;
    padding: 0 10px;
  }
  
`;

const Headtext = styled.div`
  font-size: 25px;
  color: #5e9270;

  @media ${device.forMobileOnly} {
    font-size: 20px;
  }
`;

const TextWrapper = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  padding: 2rem 0;
  margin-bottom: 30px;

  @media ${device.forMobileOnly} {
    margin-bottom: 0px;
    width: 100%;
    padding: 0rem 0px;
    flex-direction: column;
  }

  @media ${device.forTabletPortraitOnly} {
    width: 100%;
    padding: 0rem 0px;
    flex-direction: column;
  }

  @media ${device.forTabletLandscapeOnly} {
    margin-bottom: 0px;
    width: 100%;
    padding: 2rem 0px;
  }
`;

const BoldText = styled.div`
  font-size: 60px;
  font-weight: 600;
  color: #1a2e35;
  width: 30%;
  margin-right: 40px;
  line-height: 80px;

  @media ${device.forMobileOnly} {
    width: 100%;
    margin-right: 0px;
    font-size: 40px;
    line-height: 60px;
  }

  @media ${device.forTabletPortraitOnly} {
    width: 100%;
    margin-right: 0px;
    font-size: 40px;
    line-height: 60px;
  }

  @media ${device.forTabletLandscapeOnly} {
    margin-right: 0px;
    font-size: 40px;
    line-height: 50px;
  }
`;

const Text = styled.div`
  width: 30%;
  padding: 10px;
  font-size: 16px;

  @media ${device.forMobileOnly} {
    width: 100%;
    padding: 10px 0;
  }

  @media ${device.forTabletPortraitOnly} {
    width: 100%;
    padding: 10px 0;
  }

  @media ${device.forTabletLandscapeOnly} {
    width: 50%;
    padding: 10px 0;
  }
`;

const SliderWrapper = styled.div`
  height: 350px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.forMobileOnly} {
    height: fit-content;
    padding: 50px 0;
  }

  @media ${device.forTabletPortraitOnly} {
    margin-top: 1rem;
  }
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

  @media ${device.forMobileOnly} {
    width: 200px;
    height: 300px;
  }

  @media ${device.forTabletPortraitOnly} {
    width: 200px;
    height: 300px;
  }
`;

const BackgroundCard = styled.div`
  background: #e8f0ef;
  height: 80%;
  width: 100%;
  position: absolute;
  bottom: 0;
  right: 0;

  border-radius: 15px;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;

  @media ${device.forMobileOnly} {
    width: 100%;
    height: 70%;
  }

  @media ${device.forTabletPortraitOnly} {
    width: 100%;
    height: 70%;
  }
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
  user-select: none;
  @media ${device.forMobileOnly} {
    width: 180px;
    height: auto;

    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  @media ${device.forTabletPortraitOnly} {
    width: 220px;
    height: auto;
    left: 50%;
    bottom: 10%;
    transform: translate(-50%, 0%);
  }

  @media ${device.forTabletLandscapeOnly} {
    width: 250px;
    left: 50%;
    bottom: 10%;
    transform: translate(-50%, 0%);
  }
`;

const ItemText = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20%;
  display: flex;
  flex-direction: column;
  width: 80%;
  user-select: none;

  @media ${device.forMobileOnly} {
    bottom: 10%;
  }

  h3 {
    font-weight: 600;
    font-size: 18px;
    @media ${device.forMobileOnly} {
      font-size: 16px;
    }
  }

  div {
    display: ${({ isActive }) => (isActive ? "block" : "none")};
    font-size: 12px;

    @media ${device.forMobileOnly} {
      font-size: 10px;
    }
  }
`;
