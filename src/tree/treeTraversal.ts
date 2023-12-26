//type Node = { [key: string]: number };
// type Node = {
//   v: string;
//   c?: Array<Node>;
// };

//type Tree = Array<Node>;

const tree = [
  {
    v: 5,
    c: [
      {
        v: 10,
        c: [
          {
            v: 11,
          },
        ],
      },
      {
        v: 7,
        c: [
          {
            v: 5,
            c: [
              {
                v: 1,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    v: 5,
    c: [
      {
        v: 10,
      },
      {
        v: 15,
      },
    ],
  },
];

export const recursive = (tree: any) => {
  let sum = 0;
  tree.forEach((node: any) => {
    sum += node.v;
    if (!node.c) {
      return node.v;
    }
    sum += recursive(node.c);
  });
  return sum;
};

export const iteration = (tree: any) => {
  if (!tree.length) {
    return 0;
  }
  let sum = 0;
  let stack: any = [];
  tree.forEach((node: any) => stack.push(node));
  while (stack.length) {
    const node = stack.pop();
    sum += node.v;
    if (node.c) {
      node.c.forEach((child: any) => stack.push(child));
    }
  }
  return sum;
};
