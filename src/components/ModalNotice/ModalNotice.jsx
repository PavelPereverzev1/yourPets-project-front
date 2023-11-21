import React, { useEffect } from 'react'; // видалив імпорт useState додаш коли виправиш закоментоване
import { Link } from 'react-router-dom';
import css from './ModalNotice.module.css';

import Modal from 'components/Modal/Modal';
import AddToFavorite from 'components/AddToFavorite/AddToFavorite';
import Contact from 'components/Contact/Contact';

import getNoticesDetailsAPI from '../../services/noticesAPI';
// import petImg from '../../images/pets/pet-photo-example.png';

const ModalNotice = ({ active, setActive, item }) => {
  // const id = item.id;
  // const [notice, setNotice] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        // const data = await getNoticesAPI();
        // const data = await getNoticesDetailsAPI(id);
        // setNotice(data);
      } catch (error) {
        console.log('error :>> ', error);
      }
    };
    getData();
    console.log(getData);
  }, [id]);

  // const categoryItem = {
  //   name: 'Rich',
  //   birthday: '21.09.2020',
  //   type: 'Pomeranian',
  //   location: 'Lviv',
  //   sex: 'male',
  //   email: 'user@mail.com',
  //   phone: '+380971234567',
  //   header: 'Cute dog looking for a home',
  //   content:
  //     'Rich would be the perfect addition to an active family that loves to play and go on walks. I bet he would love having a doggy playmate too! ',
  //   category: 'In good hands',
  //   imgSrc: petImg,
  // };

  return (
    <Modal active={active} setActive={setActive}>
      <div className={css.content_top}>
        <img className={css.pet_photo} src={notice.img} alt="#" />
        <p className={css.pet_category}>{notice.category}</p>
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
              <li>{notice.name}</li>
              <li>{notice.birthday}</li>
              <li>{notice.type}</li>
              <li>{notice.location}</li>
              <li>{notice.sex}</li>
              <li>
                <Link
                  className={css.contacts}
                  to={`mailto:${categoryItem.email}`}
                >
                  {notice.email}
                </Link>
              </li>
              <li>
                <Link className={css.contacts} to={`tel:${notice.phone}`}>
                  {notice.phone}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className={css.content_middle}>Comments: {notice.content}</p>
      <div className={css.content_bottom}>
        <AddToFavorite />
        <Contact notice={notice} />
      </div>
    </Modal>
  );
};

export default ModalNotice;
