import "./App.css";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";

function App() {
    return (
        <BrowserRouter>
            <StyledContent>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </StyledContent>
        </BrowserRouter>
    );
}
export default App;

const StyledContent = styled.div`
    width: calc(100% - 340px); /* 화면 너비에서 좌우 margin을 뺀 값으로 설정 */
    margin: 0px 170px;
    height: 100vh;
    background-color: #a2a2a2;

    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */

    overflow-y: hidden;
    overflow-x: hidden;

    color: #000;
    text-align: center;
    font-family: Roboto;
`;
