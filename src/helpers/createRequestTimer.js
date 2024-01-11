import { Report } from 'notiflix';

export const createRequestTimer = () => {
  return setTimeout(() => {
    Report.info(
      'Server Delay',
      'Please note that this project is hosted on a free server. Sometimes, requests may take longer than usual. Thank you for your patience.',
      'Okay'
    );
  }, 5000);
};
