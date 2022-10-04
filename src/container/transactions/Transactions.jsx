import React from "react";
import Table from "../../components/Table/Table";
import useSortData from "../../hooks/useSortData";
import { API_URL } from "../../consts";
import useFetch from "../../hooks/useFetch";

const Transactions = () => {
  const { data, error, loading } = useFetch(API_URL);

  const tableHeadings = ["Description", "Date", "Amount"];

  return (
    <>
      {loading && <p>Loading...</p>}

      {error && <p>Failed to load transactions</p>}

      {data && (
        <Table
          caption="10 smallest expenses"
          data={useSortData(data)}
          headings={tableHeadings}
        />
      )}
    </>
  );
};

export default Transactions;
