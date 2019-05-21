/*异步操作*/

var items = [ 1, 2, 3, 4, 5, 6 ];
var results = [];
function async(arg, callback) {
    console.log('参数为 ' + arg +' , 1秒后返回结果');
    setTimeout(function () { callback(arg * 2); }, 1000);
}
function final(value) {
    console.log('完成: ', value);
}
/*串行执行*/
function series(item) {
    if(item) {
        async( item, function(result) {
            console.log('arg * 2',result);
            results.push(result);
            return series(items.shift());
        });
    } else {
        return final(results[results.length - 1]);
    }
}
series(items.shift());
/*并行执行*/

