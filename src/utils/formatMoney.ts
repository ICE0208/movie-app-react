const formatMoney = (money: number = 0) => {
  const formattedNumber = money.toLocaleString();
  const formattedWithDecimals = formattedNumber + '.00';
  return formattedWithDecimals;
};

export default formatMoney;
