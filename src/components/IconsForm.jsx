import styled from "styled-components";

const IconsForm = () => {
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
    /* margin-right: 18px; */
    /* gap: 18px; */
`;
const SubHeading = styled.div`
    /* background-color: #cfcfcf; */
    padding-bottom: 8px;
    display: flex;

    height: 24px;
    /* width: 1100px; */

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
    /* margin-bottom: 60px; */

    /* background-color: #ffacac; */

    display: flex;
    flex-direction: column;
    justify-content: start;
`;
