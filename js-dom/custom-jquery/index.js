function $(selector){

    const elems = document.querySelectorAll(selector);

    this.text = function(value){
        if(value !== undefined){
            elems.forEach(element => {
                element.innerText = value;
            });

            return this;
        }else{
            const arr = [];
            elems.forEach(element => {
                arr.push(element.innerText);
            });

            return arr.join(' ');
        }
    }

    this.css = function(property, value){
        if(value !== undefined){
            elems.forEach(element => {
                element.style[property] = value;
            });

            return this;
        }else {
            let neededProp;
            elems.forEach(element => {
                const styles = getComputedStyle(element);
                neededProp = styles.getPropertyValue(property);
            });

            return neededProp;
        }
    }

    this.attr = function(name, value){
        if(value !== undefined){ 
            elems.forEach(element => {
                element.setAttribute(name, value);
            });

            return this;
        }
        else { 
            let neededVal;
            elems.forEach(element => {
                neededVal = element.getAttribute(name);
            });
            
            return neededVal;
        }
    }

    this.empty = function(){
        elems.forEach(element => {
            element.innerHTML = '';
        });

        return this;
    }

    this.addClass = function(value){
        if(typeof(value) === 'string' || typeof(value) === 'array'){
            elems.forEach(element => {
                const arr = value.split(' ');
                element.classList.add(...arr);
            });
        }
        else {
            if(value !== undefined){
                elems.forEach(element => {
                    const result = value();
                    element.classList.add(result);
                })
            }
        }

        return this;
    }

    this.removeClass = function(value){
        if(typeof(value) === 'string'){
            elems.forEach(element => {
                const arr = value.split(' ');
                element.classList.remove(...arr);
            });
        }
        else {
            if(value !== undefined){
                elems.forEach(element => {
                    const result = value();
                    element.classList.remove(result);
                });
            }
        }

        return this;
    }

    this.append = function(value){
        if(typeof(value) === 'string'){
            elems.forEach(element => {
                element.innerHTML += value;
            });
        }else {
            elems.forEach(element => {
                element.append(value);
            });
        }

        return this;
    }
    
    this.remove = function(value){
        if(value !== undefined){
            elems.forEach(element => {
                const elToRemove = document.querySelector(value);
                element.removeChild(elToRemove);
            });
        }else{
            elems.forEach(element => {
                element.remove();
            });
        } 

        return this;
    }

    this.children = function(value){
        if(value !== undefined){
            let matched;
            elems.forEach(element => {
                matched = Array.from(element.querySelectorAll(value));
            });

            return matched;
        }else {
            let childs;
            elems.forEach(element => {
                childs = Array.from(element.children);
            });

            return childs;
        }

        //return this;
    }

    this.click = function(value){
        if(value !== undefined){
            elems.forEach(element => {
                element.addEventListener('click', value());
            });
        }else {
            elems.forEach(element => {
                element.addEventListener('click', ()=>{});
            });
        }
        
        return this;
    }

    return this;
}
