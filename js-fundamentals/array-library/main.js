class ArrLib {
    constructor(arr){
        this.arr = arr;
    }

    static isValid(arr, callback){
        return (Array.isArray(arr) && typeof(callback) === 'function') ? true : false;
    }

    static chain(arr){
        return (Array.isArray(arr) && arr.length > 0) ? new ArrLib(arr) : arr;
    }

    value(){
        return this.arr;
    }

    take(n){
        this.arr = ArrLib.take(this.arr, n);

        return this;
    }

    skip(n){
        this.arr = ArrLib.skip(this.arr, n);

        return this;
    }

    map(callback){
        this.arr = ArrLib.map(this.arr, callback);

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
        if(Array.isArray(arr)){

            return Array.from(arr).slice(0, n);
        }
    }

    static skip(arr, n){
        if(Array.isArray(arr)){

            return Array.from(arr).slice(n);
        }
    }

    static map(arr, callback){
        if(ArrLib.isValid(arr, callback)){
            let result = [];
            for(let i = 0; i < arr.length; i++){
                result.push(callback(arr[i], i, arr))
            }

            return result;
        } else return arr;
    }

    static reduce(arr, callback, initialValue){
        if(ArrLib.isValid(arr, callback)){
            let res = initialValue;
            for(let i = 0; i < arr.length; i++){ 
                res = callback(res, arr[i], i, arr);
            }

            return res;
        } else return undefined;
    }

    static filter(arr, callback){
        if(ArrLib.isValid(arr, callback)){
            let result = [];
            for(let i = 0; i < arr.length; i++){
                if(callback(arr[i], i, arr)){
                    result.push(arr[i])
                }
            }

            return result;
        } else return arr;
    }

    static foreach(arr, callback){
        if(ArrLib.isValid(arr, callback)){
            for(let i = 0; i < arr.length; i++){
                callback(arr[i], i, arr);
            }
        }
    }
}