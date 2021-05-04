function $(...selector){
    let elems;
    const result = [];
    
    for(let key in selector){
        if(typeof(selector[key]) === 'string'){
            const value = document.querySelectorAll(selector[key]);
            result.push(...value);
        }
        if(typeof(selector[key]) === 'object'){
            const arr = [];
            if(selector[key].elems){
                arr.push(...selector[key].elems);
                result.push(...arr);
            }else {
                arr.push(selector[key]);
                result.push(...arr);
            }
        }
    }

    elems = [...result];

    const customObj = {
        elems: elems,

        text: function(value){
            if(typeof(value) === 'function'){
                customObj.elems.map((element, index) => {
                    const result = value(index);
                    element.innerText = result;
                });
            }
            if(typeof(value) === 'string'){
                customObj.elems.forEach(element => {
                    element.innerText = value;
                });
            }
            if(value === undefined){
                const arr = [];
                customObj.elems.forEach(element => {
                    arr.push(element.innerText);
                });
    
                return arr.join(' ');
            }
        },
    
        css: function(property, value){
            if(typeof(property) === 'string' && typeof(value) === 'string'){
                customObj.elems.forEach(element => {
                    element.style[property] = value;
                });
            }
            if(value === undefined){
                let neededProp;
                customObj.elems.forEach(element => {
                    const styles = getComputedStyle(element);
                    neededProp = styles.getPropertyValue(property);
                });
    
                return neededProp;
            }
        },
    
        attr: function(name, value){
            if(typeof(name) === 'string' && typeof(value) === 'string'){ 
                customObj.elems.forEach(element => {
                    element.setAttribute(name, value);
                });
            }
            if(value === undefined){ 
                let neededVal;
                customObj.elems.forEach(element => {
                    neededVal = element.getAttribute(name);
                });
                
                return neededVal;
            }
        },
    
        empty: function(){
            customObj.elems.forEach(element => {
                element.innerHTML = '';
            });
        },
    
        addClass: function(value){
            if(typeof(value) === 'function'){
                customObj.elems.map((element, index) => {
                    const result = value(index+1);
                    if(typeof(result) === 'object'){
                        element.classList.add(result);
                    }
                    if(typeof(result) === 'string'){
                        const arr = result.split(' ');
                        element.classList.add(...arr);
                    }
                })
            }
            if(typeof(value) === 'string'){
                customObj.elems.forEach(element => {
                    const arr = value.split(' ');
                    element.classList.add(...arr);
                });
            }
            if(typeof(value) === 'object'){
                customObj.elems.forEach(element => {
                    element.classList.add(...value);
                });
            }
        },
    
        removeClass: function(value){
            if(typeof(value) === 'object'){
                customObj.elems.forEach(element => {
                    element.classList.remove(...value);
                });
            }
            if(typeof(value) === 'string'){
                customObj.elems.forEach(element => {
                    const arr = value.split(' ');
                    element.classList.remove(...arr);
                });
            }
            
            if(typeof(value) === 'function'){
                customObj.elems.map((element, index) => {
                    const result = value(index+1);
                    if(typeof(result) === 'object'){
                        element.classList.remove(result);
                    }
                    if(typeof(result) === 'string'){
                        const arr = result.split(' ');
                        element.classList.remove(...arr);
                    }
                });
            }
            
        },
    
        append: function(value){
            if(typeof(value) === 'string'){
                customObj.elems.forEach(element => {
                    element.innerHTML += value;
                });
            }else {
                customObj.elems.forEach(element => {
                    element.append(value);
                });
            }
        },
        
        remove: function(value){
            if(value !== undefined){
                customObj.elems.forEach(element => {
                    const elToRemove = document.querySelector(value);
                    element.removeChild(elToRemove);
                });
            }else{
                customObj.elems.forEach(element => {
                    element.remove();
                });
            } 
        },
    
        children: function(value){
            if(value !== undefined){
                let matched;
                customObj.elems.forEach(element => {
                    matched = Array.from(element.querySelectorAll(value));
                });
    
                return matched;
            }else {
                let childs;
                customObj.elems.forEach(element => {
                    childs = Array.from(element.children);
                });
    
                return childs;
            }
        },
    
        click: function(value){
            if(value !== undefined){
                customObj.elems.forEach(element => {
                    element.addEventListener('click', value());
                });
            }else {
                customObj.elems.forEach(element => {
                    element.addEventListener('click', ()=>{});
                });
            }
        },
    }
    
    return customObj;
}