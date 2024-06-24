// ****
// ****
// ****
// ****
// rows-4
// col-4
// 1)create loop for row
for(row=1;row<=4;row++)
{
    str='';
    // create loop for col
    for(col=1;col<=4;col++){
        str=str+"* "
    }
    console.log(str);
}
console.log('=============completed============');

// 1111
// 2222
// 3333
// 4444

for(i=1;i<=4;i++)
{
    str=''
    for(j=1;j<=4;j++)
    {
        str=str+i+" ";
    }
    console.log(str);
}
console.log('=============completed============');
// 1234
// 1234
// 1234
// 1234
for(i=1;i<=4;i++)
{
    str=''
    for(j=1;j<=4;j++)
    {
        str=str+j+" " ;
    }
    console.log(str);
}
console.log('=============completed============');

// * 
// * *
// * * *
// * * * *

for(i=1;i<=4;i++)
{
    str='';
    for(j=1;j<=i;j++)
    {
        str=str+'* '
    }
    console.log(str);
}
console.log('=============completed============');

// reverse
for(i=4;i>=1;i--)
{
    str='';
    for(j=1;j<=i;j++)
    {
        str=str+'* '
    }
    console.log(str);
}
console.log('=============completed============');

// 1
// 22
// 333
// 4444
for(i=1;i<=4;i++)
{
    str=''
    for(j=1;j<=i;j++)
    {
        str=str+i;
    }
    console.log(str);
}
console.log('=============completed============');

// 1
// 1 2
// 1 2 3
// 1 2 3 4
for(i=1;i<=4;i++)
{
    str=''
    for(j=1;j<=i;j++)
    {
        str=str+j;
    }
    console.log(str);
}
console.log('=============completed============');


// * 
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * *
// * 

for(i=1;i<=5;i++)
{
    str=''
    for(j=1;j<=i;j++)
    {
        str=str+'* '
    }
    console.log(str);
}
for(i=4;i>=1;i--)
{
    str=''
    for(j=1;j<=i;j++)
    {
        str=str+'* '
    }
    console.log(str);
}
console.log('=============completed============');

//     *
//    * *
//   * * *
//  * * * *

//  # # # *
//  # # * *
//  # * * *
//  * * * *

for(i=1;i<=4;i++)
{
str=''
for(space=4;space>i;space--)
{
    str=str+' '
}
for(j=1;j<=i;j++)
{
    str=str+'* ';
}
console.log(str);
}
console.log('=============completed============');

//     *
//    * *
//   * * *
//  * * * *
//   * * *
//    * *
//     *
for(i=1;i<=4;i++)
{
str=''
for(space=4;space>i;space--)
{
    str=str+' '
}
for(j=1;j<=i;j++)
{
    str=str+'* ';
}
console.log(str);
}

for(i=3;i>=1;i--)
{
str=''
for(space=4;space>i;space--)
{
     str=str+' ';
}
for(j=1;j<=i;j++)
{
    str=str+'* ';
}
console.log(str);
}
console.log('=============completed============');

//      *
//    *   *
//  *       *
// * * * * * *

for(i=1;i<=4;i++)
{
str='';
for(j=1;j<=7;j++)
{
    if(i+j==5 || i-j==-3 || i==4)
    {
        str=str+'* '
    }
    else{
        str=str+'  '
    }
}
console.log(str);
}
console.log('=============completed============');

// * * * * *
// *       *
// *       *
// *       *
// *       *
// *       *
// *       *
// * * * * *

for(i=1;i<=8;i++)
{
    str=''
    for(j=1;j<=5;j++)
    {
        if(j==1 || j==5 || i==1 || i==8 )
        {
            str=str+'* '
        }
       else{
        str=str+"  "
       }
    }
    console.log(str);
}
console.log('=============completed============');

// 1
// 0 1
// 1 0 1
// 0 1 0 1
 for(i=1;i<=4;i++)
 {
    str=''
    for(j=1;j<=i;j++)
    {
        if((i+j)%2==0)
        {
            str=str+'1 '
        }
        else
        {
            str=str+'0 '
        }
    }
    console.log(str);
 }
console.log('=============completed============');

//  *  *  *  *  *
//     *     *
//        *
//     *     *
//  *  *  *  *  *

for(i=1;i<=5;i++)
 {
    str=''
    for(j=1;j<=5;j++)
    {
        if(i==j || i==1 || i==5 || i+j==6)
        {
            str=str+'* '
        }
        else
        {
            str=str+'  '
        }
    }
    console.log(str);
 }
 console.log('=============completed============');

//                11
//             12 13 14
//          15 16 17 18 19
//       20 21 22 23 24 25 26
//    27 28 29 30 31 32 33 34 35

num=11
for(row=1;row<=5;row++)
{
    str=''
    for(sp=1;sp<=5-row;sp++)
    {
        str=str+'   '
        
    }
    for(col=1;col<=2*row-1;col++)
    {
        str=str+num+" ";
        num++;

    }
    console.log(str);
}
console.log('=============completed============');
