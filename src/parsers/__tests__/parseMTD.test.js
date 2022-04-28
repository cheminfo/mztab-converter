import { parseMTD } from '../parseMTD.js';

test('parseMTD', () => {
  const result = parseMTD(['MTD', 'mzTab-type', 'Quantification']);
  expect(result).toStrictEqual({
    description: 'mzTab-type',
    value: 'Quantification',
  });
});
