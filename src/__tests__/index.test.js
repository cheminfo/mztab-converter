import { readFileSync } from 'fs';
import { join } from 'path';
import { convert } from '..';



describe('convert', () => {
	it('should return 42', () => {
		const data = readFileSync(join(__dirname, 'data/block.mztab'), 'utf-8');
		const result = convert(data);
		console.log(result);
		// expect(result).toBe('');
	});
});
