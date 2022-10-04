import React from "react";
import { TableContainer, THead, Th, Td, Caption } from "./style";

const Table = ({ caption, data, headings }) => {
  return (
    <TableContainer>
      <Caption>{caption}</Caption>
      <THead>
        <tr>
          {headings.map((title) => (
            <Th key={title} scope="col">
              {title}
            </Th>
          ))}
        </tr>
      </THead>

      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <Td>{row.description}</Td>
            <Td>{row.date}</Td>
            <Td>&pound; {row.amount.value}</Td>
          </tr>
        ))}
      </tbody>
    </TableContainer>
  );
};

export default Table;
