import { Col, Row } from "antd";
import Image from "next/image";
import Container from "./utils/container";
import styled from "styled-components";
const HomeStyles = styled.div`
  margin: 20px;
  padding-left: 60px;
`;
export default function HomePage() {
  return (
    <HomeStyles>
      <Container>
        <Row>
          <Col span={6}>
            <Image
              layout="fixed"
              width={100}
              height="80px"
              src={"/hamburger.png"}
              alt="Image 1"
            />
          </Col>
          <Col span={6}>
            <Image
              layout="fixed"
              width={100}
              height="80px"
              src={"/french-fries.png"}
              alt="Image 1"
            />
          </Col>
          <Col span={6}>
            <Image
              layout="fixed"
              width={100}
              height="80px"
              src={"/cake.png"}
              alt="Image 1"
            />
          </Col>
          <Col span={6}>
            <Image
              layout="fixed"
              width={100}
              height="80px"
              src={"/drink.png"}
              alt="Image 1"
            />
          </Col>
        </Row>
      </Container>
    </HomeStyles>
  );
}
