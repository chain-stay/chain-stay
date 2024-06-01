import styled from "styled-components";
import Modal from "../components/Modal";
import { useContext } from "react";
import { AppContext } from "../App";

const MyPage = () => {
    const { isOpen } = useContext(AppContext);
    return (
        <Container>
            <ProfileContainer>
                <Profile>
                    <IMG></IMG>
                    <Text>Jane Doe</Text>
                    <p>Premium Member</p>
                </Profile>
                <Balance>
                    <SubTitle>Wallet Balance</SubTitle>
                    <div>
                        <Card>
                            <p>USDC my balance</p>
                            <Text>$100</Text>
                        </Card>
                        <Card>
                            <p>USDT my balance</p>
                            <Text>$100</Text>
                        </Card>
                    </div>
                </Balance>
            </ProfileContainer>
            <img
                src={`${process.env.PUBLIC_URL}/assets/images/walletSummary.svg`}
                alt="summarydummy"
            />

            <Book>
                <SubTitle>Booking History</SubTitle>
                <div>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/images/book.svg`}
                        alt="summarydummy"
                    />
                </div>
            </Book>

            {!isOpen && (
                <Modal
                    iconUrl="/assets/icons/check.svg"
                    title="Order validated"
                    subTitle="Your reservation has been successfully completed."
                    buttonTexts={["Go to myPage", "Back to HomePage"]}
                    buttonColors={["#1AA06D", "#FFF"]}
                    buttonTextColors={["#FFF", "#000"]}
                />
            )}
        </Container>
    );
};
export default MyPage;
const Container = styled.div`
    /* width: 100%; */
    /* height: 352px; */
    /* padding: 60px; */

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* color: #fff; */

    img {
        margin-bottom: 60px;
    }
`;
const ProfileContainer = styled.div`
    width: 100%;
    height: 352px;
    /* padding: 60px; */
    gap: 90px;
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
    background: rgba(239, 244, 255, 0.6);
    margin-top: 80px;
    margin-bottom: 60px;
`;
const Profile = styled.div`
    /* margin-left: 100px; */
    display: flex;
    flex-direction: column;
    gap: 40px;

    p {
        display: flex;
        padding: 2px 4px;
        justify-content: center;
        align-items: center;
        gap: 2px;
        border-radius: 2px;
        border: 0.5px solid rgba(0, 0, 0, 0.1);

        background: rgba(217, 217, 217, 0.5);
        color: #000;

        font-family: Roboto;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px; /* 133.333% */
    }
`;
const IMG = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background: url("/assets/images/profile.svg") lightgray 50% / cover
        no-repeat;
`;
const Text = styled.div`
    color: #000;

    font-size: 25px;
    font-weight: 700;
    line-height: 32px; /* 133.333% */
`;
const Balance = styled.div`
    display: flex;
    flex-direction: column;
    text-align: start;

    div {
        display: flex;
        gap: 40px;
    }
`;

const SubTitle = styled.div`
    color: #000;

    font-size: 40px;
    font-weight: 700;
    line-height: 48px; /* 120% */
    margin-bottom: 60px;
`;
const Card = styled.div`
    width: 460px;
    display: flex;
    flex-direction: column;
    display: flex;
    height: 124px;
    padding: 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
    flex: 1 0 0;
    border-radius: 6px;
    border: 1px solid rgba(0, 0, 0, 0.1);
`;
const Book = styled.div`
    /* width: 100%; */
    height: 380px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 232px;
    /* background-color: red; */
`;
