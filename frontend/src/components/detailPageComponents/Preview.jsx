import styled from "styled-components";

const Preview = () => {
    return (
        <PreviewContainer>
            <TitleText>Luxury Villa in Paradise</TitleText>
            <Text>Perfect getaway for a memorable stay</Text>
            <Description>
                <Box>⭐5-star rating</Box>
                <Box>Superhost</Box>
            </Description>
            <PreIMG>
                <IMGBOX></IMGBOX>
                <Grid>
                    <GridContainer>
                        <IMGBOX></IMGBOX>
                        <IMGBOX></IMGBOX>
                    </GridContainer>
                    <GridContainer>
                        <IMGBOX></IMGBOX>
                        <IMGBOX></IMGBOX>
                    </GridContainer>
                </Grid>
            </PreIMG>
        </PreviewContainer>
    );
};

export default Preview;

const PreviewContainer = styled.div`
    margin-top: 60px;
`;

const TitleText = styled.div`
    display: flex;
    align-self: stretch;
    color: #666;
    font-size: 45px;
    font-weight: 700;
    line-height: 53px; /* 120% */
`;

const Text = styled.div`
    margin: 12px 0px;
    display: flex;
    justify-content: start;
    align-self: stretch;
    color: #000;
    font-size: 21px;
    font-weight: 400;
    line-height: 29px; /* 150% */
`;

const Description = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 8px;
`;

const Box = styled.div`
    font-size: 20px;
    padding: 2px 4px;
    /* gap: 8px; */
    border-radius: 2px;
    border: 0.5px solid rgba(0, 0, 0, 0.1);
    background: rgba(217, 217, 217, 0.5);
`;

const PreIMG = styled.div`
    display: flex;
    margin: 60px 0px;
    height: 504px;
    gap: 8px;
`;

const IMGBOX = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 0 0;
    align-self: stretch;
    border-radius: 16px;
    background: rgba(217, 217, 217, 0.5);
`;

const Grid = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1 0 0;
    align-self: stretch;
    border-radius: 16px;
    gap: 8px;
`;

const GridContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 0 0;
    align-self: stretch;
    border-radius: 16px;
    gap: 8px;
`;
