import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = () => {
    const cards = [
        { place: "Beachfront Paradise", price: "From $200 per night" },
        { place: "Mountain Retreat", price: "From $150 per night" },
        { place: "City Center Apartment", price: "From $100 per night" },
        { place: "Country House", price: "From $120 per night" },
        { place: "Luxury Villa", price: "From $500 per night" },
        { place: "Cozy Cottage", price: "From $90 per night" },
    ];

    return (
        <>
            <Link to="/detailPage">
                <Container>
                    {cards.slice(0, 3).map((card, index) => (
                        <DetailBox key={index}>
                            <IMG></IMG>
                            <CardText>
                                <Place>{card.place}</Place>
                                <Price>{card.price}</Price>
                            </CardText>
                        </DetailBox>
                    ))}
                </Container>
            </Link>
            <Container>
                {cards.slice(3, 6).map((card, index) => (
                    <DetailBox key={index}>
                        <IMG></IMG>
                        <CardText>
                            <Place>{card.place}</Place>
                            <Price>{card.price}</Price>
                        </CardText>
                    </DetailBox>
                ))}
            </Container>
        </>
    );
};
export default Card;

const Place = styled.div`
    height: 24px;
    margin: 12px 12px 0px 12px;
    align-self: stretch;
    color: #000;
    font-family: Nunito;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    display: flex;
`;

const Price = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    height: 316px;
    margin: 0px 12px 12px 12px;
    align-self: stretch;
    color: #000;
    text-align: right;
    font-family: Nunito;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
`;

const CardText = styled.div`
    height: 84px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`;

const IMG = styled.div`
    flex: 1 0 0;
    height: 340px;
    align-self: stretch;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    background: rgba(217, 217, 217, 0.5);
`;

const DetailBox = styled.div`
    height: 424px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1 0 0;
    border-radius: 16px;
    border: 1px solid rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 40px;
    margin-bottom: 60px;
`;
