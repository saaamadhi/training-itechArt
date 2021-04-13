BaseLogger = {
    log: function(message) {
        console.log(message);
    }
}

TableLogger = {
    log: function(...messages) {
        BaseLogger.log(messages.join(' | '));
    }
}

TableTimeLogger = {
    log: function(...messages) {
        const date = new Date().toLocaleDateString("en-US").split(" ").join('/');
        const time = new Date().toLocaleTimeString("en-US").split(" ").join(' ');
        const dateAndTime = date + ', ' + time;
        TableLogger.log(dateAndTime, ...messages)
    }
}