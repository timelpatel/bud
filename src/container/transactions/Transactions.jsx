import React, { useEffect, useState } from "react";
import Table from "../../components/Table/Table";
import formatDate from "../../utils/formatDate";
import sortTenSmallest from "../../utils/sortTenSmallest";
import { API_URL } from "../../consts";
import useFetch from "../../hooks/useFetch";

const Transactions = () => {
  const { data, error, loading } = useFetch(API_URL);
  const [sortedData, setSortedData] = useState(null);
  const [tableData, setTableData] = useState(null);

  const tableHeadings = [
    { title: "Description", data: "description" },
    { title: "Date", data: "date" },
    { title: "Amount", data: "amount" },
  ];

  function cleanTableData(data) {
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
        description: data[i].description,
        date: formatDate(data[i].date),
        amount: `${currency} ${data[i].amount.value}`,
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

export default Transactions;
