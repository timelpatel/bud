type Tdate = `${number}/${number}/${number}`;

export default function formatDate(d: Tdate) {

  const datePart = d.match(/\d+/g),
    year = datePart[0],
    month = datePart[1],
    day = datePart[2];

  return `${day}/${month}/${year}`;
}
