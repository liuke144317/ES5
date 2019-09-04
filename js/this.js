let obj = {
    aa: 123,
    bb: function () {
        console.log('this.aa', this.aa);
    },
    cc: () => console.log('this.aa', this.aa)
}
function ee(){
    this.aa = 123;
    this.bb = function(){
        console.log('this.aa',this.aa);
    }
}
obj.bb();
let gg = obj.bb;
gg();
obj.cc();
let dd = new ee();
dd.bb();


