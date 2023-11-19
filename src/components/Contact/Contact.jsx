import React from 'react';
import { Link } from 'react-router-dom';

import ButtonComponent from 'components/ButtonComponent/ButtonComponent';

const Contact = ({ categoryItem }) => {
  return (
    <ButtonComponent width={129}>
      <Link className="contact" to={`tel:${categoryItem.phone}`}>
        Contact
      </Link>
    </ButtonComponent>
  );
};

export default Contact;
