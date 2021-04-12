class FuncLib {
    constructor(){
        this.array = [];
    }

    static asChain(arr){
        this.array = arr;
        return this;
    }

    static first(arr = this.array) {
        return arr[0];
    }

    static last(arr = this.array) {
        return arr[arr.length - 1];
    }

    static skip(arr = this.array, number) {
        this.array = Array.from(arr).slice(number);
        return this;
    }

    static take(arr = this.array, number) {
        this.array = Array.from(arr).slice(0, number); 
        return this;
    }

    static isArray(obj) {
        return obj instanceof Array;
    }

    static isBoolean(obj){
        return !!obj === obj;
    }

    static isDate(obj){ 
        return obj instanceof Date;
    }

    static isNumber(obj){ 
        return Object.prototype.toString.call(obj) === "[object Number]";
    }

    static isString(obj){
        return typeof(obj) === 'string';
    } 

    static isFunction(obj){
        return typeof(obj) === 'function';
    }

    static isUndefined(obj){
        return obj === undefined;
    } 

    static isNull(obj) {
        return obj === null;
    }
}