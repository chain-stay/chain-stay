import styled from "styled-components";
import Card from "../components/Card";

const HomePage = () => {
    const categoriesData = [
        {
            name: "Countryside",
            icon: `${process.env.PUBLIC_URL}/assets/icons/profil.svg`,
        },
        {
            name: "City",
            icon: `${process.env.PUBLIC_URL}/assets/icons/profil.svg`,
        },
        {
            name: "City",
            icon: `${process.env.PUBLIC_URL}/assets/icons/profil.svg`,
        },
        {
            name: "City",
            icon: `${process.env.PUBLIC_URL}/assets/icons/profil.svg`,
        },
        {
            name: "City",
            icon: `${process.env.PUBLIC_URL}/assets/icons/profil.svg`,
        },
        {
            name: "City",
            icon: `${process.env.PUBLIC_URL}/assets/icons/profil.svg`,
        },
        {
            name: "City",
            icon: `${process.env.PUBLIC_URL}/assets/icons/profil.svg`,
        },
        {
            name: "City",
            icon: `${process.env.PUBLIC_URL}/assets/icons/profil.svg`,
        },
    ];
    return (
        <Container>
            <Banner>
                <div>Find Your Perfect Stay</div>
                Explore diverse accommodation types and unique experiences
            </Banner>

            <CategoriesContainer>
                <SubHeading>Categories</SubHeading>
                <div>
                    {categoriesData.map((category, index) => (
                        <Icons key={index}>
                            <IconsBack>
                                <img
                                    src={category.icon}
                                    alt={`${category.name} Icon`}
                                    style={{ width: "48px" }}
                                />
                            </IconsBack>
                            <Name>{category.name}</Name>
                        </Icons>
                    ))}
                </div>
            </CategoriesContainer>
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
    background-color: aliceblue;
    padding: 60px 0px;

    color: #000;
    font-family: Roboto;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px; /* 120% */
`;
const Name = styled.div`
    color: #696969;
    text-align: center;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 15px; /* 107.143% */
`;
const IconsBack = styled.div`
    width: 80px;
    height: 80px;

    align-items: center;
    justify-content: center;

    border-radius: 87px;
    border: 2px solid #f2f2f2;
    background: #f2f2f2;
    box-shadow: 0px -6px 5.5px 0px rgba(0, 0, 0, 0.25) inset;
`;
const Icons = styled.div`
    display: flex;
    flex-direction: column;
    width: 120px;
    height: 95px;

    justify-content: center;
    align-items: center;
    margin: auto;
    /* margin-right: 18px; */
    /* gap: 18px; */
`;
const SubHeading = styled.div`
    background-color: #cfcfcf;
    padding-bottom: 8px;
    display: flex;

    height: 24px;
    /* width: 1100px; */

    margin-bottom: 8px;
    color: #000;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 133.333% */
`;

const CategoriesContainer = styled.div`
    div {
        display: flex;
    }

    height: 135px;
    padding-top: 60px;
    /* margin-bottom: 60px; */

    background-color: #ffacac;

    display: flex;
    flex-direction: column;
    justify-content: start;
`;
const Banner = styled.div`
    width: 100%;
    height: 336px;
    margin-top: 80px;
    background-color: #a2a2a2;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;

    color: #fff;

    text-align: center;
    font-family: Roboto;
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
    color: #fff;
`;
