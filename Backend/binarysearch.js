var arr = [10, 11, 12, 3, 2, 4]

// algorithm
// 1)sort givern array
// 2)initialize up and low values
// 3)find mid value
// 4) compare mid with search item
//      a) mid value and search item are equal- print search item found
//      b)mid<search item - low=mid+1
//      c)mid>search item - up=mid-1
// 5) repeat step 4 until search item is found 

// 1)

arr.sort((n1, n2) => n1 - n2)
console.log(arr);
// 2)
let low = 0;
let up = arr.length - 1;
// 3)
let mid = Math.floor((low + up) / 2)
// 4)
search = 10
count = 0
while (low <= up) {
    count++;
    if (arr[mid] == search) {
        console.log('item is found at index :', mid);
        break;
    }
    else if (arr[mid] < search) {
        low = mid + 1;
        mid = Math.floor((low + up) / 2)
    }
    else {
        up = mid - 1
        mid = Math.floor((low + up) / 2)
    }
}
console.log(count);
console.log('.........................');

// print common elelements
p = [10, 11, 12, 20, 30]
q = [11, 20, 25, 30, 33]

i = 0
j = 0
common = false
while (i < p.length && j < q.length) {

    if (p[i] == q[j]) {
        console.log(p[i]);
        common = true;
        i++;
        j++;
    }
    else if (p[i] < q[j]) {
        i++;
    }
    else {
        j++;
    }
}
!common && console.log('no common elements');


// wap to print pairs whose sum is 6
b = [2, 3, 4, 5]
b.sort((n1, n2) => n1 - n2)
console.log(b);
sum = 6
low = 0;
up = b.length - 1
pair = false
while (low < up) {
    if (b[low] + b[up] == sum) {
        pair = true
        console.log(`(${b[low]},${b[up]})`);
        low++;
    }
    else if (b[low] + b[up] > sum) {
        up--;
    }
    else {
        low++;
    }
}
!pair && console.log('no such pairs');
console.log('...........................');


// next
a = [[10, 23], [34, 53], [2, 4], [57, 89], [7, 9]]
//  w.a.p to print all numbers in the given array
// 2d array-nested array
// 5 items
// flat()- to change direction of an array
b = a.flat()
console.log(b);

for (let i of b) {
    console.log(i);
}

// depth
a = [[10, 23, [2, 3, [6, 7]]]]
// c=a.flat(3)
c = a.flat(Infinity)
console.log(c);

