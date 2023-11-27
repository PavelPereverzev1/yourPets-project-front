import React from 'react';

import AddMoreDetailsForm from './AddMoreDetailsForm';
import SellMoreDetailsForm from './SellMoreDetailsForm';

const MoreDetailsForm = ({ next, prev, data }) => {
  console.log('MoredetailsForm data', data.noticeType);

  if (data.noticeType === 'your pet') {
    return <AddMoreDetailsForm next={next} prev={prev} data={data} />;
  } else {
    return <SellMoreDetailsForm next={next} prev={prev} data={data} />;
  }
};

export default MoreDetailsForm;
