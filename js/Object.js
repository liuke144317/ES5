/*Object对象本身的方法*/
Object.print = function(){
    console.log('123');
}
Object.print();/*实例不能使用print()方法*/

/*Object对象实例的方法*/
Object.prototype.print = function(){
    console.log('调用实例方法');
}
var obj = new Object();
obj.print();

/*判断变量是否为对象*/
function judgeObj(val){
    return val === Object(val)
}
console.log('[]是否为对象',judgeObj([]));
console.log('123是否为对象',judgeObj(123));

/*排序*/
var sortArr = [0,2,1,7]
console.log('sort result',sortArr.sort());

/*遍历对象自身属性*/
(function () {
    var obj = {
        'aa':123,
        'bb':456
    }
    console.log('Object.keys(obj)',Object.keys(obj));
})()
