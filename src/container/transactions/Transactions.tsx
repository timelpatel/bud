import React, { useEffect, useState } from "react";
import Table from "../../components/Table/Table";
import formatDate from "../../utils/formatDate";
import sortTenSmallest from "../../utils/sortTenSmallest";
import { API_URL } from "../../consts";
import useFetch from "../../hooks/useFetch";

export default function Transactions() {
  interface Props {
    amount: {
      currency_iso: string;
      value: string;
    };
    date: `${number}/${number}/${number}`;
    description: string;
  }

  const { data, error, loading } = useFetch(API_URL);
  const [sortedData, setSortedData] = useState(null);
  const [tableData, setTableData] = useState(null);

  const tableHeadings = [
    { data: "description", title: "Description" },
    { data: "date", title: "Date" },
    { data: "amount", title: "Amount" },
  ];

  function cleanTableData(data: Props[]) {
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
  }

  useEffect(() => {
    if (data) setSortedData(sortTenSmallest(data));
  }, [data]);

  useEffect(() => {
    if (sortedData) setTableData(cleanTableData(sortedData));
  }, [sortedData]);

  return (
    <>
      {loading && <p>Loading...</p>}

      {error && <p>Failed to load transactions</p>}

      {!error && data && (
        <Table
          caption="10 smallest expenses"
          data={tableData}
          headings={tableHeadings}
        />
      )}
    </>
  );
};
