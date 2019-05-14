/*面向对象编程*/
function Fu(){
    console.log('this',this);
    console.log('typeof this',typeof this);
    console.log('typeof Fu',typeof Fu);
}

new Fu();
