export class BinaryTree {
  root: any;
  constructor() {
    this.root = null;
  }

  add(value: number) {
    if (!this.root) {
      this.root = new TreeNode(value);
    } else {
      let node = this.root;
      let newNode = new TreeNode(value);
      while (node) {
        if (value > node.value) {
          if (!node.right) {
            break;
          }
          node = node.right;
        } else {
          if (!node.left) {
            break;
          }
          node = node.left;
        }
      }
      if (value > node.value) {
        node.right = newNode;
      } else {
        node.left = newNode;
      }
    }
  }

  print(root: TreeNode = this.root) {
    if (!root) {
      return true;
    }
    console.log(root.value);
    this.print(root.left);
    this.print(root.right);
  }
}

class TreeNode {
  value: number;
  left: any;
  right: any;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
