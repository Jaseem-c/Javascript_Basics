exp = '*10*2+5'
try {
    result = eval(exp)
    console.log(result);
}
catch {
    console.log('check the expression');
}

finally {
    console.log('task completed');
}