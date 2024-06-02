import { useContext, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { differenceInDays, parseISO } from "date-fns";

import styled from "styled-components";
import Accommodation from "../components/PaymentPageComponents/Accommodation";
import Modal from "../components/Modal";
import { AppContext } from "../App";

const PaymentPage = () => {
  const { isOpen, setIsOpen } = useContext(AppContext);
  const [selectedPaymentIndex, setSelectedPaymentIndex] = useState(null);

  const isPolygon = true;
  const [chainLinkFee, setChainlinkFee] = useState(0);

  // user input data
  const location = useLocation();
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  // Function to remove non-numeric characters
  const formatDate = (dateString) => {
    return dateString ? dateString.replace(/\D/g, "") : "";
  };

  useEffect(() => {
    // Parse the query parameters from the URL
    const queryParams = new URLSearchParams(location.search);
    const formattedCheckInDate = formatDate(queryParams.get("checkInDate"));
    const formattedCheckOutDate = formatDate(queryParams.get("checkOutDate"));

    setCheckInDate(formattedCheckInDate);
    setCheckOutDate(formattedCheckOutDate);
    setGuests(queryParams.get("guests") || 1);

    if (formattedCheckInDate && formattedCheckOutDate) {
      // Parse dates
      const checkIn = parseISO(queryParams.get("checkInDate"));
      const checkOut = parseISO(queryParams.get("checkOutDate"));

      // Calculate the number of days between check-in and check-out
      const daysDifference = differenceInDays(checkOut, checkIn);

      // Calculate total price
      const pricePerNight = 3.2;
      const totalPrice = daysDifference * pricePerNight;

      setTotalPrice(totalPrice);
    }
  }, [location.search]);

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
  const handleSelectButton = () => {
    setIsOpen(true);
  };

  return (
    <Container>
      checkInDate={checkInDate}
      checkOutDate={checkOutDate}
      guests={guests}
      chainLinkFee={chainLinkFee}
      totalPrice={totalPrice}
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
          <ButtonContainer>
            {selectedPaymentIndex !== null ? (
              <Link to="/myPage">
                <PaymentButton>Proceed to Payment</PaymentButton>
              </Link>
            ) : (
              <PaymentButton onClick={handleSelectButton}>
                Proceed to Payment
              </PaymentButton>
            )}
            <PaymentButton>다른 버튼</PaymentButton>
          </ButtonContainer>
          {isOpen && (
            <Modal
              iconUrl="/assets/icons/error.svg"
              title="Payment Method Selection"
              subTitle="Select Your Preferred Payment Method !"
              buttonTexts={["Choose Payment Method", "Back to HomePage"]}
              buttonColors={["#dc2626", "#FFF"]}
              buttonTextColors={["#FFF", "#000"]}
            />
          )}
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
  height: 1px;
  background-color: rgb(204, 204, 204);
  margin: 10px 0;
  align-self: center;
`;
const Title = styled.div`
  height: 660px;
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

const SubTitle = styled.div`
  color: #000;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
`;

const Payment = styled.div`
  height: 132px;
  display: flex;
  padding: 16px;
  align-items: center;
  border-radius: 6px;
  border: 3px solid rgba(0, 0, 0, 0.1);
  background: ${(props) =>
    props.selected ? "rgba(0, 123, 255, 0.1)" : "rgba(247, 247, 247, 0.79)"};
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

const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 20px;
`;

const PaymentButton = styled.button`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  display: flex;
  width: 240px;
  padding: 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #000;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  margin: auto;
  &:hover {
    background-color: #333;
    transform: scale(1.05);
  }
`;
