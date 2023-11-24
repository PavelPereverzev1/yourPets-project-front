import React from 'react';
import { Link } from 'react-router-dom';

import { ContactButton } from './Contact.styled';

const Contact = ({ notice }) => {
  return (
    <ContactButton>
      <Link to={`tel:${notice.ownerPhone}`}>Contact</Link>
    </ContactButton>
  );
};

export default Contact;
