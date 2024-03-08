import { paths } from "../../paths";
import { useRouter } from "next/router";
import styled from "styled-components";
import { colors } from "@/colors";
import Explanation from "./explanation";
import Image from "next/image";

const RecommendPage = () => {
  const router = useRouter();
  const locationId = router.query.locationId;
  const onClick = () => {
    router.push(paths.index);
  };
  return (
    <ResultBody>
      <AllWrapper>
        <Image src={"/Background.png"} layout="fill" objectFit="fill" />
        <ContentWrapper>
          {/* <Explanation lid={locationId}/> */}
          <LeftExplanation>
            <Image src={"/Kyoto.jpg"} layout="fill" objectFit="cover" />
            <CenterBelt>
              <MiddleText>あなたにおすすめの神社は</MiddleText>
              <ShrineNameText>{locationId}</ShrineNameText>
              <ButtonWrapper>
                <DetailLinkButton>詳しく見る</DetailLinkButton>
              </ButtonWrapper>
            </CenterBelt>
          </LeftExplanation>
          <RightExplanation>
            <DetailWrapper>
              <MiddleText>この神社の御利益は...</MiddleText>
              <BenefitTitle>{locationId}</BenefitTitle>
              <DetailExplanation>{locationId}</DetailExplanation>
              <PageButtonSpot>
                <ButtonTextWrapper>この神社周辺のおすすめスポット</ButtonTextWrapper>
                <ImageWrapper>
                  <Image src={"/Vector.png"} width={32} height={32} />
                </ImageWrapper>
              </PageButtonSpot>
            </DetailWrapper>
            <ButtonWrapper>
              <PageButtonIndex onClick={onClick}>
                <ButtonTextWrapper>再診断する</ButtonTextWrapper>
                <ImageWrapper>
                  <Image src={"/Replay.png"} width={32} height={32} />
                </ImageWrapper>
              </PageButtonIndex>
            </ButtonWrapper>
          </RightExplanation>
        </ContentWrapper>
      </AllWrapper>
    </ResultBody>
  );
};

export default RecommendPage;

const ResultBody = styled.div`
  box-sizing: border-box;
  top: 0;
  left: 0;
  height: 100vh;
  padding: 10%;
`;

const AllWrapper = styled.div`
  margin: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: solid #217475 5px;
`;

const ContentWrapper = styled.div`
  z-index: 10;
  height: 100%;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0px;
  border: solid #eee4cb 5px;
  border-radius: 5px;
`;

const LeftExplanation = styled.div`
  z-index: 9;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: space-around;
`;

const CenterBelt = styled.div`
  z-index: 20;
  box-sizing: border-box;
  display: flex;
  position: absolute;
  width: 100%;
  margin: auto;
  flex-direction: column;
  background-color: rgba(109, 197, 198, 0.8);
  padding: 20px 0px;
  > p {
    font-family: serif;
  }
`;

const MiddleText = styled.p`
  margin: 0;
  font-size: 36px;
  width: 100%;
  text-align: center;
`;

const ShrineNameText = styled.p`
  margin: 0;
  font-size: 64px;
  width: 100%;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
`;

const DetailLinkButton = styled.button`
  width: 50%;
  height: 50px;
  text-align: center;
  border-radius: 25px;
  border: solid #217475 2px;
  color: #217475;
  font-family: serif;
  font-size: 24px;
`;

const RightExplanation = styled.div`
  z-index: 9;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${colors.Write};
  padding: 60px;
  > * {
    font-family: serif;
  }
`;

const DetailWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  > * {
    font-family: serif;
    text-align: left;
    margin: 0;
  }
`;

const BenefitTitle = styled.p`
  margin: 0;
  font-size: 60px;
  width: 100%;
  text-align: center;
  font-weight: bold;
`;

const DetailExplanation = styled.div`
  margin: 0;
  font-size: 28px;
  width: 100%;
`;

const PageButtonSpot = styled.button`
  font-size: 36px;
  width: 100%;
  text-align: center;
  border-radius: 25px;
  border: solid #217475 2px;
  color: #217475;
  font-family: serif;
  font-size: 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: baseline;
  gap: 16px;
`;

const PageButtonIndex = styled.button`
  font-size: 36px;
  width: 50%;
  text-align: center;
  border-radius: 25px;
  border: solid #77782e 2px;
  color: #77782e;
  font-family: serif;
  font-size: 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: baseline;
  gap: 16px;
`;

const ButtonTextWrapper = styled.p`
  margin: 0;
  font-size: 32px;
  text-align: center;
`;

const ImageWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
