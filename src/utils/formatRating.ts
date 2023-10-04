const formatRating = (rating: number = 0) => {
  return `${Math.ceil(rating * 100) / 100}/10`;
};

export default formatRating;
