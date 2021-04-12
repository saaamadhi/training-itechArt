class FuncLib {
    static first(arr) {
        return arr[0];
    }

    static last(arr) {
        return arr[arr.length - 1];
    }

    static skip(arr, number) {
        return Array.from(arr).slice(number);
    }

    static take(arr, number) {
        return Array.from(arr).slice(0, number); 
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