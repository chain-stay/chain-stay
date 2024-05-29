import styled from "styled-components";
import Preview from "../components/detailPageComponents/Preview";
import ProductDescription from "../components/detailPageComponents/ProductDescription";

const DetailPage = () => {
    return (
        <Container>
            <Preview />

            <DetailContainer>
                <ProductDescription />

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
                    <Button>Reserve Now</Button>
                </OrderContainer>
            </DetailContainer>
        </Container>
    );
};
export default DetailPage;

const ReserveTitle = styled.h1`
    display: box;
    flex: 1 0 0;
    align-self: stretch;
    color: #000;

    text-align: center;
    font-family: Nunito;
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: 0px; /* 0% */
`;

const ReserveSubTitle = styled.h2`
    font-size: 18px;
    margin-bottom: 5px;
`;

const Input = styled.input`
    width: 95%;
    /* margin: 0px auto 15px auto; */
    padding: 10px;
    margin-bottom: 15px;
    /* margin-right: 10px; */
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    /* display: flex; */
    /* justify-content: center; */
`;

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    font-size: 16px;
    color: white;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: auto;
    &:hover {
        background-color: #0056b3;
    }
`;

const OrderContainer = styled.div`
    display: flex;
    width: 100%;

    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    padding: 30px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    margin: 20px auto;
    margin-left: 60px;
    margin-right: 5px;
    p {
        display: flex;
        margin: 15px auto 30px auto;
        align-items: flex-center;
    }
`;

const DetailContainer = styled.div`
    margin: 60px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    gap: 60px;
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 80px;
`;
