import { Col, Row } from "antd";
import Image from "next/image";
import Text from "./utils/text";
import Container from "./utils/container";
import styled from "styled-components";
import { FaHamburger, FaBirthdayCake } from "react-icons/fa";
import { BiDrink } from "react-icons/bi";
import { GiFrenchFries } from "react-icons/gi";
import FlexDiv from "./utils/flex-div";

const HomeStyles = styled.div`
  margin: 20px;
`;
const StyledMainCardRight = styled(FlexDiv)`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  width: 250px;
  height: 300px;
  background-color: #eceae9;
  margin: 10px;
  border-radius: 10px;
`;
const StyledMainCardLeft = styled(FlexDiv)`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  width: 250px;
  height: 180px;
  background-color: #eceae9;
  margin: 10px;
  border-radius: 10px;
`;
const StyledCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default function HomePage() {
  return (
    <HomeStyles>
      <Container>
        <FlexDiv justifyContent="center" alignItems="center" gap={20}>
          <FlexDiv
            justifyContent="center"
            alignItems="center"
            direction="column"
          >
            <StyledMainCardLeft>
              <StyledCard>
                <FaHamburger style={{ fontSize: "28px" }} />
              </StyledCard>
              <Text bold="bold" size={20}>
                Food
              </Text>
            </StyledMainCardLeft>
            <StyledMainCardRight>
              <StyledCard>
                <FaHamburger style={{ fontSize: "28px" }} />
              </StyledCard>
              <Text bold="bold" size={20}>
                Food
              </Text>
            </StyledMainCardRight>
          </FlexDiv>
          <FlexDiv
            justifyContent="center"
            alignItems="center"
            direction="column"
          >
            <StyledMainCardRight>
              <StyledCard>
                <FaHamburger style={{ fontSize: "28px" }} />
              </StyledCard>
              <Text bold="bold" size={20}>
                Food
              </Text>
            </StyledMainCardRight>
            <StyledMainCardLeft>
              <StyledCard>
                <FaHamburger style={{ fontSize: "28px" }} />
              </StyledCard>
              <Text bold="bold" size={20}>
                Food
              </Text>
            </StyledMainCardLeft>
          </FlexDiv>
        </FlexDiv>
        {/* <FlexDiv justifyContent="center" gap={20}>
          <StyledMainCardRight>
            <StyledCard>
              <FaHamburger style={{ fontSize: "28px" }} />
            </StyledCard>
            <Text bold="bold" size={20}>
              Food
            </Text>
          </StyledMainCardRight>
          <StyledMainCardLeft>
            <StyledCard>
              <FaHamburger style={{ fontSize: "28px" }} />
            </StyledCard>
            <Text bold="bold" size={20}>
              Food
            </Text>
          </StyledMainCardLeft>
        </FlexDiv> */}

        {/* <Col span={12}>
            <StyledMainCard>
              <StyledCard>
                <FaBirthdayCake style={{ fontSize: "28px" }} />
              </StyledCard>
              <Text bold="bold" size={20}>
                Dessert
              </Text>
            </StyledMainCard>
          </Col>
          <Col span={12}>
            <StyledMainCard>
              <StyledCard>
                <BiDrink style={{ fontSize: "28px" }} />
              </StyledCard>
              <Text bold="bold" size={20}>
                Snacks
              </Text>
            </StyledMainCard>
          </Col>
          <Col span={12}>
            <StyledMainCard>
              <StyledCard>
                <GiFrenchFries style={{ fontSize: "28px" }} />
              </StyledCard>
              <Text bold="bold" size={20}>
                Drinks
              </Text>
            </StyledMainCard>
          </Col>
        </Row> */}
      </Container>
    </HomeStyles>
  );
}
