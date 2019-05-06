/*斐波切纳数列*/
function fib(m){
    if(m==1) return 0;
    if(m==2) return 1;
    return fib(m-1)+fib(m-2)
}
/*console.log('console',fib(6));*/

/*n的阶乘*/
function factorial(n){
    var sum = 0;
    if(n==1){
        return 1
    }else{
        sum = n*factorial(n-1);
    }
    return sum;
}
/*console.log('console',factorial(6));*/

/*函数作用域*/
/*在函数以为定义的所有变量都是全局变量*/
var a = 1;
function f() {
    a = 2;
    console.log('a',a);
}
/*f();
console.log('a',a);*/

/*函数重复声明,测试时无法使用*/
/*function f1(){
    console.log('我把第一个覆盖了');
}*/
/*f1();*/

/*length属性*/
// console.log('F()length',f.length);

/*toString()方法*/
/*console.log('F()toString',f.toString()
    .split('\n')
    .slice(1,f.toString().split('\n').length-1)
    .join('\n'))*/
var obj123 = {
    'aa':'123',
    'bb':'456'
}
/*console.log('obj123',obj123);*/
/*闭包：是封装对象的私有属性和私有方法*/
function person(name){
    var age;
    function setAge(n){
        age = n;
    }
    function getAge() {
        return age;
    }
    return{
        name:name,
        setAge:setAge,
        getAgeHa:getAge
    }
}
/*var p1 = person("haha...")
p1.setAge(20)
console.log('p1:',p1);
console.log('p1.getAge():',p1.getAgeHa());*/

/*立即调用的函数表达式iife*/

/*数组*/
var arr = [
    {a: 1},
    [1, 2, 3],
    function() {return true;}
];
console.log(arr[0])


