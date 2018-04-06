setTimeout(() => {
    console.log('now');
    var now = new Date().getTime();
    console.log(now);
});
console.log(100);
setTimeout(() => {
    console.log(2000);
    var now=new Date().getTime();
    console.log(now);
    

}, 2000);
setTimeout(() => {
    console.log(1000);
    var now = new Date().getTime();
    console.log(now);
}, 1000);

console.log(300);

var now = new Date().getTime();
console.log(now);