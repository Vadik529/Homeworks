const nums1 = [1, 2, 9, 22, 4, 8, 99]
const nums2 = [5, 4, 2, 22, 8, 8, 99]

let newArr = [];

function getIntersection(arr1, arr2) {
    let map = new Map();
    for (let i = 0; i < arr1.length; i++) {
        map.set(arr1[i], i);
    }
    for (let j = 0; j < arr2.length; j++) {
        if(map.has(arr2[j])) {
            newArr.push(arr2[j])
        }
    }
    console.log(map)
    return newArr
}

console.log(getIntersection(nums1, nums2))