import { parseMTD } from './parsers/parseMTD';



export function parseBlock(lines) {
	const block = { metadata: [], variables: {} };

	let variableNames = [];
	for (let line of lines) {
		const fields = line.split("\t");
		switch (fields[0]) {
			case '':
			case undefined:
				break;
			case 'PRH':
				variableNames = fields;
				appendPRH(block, variableNames);
				break;
			case 'COM':
				appendCOM(block, fields, variableNames);
				break;
			case 'PRT':
				appendPRT(block, fields, variableNames);
				break;
			case 'MTD':
				block.metadata.push(parseMTD(fields));
			case 'SML':
				appendPRT(block, fields, variableNames);
				break;
			case 'SMH':
				variableNames = fields;
				appendPRH(block, variableNames);
				break;
			case 'PSH':
				variableNames = fields;
				appendPRH(block, variableNames);
			case 'PSM':
				appendPRT(block, fields, variableNames);
				break;
			default:
			//    throw new Error(`Unknown field name: ${fields[0]}`);
		}

	}
	console.log(block.variables);

	return block;

}


function appendPRH(block, variableNames) { // function for identificators 
	for (let name of variableNames) {
		block.variables[name] = { data: [] };
	}

}

function appendCOM(block, fields, variableNames) { // function for converting comments in the file as labels
	for (let i = 0; i < fields.length; i++) {
		block.variables[variableNames[i]].label = fields[i];
	}
}

function appendPRT(block, fields, variableNames) { // function for putting values in the identifiers as a part of array 
	for (let i = 0; i < fields.length; i++) {

		//block.variables[variableNames[i]].data.push(fields[i]);
	}
}
