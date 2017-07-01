/**
 * Created by gxy on 2017/3/20.
 */
/******************************************************************************
* There are two sorted arrays nums1 and nums2 of size m and n respectively.
* Find the median of the two sorted arrays.
* The overall run time complexity should be O(log (m+n)).
* Example 1:
* nums1 = [1, 3]
* nums2 = [2]

* The median is 2.0
* Example 2:
* nums1 = [1, 2]
* nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
*******************************************************************************************/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays1 = function(nums1, nums2) {
    if(nums1.length > nums2.length) {
        var tp = nums1;
        nums1 = nums2;
        nums2 = tp;
    }
    var m=nums1.length, n=nums2.length;
    var imin=0, imax=m,half=parseInt((m+n+1)/2);
    var i=parseInt((imin+imax)/2), j=half-i;

    while(imin<=imax) {
        i = parseInt((imin+imax)/2); j= half-i;
        if(i>0 && j<n && nums1[i-1]>nums2[j]) {
            imax=i-1;
        } else if(j>0 && i<m && nums2[j-1]>nums1[i]){
            imin=i+1;
        } else {
            var oddres;
            if(i==0) oddres=nums2[j-1];
            if(j==0) oddres=nums1[i-1];
            else {
                oddres = nums1[i-1]>nums2[j-1]?nums1[i-1]:nums2[j-1];
            }if(parseInt((m+n)%2) == 1) return oddres;
            if(parseInt((m+n)%2) == 0) {
                var evenres;
                if(i==m) evenres = nums2[j];
                if(j==n) evenres = nums1[i];
                else evenres = nums1[i]<nums2[j]?nums1[i]:nums2[j];
                return (oddres+evenres)/2;
            }
        }

    }
};

var findMedianSortedArrays2 = function(nums1,nums2){
    var m=nums1.length,n=nums2.length;
    var k=parseInt((m+n+1)/2);
    if(parseInt((m+n)%2)==1) {
        return findKthNumber(nums1,m,nums2,n,k);
    }else {
        return (findKthNumber(nums1,m,nums2,n,k)+findKthNumber(nums1,m,nums2,n,k+1))/2;
    }

};

function findKthNumber(nums1,m,nums2,n,k) {
    // console.log("nums1:", nums1);
    // console.log("m:", m);
    // console.log("nums2:", nums2);
    // console.log("n:", n);
    // console.log("k:", k);
    if(m>n) return findKthNumber(nums2,n,nums1,m,k);
    if(m===0) return nums2[k-1];
    if(k==1) return nums1[0]<nums2[0]?nums1[0]:nums2[0];
    var i=parseInt(k/2)<m?parseInt(k/2):m, j=k-i;
    // console.log("nums1[i-1]:", nums1[i-1]);
    // console.log("nums2[j-1]:", nums2[j-1]);
    if(nums1[i-1]>nums2[j-1]) {
        return findKthNumber(nums1,m,nums2.slice(j),n-j,k-j);
    } else {
        return findKthNumber(nums1.slice(i),m-i,nums2,n,k-i);
    }
}

// test
/*var arr1 = [1,3,5,7,9,11,13,15,17,19,21,23,25];
 var arr2 = arr1.map(function(item,index,array) {
 return item+1;
 });*/
var arr1 = [1];
var arr2 = [1];
console.time("algo1");
var res1 = findMedianSortedArrays1(arr1, arr2);
console.timeEnd("algo1");
console.log("res1:", res1);

var arr1=[1,3]
console.time("algo2");
var res2=findMedianSortedArrays2(arr1,arr2);
console.timeEnd("algo2");
console.log("res2:", res2);
