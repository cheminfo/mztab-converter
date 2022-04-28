export function parseMTD(fields) {
  return {
    description: fields[1],
    value: fields[2],
  };
}
