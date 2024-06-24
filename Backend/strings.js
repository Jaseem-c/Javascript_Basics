// length
str="hello"
console.log(str.length);
// startswicth()
newstr=str.startsWith('he')
console.log(newstr)
// endswith()
endstr=str.endsWith('o')
console.log(endstr);
// touppercase()
str1='luminar'
console.log(str1.toUpperCase());
// tolowercase()
str2='ARRAY'
console.log(str2.toLowerCase());
// substring()
str3='luminar'
s=str3.substring(0,3)
console.log(s);
// trim()
str4=' hey google '
console.log(str4.trim());
// slice()
str5='morning'
console.log(str5.slice(1,4));
console.log(str5.slice(-3,-1));
console.log('.................');
// split()
str6='good afternoon all'
a=str6.split('')
console.log(a);
b=str6.split('e')
console.log(b);
c=str6.split('o')
console.log(c);
d=str6.split(' ')
console.log(d);
// replace()
sentence='i got a job in microsoft but the microsoft office is so far'
console.log(sentence);
console.log(sentence.replace('microsoft','google'));
// console.log(sentence.replace('i','we'));
console.log(sentence.replaceAll('microsoft','google'));
