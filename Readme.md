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
### 数组大类用到的算法技巧
#### 双指针
##### 三数之和
##### 四树之和
##### 有序数组去重 I II
##### 移除元素等
##### k-diff对[532] 想想双指针的解法 set的解法 还有边界值情况
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
#### 原地哈希 [442]
#### 是否存在循环 [457] 快慢指针处理问题

#### 快慢指针问题 常见问题判断是否含有重复项
##### 环形链表[141, 142, 287]
#### 记忆化搜索 (二分法加dp) [241] 复合性问题

### 滑动窗口
滑动窗口通常用来解决查找子集的相关操作结果
#### 乘积小于某个值的子数组 [713]


## 疑难杂症 暂未解决
### 分治算法
#### 快速幂 分治算法 取模运算 [372]
#### 滑动窗口 分治算法 [395]
### BFS
#### BFS加数学推理 [310] 最小高度树
#### 岛屿数量 [200] 合理利用给定的状态 将遍历过的项目转换另一个状态 然后遍历 就不会遍历到重复项
#### 拓扑排序问题 编排任务 [209]
## to learn
#### 动态规划
#### 回溯 剪枝
#### 贪心算法
#### BFS DFS --> 拓扑排序
#### Boyer-Moore 投票算法 [169]
### 环形子数组最大和 邻接数组 前缀和+单调队列 单调栈 出现很多次了 还是不会 [918]
#### 漂亮数组 [932]
#### kadane算法 新世界？[918]
#### 快速选择 [215] 数组中的第K个最大元素
#### 基数排序 [2343]
对于堆来讲，符合条件的堆并不唯一， 所以构建好的堆每次去除一个元素就要重新下移元素(siftDown)
寻找某个最值，先排序，排序算法一般选用快排 堆排。 这个时候利用堆排序可以维护一个大小为K的堆，不断出堆入堆即可：
```
 var findKthLargest = function (nums, k) {
    // 维护一个大小是 K 的小顶堆
    let minHeap = new Heap((a, b) => a < b)
    for (let num of nums) {
        minHeap.push(num)
        if (minHeap.size > k) {
            minHeap.pop()
        }
    }
    return minHeap.peek()
};

class Heap {
    constructor(compare) {
        this.arr = [0]; // 忽略 0 这个索引,方便计算左右节点
        this.compare = compare ? compare : (a, b) => a > b; // 默认是大顶堆
    }
    get size() {
        return this.arr.length - 1;
    }
    // 新增元素
    push(item) {
        this.arr.push(item);
        this.shiftUp(this.arr.length - 1);
    }
    // 元素上浮，k 是索引
    shiftUp(k) {
        let { arr, compare, parent } = this;
        // 当前元素 > 父元素，则进行交换
        while (k > 1 && compare(arr[k], arr[parent(k)])) {
            this.swap(parent(k), k);
            k = parent(k); // 更新 k 的位置为父元素的位置（交换了位置）
        }
    }
    // 弹出堆顶
    pop() {
        if (this.arr.length == 1) return null;
        this.swap(1, this.arr.length - 1);// 将结尾元素和堆顶元素交换位置
        let head = this.arr.pop(); // 删除堆顶
        this.sinkDown(1); // 再做下沉操作
        return head;
    }
    // 元素下沉
    sinkDown(k) {
        let element = i;
        const left = 2 * i + 1;
        const right = 2 * i + 2;

        // 判断当前节点下面挂载的两个子节点是否比父节点大或者小
        // 根据所构建的是大堆还是小堆来判断条件
        // 超过堆的长度意味着构建完毕 就不再递归构建堆
        // 这里先比较左边再比较右边节点
        // 因为不确定左右节点谁大谁小
        if (left < heapSize && arr[element] < arr[left]) {
            element = left
        }

        if (right < heapSize && arr[element] < arr[right]) {
            element = right
        }

        if (element !== i) {
            swap(arr, element, i);
            maxHeapify(arr, element, heapSize)
        }
        }
        // 获取堆顶元素
        peek() {
            return this.arr[1];
        }
        // 获取左边元素节点
        left(k) {
            return k * 2;
        }
        // 获取右边元素节点
        right(k) {
            return k * 2 + 1;
        }
        // 获取父节点
        parent(k) {
            return Math.floor(k >> 1);
        }
        // i、j 交换位置
        swap(i, j) {
            [this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]];
        }
}

```
也可以直接用堆排序，从而直接返回符合条件的元素, 堆排序的话不用讲整个堆完整拍一次顺序，只需要排符合条件k次即可。
在堆排序中，因为堆并不唯一的特性，所以最大堆最小堆不一定就是排好序的，所以先堆化(heapify)然后再排序。每次将堆顶
元素和最后一个元素互换，然后再从顶部到除开排好序的元素之间进行下移操作(此基础是建立在之前就是一个二叉堆)， 不断
重复以上操作，每排一次顺序堆顶元素都是最大或者最小值。直到剩下最后一个元素。堆化这个步骤则是从最后一个元素一个个
顺藤摸瓜往上交换得到想要的堆
```
for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
    maxHeapify(arr, i, heapSize)
}
```
```
var findKthLargest = function (nums, k) {
    let heapSize = nums.length;
    buildMaxHeap(nums, heapSize); //构建大顶堆 大小为heapSize
    //大顶堆 前k-1个堆顶元素不断和数组的末尾元素交换 然后重新heapify堆顶元素
    //这个操作就是之前小顶堆出堆顶的操作，只不过现在是原地排序
    for (let i = nums.length - 1; i >= nums.length - k + 1; i--) {
        swap(nums, 0, i);//交换堆顶和数组末尾元素
        --heapSize; //堆大小减1
        maxHeapify(nums, 0, heapSize);//重新heapify
    }
    return nums[0];//返回堆顶元素，就是第k大的元素
};

const buildMaxHeap = (arr, heapSize) => {
    // 自底向上堆化
    // 不断往二叉堆上方遍历每个节点 从而构建最小堆或者最大堆
    for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
        maxHeapify(arr, i, heapSize)
    }
}

const maxHeapify = (arr, i, heapSize) => {
    let element = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    // 判断当前节点下面挂载的两个子节点是否比父节点大或者小
    // 根据所构建的是大堆还是小堆来判断条件
    // 超过堆的长度意味着构建完毕 就不再递归构建堆
    if (left < heapSize && arr[element] < arr[left]) {
        element = left
    }

    if (right < heapSize && arr[element] < arr[right]) {
        element = right
    }

    if (element !== i) {
        swap(arr, element, i);
        maxHeapify(arr, element, heapSize)
    }
}

const swap = (arr, l, r) => {
    const temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
}
```

##### 当遇到二叉树 栈 堆相关问题 最好多画图
#### 记忆化搜索 [241]
#### 基本计算器 回溯 [227]
#### [282] 回溯
#### 摆动排序问题II [324] 三向切分？ 重点掌握


# 思考问题
### 分治法能够用来解决回溯问题？
#### [241]
#### 多画图解决问题