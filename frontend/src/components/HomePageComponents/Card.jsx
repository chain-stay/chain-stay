import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = () => {
    const cards = [
        {
            place: "Beachfront Paradise",
            price: "From ₩750,206 per night",
            imageUrl: "assets/images/beach/Beach1.png",
        },
        {
            place: "Castle in Bad Hönningen, Germany",
            price: "From ₩283,578 per night",
            imageUrl: "assets/images/G2.png",
        },
        {
            place: "Farm stay in Narfasel, Iceland",
            price: "From ₩683,116 per night",
            imageUrl: "assets/images/G3.png",
        },
        {
            place: "Entire rental unit in Venice, Italy",
            price: "From ₩375,103 per night",
            imageUrl: "assets/images/G4.png",
        },
        {
            place: "Entire place in Dublin, Ireland",
            price: "From ₩28,717,895 per night",
            imageUrl: "assets/images/G5.png",
        },
        {
            place: "Entire guesthouse in Kotka, Finland",
            price: "From ₩375,103 per night",
            imageUrl: "assets/images/G6.png",
        },
    ];

    return (
        <>
            <Link to="/detailPage">
                <Container>
                    {cards.slice(0, 3).map((card, index) => (
                        <DetailBox key={index}>
                            <IMG src={card.imageUrl} alt={card.place} />
                            <CardText>
                                <Place>{card.place}</Place>
                                <Price>{card.price}</Price>
                            </CardText>
                        </DetailBox>
                    ))}
                </Container>

                <Container>
                    {cards.slice(3, 6).map((card, index) => (
                        <DetailBox key={index}>
                            <IMG src={card.imageUrl} alt={card.place} />
                            <CardText>
                                <Place>{card.place}</Place>
                                <Price>{card.price}</Price>
                            </CardText>
                        </DetailBox>
                    ))}
                </Container>
            </Link>
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

const IMG = styled.img`
    flex: 1 0 0;
    height: 340px;
    /* width: 340px; */
    align-self: stretch;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    object-fit: cover;
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
    box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff;
    transition: margin-top 0.5s, transform 0.5s; /* Smooth transition for margin-top and transform */

    &:hover {
        margin-top: -30px; /* Add hover effect */
        transform: scale(1.05); /* Slightly enlarge */
    }
    overflow: hidden;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 40px;
    margin-bottom: 60px;
`;
