import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../App";

const IconsForm = () => {
    const { account, onClickAccount, disconnectWallet } =
        useContext(AppContext);

    const categoriesData = [
        { name: "Countryside" },
        { name: "City" },
        { name: "Beach" },
        { name: "Mountain" },
        { name: "Desert" },
        { name: "Forest" },
        { name: "Lake" },
        { name: "Village" },
    ];
    /*const categoriesData = [
        {
            name: "Countryside",
            icon: `${process.env.PUBLIC_URL}/assets/icons/send.svg`,
        },
        {
            name: "City",
            icon: `${process.env.PUBLIC_URL}/assets/icons/city.svg`,
        },
        {
            name: "Beach",
            icon: `${process.env.PUBLIC_URL}/assets/icons/beach.svg`,
        },
        {
            name: "Mountain",
            icon: `${process.env.PUBLIC_URL}/assets/icons/mountain.svg`,
        },
        {
            name: "Desert",
            icon: `${process.env.PUBLIC_URL}/assets/icons/desert.svg`,
        },
        {
            name: "Forest",
            icon: `${process.env.PUBLIC_URL}/assets/icons/forest.svg`,
        },
        {
            name: "Lake",
            icon: `${process.env.PUBLIC_URL}/assets/icons/lake.svg`,
        },
        {
            name: "Village",
            icon: `${process.env.PUBLIC_URL}/assets/icons/village.svg`,
        },
    ];*/

    return (
        <CategoriesContainer>
            <SubHeading>Categories</SubHeading>
            <div>
                {categoriesData.map((category, index) => (
                    <Icons key={index}>
                        {/* <IconsBack>
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/icons/profil.svg`}
                                alt={`${category.name} Icon`}
                                style={{ width: "48px" }}
                            />
                        </IconsBack>
                        <Name>{category.name}</Name> */}
                        <Button>{category.name} </Button>
                    </Icons>
                ))}
            </div>
        </CategoriesContainer>
    );
};

export default IconsForm;

const Name = styled.div`
    color: #696969;
    text-align: center;
    font-family: Nunito;
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
`;

const SubHeading = styled.div`
    padding-bottom: 8px;
    display: flex;
    height: 24px;
    margin-bottom: 8px;
    color: #000;
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 133.333% */
`;

const CategoriesContainer = styled.div`
    div {
        display: flex;
    }

    height: 135px;
    padding-top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: start;
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-family: inherit;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.4px;
    color: #7e97b8;
    background-color: #e0e8ef;
    border-style: solid;
    border-width: 2px 2px 2px 2px;
    border-color: rgba(255, 255, 255, 0.333);
    border-radius: 40px 40px 40px 40px;
    padding: 16px 24px 16px 28px;
    transform: translate(0px, 0px) rotate(0deg);
    transition: 0.2s;
    box-shadow: -4px -2px 16px 0px #ffffff,
        4px 2px 16px 0px rgb(95 157 231 / 48%);

    &:hover {
        color: #516d91;
        background-color: #e5edf5;
        box-shadow: -2px -1px 8px 0px #ffffff,
            2px 1px 8px 0px rgb(95 157 231 / 48%);
    }

    &:active {
        box-shadow: none;
    }
`;
