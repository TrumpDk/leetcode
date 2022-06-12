/*
 * @lc app=leetcode.cn id=310 lang=javascript
 *
 * [310] 最小高度树
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {

    let vertexEdgeList = new Map();

    for (let item of edges) {
        console.log(item);
        if (!vertexEdgeList.has(item[0])) {
            vertexEdgeList.set(item[0], [item[1]])
        } else {
            vertexEdgeList.get(item[0]).push(item[1])
        }
    }

    console.log(vertexEdgeList)

    for (let item of vertexEdgeList) {
        console.log(item)
    }
};
// @lc code=end

