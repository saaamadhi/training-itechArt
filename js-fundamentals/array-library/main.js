class ArrLib {
    constructor(arr){
        this.arr = arr;
    }

    Chain = class {
        constructor(){
            this.executionQueue = [];
        }

        static pushFooNParams(foo, context, params){
            return foo.bind(context, params)
        }

        value(){
            let result = this.arr;
            while(this.executionQueue.length > 0){
                result = (this.executionQueue.shift())();
            }
            return result;
        }

        take(n){
            this.executionQueue.push(ArrLib.pushFooNParams(ArrLib.take, this, [this.arr, n]));
    
            return this;
        }

        skip(n){
            this.executionQueue.push(ArrLib.pushFooNParams(ArrLib.skip, this, [this.arr, n]));
    
            return this;
        }
    
        map(callback){
            this.executionQueue.push(ArrLib.pushFooNParams(ArrLib.map, this, [this.arr, callback]));
    
            return this;
        }
    
        filter(callback){
            this.executionQueue.push(ArrLib.pushFooNParams(ArrLib.filter, this, [this.arr, callback]));
    
            return this;
        }
    }

    static chain(arr){
        return (Array.isArray(arr) && arr.length > 0) ? new ArrLib(arr) : arr;
    }

    static take(arr, n){
        if(Array.isArray(arr)){

            return Array.from(arr).slice(0, n);
        }
    }

    static isValid(arr, callback){
        return (Array.isArray(arr) && typeof(callback) === 'function') ? true : false;
    }

    reduce(callback, initialValue){
        ArrLib.reduce(this.arr, callback, initialValue);
    }

    foreach(callback){
        ArrLib.foreach(this.arr, callback);
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