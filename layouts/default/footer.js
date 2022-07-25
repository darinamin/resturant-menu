import styled from "styled-components";
import FlexDiv from "@/components/utils/flex-div";
import Image from "next/image";
import Text from "@/components/utils/text";
import { Input } from "antd";

const FooterStyled = styled.div`
  width: 100%;
  min-height: 100px;
  padding: 30px;
  margin: 0;
`;
const ImageStyled = styled.div`
  background-color: #f94a0a;
  padding: 10px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
`;
const { Search } = Input;

const InputStyled = styled(Search)`
  border: none;
`;
export default function Footer() {
  return (
    <FooterStyled>
      <FlexDiv justifyContent="space-between">
        <Image
          layout="fixed"
          width={100}
          height="80px"
          src={"/logo_2.png"}
          alt="Image 1"
        />
        <InputStyled
          placeholder="input search text"
          style={{
            width: 460,
            border: "none",
          }}
        />
        <ImageStyled>
          <Image
            layout="fixed"
            width={30}
            height="20px"
            src={"/shopping.png"}
            alt="Image 1"
          />
          <Text bold="bold" color="white">
            4
          </Text>
        </ImageStyled>
      </FlexDiv>
    </FooterStyled>
  );
}
