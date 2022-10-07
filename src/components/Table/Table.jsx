import React from "react";
import { TableContainer, THead, Th, Td, Caption } from "./style";

const Table = ({ caption, data, headings }) => {
  return data && data.length > 0 ? (
    <TableContainer>
      <Caption>{caption}</Caption>
      <THead>
        <tr>
          {headings.map((heading) => (
            <Th key={heading.title} scope="col">
              {heading.title}
            </Th>
          ))}
        </tr>
      </THead>

      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {headings.map((col) => (
              <Td key={col.title}>{row[col.data]}</Td>
            ))}
          </tr>
        ))}
      </tbody>
    </TableContainer>
  ) : null;
};

export default Table;
