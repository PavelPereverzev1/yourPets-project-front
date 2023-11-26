// import sponsor from './sponsors.json';
import { useSelector } from 'react-redux';
import {
  BigText,
  InfoItem,
  InfoLink,
  InfoList,
  LogoCard,
  TitleCard,
  WrapperCard,
  WrapperInfo,
  WrapperSponsors,
} from './OurFriends.styled';
import WorkDaysBtn from './WorkDaysBtn/WorkDaysBtn';
import { selectFriend } from 'redux/OurFriends/OurFriendsSlice';

export default function OurFriends() {
  const friends = useSelector(selectFriend);
  console.log(friends.friends)

  return (
      <WrapperSponsors>
        {friends.friends?.map(
          ({
            title,
            url,
            addressUrl,
            imageUrl,
            address,
            workDays,
            email,
            phone,
            _id
          }) => (
              <WrapperCard key={_id}>
                <TitleCard target="_blank" to={url}>
                  {title}
                </TitleCard>
                <WrapperInfo>
                  <LogoCard src={imageUrl} alt="logo"/>
                  <InfoList>
                    <InfoItem>
                      {workDays && workDays.length>0? (
                        <WorkDaysBtn workDays={workDays}/>
                      ) : (
                        <p>
                          <BigText>Time: </BigText>day and night
                        </p>
                      )}
                    </InfoItem>
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
                          <BigText>Email: </BigText>{' '}
                          {phone ? 'phone only' : 'website only'}
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
                          {email ? 'email only' : 'website only'}
                        </p>
                      )}
                    </InfoItem>
                  </InfoList>
                </WrapperInfo>
              </WrapperCard>
          )
        )}
      </WrapperSponsors>
  );
}
