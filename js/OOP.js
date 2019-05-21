/*面向对象编程*/
function Fu(){
    console.log('this',this);
    console.log('typeof this',typeof this);
    console.log('typeof Fu',typeof Fu);
}

new Fu();
/*使用严格模式*/
var Person = function () {
    // 'use strict'
    if(this instanceof Person){
        console.log('使用了new');
    }else{
        console.log('没有使用');
    }
    this.name = '小明';
    this.age = 28;
}
var xiao = new Person();
Person();
console.log("xiao",xiao.name);

var name = '123'
function aa(){
    console.log('this.name',this.name);
}
console.log('this.name',this.name);
aa()


/*绑定this对象*/
/*Function.prototype.call()*/
/*使用call的时候就会调用相应的方法*/
var obj = {};
var f = function () {
    return this;
}
console.log('f.call(obj)===obj',f.call(obj)===obj);


var obj = {
    "aa":123
}
obj.hasOwnProperty = function(){
    console.log('被修改');
}
console.log("obj.hasOwnProperty(\"aa\")",obj.hasOwnProperty("aa"));
Object.prototype.hasOwnProperty.call(obj,"aa")

var object = {
    foo:function(){
        console.log('this',this);
    }
}
console.log('object.foo = object.foo',(object.foo = object.foo)())
console.log('"123" instanceof Object',"123" instanceof Object)

/*将一个构造函数的原型指向一个数组*/
var ArrObj = function () {
    this.aa = '123'
}
// ArrObj.prototype = new Array();
var AO = new ArrObj();
// AO.push('123')
// console.log('aa.aa',AO.aa);
// console.log('aa.length',AO[0]);
console.log('AO.constructor',AO.constructor);
console.log('Object instanceof null',Object.prototype instanceof Object);

/*继承*/
function Sup(){/*父类*/
    this.aa = '123'
}
function Chil(){/*子类*/
    Sup.call(this)
    this.bb = '456'
}
Chil.prototype = Object.create(Sup.prototype)
// Chil.prototype.constructor = Chil;
var obj123 = new Chil();
console.log('obj123',obj123);
console.log('Chil.prototype.constructor',Chil.prototype.constructor);

function StringBuilder() {
    var buffer = [];

    this.add = function (str) {
        buffer.push(str);
    };

    this.toString = function () {
        return buffer.join('');
    };

}
var sb1 = new StringBuilder();
var sb2 = new StringBuilder();
sb1.add("123")
sb2.add("456")
console.log('sb.buffer',sb2.toString());
var lj = "123";
var hahaha = (function (val) {
    console.log('lj',lj);
    console.log('val',val);
    return "真的吗"/*在return中返回供外部调用的方法*/
})("456")
console.log('hahaha',hahaha);

function inheritedPropertyNames(obj) {
    var props = {};
    while(obj) {
        Object.getOwnPropertyNames(obj).forEach(function(p) {/*不包含继承属性键名*/
            props[p] = '123';
        });
        obj = Object.getPrototypeOf(obj);/*获取对象的原型*/
    }
    return Object.getOwnPropertyNames(props);/*取出props所有的自身属性*/
}
console.log('inheritedPropertyNames(obj)',inheritedPropertyNames(Date))
var bb = {}
bb['123'] = '345'
console.log('bb',bb);
