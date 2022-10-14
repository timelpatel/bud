import React, { useEffect, useState } from "react";
import Table from "../../components/Table/Table";
import formatDate from "../../utils/formatDate";
import sortTenSmallest from "../../utils/sortTenSmallest";
import { API_URL } from "../../consts";
import useFetch from "../../hooks/useFetch";

export default function Transactions() {
  const [showTransactions, setShowTransactions] = useState(true);

  function buttonClick() {
    setShowTransactions(!showTransactions);
  }

  interface IApi {
    data: any;
    error: boolean;
    loading: boolean;
  }

  interface IProps {
    amount: {
      currency_iso: string;
      value: string;
    };
    date: `${number}/${number}/${number}`;
    description: string;
  }

  let api: IApi | null = null;
  const [sortedData, setSortedData] = useState(null);
  const [tableData, setTableData] = useState(null);

  if (!api) {
    api = useFetch(API_URL);
  }

  const tableHeadings = [
    { data: "description", title: "Description" },
    { data: "date", title: "Date" },
    { data: "amount", title: "Amount" },
  ];

  function cleanTableData(data: IProps[]) {
    console.log('cleanTableData')
    let arr = [];
    let currency = "";

    for (let i = 0; i < data.length; i++) {
      switch (data[i].amount.currency_iso) {
        case "GBP":
          currency = "£";
          break;
        default:
          currency = "";
      }

      arr.push({
        amount: `${currency} ${data[i].amount.value}`,
        date: formatDate(data[i].date),
        description: data[i].description,
      });
    }

    return arr;
  };

  useEffect(() => {
    if (api.data) {
      setSortedData(sortTenSmallest(api.data));
    }
  }, [api.data]);

  useEffect(() => {
    if (sortedData) setTableData(cleanTableData(sortedData));
  }, [sortedData]);

  return (
    <>
      {api && api.loading && <p>Loading...</p>}

      {api && api.error && <p>Failed to load transactions</p>}

      {api && api.data && !api.error && showTransactions && (
        <Table
          caption="10 smallest expenses"
          data={tableData}
          headings={tableHeadings}
        />
      )}

      <br />
      <br />
      <button onClick={buttonClick}>Show / Hide</button>
    </>
  );
}
