import React from 'react';
import { Link } from 'react-router-dom';
import css from './ModalNotice.module.css';

import Modal from 'components/Modal/Modal';
import AddToFavorite from 'components/AddToFavorite/AddToFavorite';
import Contact from 'components/Contact/Contact';

import petImg from '../../images/pets/pet-photo-example.png';

const ModalNotice = ({ active, setActive, item }) => {
  // Цей об'єкт імітує пропс який приходе з батьківсьго компоненту NoticeCategoryItem.
  // Потрібно виделити після створення компоненту NoticeCategoryItem.
  const categoryItem = {
    name: 'Rich',
    birthday: '21.09.2020',
    type: 'Pomeranian',
    city: 'Lviv',
    sex: 'male',
    email: 'user@mail.com',
    phone: '+380971234567',
    header: 'Cute dog looking for a home',
    content:
      'Rich would be the perfect addition to an active family that loves to play and go on walks. I bet he would love having a doggy playmate too! ',
    category: 'In good hands',
    imgSrc: petImg,
  };
  return (
    <Modal active={active} setActive={setActive}>
      <div className={css.content_top}>
        <img className={css.pet_photo} src={item.img} alt="#" />
        <p className={css.pet_category}>{item.state}</p>
        <div className={css.advertisement}>
          <h1>{categoryItem.header}</h1>
          <div className={css.advertisement_list}>
            <ul className="advertisement-list-left">
              <li>Name:</li>
              <li>Birthday:</li>
              <li>Type:</li>
              <li>Place:</li>
              <li>The sex:</li>
              <li>Email:</li>
              <li>Phone:</li>
            </ul>
            <ul className="advertisement-list-right">
              <li>{categoryItem.name}</li>
              <li>{categoryItem.birthday}</li>
              <li>{categoryItem.type}</li>
              <li>{item.location}</li>
              <li>{item.sex}</li>
              <li>
                <Link
                  className={css.contacts}
                  to={`mailto:${categoryItem.email}`}
                >
                  {categoryItem.email}
                </Link>
              </li>
              <li>
                <Link className={css.contacts} to={`tel:${categoryItem.phone}`}>
                  {categoryItem.phone}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className={css.content_middle}>Comments: {categoryItem.content}</p>
      <div className={css.content_bottom}>
        <AddToFavorite />
        <Contact categoryItem={categoryItem} />
      </div>
    </Modal>
  );
};

export default ModalNotice;
