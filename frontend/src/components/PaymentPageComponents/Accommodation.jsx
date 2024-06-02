import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { differenceInDays, parseISO } from "date-fns";

import styled from "styled-components";

const Accommodation = ({
  checkInDate,
  checkOutDate,
  guests,
  chainLinkFee,
  totalPrice,
}) => {
  const isPolygon = true;

  return (
    <Title>
      <Text>Accommodation Details</Text>
      <SubBox>
        <PreIMG>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/beach/Beach1.png`}
            alt="RightArrow"
          />
        </PreIMG>
        <Box>
          <SubTitle>Your Trip</SubTitle>
          <p>Entire guest suite in Capri, Italy</p>
          <p>$ 3.2 per night</p>
          <p> ㅤ</p>
          <BoldText>
            <p> Dates</p>
            <p>
              ㅤ ㅤ {checkInDate} - {checkOutDate}
            </p>
          </BoldText>
          <BoldText>
            <p> Guests</p>
            <p> ㅤ ㅤ ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ{guests}</p>
          </BoldText>
          <p>ㅤ</p>
          <BoldText>
            <p> ChainLink service fee</p>
            <p> ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ{chainLinkFee}</p>
          </BoldText>
          <BoldText>
            <p> Total</p>
            <p>ㅤ</p>
            <p> $ {totalPrice}</p> {/* 여기 변경 필요*/}
          </BoldText>
        </Box>
      </SubBox>
    </Title>
  );
};
export default Accommodation;
const Title = styled.div`
  height: 660px;
  display: flex;
  padding: 60px 170px;
  gap: 60px;
  justify-content: center;
  align-items: center;
`;
const SubTitle = styled.div`
  color: #000;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
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
const PreIMG = styled.div`
  height: 340px;
  flex: 1 0 0;
  align-self: stretch;
  background: rgba(217, 217, 217, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  /* background-image: url("assets/images/beach/Beach1.png"); */
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
