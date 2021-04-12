class ArrLib {
    constructor(arr){
        this.arr = arr;
    }

    static chain(arr){
        return new ArrLib(arr); 
    }

    value(){
        return this.arr;
    }

    take(n){
        this.arr = Array.from(this.arr).slice(0, n);

        return this;
    }

    skip(n){
        this.arr = Array.from(this.arr).slice(n);

        return this;
    }

    map(callback){
        this.arr = ArrLib.map(this.arr, callback);

        return this;
    }

    reduce(callback, initialValue){
        this.arr = ArrLib.reduce(this.arr, callback, initialValue);

        return this;
    }

    filter(callback){
        this.arr = ArrLib.filter(this.arr, callback);

        return this;
    }

    foreach(callback){
        this.arr = ArrLib.foreach(this.arr, callback);

        return this;
    }

    static take(arr, n){
        return Array.from(arr).slice(0, n);
    }

    static skip(arr, n){
        return Array.from(arr).slice(n);
    }

    static map(arr, callback){
        let result = [];
        for(let i = 0; i < arr.length; i++){
            result.push(callback(arr[i], i, arr))
        }
        return result;
    }

    static reduce(arr, callback, initialValue){
        let res = initialValue;
        for(let i = 0; i < arr.length; i++){ 
            res = callback(res, arr[i], i, arr);
        }
        return res;
    }

    static filter(arr, callback){
        let result = [];
        for(let i = 0; i < arr.length; i++){
            if(callback(arr[i], i, arr)){
                result.push(arr[i])
            }
        }
        return result;
    }

    static foreach(arr, callback){
        for(let i = 0; i < arr.length; i++){
            callback(arr[i], i, arr);
        }
    }
}