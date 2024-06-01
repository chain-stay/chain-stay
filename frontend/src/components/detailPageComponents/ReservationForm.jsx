import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../App";
import { useNavigate } from "react-router";
import Modal from "../Modal";
import { colorAnim, btnContent } from "../detailPageComponents/Animations"; // Adjust the import path as needed

const ReservationForm = () => {
    const { account, isOpen, setIsOpen } = useContext(AppContext);
    const navigate = useNavigate();

    const handleClickButton = (e) => {
        e.preventDefault();
        account ? navigate(`/paymentPage`) : setIsOpen(true);
    };

    return (
        <OrderContainer>
            <ReserveTitle>Reservation Details</ReserveTitle>
            <p>Enter your booking information below</p>
            <ReserveSubTitle>₩880,345 / night</ReserveSubTitle>

            <ReserveSubTitle>Check-in Date</ReserveSubTitle>
            <Input type="date" />
            <ReserveSubTitle>Check-out Date</ReserveSubTitle>
            <Input type="date" />
            <ReserveSubTitle>Guests</ReserveSubTitle>
            <Input type="number" min="1" defaultValue="1" />

            <ButtonContainer>
                <Button onClick={handleClickButton}>
                    Reserve Now
                    <IconArrow>
                        <svg id="arrow-icon-one" viewBox="0 0 24 24">
                            <path d="M0 12h19"></path>
                        </svg>
                        <svg id="arrow-icon-two" viewBox="0 0 24 24">
                            <path d="M0 12h19"></path>
                        </svg>
                        <svg id="arrow-icon-three" viewBox="0 0 24 24">
                            <path d="M0 12h19"></path>
                        </svg>
                    </IconArrow>
                </Button>
            </ButtonContainer>
            {isOpen && (
                <Modal
                    iconUrl="/assets/icons/error.svg"
                    title="Login / Sign Up"
                    subTitle="Kindly sign up or log in to continue."
                    buttonTexts={["Login/ SignUp", "Cancel"]}
                    buttonColors={["#dc2626", "#FFF"]}
                    buttonTextColors={["#FFF", "#000"]}
                />
            )}
        </OrderContainer>
    );
};
export default ReservationForm;

const ReserveTitle = styled.h1`
    color: #000;
    text-align: center;
    font-family: Nunito;
    font-size: 35px;
    font-weight: 700;
`;

const ReserveSubTitle = styled.h2`
    font-size: 18px;
    margin-bottom: 5px;
    text-align: left;
    width: 100%; /* Ensure the subtitle takes the full width of the container */
`;

const Input = styled.input`
    width: 95%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
`;

const OrderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    margin: 20px auto;

    p {
        text-align: center;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    --color-text: #ffffff;
    --color-background: #ff135a;
    --color-outline: #ff145b80;
    --color-shadow: #00000080;
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 30px;
    text-decoration: none;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 25px;
    color: var(--color-text);
    background: var(--color-background);
    transition: 1s;
    border-radius: 100px;
    box-shadow: 0 0 0.2em 0 var(--color-background);
    border: none;
    cursor: pointer;
    margin: auto;

    &:hover,
    &:focus {
        transition: 0.5s;
        animation: ${btnContent} 1s;
        outline: 0.1em solid transparent;
        outline-offset: 0.2em;
        box-shadow: 0 0 0.4em 0 var(--color-background);
    }

    &:hover .icon-arrow {
        transition: 0.5s;
        margin-right: 25px;
    }
`;

const IconArrow = styled.div`
    display: flex;
    transition: 0.5s;
    margin-right: 0px;
    transform: scale(0.6);
    margin-left: 15px;
    position: relative;
    top: 6%;

    svg {
        fill: white;
    }

    #arrow-icon-one {
        transition: 0.4s;
        transform: translateX(-60%);
    }

    #arrow-icon-two {
        transition: 0.5s;
        transform: translateX(-30%);
    }

    ${Button}:hover & #arrow-icon-three {
        animation: ${colorAnim} 1s infinite 0.2s;
    }

    ${Button}:hover & #arrow-icon-one {
        transform: translateX(0%);
        animation: ${colorAnim} 1s infinite 0.6s;
    }

    ${Button}:hover & #arrow-icon-two {
        transform: translateX(0%);
        animation: ${colorAnim} 1s infinite 0.4s;
    }
`;
