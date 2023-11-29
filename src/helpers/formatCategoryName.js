const formatCategoryName = category => {
  switch (category) {
    case 'lost-found':
      return 'lost/found';
    case 'in-good-hands':
      return 'in good hands';
    default:
      return 'sell';
  }
};

export default formatCategoryName;
