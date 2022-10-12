interface IData {
  transactions: [];
}

interface IValue {
  amount: {
    value: number;
  };
}

export default function sortTenSmallest(apiData: IData) {
  const transactions = apiData.transactions.sort(function (
    a: IValue,
    b: IValue
  ) {
    return Math.abs(a.amount.value) - Math.abs(b.amount.value);
  });

  return transactions.slice(0, 10);
}
