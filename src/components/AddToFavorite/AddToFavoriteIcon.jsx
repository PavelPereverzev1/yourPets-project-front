export const AddToFavoriteIcon = ({ isFavorite }) => {
  return (
    <svg
      fill={isFavorite ? 'white' : '#54ADFF'}
      stroke={'white'}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="24"
      height="24"
      style={{ transition: 'fill 0.3s' }}
    >
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit="4"
        strokeWidth="2"
        d="M5.775 16.063l10.225 10.603 10.225-10.603c1.137-1.179 1.775-2.777 1.775-4.444 0-3.471-2.714-6.285-6.061-6.285-1.607 0-3.149 0.662-4.286 1.841l-1.653 1.715-1.653-1.715c-1.137-1.179-2.678-1.841-4.286-1.841-3.347 0-6.061 2.814-6.061 6.285 0 1.667 0.639 3.266 1.775 4.444z"
      ></path>
    </svg>
  );
};
