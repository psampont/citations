if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
} 

var content = '';

count = citations.length;
i = Math.round(Math.random()) * (count - 1);

content = citations[i].text_fr;

document.getElementById('content').innerHTML = content;

console.log("Start")
