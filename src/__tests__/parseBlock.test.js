import { readFileSync } from 'fs';
import { join } from 'path';

import { parseBlock } from '../parseBlock';

describe('convert', () => {
  it('should return 42', () => {
    const data = readFileSync(join(__dirname, 'data/block.mztab'), 'utf8');
    const result = parseBlock(data.split('\n'));
    //console.log(result[0]);
    //    expect(result).toBe(42);
  });
});
