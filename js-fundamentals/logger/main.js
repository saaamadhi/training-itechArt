BaseLogger = {
    log1: function(message) {
        console.log(message);
    }
}

TableLogger = {
    log2: function(...messages) {
        TableLogger.log1(messages.join(' | '));
    },
    __proto__: BaseLogger
}

TableTimeLogger = {
    log3: function(...messages) {
        const date = new Date().toLocaleDateString("en-US").split(" ").join('/');
        const time = new Date().toLocaleTimeString("en-US").split(" ").join(' ');
        const dateAndTime = date + ', ' + time;
        TableTimeLogger.log2(dateAndTime, ...messages)
    },
    __proto__: TableLogger
}