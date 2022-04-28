import { ensureString } from 'ensure-string';

import { parseBlock } from './parseBlock';

/**
 * Returns a very important number
 * @return {array}
 */
export function convert(data) {
  const text = ensureString(data);
  const results = [];
  const blocks = text.split(/\r?\n\r?\n/);
  for (let block of blocks) {
    const lines = block.split(/\r?\n/);

    results.push(parseBlock(lines));
  }

  return results;
}
