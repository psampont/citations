if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
} 

var content = '';

i = Math.round(Math.random() * (citations.length - 1));

content = citations[i].text_fr;
document.getElementById('content').innerHTML = content;

author = citations[i].author;
document.getElementById('reference').innerHTML = "—&nbsp;" + author;

reference = citations[i].reference;
if (reference !== undefined) {
  document.getElementById('reference').innerHTML += ', ' + reference;
}



