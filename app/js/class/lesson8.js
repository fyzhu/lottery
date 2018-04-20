//对象
{
    //简洁表示法
    let o=1;
    let k=2;
    let es5= {
        o:o,
        k:k
    }
    let es6={
        o,
        k
    }
    console.log(es5,es6);
    
    let es5_method={
        hello:function () {
            console.log('hello');
            
        }
    }
    let es6_method={
        hello(){
            console.log('hello');
            
        }
    }
    es5_method.hello();
    es6_method.hello();
}
{
    //属性表达式
    let a='b';
    let es5_obj={
        a:'c',
        b:'c'
    }
    let es6_obj={
        [a]:'c'
    }
    console.log(es5_obj,es6_obj);
    
}
{
    //新增API
    //Object.is 与三等===
    console.log(Object.is('abc','abc'),'abc'==='abc');
    console.log(Object.is([],[]),[]===[]);
    //Object.assign(浅复制)
    console.log(Object.assign({a:'a'},{b:'b'}));
    //Object.entries()
    let test = {k:123,o:456}
    for(let [key,value] of Object.entries(test)){
        console.log([key,value]);
        
    }
    

}
{
    //扩展运算符，babel暂不支持
}