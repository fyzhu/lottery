{
    //参数默认值
    function test(x, y='world') {
        console.log(x,y);
        
    }
    test('hello')
}

{
    //作用域
    let x ='test'
    function test2(x, y=x) {
        console.log(x,y);
        
    }
    test2('kill')
    test2()
}

{
    function test3(...arg) {
        for (const v of arg) {
            console.log('rest', v);
            
        }
    }
    test3(1,2,3,4,'q')
}

{
    console.log(...[1,2,4]);
    console.log('a',...[1,2,4]);
    
}
//箭头函数
{
    let arrow=v=>v*2
    let arrow2=()=>5
    console.log('arrow',arrow(3))
    console.log('arrow2',arrow2())
}
//尾调用
{
    function tail(x) {
        console.log('tail',x);        
    }
    function fx(x) {
        return tail(x)
        
    }
    fx(123)
}