if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js');

tomorrow = new Date();
tomorrow.setHours(0, 0, 0, 0);
tomorrow.setDate(tomorrow.getDate() + 1);

lastIndex = getCookie('lastIndex');

if (typeof lastIndex === 'undefined') {
  i = Math.round(Math.random() * (citations.length - 1));
  setCookie('lastIndex', i.toString(), tomorrow);
} else {
  i = parseInt(lastIndex);
}

content = citations[i].text_fr;
document.getElementById('content').innerHTML = content;

author = citations[i].author;
document.getElementById('reference').innerHTML = '—&nbsp;' + author;

reference = citations[i].reference;
if (reference !== undefined) {
  document.getElementById('reference').innerHTML += ', ' + reference;
}
