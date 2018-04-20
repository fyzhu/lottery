//iterator
{
    let arr=['hello','world'];
    let map = arr[Symbol.iterator]();//调用数组的Symbol.iterator属性的方法，数组原生具备iterator接口（即默认部署了Symbol.iterator属性）
    console.log(map.next());
    console.log(map.next());
    console.log(map.next());
    
}
{
    let obj={
        start:[1,3,2],
        end:[7,9,8],
        [Symbol.iterator](){//es6中新增的，[]里面是一个变量名
            let self =this;
            let index=0;
            let arr=self.start.concat(self.end);
            let len= arr.length;
            return{
                next(){
                    if(index<len){
                        return{
                            value:arr[index++],
                            done:false
                        }
                    }else{
                        return {
                            value: arr[index++],
                            done: true
                        }
                    }
                }
            }
        }
    }
    for(let key of obj){
        console.log(key);
        
    }
}
{
    let arr = ['hello', 'world'];
    for(let value of arr){
        console.log(value);
        
    }
}