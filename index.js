function log(...args) {
    const timeSerialized = new Date().toLocaleDateString('ru-RU', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });
    const timeFormatted = `<span class=time>${ timeSerialized }</span>`;

    console.log(timeSerialized, ...args);

    const serialized = timeFormatted + ' ' + args.join();
    const logEntry = document.createElement('div');
    logEntry.innerHTML = serialized;
    document.body.appendChild(logEntry);
}

log('Start');
log('Finish');
