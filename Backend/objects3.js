var car={
    name:'boleno',
    manufacturer:'maruthi',
    model:'hatch back',
    price:'10 lacks'
}

// display the car name and manufacturer name
// console.log(car["name"],',',car["manufacturer"]);
console.log(`car name is ${car.name} and manufaturer name is ${car.manufacturer}`);
// check wehther a model is present if yes print its value
for(key in car)
    {
        if(key=='model')
            {
                console.log(car[key]);
            }
    }
console.log("model" in car?`model is ${car.model}`:'model is not present');

// add "varient" key to the car as value "manual"
car['varient']=['manual']
console.log(car);
// add "automatic as new value of varient"
car.varient.push("automatic")
console.log(car);
// add color key with value as red blue and black
// car['color']=['red','blue','black']
car['color']=['red']
car.color.splice(1,0,'white','blue')
console.log(car);
console.log('...............................');


text='hai hello all hello world all'
// wap to print the word count from text
// o/p: {hai:2,hello:2,all:2,word:1}
words=text.split(' ')
console.log(words);
// hai=0;
// hello=0;
// all=0;
// world=0;
//  for(let i=0;i<te.length;i++)
//     {
//         if(te[i]==='hai')
//             {
//                 hai++;
//             }
//          else if(te[i]==='hello'){
//             hello++;
//         }
//         else if(te[i]==='all'){
//             all++;
//         }
//         else if(te[i]==='world')
//             {
//                 world++;
//             }
//     }
// console.log(hai);
// console.log(hello);
// console.log(all);
// console.log(world);

// wordcount={
//     hai:hai,
//     hello:hello,
//     all:all,
//     world:world,
// }
// console.log(wordcount);

obj={}
for(word of words)
    {
        if(word in obj)
            {
                obj[word]+=1
            }
    else{
        obj[word]=1
    }
    }
    console.log(obj);
console.log('...............');

// wap tp print number counts
a=[20,50,60,12,25,50,30,30,30,12,25,60]
object={}
for(num of a)
    {
        if(num in object)
            {
                object[num]+=1
            }
            else{
                object[num]=1
            }
    }
console.log(object);
console.log('...............')
;

// wap to print first recursive
pattern='acbdbcdbcd'
wds=pattern.split('')
console.log(wds);
recursive={}
for(w of wds)
    {
        if(w in recursive)
            {
                console.log(w);
                break;
            }
            else{
                recursive[w]=1
            }
    }
