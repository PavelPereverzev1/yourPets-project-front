export const formatDate = (isoDate, format) => {
  const date = new Date(isoDate);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  const formatParts = {
    DD: day,
    MM: month,
    YYYY: year,
  };

  return format.replace(/(DD|MM|YYYY)/g, match => formatParts[match]);
};
