import "./App.css";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <StyledContent>
            안녕~!~~!~!~
            <BrowserRouter>
                <Routes>
                    <Route></Route>
                </Routes>
            </BrowserRouter>
        </StyledContent>
    );
}
export default App;

const StyledContent = styled.div`
    /* width: 100%; */
    margin: 0px 170px 0px 170px;
    height: 100vh;
    background-color: #a2a2a2;

    display: flex;
    justify-content: center;
    align-items: center;

    overflow-y: hidden;
    overflow-x: hidden;
`;
