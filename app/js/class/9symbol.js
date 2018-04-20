//Symbol
{
    let a1=Symbol();
    let a2=Symbol();
    console.log(a1===a2,Object.is(a1,a2));
    let a3=Symbol.for('a3');
    let a4=Symbol.for('a3');
    console.log(a3 === a4, Object.is(a3, a4));
    
}
{
    //Symbol应用,当你定义了一个abc【symbol类型的】时，其他人还可以定义abc，互不影响
    let a1=Symbol.for('abc');
    let obj={
        [a1]:'123',
        'abc':'456',
        // abc:4567,
        'c':456,
        'd':'test'
    }
    console.log(obj);
    //for of 取不到symbol的属性
    for(let [key,value] of Object.entries(obj)){
        console.log(key,value);
        //谷歌浏览器有bug，不显示最后一个
    }
    //使用Object.getOwnPropertySymbols取symbol属性
    Object.getOwnPropertySymbols(obj).forEach(item => {
        console.log(item,obj[item]);
        
    });

    //使用reflect获取普通属性和symbol属性

    Reflect.ownKeys(obj).forEach(item=>{
        console.log('ownKeys',item,obj[item]);
        
    })
}
{
    let map
    map = {
        test1: {

            title: 'test1',
            items: []
        }

    }
    map['test2'] = {

        title: 'test2',
        items: []

    }
    map['3'] = {

        title: '3',
        items: []

    }
    console.log(map)
}