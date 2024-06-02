import styled from "styled-components";
import Card from "../components/HomePageComponents/Card";
import IconsForm from "../components/HomePageComponents/IconsForm";
const HomePage = () => {
    return (
        <Container>
            <Banner>
                <iframe
                    src="https://my.spline.design/particleplanet-ac890f9bebbcfb21b6b047fda084efe6/"
                    frameborder="0"
                    width="100%"
                    height="567px"
                ></iframe>
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
    /* width: 900px; */
    overflow: hidden;
    width: 95%;
    height: 567px;
    margin: 50px auto;
    /* margin-top: z80px; */
    /* background-color: #a2a2a2;
     */
    /* background-image: url("/assets/images/bannerBack.png"); */
    /* background-image: url("/assets/images/header.jpg"); */

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    gap: 24px;

    color: #fff;

    text-align: end;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px; /* 150% */

    div {
        color: #fff;

        text-align: right;
        font-family: Nunito;
        font-size: 64px;
        font-style: normal;
        font-weight: 900;
        line-height: 61px; /* 95.313% */
        margin-right: 100px;
    }
    border-radius: 300px;
    /* background: rgba(255, 233, 233, 0.6); */

    box-shadow: 0px 4px 51.1px 0px rgba(0, 0, 0, 0.25);

    p {
        margin-right: 100px;
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
