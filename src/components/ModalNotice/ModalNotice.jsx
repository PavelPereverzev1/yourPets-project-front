import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  TopContainer,
  Image,
  TextCategory,
  AdvertisementContainer,
  Title,
  ListContainer,
  LeftList,
  LeftListItem,
  RightList,
  RightListItem,
  LinkContact,
  MiddleContentText,
  HightLitedText,
  BottomContainer,
} from './ModalNotice.styled';

import Modal from 'components/Modals/Modal/Modal';
import AddToFavorite from 'components/AddToFavorite/AddToFavorite';
import Contact from 'components/Contact/Contact';
import Loader from 'components/LoaderGif/LoaderGif';

import { getNoticesDetailsAPI } from '../../services/noticesAPI';

const ModalNotice = ({
  active,
  setActive,
  noticeDetail,
  handleAttentionModal,
}) => {
  const [notice, setNotice] = useState(' ');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);

        const data = await getNoticesDetailsAPI(noticeDetail);
        setNotice(data.notice);
      } catch (error) {
        console.log('error :>> ', error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [noticeDetail]);

  return (
    <>
      {isLoading && <Loader />}
      <Modal active={active} setActive={setActive}>
        <TopContainer>
          <Image src={notice.photoURL}></Image>
          <TextCategory>{notice.noticeType}</TextCategory>
          <AdvertisementContainer>
            <Title>{notice.title}</Title>
            <ListContainer>
              <LeftList>
                <LeftListItem>Name:</LeftListItem>
                <LeftListItem>Birthday:</LeftListItem>
                <LeftListItem>Type:</LeftListItem>
                <LeftListItem>Place:</LeftListItem>
                <LeftListItem>The sex:</LeftListItem>
                <LeftListItem>Email:</LeftListItem>
                <LeftListItem>Phone:</LeftListItem>
              </LeftList>
              <RightList>
                <RightListItem>{notice.name}</RightListItem>
                <RightListItem>{notice.birthday}</RightListItem>
                <RightListItem>{notice.petType}</RightListItem>
                <RightListItem>{notice.location}</RightListItem>
                <RightListItem>{notice.sex}</RightListItem>
                <RightListItem>
                  <LinkContact as={Link} to={`mailto:${notice.ownerEmail}`}>
                    {notice.ownerEmail}
                  </LinkContact>
                </RightListItem>
                <RightListItem>
                  <LinkContact as={Link} to={`tel:${notice.ownerPhone}`}>
                    {notice.ownerPhone}
                  </LinkContact>
                </RightListItem>
              </RightList>
            </ListContainer>
          </AdvertisementContainer>
        </TopContainer>
        <MiddleContentText>
          <HightLitedText>Comments:</HightLitedText> {notice.comments}
        </MiddleContentText>
        <BottomContainer>
          <AddToFavorite
            notice={notice}
            handleAttentionModal={handleAttentionModal}
          />
          <Contact notice={notice} />
        </BottomContainer>
      </Modal>
    </>
  );
};

export default ModalNotice;
