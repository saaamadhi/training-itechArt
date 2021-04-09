class FuncLib {
    constructor (arr = ''){
        this.arr = arr;
        this.perem = 0;
    }
    firstObj(){
        this.perem = this.arr[0];
        return this;
    }
    lastObj(){
        this.perem = this.arr[this.arr.length - 1];
        return this;
    }
    skipObj(number){
        this.arr = Array.from(this.arr).slice(number);
        return this;
    }
    takeObj(number){
        this.arr = Array.from(this.arr).slice(0, number);
        return this;
    }

    isObjArray(obj) {
        if(Object.prototype.toString.call(obj) === '[object Array]') return true;
        else return false;
    }

    isObjBoolean(obj){
        if(Object.prototype.toString.call(obj) === '[object Boolean]') return true;
        else return false;
    }

    isObjDate(obj){
        if(Object.prototype.toString.call(obj) === '[object Date]') return true;
        else return false;
    }

    isObjNumber(obj){
        if(Object.prototype.toString.call(obj) === '[object Number]') return true;
        else return false;
    }

    isObjString(obj){
        if(Object.prototype.toString.call(obj) === '[object String]') return true;
        else return false;
    }

    isObjFunction(obj){
        if(Object.prototype.toString.call(obj) === '[object Function]') return true;
        else return false;
    }

    isObjUndefined(obj){
        if(Object.prototype.toString.call(obj) === '[object Undefined]') return true;
        else return false;
    }

    isObjNull(obj){
        if(Object.prototype.toString.call(obj) === '[object Null]') return true;
        else return false;
    }
}

const instance1 = new FuncLib([2, 32, 56, 1, 4, 5, 8, 45, 38]);
const instance2 = new FuncLib();
instance1.takeObj(5).lastObj();
instance2.isObjArray([1, 2, 3]);
