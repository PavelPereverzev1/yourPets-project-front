import sponsor from './sponsors.json';
import {
  BigText,
  InfoItem,
  InfoLink,
  InfoList,
  LogoCard,
  Title,
  TitleCard,
  Wrapper,
  WrapperCard,
  WrapperInfo,
  WrapperSponsors,
} from './OurFriends.styled';

export default function OurFriends() {
  return (
    <Wrapper>
      <Title>Our friends</Title>
      <WrapperSponsors>
        {sponsor.map(
          ({
            title,
            url,
            addressUrl,
            imageUrl,
            address,
            workDays,
            email,
            phone,
            id,
          }) => (
            <WrapperCard key={id}>
              <TitleCard target="_blank" to={url}>
                {title}
              </TitleCard>
              <WrapperInfo>
                <LogoCard src={imageUrl} alt="logo" />
                <InfoList>
                  {/* <InfoItem>
                    {workDays ? (workDays.map(({isOpen, from, to})=> <InfoLink target="_blank">
                        <BigText>Time: </BigText>
                        {from}-{to}
                      </InfoLink>
)
                    ) : (
                      <p>
                        <BigText>Time: </BigText>day and night
                      </p>
                    )}
                  </InfoItem> */}
                  <InfoItem>
                    {address ? (
                      <InfoLink target="_blank" to={addressUrl}>
                        <BigText>Address: </BigText>
                        {address}{' '}
                      </InfoLink>
                    ) : (
                      <p>
                        <BigText>Address: </BigText>website only
                      </p>
                    )}
                  </InfoItem>
                  <InfoItem>
                    {email ? (
                      <InfoLink target="_blank" to={`mailto:${email}`}>
                        <BigText>Email: </BigText>
                        {email}
                      </InfoLink>
                    ) : (
                      <p>
                        {' '}
                        <BigText>Email: </BigText>
                        phone only
                      </p>
                    )}
                  </InfoItem>
                  <InfoItem>
                    {phone ? (
                      <InfoLink target="_blank" to={`tel:${phone}`}>
                        <BigText>Phone: </BigText>
                        {phone}
                      </InfoLink>
                    ) : (
                      <p>
                        {' '}
                        <BigText>Phone: </BigText>
                        email only
                      </p>
                    )}
                  </InfoItem>
                </InfoList>
              </WrapperInfo>
            </WrapperCard>
          )
        )}
      </WrapperSponsors>
    </Wrapper>
  );
}
