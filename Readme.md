#### 自动机 (#8)(未掌握)
#### 贪心 硬币能否找零问题(未掌握)
#### 模拟仿真 cpu处理任务问题(未掌握)
#### 多数之和 双指针 多重循环(未掌握)
#### 回溯算法 解决全排列问题(未彻底掌握)
##### 一般来说全排列的情况能够采用循环和递归的方式来解决。待补充
#### 反转链表和指针情况 [92] (未掌握)
##### 这类问题需要多画图确定指针指向，创建多少额外数据保存指针引用。还有就是要掌握反转链表基本操作
#### 善于利用快慢指针和线性数据结构来解决环形问题？[142, 141] (未掌握)
#### 利用双指针原地的方式覆盖数组内部的元素以达到局部去重的目的 [26,27]
#### 利用前后双指针避开从父元素 去重的目的 进行优化 达到降低算法复杂度的目的 [15, 18]
#### 数组大类用到的算法技巧
##### 双指针 ---> 三数之和 四树之和 有序数组去重 I II 移除元素等
```
if (j > i + 1 && temp[j] === temp[j - 1]) {
    continue;
}
```
#### 二分法 ----> 查找某个元素位置
##### 回溯剪枝方法 ----> 查找有多少种方式能够达到什么样的结果
##### 对于排列组合出现重复的情况下 可以采用以下方式做到排除重复项 [15, 40]
##### 对于寻找峰值还有寻找最大最小值的情况下 先搞懂题意 然后寻找相对应规律 对于最值 数组当中一定有某个单调区间 对于峰值根据题意 两端都是负无穷 所以一定能够找到峰值 从而转变成为爬坡的问题 [153, 162]
##### 接雨水问题 双指针 每次指针移动都找有没有比当前左右两边最大值更大的最大值，然后用较小的最大值减去其右边或者左边的值 每次能接多少水都是由两边最短的板决定的 [42]
##### 128最长连续序列  善于利用常见的数据结构 如set map array等判断保存数据 从而将问题复杂度降低 比如这个问题就是利用set map寻找里面的某个元素
##### 152 最大乘积数组 动态规划理解下

#### 快慢指针问题 常见问题判断是否含有重复项
##### 环形链表[141, 142, 287]

## to learn
#### 动态规划
#### 回溯 剪枝
#### 贪心算法