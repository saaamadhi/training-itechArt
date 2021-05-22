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
                
                return this;
            }
            if(typeof(value) === 'string'){
                customObj.elems.forEach(element => {
                    element.innerText = value;
                });
                
                return this;
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

                return this;
            }
            if(value === undefined){
                customObj.elems.forEach(element => {
                    const styles = getComputedStyle(element);
                    const neededProp = styles.getPropertyValue(property);

                    return neededProp;
                });
            }
        },
    
        attr: function(name, value){
            if(typeof(name) === 'string' && typeof(value) === 'string'){ 
                customObj.elems.forEach(element => {
                    element.setAttribute(name, value);
                });
                
                return this;
            }
            if(value === undefined){ 
                customObj.elems.forEach(element => {
                    const neededVal = element.getAttribute(name);

                    return neededVal;
                });
            }
        },
    
        empty: function(){
            customObj.elems.forEach(element => {
                element.innerHTML = '';
            });

            return this;
        },
    
        addClass: function(value){
            if(typeof(value) === 'function'){
                customObj.elems.map((element, index) => {
                    const result = value(index);
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

            return this;
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
                    const result = value(index);
                    if(typeof(result) === 'object'){
                        element.classList.remove(result);
                    }
                    if(typeof(result) === 'string'){
                        const arr = result.split(' ');
                        element.classList.remove(...arr);
                    }
                });
            }
            
            return this;
        },
    
        append: function(...values){
            values.forEach((content) => {
                if(typeof(content) === 'string'){
                    customObj.elems.forEach(element => {
                        element.innerHTML += content;
                    });
                }
                if(typeof(content) === 'function'){
                    customObj.elems.map((element, index) => {
                        const result = content(index);
                        this.append(result);
                    });
                }
                if(typeof(content) === 'object'){
                    if(content.elems){
                        if(customObj.elems.length === 1 && content.elems.length === 1){
                            customObj.elems[0].append(content.elems[0]);
                        }
                        if(customObj.elems.length === 1 && content.elems.length > 1){
                            customObj.elems[0].append(...content.elems);
                        }else {
                            customObj.elems.forEach(element => {
                                const copy = [];
                                content.elems.forEach((el) => {
                                    const dublicate = el.cloneNode();
                                    dublicate.innerHTML = el.innerHTML;
                                    copy.push(dublicate);
                                })
                                element.append(...copy);
                            });
                        }
                    }else{
                        customObj.elems.forEach(element => {
                            if(content instanceof NodeList){
                                content.forEach((item) => {
                                    const dublicate = item.cloneNode();
                                    dublicate.innerHTML = item.innerHTML;
                                    element.append(dublicate);
                                })
                            }else {
                                const dublicate = content.cloneNode();
                                dublicate.innerHTML = content.innerHTML;
                                element.append(dublicate);
                            }
                        })
                    }
                }
            });

            return this;
        },
        
        remove: function(value){
            if(value === undefined){
                customObj.elems.forEach(element => {
                    element.remove();
                });
            }else{
                customObj.elems.filter((el) => {
                    if(el.matches(value)){
                        el.remove();
                    }
                })
            } 

            return this;
        },
    
        children: function(value){
            let result = [];
            if(value !== undefined){
                customObj.elems.forEach(element => {
                    const values = element.querySelectorAll(value);
                    if(values.length !== 0){
                        let newArr = [...element.childNodes];
                        let childs = [];
                        newArr.forEach((item) => {
                            if(item.childNodes.length !== 0){
                                childs.push([...item.children]);
                                result.push(childs);
                            }
                            if(item.nodeName !== '#text'){
                                result.push(item);
                            }
                        });
                    }
                });
            }else {
                customObj.elems.forEach(element => {
                    let newArr = [...element.childNodes];
                    let childs = [];
                    newArr.forEach((item) => {
                        if(item.childNodes.length !== 0){
                            childs.push([...item.children]);
                            result.push(childs);
                        }
                        if(item.nodeName !== '#text'){
                            result.push(item);
                        }
                    })
                });
            }
            return result.flat(Infinity);
        },
    
        click: function(handler){
            if(handler !== undefined){
                customObj.elems.forEach(element => {
                    element.addEventListener('click', handler);
                });
            }else{
                customObj.elems.forEach(element => {
                    element.click();
                });
            }

            return this;
        },
    }
    
    return customObj;
}