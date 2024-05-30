import styled from "styled-components";
import Preview from "../components/detailPageComponents/Preview";
import ProductDescription from "../components/detailPageComponents/ProductDescription";

import ReservationForm from "../components/detailPageComponents/ReservationForm";
import Modal from "../components/Modal";
const DetailPage = () => {
    return (
        <Container>
            <Preview />

            <DetailContainer>
                <ProductDescription />
                <ReservationForm />
            </DetailContainer>
        </Container>
    );
};
export default DetailPage;

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
