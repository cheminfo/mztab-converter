import { readFileSync } from 'fs';
import { join } from 'path';

import { convert } from '..';

describe('convert', () => {
  it('should return 42', () => {
    const data = readFileSync(join(__dirname, 'data/test.mztab'));
    const result = convert(data);
    //console.log(result[0]);
    //    expect(result).toBe(42);
  });
});
