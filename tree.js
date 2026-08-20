class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

const root  = new TreeNode("root");
root.children.push(new TreeNode("branch1"));
root.children.push(new TreeNode("branch2"));

// console.log(root);

root.children[0].children.push(new TreeNode("leaf1"));
// console.log(root);

class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const binaryRoot = new BinaryTreeNode("woman");
binaryRoot.left = new BinaryTreeNode("boy"); // This guy has a left and right
binaryRoot.right = new BinaryTreeNode("girl");

binaryRoot.left.left = new BinaryTreeNode("boyChild");
binaryRoot.left.right = new BinaryTreeNode("girlChild");
console.log(binaryRoot);

                    //             "woman"
                    //               /  \
                    //         "boy"     "girl"
                    //         /   \
                    // "boyChild" "girlChild"