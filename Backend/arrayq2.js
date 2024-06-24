a = [10, 20, 30, 20, 30, 40, 50, 60, 10, 10]
// print duplicate elements in the given array
// d=[]
// duplicate=false
// for(i=0;i<a.length;i++)
//     {
//         for(j=i+1;j<a.length;j++)
//             {
//                 if(a[i]==a[j])
//                     {
//                         d.push(a[i])
//                         duplicate=true
//                         break;

//                     }
//             }
//     }
// !duplicate?console.log('no duplicates'):console.log(d);
// console.log('.........................')
d = []
duplicate = false
for (i = 0; i < a.length; i++) {
    for (j = i + 1; j < a.length; j++) {
        if (a[i] == a[j]) {
            d.push(a[i])
            duplicate = true
            break;

        }
    }
}
!duplicate ? console.log('no duplicates') : console.log(d);
console.log('.........................')

// wap to print pairs whose sum is 6
b=[2,1,3,4,5]
pair=false
for(i=0;i<b.length;i++)
    {
        for(j=i+1;j<b.length;j++)
            {
                if(b[i]+b[j]==6)
                    {
                        
                        pair=true
                        console.log(`(${b[i]},${b[j]})`);
                    }
            }
    }
!pair && console.log('no pairs')
// truthy operator
console.log('.......................');
 p=[10,11,12,20,30]
 q=[11,20,25,30,33]
common=false
count=0
 for(i=0;i<p.length;i++)
    {
        count++;
        for(j=0;j<q.length;j++)
            {
                if(p[i]==q[j])
                    {
                        common=true
                        console.log(p[i]);
                    }
            }
    }
!common && console.log('no common elements');
// console.log(count);