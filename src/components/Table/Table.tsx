import React from "react";
import { TableContainer, THead, Th, Td, Caption } from "./style";

interface IData {
  amount: string;
  data: string;
  description: string;
  [index: string]: string; // TODO is this correct?
}

interface IHeadings {
  data: string;
  title: string;
}

interface IProps {
  caption?: string;
  data: IData[];
  headings: IHeadings[];
}

export default function Table({ caption, data, headings }: IProps) {
  return data && data.length > 0 ? (
    <TableContainer>
      {caption ? <Caption>{caption}</Caption> : null}
      <THead>
        <tr>
          {headings.map((heading: IHeadings) => (
            <Th key={heading.title} scope="col">
              {heading.title}
            </Th>
          ))}
        </tr>
      </THead>

      <tbody>
        {data.map((row: IData) => (
          <tr key={row.description}>
            {headings.map((col: IHeadings) => (
              <Td key={col.title}>{row[col.data]}</Td>
            ))}
          </tr>
        ))}
      </tbody>
    </TableContainer>
  ) : null;
}
