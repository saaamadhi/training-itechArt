class FuncLib {
    constructor (arr = ''){
        this.arr = arr;
        this.perem = 0;
    }
    first() {
        this.perem = this.arr[0];
        return this;
    }
    last() {
        this.perem = this.arr[this.arr.length - 1];
        return this;
    }
    skip(number) {
        this.arr = Array.from(this.arr).slice(number);
        return this;
    }
     take(number) {
        this.arr = Array.from(this.arr).slice(0, number);
        return this;
    }

    isArray(obj) {
        return obj instanceof Array;
    }

    isBoolean(obj){
        return !!obj === obj
    }

    isDate(obj){ 
        return obj instanceof Date
    }

    isNumber(obj){ 
        return isNaN(obj) ? false: true
    }

    isString(obj){
        return typeof(obj) === 'string'
    } 

    isFunction(obj){
        return typeof(obj) === 'function'
    }

    isUndefined(obj){
        return obj === undefined
    } 

    isNull(obj) {
        return obj === null
    }
}

const instance1 = new FuncLib([2, 32, 56, 1, 4, 5, 8, 45, 38]);
const instance2 = new FuncLib();
instance1.take(5).last();
instance2.isArray([1, 2, 3]);