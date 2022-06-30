// Given the root of a binary tree, return the sum of values of its deepest leaves.
 
// Example 1:

// Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
// Output: 15
// Example 2:

// Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
// Output: 19
 
// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// 1 <= Node.val <= 100


//solution
var deepestLeavesSum = function(root) {
    let sums = []
    const dfs = (node, lvl) => {
        if (lvl === sums.length) sums[lvl] = node.val
        else sums[lvl] += node.val
        if (node.left) dfs(node.left, lvl+1)
        if (node.right) dfs(node.right, lvl+1)
    }
    dfs(root, 0)
    return sums[sums.length-1]
};
