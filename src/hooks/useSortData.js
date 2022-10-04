const useSortData = (apiData) => {
  const transactions = apiData.transactions.sort(function (a, b) {
    return Math.abs(a.amount.value) - Math.abs(b.amount.value);
  });
  let list = [];
  for (let i = 0; i < 10; i++) {
    list.push(transactions[i]);
  }

  return list;
};

export default useSortData;
