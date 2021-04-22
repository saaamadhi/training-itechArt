class BaseLogger{
    log(message) {
        console.log(message);
    }
}

class TableLogger extends BaseLogger {
    log(...messages) {
        super.log(messages.join(' | '));
    }
}


class TableTimeLogger extends TableLogger{
    log(...messages) {
        const date = new Date().toLocaleDateString("en-US").split(" ").join('/');
        const time = new Date().toLocaleTimeString("en-US").split(" ").join(' ');
        const dateAndTime = date + ', ' + time;
        super.log(dateAndTime, ...messages)
    }
}
