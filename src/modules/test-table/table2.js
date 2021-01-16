const header = {
  value: [
    {
      label: 'madde',
      value: null
    },
    {
      label: 'sadelesdirilmis vergi',
      value: null
    },
    {
      label: 'vergitutma bazasi',
      value: null
    },
    {
      label: 'verginin derecesi',
      value: [
        {
          label: 'gelir vergisi',
          value: null
        },
        {
          label: 'omv',
          value: null
        }
      ]
    }
  ]
};

const body = {
  rows: [
    {
      label: '220.8',
      value: [
        {
          label: 'yasayis yeri',
          value: [
            {
              label: 'her kvadrat metr ucun',
              value: [
                {
                  label: 15
                }
              ]
            }
          ]
        }
      ]
    },
    {
      label: '220.8.1',
      value: [
        {
          label: 'zona emsali',
          value: [
            {
              label: 'baki seheri',
              value: [
                {
                  label: 'x'
                }
              ]
            },
            {
              label: '1',
              value: [
                {
                  label: '4'
                }
              ]
            },
            {
              label: '2',
              value: [
                {
                  label: '3'
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

let tab = {};

function gnT(data) {
  let z = 'a';
  if (!Array.isArray(data.value) || !data?.value) {
    console.warn('NEW TD: ', data.label, data.value);

    return z + data.label;
  }

  // console.log(data?.label);

  if (data.value.length === 1) {
    console.warn('NEW TD: ', data.label, data.value);
    return gnT(data.value[0]);
  } else {
    // console.log('NEW ROW: ', data.label);
  }

  data.value.map((row) => {
    console.log('New row: ', data.label, data.value, row);
    return gnT(row);
  });

  // console.log(data.label);

  // return t;
}

console.log(gnT(body));

const data = {
  headers: [
    'madde',
    'vergi notariusu',
    'vergi tutma bazasi',
    'verginin derecesi'
  ],
  body: body
};

const header = data.headers.map((header) => <th>{header}</th>);

function getMaxRowSpan(rows) {
  const arrs = rows.map((row) => {
    if (Array.isArray(row)) {
      return row.length;
    }
    return 0;
  });

  console.log(arrs);
}

function getChildCount(row) {
  let childCount = 0;

  let currentRow = row;
  console.log(currentRow);

  let counts = [];

  while (Array.isArray(currentRow.value)) {
    counts.push(currentRow.value.length);
    currentRow = currentRow.value;
    console.log(currentRow);
  }

  console.log(counts);

  console.log(currentRow);

  return childCount;
}

function generateRow(row) {
  let t = '<tr>';

  if (!row?.value) {
    return t;
  }

  console.log(row);

  t += row.label;

  t += '</tr>';

  if (row.value.length > 1) {
    // return generateRow((row.value))
  }

  return newRow;
}

const generateBody = (body) => {
  const newBody = null;

  const rowComp = body.map((row, i) => {
    return generateRow(row);
  });

  console.log(rowComp);

  return rowComp;
};

// const bodyComp = generateBody(data.body);

function Tables() {
  return (
    <table className={'table'}>
      <thead>
        <tr>{header}</tr>
      </thead>
      {/*<tbody>{bodyComp}</tbody>*/}
    </table>
  );
}

let z = [];

z.push('<h1>');
z.push('dadas');
z.push('</h1>');

export default function Table() {
  return (
    <table className={'table table-bordered'}>
      <thead>
        <tr>
          <th>
            <div dangerouslySetInnerHTML={{ __html: 'madde' }} />
          </th>
          <th>sadelesdirilmis vergi</th>
          <th>vergitutma bazasi</th>
          <th>verginin derecesi</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>220.8</td>
          <td>yasayis sahesi</td>
          <td>her kvadrat metr ucun</td>
          <td>15</td>
        </tr>
        <tr>
          <td rowSpan={4}>220.8.1</td>
          <td rowSpan={4}>zona emsali</td>
        </tr>
        <tr>
          <td>baki seherei</td>
          <td></td>
        </tr>
        <tr>
          <td>1</td>
          <td>4</td>
        </tr>
        <tr>
          <td>2</td>
          <td>3</td>
        </tr>
      </tbody>
    </table>
  );
}
