const formatRating = (rating: number = 0) => {
  return Math.ceil(rating * 100) / 100;
};

export default formatRating;
