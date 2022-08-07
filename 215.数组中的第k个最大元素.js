/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/***
 *  基于快速排序的快速选择算法
 */
// var findKthLargest = function(nums, k) {
//     return quickSelect(nums, nums.length - k)
// };

// let quickSelect = (arr, k) => {
//     return quick(arr, 0, arr.length - 1, k)
//   }

// let quick = (arr, left, right, k) => {
//     let index;
//     if (left < right) {
//         index = partition(arr, left, right)
//         // 相比较快速排序就多了这一步
           // 快排是左右两个分区都会排序，快速选择是挑选符合条件的分区再次排序
           // 每一次排序都会排除不符合要求部分的分区，做到性能优化
//         // 每次划分数组就看看划分后的index和选择的主元是否一致
//         // 一致的话就说明符合要求
//         if (index === k) {
//             return arr[index]
//         } else if (k < index) {
//             // 不一致且主元选大了
//             // 要往左边小的范围找
//             return quick(arr, left, index - 1, k)
//         } else {
//             // 主元选择小了
//             // 往右边大的范围找
//             return quick(arr, index + 1, right, k)
//         }
//     }
//     return arr[left]
// }

// let partition = (arr, left, right) => {
//     const pivot = arr[Math.floor((right + left) / 2)];

//     let i = left;
//     let j = right;

//     while (i < j) {
//         while (arr[i] < pivot) {
//             i++
//         }

//         while (arr[j] > pivot) {
//             j--
//         }
//         if(i < j) swap(arr, i, j)

//         // 当数组中存在重复数据时，即都为datum，但位置不同
//         // 继续递增i，防止死循环
//         if(arr[i] === arr[j] && i !== j) {
//             i++
//         }
//     }
//     return i
// }

// let swap = (arr, left, right) => {
//     let temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp
// }

/**
 * 
 *  基于最小堆构建的大小为k的最小顶堆
 *  当所有元素排序完毕的时候
 */
//  var findKthLargest = function (nums, k) {
//     // 维护一个大小是 K 的小顶堆
//     let minHeap = new Heap((a, b) => a < b)
//     for (let num of nums) {
//         minHeap.push(num)
//         if (minHeap.size > k) {
//             minHeap.pop()
//         }
//     }
//     return minHeap.peek()
// };

// class Heap {
//     constructor(compare) {
//         this.arr = [0]; // 忽略 0 这个索引,方便计算左右节点
//         this.compare = compare ? compare : (a, b) => a > b; // 默认是大顶堆
//     }
//     get size() {
//         return this.arr.length - 1;
//     }
//     // 新增元素
//     push(item) {
//         this.arr.push(item);
//         this.shiftUp(this.arr.length - 1);
//     }
//     // 元素上浮，k 是索引
//     shiftUp(k) {
//         let { arr, compare, parent } = this;
//         // 当前元素 > 父元素，则进行交换
//         while (k > 1 && compare(arr[k], arr[parent(k)])) {
//             this.swap(parent(k), k);
//             k = parent(k); // 更新 k 的位置为父元素的位置（交换了位置）
//         }
//     }
//     // 弹出堆顶
//     pop() {
//         if (this.arr.length == 1) return null;
//         this.swap(1, this.arr.length - 1);// 将结尾元素和堆顶元素交换位置
//         let head = this.arr.pop(); // 删除堆顶
//         this.sinkDown(1); // 再做下沉操作
//         return head;
//     }
//     // 元素下沉
//     sinkDown(k) {
//         let { arr, compare, left, right, size } = this;
//         while (left(k) <= size) {
//             // 1. 拿到左右节点的最大值
//             let child = left(k);
//             if (right(k) <= size && compare(arr[right(k)], arr[child])) {
//                 child = right(k);
//             }
//             // 2. k 满足大顶堆或小顶堆，什么都不做
//             if (compare(arr[k], arr[child])) {
//                 return;
//             }
//             // 3. 交换位置后，继续下沉操作
//             this.swap(k, child);
//             k = child; // 更新位置
//         }
//     }
//     // 获取堆顶元素
//     peek() {
//         return this.arr[1];
//     }
//     // 获取左边元素节点
//     left(k) {
//         return k * 2;
//     }
//     // 获取右边元素节点
//     right(k) {
//         return k * 2 + 1;
//     }
//     // 获取父节点
//     parent(k) {
//         return Math.floor(k >> 1);
//     }
//     // i、j 交换位置
//     swap(i, j) {
//         [this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]];
//     }
// }

// /**
//  * 
//  *  堆排序
//  *  堆排序就需要用到最大堆才行
//  *  这时就找倒数第k
//  */
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
// @lc code=end

