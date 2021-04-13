function log1(message){
    console.log(message);
}

function log2(...messages){
    log1(messages.join(' | '));
}

function log3(...messages){
    const date = new Date().toLocaleDateString("en-US").split(" ").join('/');
    const time = new Date().toLocaleTimeString("en-US").split(" ").join(' ');
    const dateAndTime = date + ', ' + time;
    log2(dateAndTime, ...messages)
}