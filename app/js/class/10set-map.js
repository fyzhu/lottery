//set-map
{
    let list= new Set();
    list.add(5);
    list.add(7);
    console.log('size',list.size);
    
}
{
    let arr=[1,2,3,4,5];
    let list =new Set(arr);
    console.log(list.size);
    
}
{
    let list =new Set();
    list.add(1);
    list.add(2);
    list.add(1);//不会添加进去
    console.log(list);
    let arr=[1,2,3,1,2]
    let list2=new Set(arr)
    console.log(list2);
    let arr2 = [1, 2, 3, 1, '2']
    let list3 = new Set(arr2)
    console.log(list3);
    
}
{
    let arr=['add','delete','clear','has'];
    let list =new Set(arr);
    console.log(list.has('add'));
    console.log('delete',list.delete('add'),list);
    list.clear();
    console.log(list);   
    
}
{
    let arr = ['add', 'delete', 'clear', 'has'];
    let list = new Set(arr);
    for(let key of list.keys()){
        console.log('key',key);
        
    }
    for (let value of list.values()) {
        console.log('value', value);

    }
    for (let value of list) {
        console.log('value', value);

    }
    for (let [key,value] of list.entries()) {
        console.log('key-value', key,value);

    }
    list.forEach(item=>{
        console.log(item);
        
    })
}
{
    //WeakSet 1元素只能是对象，2弱引用，地址引用，
    let weakList =new WeakSet();
    let arg={};
    weakList.add(arg);
    console.log(weakList);
    
}
//map
{
    //map的key可以是任何类型
    let map =new Map();
    let arr=['123'];
    map.set(arr,456);
    console.log(map,map.get(arr));
    
}
{
    let map =new Map([['a',123],['b',456]]);
    console.log(map);
    console.log(map.size);
    console.log('delete',map.delete('a'),map);
    console.log('clear',map.clear(),map);
    
}
{
    //WeakMap的key必须是对象
    let weakmap=new WeakMap();
    let o={};
    weakmap.set(o,123);
    console.log(weakmap.get(o));
    
}

//map array 横向对比，增删改查

{ 
    let map=new Map();
    let array=[];
    //增
    map.set('t',1);
    array.push({t:1})
    console.log('增',map,array);
    //查
    let map_exist=map.has('t');
    let array_exist=array.find(item=>item.t);
    console.log('查',map_exist,array_exist);    
    
}
{
    let map = new Map();
    let array = [];
    //增
    map.set('t', 1);
    array.push({ t: 1 })
    //改
    map.set('t', 2);
    array.forEach(item => item.t ? item.t = 2 : '');
    console.info('改', map, array)
}
{
    let map = new Map();
    let array = [];
    //增
    map.set('t', 1);
    array.push({ t: 1 })
    //删除
    map.delete('t')
    let index = array.findIndex(item => item.t)
    array.splice(index, 1);
    console.log('删', map, array);
}
//set 和 array 对比
{
    let set= new Set();
    let arr=[];
    let item1={t:1}
    //增
    set.add(item1);
    arr.push({t:1});
    console.log('增',set, arr);

    //查
    let set_exist = set.has(item1);
    let arr_exist=arr.find(item=>item.t);
    console.log('查',set_exist,arr_exist);
    
    
    
}
{
    let set = new Set();
    let arr = [];
    let item1 = { t: 1 }
    //增
    set.add(item1);
    arr.push({ t: 1 });
    // console.log(set, arr);
    //改
    set.forEach(item => item.t ? item.t = 2 : '');
    arr.forEach(item => item.t ? item.t = 2 : '')
    console.log('改',set, arr);
}
{
    let set = new Set();
    let arr = [];
    let item1= {t:1}
    //增
    set.add(item1);
    arr.push({ t: 1 });
    //删
    set.forEach(item=>item.t?set.delete(item):'');
    let index = arr.findIndex(item => item.t)
    arr.splice(index, 1);
    console.log('删',set,arr);
    
}
// map,set,object对比
{
    let obj={}
    //增
    obj['t']=1;
    console.log(obj);
    //查
    console.log('t' in obj,Reflect.has(obj,'t'));
    //改
    obj['t']=2;
    console.log(obj);
    //删
    delete obj['t']
    console.log(obj);
    
    
}