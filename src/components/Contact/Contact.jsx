import React from 'react';
import { Link } from 'react-router-dom';

import { ContactButton } from './Contact.styled';

const Contact = ({ categoryItem }) => {
  return (
    <ContactButton>
      <Link to={`tel:${categoryItem.phone}`}>Contact</Link>
    </ContactButton>
  );
};

export default Contact;
