import styled from "styled-components";

const ProductDescription = () => {
  return (
    <DescriptionContainer>
      <TitleText>[MEGA SALE] Entire guest suite in Capri, Italy</TitleText>
      <Line />
      <>
        <SubTitle>Self check-in👋</SubTitle>
        <SubDescription>Check yourself in with the lockbox.</SubDescription>
        <SubTitle>Marek is a Superhost</SubTitle>
        <SubDescription>
          Superhosts are experienced, highly rated Hosts.{" "}
        </SubDescription>
        <SubTitle>Free cancellation before Oct 22</SubTitle>
        <SubDescription>
          Get a full refund if you change your mind.{" "}
        </SubDescription>
      </>
      <Paragraph>
        <BoldText>The space</BoldText>
        <br />
        Since 1850 the oldest sea house in Marina Piccola just 7 meters from the
        beach. Breathtaking view , nature exudes in all its multiple splendor.
        The home deliberately reflects traces of the past without neglecting
        modern comfort. A romantic and characteristic place, where you can spend
        an extremely evocative unconventional stay. 3 min. from the bus/taxi
        stop 10 min. from the center Restaurants and private beaches just a few
        meters away. Online staff always available. The space A room furnished
        with evocative local architecture, and antique frescoes on the ceiling.
        Equipped with all the essentials to stay in one of the most spectacular
        and unique corners of the island. Large and airy bedroom overlooking the
        sea with a very small kitchenette equipped to prepare a coffee and
        breakfast (but not suitable for cooking unless small emergency things).
        Small bathroom with shower and shower vase / bidet. Balcony sea view
        adjacent to the room with chairs and coffee table. Large private patio
        overlooking the sea with a shower and sink, accessible from the balcony
        staircase, ideal for sunbathing, relaxing, or for a romantic lunch or
        candlelit dinner
      </Paragraph>
      <Paragraph>
        <BoldText>Guest access</BoldText>
        <br />
        The room is independent. The entrance door is exclusive to guests and is
        equipped with a small private balcony overlooking the sea and with a
        large patio that is reserved for guests (excluding the use of patio
        spaces that are reserved for staff, which are signposted)
      </Paragraph>
      <Paragraph>
        <BoldText>Other things to note</BoldText>
        <br />* Wi-Fi is fast but being on an island and by the sea, sometimes
        the signal may be weak or missing. Close to the bed, the signal is
        stronger. ** Breakfast is not included but can be booked the day before.
        *** The cleaning and linen change service takes place once a day.
        check-in but you can request, with an additional cost, also an extra and
        daily cleaning. *** Check-in is self-contained and there is no staff at
        check-in. For this reason we will ask online for the photo of the
        documents of all guests, in order to register them and comply with local
        laws, avoiding fines.
      </Paragraph>
      <Paragraph>
        <BoldText>Please note:</BoldText>
        <br />
        the SMALL kitchen, as shown in the photos, is not suitable for cooking
        but it is only a small point where you can prepare a coffee and rinse a
        cup. The stove is transportable just to allow you to move it outside as
        there is no space for large operations. It is like that for small boats.
        Capri is an island made of stairs. Wherever you'll find them!
      </Paragraph>
    </DescriptionContainer>
  );
};

export default ProductDescription;

const SubTitle = styled.div`
  display: flex;
  margin-bottom: 3px;
  align-self: stretch;
  color: rgba(0, 0, 0, 0.5);
  font-family: Nunito;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px; /* 125% */
`;
const SubDescription = styled.div`
  display: flex;
  align-self: stretch;
  color: #7f7f7f;
  margin-bottom: 25px;
  font-family: Nunito;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 100% */
`;
const Line = styled.div`
  height: 5px;
  margin: 60px 0px;
  flex-shrink: 0;
  align-self: stretch;
  stroke-width: 5px;
  stroke: rgba(0, 0, 0, 0.1);
  background-image: url("/assets/icons/detailVector1.svg");
`;

const TitleText = styled.div`
  display: flex;
  align-self: stretch;
  color: #666;
  font-family: Nunito;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px; /* 120% */
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-self: stretch;
  color: #000;
`;

const Paragraph = styled.p`
  display: block; /* block으로 변경하여 flex 정렬을 제거 */
  width: 90%;
  color: #000;
  font-family: Nunito;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 125% */
  margin-top: 60px;
  margin-bottom: 60px;
  align-self: stretch;
  text-align: left; /* 텍스트 왼쪽 정렬 (block일 경우 기본값) */
`;

const BoldText = styled.span`
  font-weight: 700;
  font-size: 22px;
  display: block;
  margin-bottom: 8px;
`;
