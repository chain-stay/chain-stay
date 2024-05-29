import "./App.css";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import LoginModal from "./components/Modal";
import { createContext, useState } from "react";
export const AppContext = createContext();
function App() {
    const [account, setAccount] = useState();
    return (
        <AppContext.Provider value={{ account, setAccount }}>
            <BrowserRouter>
                <StyledContent>
                    <Header />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/detailPage" element={<DetailPage />} />
                        <Route path="/detailPage" element={<DetailPage />} />
                        <Route path="/pre" element={<LoginModal />} />
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
