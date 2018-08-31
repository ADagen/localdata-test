function log(...args) {
    const timeSerialized = new Date().toLocaleTimeString('ru-RU', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });
    const timeFormatted = `<span class=time>${ timeSerialized }</span>`;

    console.log(timeSerialized, ...args);

    const serialized = timeFormatted + ' ' + args.join(' ');
    const logEntry = document.createElement('div');
    logEntry.innerHTML = serialized;
    document.body.appendChild(logEntry);
}

function logCookies(title) {
    const content = JSON.stringify(window.Cookies.get(), null, 4);
    log(title, `<pre>${ content }</pre>`);
}

log('Start');

log('=================================== Plain Cookie');
logCookies('Before:');
const testCookie = Math.random().toString(36).substr(2);
log(`Add new cookie: testCookie=${ testCookie }`);
document.cookie = `testCookie=${ testCookie }`;
logCookies('After:');

log('=================================== Using JS-Cookie');
const MAX_SAFE_INTEGER = 2 ** 31 - 1;
const MAX_SAFE_DATE = new Date(MAX_SAFE_INTEGER * 1000);
logCookies('Before:');
const testJSCookie = Math.random().toString(36).substr(2);
log(`Add new cookie: testJSCookie=${ testJSCookie }`);
window.Cookies.set('testJSCookie', testJSCookie, { expires: MAX_SAFE_DATE });
logCookies('After:');

log('=================================== LocalStorage');
const storageKey = 'testLocalStorage';
log('Before:', localStorage.getItem(storageKey));
const testLocalStorage = Math.random().toString(36).substr(2);
localStorage.setItem(storageKey, testLocalStorage);
log(`Add new localStorage item, ${storageKey} = ${ testLocalStorage }`);
log('After:', localStorage.getItem(storageKey));

log('=================================== IndexedDB');
log('N/A');

log('Finish');
