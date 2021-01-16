const body = [
  {
    madde: '220.8.1',
    vergi: 'zona emsali',
    kvm: '1',
    derece: 4
  },
  {
    madde: '220.8.1',
    vergi: 'zona emsali',
    kvm: '2',
    derece: '3'
  }
];

const x =
  // rows: [
  [
    [
      {
        key: 'madde',
        value: '220.8'
      },
      {
        key: 'vergi',
        value: 'zona emsali'
      },
      [
        [
          {
            key: 'kvm',
            value: 1
          },
          {
            key: 'derece',
            value: 4
          }
        ],
        [
          {
            key: 'kvm',
            value: 2
          },
          {
            key: 'derece',
            value: 3
          }
        ]
      ]
    ]
  ];
// ]
// };

const gBody = {
  row: {
    col: [220, 'zona emsali']
  }
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

// console.log(gnT(body));

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

const generateBody = (body) => {
  const newBody = null;

  const rowComp = body.map((row, i) => {
    return generateRow(row);
  });

  console.log(rowComp);

  return rowComp;
};

// const bodyComp = generateBody(data.body);

function gnB(body) {
  let b = [];

  body.map((row) => {
    let keys = Object.keys(row);
    b.push(
      <tr>
        {keys.map((key) => {
          return <td>{row[key]}</td>;
        })}
      </tr>
    );

    return b;
  });

  return b;
}
let b = '';
function gnB2(body) {
  // console.log(body);

  let rows = body.map((row) => {
    b += '<tr>';
    // console.log(row);
    row.forEach((item) => {
      // console.log(item);

      if (!Array.isArray(item)) {
        b += '<td>';

        b += item.value;

        b += '</td>';
      } else {
        b += '</tr>';
        return gnB2(item);
      }
    });

    b += '</tr>';
  });

  return b;
}

const t = gnB2(x);

// console.log(t);

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

let z = '';

z += '<h1>';
z += 'dadas';
z += '</h1>';

let xq = [];

xq.push(z);

let xx = [
  {
    id: 'x',
    vergi: 1,
    madde: 2,
    st: 0
  },
  {
    id: 'x',
    vergi: 3,
    madde: 4,
    st: 'y'
  },
  {
    id: 'x',
    vergi: 33,
    madde: 43,
    st: 'y'
  },
  {
    id: 'x',
    vergi: 5,
    madde: 6,
    st: 'y'
  },
  {
    id: 'x',
    vergi: 7,
    madde: 8,
    st: 0
  }
];

let arr = [];
let length = 0;
let stack = [];

function elemExists(stack, elem) {
  return stack.find((item) => {
    // return Object.keys(item).find((x) => {
    // console.log(stack, item);
    return item.key == elem.key && item.value == elem.value;
    // });
  });
}

//iterate through rows
xx.forEach((item) => {
  //iterate through columsn
  let z = Object.keys(item).map((key, i) => {
    if (length) {
      // console.log(key, i);

      const elem = {
        key: key,
        value: item[key]
      };

      let stackExists = elemExists(stack, elem);

      console.log(stack, elem, stackExists);

      if (
        stackExists &&
        stackExists['key'] == key &&
        stackExists['value'] == item[key]
      ) {
        console.warn(stackExists, arr[stackExists['row']][i]);
        arr[stackExists['row']][i]['rowSpan'] =
          !arr[stackExists['row']][i]['rowSpan'] &&
          arr[stackExists['row']][i]['rowSpan'] != 0
            ? 1
            : (arr[stackExists['row']][i]['rowSpan'] += 1);

        return {
          empty: true,
          [key]: item[key],
          value: item[key]
        };
      }
      if (item[key] == arr[length - 1][i][key]) {
        // console.warn(item[key]);

        stack.push({
          row: length - 1,
          key: key,
          value: item[key]
        });

        arr[length - 1][i]['rowSpan'] = !arr[length - 1][i]['rowSpan']
          ? 0
          : arr[length - 1][i]['rowSpan'] + 1;

        return {
          empty: true,
          [key]: item[key],
          value: item[key]
        };
      }
    }

    // if (item[key] = arr[length - 1][i][key]) {
    //   console.warn(item[key]);
    //   arr[length - 1][i]['rowSpan'] = 3;
    // }

    return {
      [key]: item[key],
      value: item[key]
    };
  });

  length = arr.push(z);
});

console.log(arr);
console.log(stack);

let f = arr.map((row) => {
  console.log(row);

  let rows = [];

  let columns = [];

  row.forEach((item) => {
    if (item.hasOwnProperty('empty')) {
      return;
    }

    let rowSpan = item.hasOwnProperty('rowSpan')
      ? { rowSpan: item.rowSpan + 2 }
      : '';

    columns.push(<td {...rowSpan}>{item.value}</td>);
  });

  rows.push(<tr>{columns}</tr>);

  return rows;
});

export default function Table() {
  return (
    <table className={'table table-bordered'}>
      <thead>
        <tr>
          <th>
            <div dangerouslySetInnerHTML={{ __html: xq }} />
          </th>
          <th>sadelesdirilmis vergi</th>
          <th>vergitutma bazasi</th>
          <th>verginin derecesi</th>
        </tr>
      </thead>
      <tbody>
        {f}
        {/*<tr>
          <td rowSpan={3}>x</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
        </tr>
        <tr>
          <td>3</td>
          <td>4</td>
        </tr>
        <tr>
          <td rowSpan={3}>y</td>
        </tr>*/}
      </tbody>
    </table>
  );
}
