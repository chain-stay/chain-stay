import { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { differenceInDays, parseISO } from "date-fns";
import styled from "styled-components";
import Accommodation from "../components/PaymentPageComponents/Accommodation";
import Modal from "../components/Modal";
import { AppContext } from "../App";
import Web3 from "web3";
import { useNavigate } from 'react-router-dom';


const PaymentPage = () => {
  const {
    isOpen,
    setIsOpen,
    chainStayContract,
    polygonUsdcContract,
    chain,
    account,
  } = useContext(AppContext);
  const [selectedPaymentIndex, setSelectedPaymentIndex] = useState(null);
  const navigate = useNavigate();


  const paymentData = [
    {
      imgSrc: `${process.env.PUBLIC_URL}/assets/icons/coin1.png`,
      title: "USDC",
      description:
        "Secure your transactions with USDC, a stablecoin backed by the US dollar.",
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/assets/icons/coin2.png`,
      title: "USDT",
      description:
        "Choose USDT for your payments and experience the convenience of a widely accepted stablecoin.",
    },
  ];

  const isPolygon = chain === 80002;
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

  const onClickReserve = async () => {
    try {
      const web3 = new Web3(Web3.givenProvider);
      const totalPriceInWei = web3.utils.toWei(totalPrice.toString(), "mwei"); // Converts to microether

      //   try {
      //     await polygonUsdcContract.methods
      //       .approve(chainStayContract, totalPriceInWei)
      //       .send({ from: account });
      //     console.log("Token approved successfully");
      //   } catch (error) {
      //     console.error("Token approval failed", error);
      //   }

      const reservationRequest = [
        account,
        1,
        checkInDate,
        checkOutDate,
        guests,
        totalPriceInWei,
        1,
      ];

      const tx = await chainStayContract.methods
        .reserve(reservationRequest)
        .send({
          from: account,
          gas: 3000000, // Adjust gas limit as needed
        });

      

      console.log("Transaction successful:", tx);

      navigate('/myPage');
    } catch (error) {
      console.error("Transaction failed:", error);
      return false;
    }
    return true;
  };

  const handlePaymentClick = (index) => {
    setSelectedPaymentIndex(index === selectedPaymentIndex ? null : index);
  };

  const handleSelectButton = () => {
    setIsOpen(true);
  };

  return (
    <Container>
      <Accommodation
        checkInDate={checkInDate}
        checkOutDate={checkOutDate}
        guests={guests}
        chainLinkFee={chainLinkFee}
        totalPrice={totalPrice}
      />
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
              <PaymentButton onClick={() => onClickReserve()}>
                Proceed to Payment
              </PaymentButton>
            ) : (
              <PaymentButton onClick={handleSelectButton}>
                Proceed to Payment
              </PaymentButton>
            )}
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
  width: 520px;
  height: 150px;
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
    width: 370px;
  }

  margin-bottom: 60px;
`;

const IMG = styled.div`
  align-self: stretch;
  border-radius: 16px;
  background: rgba(217, 217, 217, 0.5);
  display: flex;
  width: 200px;
  height: 150px;
  align-items: flex-start;
  border-radius: 5px;
  overflow: hidden;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
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
