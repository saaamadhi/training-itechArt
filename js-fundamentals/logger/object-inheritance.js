const BaseLogger = {
    log1: function(message) {
        console.log(message);
    }
}

const TableLogger = {
    log2: function(...messages) {
        TableLogger.log1(messages.join(' | '));
    },
}

Object.setPrototypeOf(TableLogger, BaseLogger);

const TableTimeLogger = {
    log3: function(...messages) {
        const date = new Date().toLocaleDateString("en-US").split(" ").join('/');
        const time = new Date().toLocaleTimeString("en-US").split(" ").join(' ');
        const dateAndTime = date + ', ' + time;
        TableTimeLogger.log2(dateAndTime, ...messages)
    }
}

Object.setPrototypeOf(TableTimeLogger, TableLogger);