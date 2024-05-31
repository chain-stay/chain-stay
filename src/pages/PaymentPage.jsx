import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PaymentPage = () => {
    const [selectedPaymentIndex, setSelectedPaymentIndex] = useState(null);
    const paymentData = [
        {
            imgSrc: `${process.env.PUBLIC_URL}/assets/images/pageImg/nfts.svg`,
            altText: "RightArrow",
            title: "USDC",
            description: "Pay securely using your credit card.",
        },
        {
            imgSrc: `${process.env.PUBLIC_URL}/assets/images/pageImg/nfts.svg`,
            altText: "RightArrow",
            title: "USDT",
            description: "Pay with your PayPal account for convenience.",
        },
    ];

    const handlePaymentClick = (index) => {
        setSelectedPaymentIndex(index === selectedPaymentIndex ? null : index);
    };

    return (
        <Container>
            <Title>
                <Text>Accommodation Details</Text>
                <SubBox>
                    <PreIMG>이미지 넣는 부분</PreIMG>
                    <Box>
                        <SubTitle>Your Trip</SubTitle>
                        <p>Luxury Villa</p>
                        <p>$200 per night</p>
                        <p> ㅤ</p>
                        <BoldText>
                            <p> Dates</p>
                            <p> Oct</p>
                            <p> 23 - 28</p>
                        </BoldText>
                        <BoldText>
                            <p> Guests</p>
                            <p> 1</p>
                            <p> guest</p>
                        </BoldText>
                        <p>ㅤ</p>
                        <BoldText>
                            <p> ChainLink service fee</p>
                            <p> ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ228</p>
                        </BoldText>
                        <BoldText>
                            <p> Total</p>
                            <p>ㅤ</p>
                            <p> ₩1000</p>
                        </BoldText>
                    </Box>
                </SubBox>
            </Title>
            <Divider />

            <Title>
                <Text>Choose Payment Method</Text>
                <div>
                    {paymentData.map((item, index) => (
                        <Payment
                            key={index}
                            selected={index === selectedPaymentIndex}
                            onClick={() => handlePaymentClick(index)}
                        >
                            <IMG>
                                <img src={item.imgSrc} alt={item.altText} />
                            </IMG>
                            <div>
                                <SubTitle>{item.title}</SubTitle>
                                <p>{item.description}</p>
                            </div>
                        </Payment>
                    ))}
                    <Link to="/myPage">
                        <PaymentButton>Proceed to Payment</PaymentButton>
                    </Link>
                </div>
            </Title>
        </Container>
    );
};

export default PaymentPage;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 80px;
`;
const Divider = styled.div`
    width: 80%;
    height: 2px;
    background-color: rgb(204, 204, 204);
    margin: 40px 0;
    align-self: center;
    /* background-color: #f7f7f7; */
`;
const Title = styled.div`
    background-color: #f7f7f799;
    height: 760px;
    display: flex;
    padding: 60px 170px;
    gap: 60px;
    justify-content: center;
    align-items: center;
`;

const Text = styled.div`
    width: 520px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    font-size: 40px;
    font-weight: 700;
    line-height: 48px;
`;

const SubBox = styled.div`
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    height: 640px;
    width: 520px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    overflow-y: hidden;
    flex: 1 0 0;
`;

const Box = styled.div`
    height: 300px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;

    p {
        align-self: stretch;
        color: #000;
        text-align: right;
        font-size: 18px;
        font-weight: 400;
        line-height: 24px;
        margin: 4px;
    }
`;

const SubTitle = styled.div`
    color: #000;
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
`;

const PreIMG = styled.div`
    height: 340px;
    flex: 1 0 0;
    align-self: stretch;
    background: rgba(217, 217, 217, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BoldText = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 12px;
    align-self: stretch;

    p {
        flex: 1 0 0;
        color: #000;
        text-align: center;
        font-size: 18px;
        font-weight: 400;
        line-height: 28px;
    }

    p:first-child {
        font-size: 20px;
        font-weight: 700;
        text-align: start;
    }

    p:nth-child(3) {
        text-align: end;
    }
`;

const Payment = styled.div`
    height: 132px;
    width: 520px;
    display: flex;
    padding: 16px;
    align-items: center;
    border-radius: 6px;
    border: 3px solid rgba(0, 0, 0, 0.1);
    background: ${(props) =>
        props.selected
            ? "rgba(0, 123, 255, 0.1)"
            : "rgba(247, 247, 247, 0.79)"};
    gap: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background: rgba(0, 123, 255, 0.2);
    }

    div {
        text-align: start;
    }

    margin-bottom: 60px;
`;

const IMG = styled.div`
    align-self: stretch;
    border-radius: 16px;
    background: rgba(217, 217, 217, 0.5);
    display: flex;
    width: 150px;
    align-items: flex-start;
    border-radius: 5px;
`;
const PaymentButton = styled.button`
    color: #fff;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */

    display: flex;
    width: 240px;
    padding: 12px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background: #000;

    cursor: pointer;
`;
