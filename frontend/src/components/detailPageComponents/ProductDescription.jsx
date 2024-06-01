import styled from "styled-components";

const ProductDescription = () => {
    return (
        <DescriptionContainer>
            <TitleText>Entire home in Bifröst, Iceland</TitleText>
            <Line />
            <>
                <SubTitle>Self check-in👋</SubTitle>
                <SubDescription>
                    Check yourself in with the lockbox.
                </SubDescription>
                <SubTitle>Marek is a Superhost</SubTitle>
                <SubDescription>
                    Superhosts are experienced, highly rated Hosts.{" "}
                </SubDescription>
                <SubTitle>Free cancellation before Oct 22</SubTitle>
                <SubDescription>
                    Get a full refund if you change your mind.{" "}
                </SubDescription>
            </>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <TitleText>Accommodation Options</TitleText>
        </DescriptionContainer>
    );
};
export default ProductDescription;
const SubTitle = styled.div`
    display: flex;
    margin-bottom: 3px;
    align-self: stretch;
    color: rgba(0, 0, 0, 0.5);
    font-family: Nunito;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px; /* 125% */
`;
const SubDescription = styled.div`
    display: flex;
    align-self: stretch;
    color: #7f7f7f;
    margin-bottom: 25px;
    font-family: Nunito;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 100% */
`;
const Line = styled.div`
    height: 5px;
    margin: 60px 0px;
    flex-shrink: 0;
    align-self: stretch;
    stroke-width: 5px;
    stroke: rgba(0, 0, 0, 0.1);
    background-image: url("/assets/icons/detailVector1.svg");
`;

const TitleText = styled.div`
    display: flex;
    align-self: stretch;
    color: #666;
    font-family: Nunito;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px; /* 120% */
`;

const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-self: stretch;
    color: #000;

    p {
        display: block; /* block으로 변경하여 flex 정렬을 제거 */
        width: 90%;
        color: #000;
        font-family: Nunito;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 25px; /* 125% */
        margin-top: 60px;
        margin-bottom: 60px;
        align-self: stretch;
        text-align: left; /* 텍스트 왼쪽 정렬 (block일 경우 기본값) */
    }
`;
