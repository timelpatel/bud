const sortTenSmallest = (apiData) => {
  const transactions = apiData.transactions.sort(function (a, b) {
    return Math.abs(a.amount.value) - Math.abs(b.amount.value);
  });

  return transactions.slice(0, 10);
};

export default sortTenSmallest;
