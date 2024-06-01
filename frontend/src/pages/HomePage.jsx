import styled from "styled-components";
import Card from "../components/HomePageComponents/Card";
import IconsForm from "../components/HomePageComponents/IconsForm";

const HomePage = () => {
    return (
        <Container>
            <Banner>
                <div>Find Your Perfect Stay</div>
                Explore diverse accommodation types and unique experiences
            </Banner>
            <IconsForm />

            <Title>Discover a variety of accommodations</Title>
            <Card />
        </Container>
    );
};

export default HomePage;
const Title = styled.div`
    display: flex;
    justify-content: start;
    align-self: stretch;
    /* background-color: aliceblue; */
    padding: 60px 0px;

    color: #000;
    font-family: Nunito;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px; /* 120% */
`;
const Banner = styled.div`
    width: 100%;
    height: 336px;
    /* margin-top: 80px; */
    background-color: #a2a2a2;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;

    color: #fff;

    text-align: center;
    font-family: Nunito;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */

    div {
        font-size: 40px;
        font-weight: 700;
        line-height: 48px; /* 120% */
    }
`;
const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    /* background-color: #6ec200; */
    margin-top: 80px;
    /* color: #fff; */
`;
