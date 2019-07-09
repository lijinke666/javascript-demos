/**
 * @name 快速排序
 * @description 平均时间复杂度 O(nlogn) 最坏 O(n^2)
 * 算法原理　
 * （1）在数据集之中，选择一个元素作为"基准"（pivot）。
　　（2）所有小于"基准"的元素，都移到"基准"的左边；所有大于"基准"的元素，都移到"基准"的右边。
　　（3）对"基准"左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。
 */

const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr
    }

    const middle = Math.floor(arr.length / 2)
    const middleArr = arr.splice(middle, 1)[0]
    const left = []
    const right = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < middleArr) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat([middleArr], quickSort(right))
}


console.log(quickSort([1,2,5,3,10,4]));


/**
 * @name 双边循环
 * @param {*} arr
 * @param {*} startIndex  起始下标
 * @param {*} endIndex    结束下标
 */
const quickSort2 = (arr, startIndex, endIndex) => {
    const pivot = arr[startIndex]
    let left = startIndex
    let right = endIndex

    while( left != right ) {
        // right 指针比较 并左移
        while(left < right && arr[right] > pivot) {
            right --
        }

        while(left < right && arr[left] <= pivot) {
            left ++
        }

        // 交换left, right指针对应的 元素
        if(left < right) {
            const temp = arr[left]
            arr[left] = arr[right]
            arr[right] = temp
        }
    }

    arr[startIndex] = arr[left]
    arr[left] = pivot
    return arr
}


console.log(quickSort2([1,3,2,10,11],0, 4));
