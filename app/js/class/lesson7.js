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
    test(1,2,3,4,'q')
}

{
    console.log(...[1,2,4]);
    
}