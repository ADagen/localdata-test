function log(...args) {
    const timeSerialized = new Date().toLocaleTimeString('ru-RU', {
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
log('======= Cookie');
log('Before:', document.cookie);
const testCookie = Math.random().toString(36).substr(2);
log(`Add new cookie: testCookie=${ testCookie }`);
document.cookie = `testCookie=${ testCookie }`;
log('After:', document.cookie);
log('======= LocalStorage');
log('N/A');
log('======= IndexedDB');
log('N/A');
log('Finish');
