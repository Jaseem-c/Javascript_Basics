// largets among 3 and descending order

x=5;
y=7;
z=8;
if (x>y && x>z)
{
    if(y>z)
    {
        console.log(`x-large ${x}`);
        console.log(`descending order: ${x},${y},${z}`);
    } 
    else{
        console.log(`x-large ${x}`);
        console.log(`descending order: ${x},${z},${y}`);
    } 
}
else if (y>x && y>z)
{
    if(x>z)
    {
        console.log(`y-large ${y}`);
        console.log(`descending order: ${y},${x},${z}`);
    } 
    else{
        console.log(`y-large ${y}`);
        console.log(`descending order: ${y},${z},${x}`);
    } 
}
else if(z>x && z>y){
    if(x>y)
    {
        console.log(`z-large ${z}`);
        console.log(`descending order: ${z},${x},${y}`);
    } 
    else{
        console.log(`z-large ${z}`);
        console.log(`descending order: ${z},${y},${x}`);
    } 
}
else{
    console.log('all are equal');
}
