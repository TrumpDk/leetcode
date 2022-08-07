/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 * 
 *  本题核心思想其实是先确定解体方式是采用滑动窗口
 *  其次是将字串问题转化成为找滑动窗口内两个字符串的字母出出现次数是否一致的问题
 *  为了保存字符出现次数 这里用了两个数组，里面存放26个字母出现次数（比map set更加简洁） 新思路
 *  如何判断是否是字串呢， 对于第二个数组 不断进行出入操作（即滑动窗口不断滑行）， 如果直到最后都没能相等
 *  则说明没有字串
 *  这个问题巧妙借用滑动窗口，将字串问题转化为滑动窗口内字符串出现的顺序是否和目标相等 绝了
 */

var checkInclusion = function (s1, s2) {
    const len1 = s1.length;
    const len2 = s2.length;
    const count1 = new Array(26).fill(0);
    const count2 = new Array(26).fill(0);
    
    // 统计目标字符串里面的26个字母出现次数
    for (let i = 0; i < len1; i++) {
        // 利用ascii码转换成数组下标，每出现一次数组下标加一
        count1[s1[i].charCodeAt(0) - 97]++;
    }

    let start = 0;
    
    for (let i = 0; i < len2; i++) {
        // 判断当前遍历同一个字符在a,b字符串统计数组出现情况
        // 当s2中出现多次则说明前面遍历了多次 需要指针往后面移动 即缩小滑动窗口大小
        // 没找到符合元素此时也要把指针向前移动
        count2[s2[i].charCodeAt(0) - 97]++;
        
        while (start<=i&& count2[s2[start].charCodeAt(0) - 97]>count1[s2[start].charCodeAt(0) - 97]) {
            // 缩小滑动窗口同时将元素排除出去
            count2[s2[start].charCodeAt(0) - 97]--;
            // 向右移动指针并且缩小滑动窗口
            start++;
        }
        // 此时数组已经根据ascii码排序 直接join判断是否相等就行，相等则说明是子串
        if (count1.join('') === count2.join('')) {
            return true;
        }
    }
    
    return false;
};
// @lc code=end

