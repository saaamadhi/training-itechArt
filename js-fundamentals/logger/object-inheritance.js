const BaseLogger = {
    log: function(message) {
        console.log(message);
    }
}

const TableLogger = {
    log: function(...messages) {
        Object.getPrototypeOf(TableLogger).log(messages.join(' | '));
    },
}

Object.setPrototypeOf(TableLogger, BaseLogger);

const TableTimeLogger = {
    log: function(...messages) {
        const date = new Date().toLocaleDateString("en-US").split(" ").join('/');
        const time = new Date().toLocaleTimeString("en-US").split(" ").join(' ');
        const dateAndTime = date + ', ' + time;
        Object.getPrototypeOf(TableTimeLogger).log(dateAndTime, ...messages)
    }
}

Object.setPrototypeOf(TableTimeLogger, TableLogger);