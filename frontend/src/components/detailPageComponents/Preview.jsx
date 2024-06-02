import styled from "styled-components";

const Preview = () => {
    return (
        <PreviewContainer>
            <TitleText>Capri private suite on the sea</TitleText>
            <Text>Perfect getaway for a memorable stay</Text>
            <Description>
                <Box>⭐5-star rating</Box>
                <Box>Superhost</Box>
            </Description>
            <PreIMG>
                <IMGBOX>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/images/beach/Beach1.png`}
                        alt="Beach1"
                    />
                </IMGBOX>
                <Grid>
                    <GridContainer>
                        <IMGBOX>
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/images/beach/Beach2.png`}
                                alt="Beach2"
                            />
                        </IMGBOX>
                        <IMGBOX>
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/images/beach/Beach3.png`}
                                alt="Beach3"
                            />
                        </IMGBOX>
                    </GridContainer>
                    <GridContainer>
                        <IMGBOX>
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/images/beach/Beach4.png`}
                                alt="Beach4"
                            />
                        </IMGBOX>
                        <IMGBOX>
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/images/beach/Beach5.png`}
                                alt="Beach5"
                            />
                        </IMGBOX>
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
    border-radius: 2px;
    border: 0.5px solid rgba(0, 0, 0, 0.1);
    background: rgba(217, 217, 217, 0.5);
`;

const PreIMG = styled.div`
    display: flex;
    margin: 60px 0px;
    height: 600px;
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
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        max-height: 100%;
        object-fit: cover;
    }
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
    overflow: hidden;
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
