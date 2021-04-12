class ArrLib {
    static take(arr, n){
        return Array.from(arr).slice(0, number);
    }

    static skip(arr, n){
        return Array.from(arr).slice(number);
    }

    static map(arr, callback){
        let res = [];
        for(let i = 0; i < arr.length; i++){
            res.push(callback(arr[i], i, arr))
        }
    }

    static reduce(arr, callback, initialValue){
        let value = [];
        for(let i = 0; i < arr.length; i++){
            value = callback(initialValue, arr[i], i, arr);
        }
    }

    static filter(arr, callback){
        let res = [];
        for(let i = 0; i < arr.length; i++){
            if(callback(arr[i], i, arr)){
                res.push(arr[i])
            }
        }
    }

    static foreach(arr, callback){}
}