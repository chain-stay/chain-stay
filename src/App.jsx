import "./App.css";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import MyPage from "./pages/MyPage";
import { createContext, useState, useEffect } from "react";
import PaymentPage from "./pages/PaymentPage";
export const AppContext = createContext();

function App() {
    const [account, setAccount] = useState();
    const [isOpen, setIsOpen] = useState(false);

    const onClickAccount = async () => {
        try {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });

            console.log("Accounts fetched:", accounts);
            setAccount(accounts[0]);
            setIsOpen(false);
        } catch (error) {
            console.error("Error fetching accounts:", error);
        }
    };
    useEffect(() => {
        console.log("Current account:", account);
    }, [account]);

    return (
        <AppContext.Provider
            value={{ account, setAccount, isOpen, setIsOpen, onClickAccount }}
        >
            <BrowserRouter>
                <StyledContent>
                    <Header />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/detailPage" element={<DetailPage />} />
                        <Route path="/paymentPage" element={<PaymentPage />} />
                        <Route path="/myPage" element={<MyPage />} />
                    </Routes>
                </StyledContent>
            </BrowserRouter>
        </AppContext.Provider>
    );
}
export default App;

const StyledContent = styled.div`
    margin: 0 calc((100% - 1440px) / 2); /* 좌우 마진을 화면 너비에서 1440px를 뺀 값을 기준으로 설정 */
    width: 1440px;
    height: 100%;

    display: flex;
    flex-direction: column;

    overflow-y: hidden;
    overflow-x: hidden;

    color: #000;
    text-align: center;
    font-family: Nunito;
    font-style: normal;
`;
