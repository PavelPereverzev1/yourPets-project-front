import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import css from './ModalNotice.module.css';

import Modal from 'components/Modals/Modal/Modal';
import AddToFavorite from 'components/AddToFavorite/AddToFavorite';
import Contact from 'components/Contact/Contact';
import Loader from 'components/LoaderGif/LoaderGif';

import { getNoticesDetailsAPI } from '../../services/noticesAPI';

const ModalNotice = ({ active, setActive, noticeDetail }) => {
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
        <div className={css.content_top}>
          <img className={css.pet_photo} src={notice.photoURL} alt="#" />
          <p className={css.pet_category}>{notice.noticeType}</p>
          <div className={css.advertisement}>
            <h3>{notice.title}</h3>
            <div className={css.advertisement_list}>
              <ul className={css.advertisement_list_left}>
                <li>Name:</li>
                <li>Birthday:</li>
                <li>Type:</li>
                <li>Place:</li>
                <li>The sex:</li>
                <li>Email:</li>
                <li>Phone:</li>
              </ul>
              <ul className={css.advertisement_list_right}>
                <li>{notice.name}</li>
                <li>{notice.birthday}</li>
                <li>{notice.petType}</li>
                <li>{notice.location}</li>
                <li>{notice.sex}</li>
                <li>
                  <Link
                    className={css.contacts}
                    to={`mailto:${notice.ownerEmail}`}
                  >
                    {notice.ownerEmail}
                  </Link>
                </li>
                <li>
                  <Link
                    className={css.contacts}
                    to={`tel:${notice.ownerPhone}`}
                  >
                    {notice.ownerPhone}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className={css.content_middle}>
          <span>Comments:</span> {notice.comments}
        </p>
        <div className={css.content_bottom}>
          <AddToFavorite notice={notice} />
          <Contact notice={notice} />
        </div>
      </Modal>
    </>
  );
};

export default ModalNotice;
