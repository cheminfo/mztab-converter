import { readFileSync } from 'fs';
import { join } from 'path';
import { convert } from '..';

import { parseBlock } from '../parseBlock';

describe('convert', () => {
	it('should return 42', () => {
		const data = readFileSync(join(__dirname, 'data/test.mztab'), 'utf8');

		const result = parseBlock(data.split('\n'));
		console.log(result);
		//    expect(result).toBe();
	});
});
