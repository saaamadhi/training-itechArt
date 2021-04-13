class ArrLib {

    static Chain = class {
        constructor(arr){
            this.arr = arr;
            this.executionQueue = [];
        }

        value(){
            let result = this.arr;
            this.executionQueue.forEach((item) => {
                result = item.function(result, ...item.args)
            })
            return result;
        }

        take(n){
            this.executionQueue.push({function: ArrLib.take, args: [n]});
    
            return this;
        }

        skip(n){
            this.executionQueue.push({function: ArrLib.skip, args: [n]});
    
            return this;
        }
    
        map(callback){
            this.executionQueue.push({function: ArrLib.map, args: [callback]});
    
            return this;
        }
    
        filter(callback){
            this.executionQueue.push({function: ArrLib.filter, args: [callback]});
    
            return this;
        }

        reduce(callback, initialValue){
            this.executionQueue.push({function: ArrLib.reduce, args: [callback, initialValue]});
    
            return this;
        }
    
        foreach(callback){
            ArrLib.foreach(this.arr, callback);
        }
    }

    static chain(arr){
        return (Array.isArray(arr) && arr.length > 0) ? new ArrLib.Chain(arr) : arr;
    }

    static take(arr, n){
        if(Array.isArray(arr)){

            return Array.from(arr).slice(0, n);
        }
    }

    static isValid(arr, callback){
        return (Array.isArray(arr) && typeof(callback) === 'function') ? true : false;
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