/*数组练习*/
/*数组本质*/
    var arr = ["aa","bb","cc"]
    var obj = {
        aa:'123',
        bb:'234'
    }

    /*
    console.log('typeof',typeof arr)
    console.log('Object.keys(arr)',Object.keys(arr))
    console.log('Object.keys(obj)',Object.keys(obj))
    console.log('obj[aa]',obj['aa'])
    */

/*in运算符*/
    /*console.log('aa in arr',1 in arr);
    arr['haha'] = 'dd'
    for(var i in arr){
        console.log('i',i);
    }*/

/*数组的空位*/
    /*var emptyArr = ['aa',,'bb']
    console.log('emptyArr.length',emptyArr.length);
    for(var i = 0;i<emptyArr.length;i++){
        console.log('emptyArr',emptyArr[i]);
    }
    for(var i in emptyArr){
        console.log('otherEmptyArr',emptyArr[i]);
    }*/

/*类似数组的对象*/
/*对象没有length属性，但是类似素组对象有，比如arguments对象*/
    /*console.log('obj.length',obj.length);*/
    /*arguments*/
       /* function args() {
            return arguments
        }
        var aa = args('a','b','c');
        console.log('args',aa)
        console.log('args[0]',aa[0])
        console.log('args.length',aa.length)
        console.log('isArray',aa instanceof Array)
        console.log('typeof', typeof arr)*/
    /*DOM节点*/
        /*var elts = document.getElementsByTagName('h3');
        elts.length // 3'
        elts instanceof Array // false*/
    /*字符串*/
        /*'abc'[1] // 'b'
        'abc'.length // 3
        'abc' instanceof Array // false
        var arr = Array.prototype.slice.call(aa);
        console.log('arr',arr);*/
    /*类数组对象通过call()使用数组方法*/
        /*function args123(){
            Array.prototype.forEach.call(arguments,function(elem,index){//arguments对象只存在于方法之中
                console.log('elem:'+elem+' index:'+index);
            })
        }
        args123('aa','bb','cc')*/

        /*delete arr[2]
        console.log('arr.length',arr[2]);*/



