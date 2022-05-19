import { readFileSync } from 'fs';
import { join } from 'path';
import { convert } from '..';

describe('convert', () => {
  it('should return 42', () => {
    const data = readFileSync(join(__dirname, 'data/block.mztab'), 'utf-8');
    const result = convert(data);
    expect(result[0].variables.PRH).toStrictEqual({ data: [], label: 'COM' });
    expect(result).toMatchSnapshot();
    expect(result).toMatchInlineSnapshot(`
      Array [
        Object {
          "metadata": Array [],
          "variables": Object {
            "PRH": Object {
              "data": Array [],
              "label": "COM",
            },
            "accession": Object {
              "data": Array [],
              "label": "Accession",
            },
            "ambiguity_members": Object {
              "data": Array [],
              "label": "Ambiguity Members",
            },
            "best_search_engine_score[1]": Object {
              "data": Array [],
              "label": "best Mascot score",
            },
            "database": Object {
              "data": Array [],
              "label": "Database",
            },
            "database_version": Object {
              "data": Array [],
              "label": "Version",
            },
            "description": Object {
              "data": Array [],
              "label": "Description",
            },
            "modifications": Object {
              "data": Array [],
              "label": "Modifications",
            },
            "protein_abundance_std_error_study_variable[1]": Object {
              "data": Array [],
              "label": "Standard Error (HSPControl)",
            },
            "protein_abundance_std_error_study_variable[2]": Object {
              "data": Array [],
              "label": "Standard Error (HSPTreatment)",
            },
            "protein_abundance_stdev_study_variable[1]": Object {
              "data": Array [],
              "label": "Standard Deviation (HSPControl)",
            },
            "protein_abundance_stdev_study_variable[2]": Object {
              "data": Array [],
              "label": "Standard Deviation (HSPTreatment)",
            },
            "protein_abundance_study_variable[1]": Object {
              "data": Array [],
              "label": "Abundance (HSPControl)",
            },
            "protein_abundance_study_variable[2]": Object {
              "data": Array [],
              "label": "Abundance (HSPTreatment)",
            },
            "search_engine": Object {
              "data": Array [],
              "label": "Search Engine",
            },
            "species": Object {
              "data": Array [],
              "label": "Species",
            },
            "taxid": Object {
              "data": Array [],
              "label": "Taxonomie ID",
            },
          },
        },
      ]
    `);
    // expect(result).toBe('');
  });
});
