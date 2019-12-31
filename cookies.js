/**
 * Set the value of a browser cookie
 *
 * @param {string} name Name of the cookie
 * @param {string} value Value of the cookie
 * @param {Date} date Expiration date
 */
function setCookie(name, value, date) {
  document.cookie = name+'='+value+'; expires='+date.toUTCString()+';';
}

/**
 * Get the value of a browser cookie
 *
 * @param {string} name Name of the cookie
 * @return {string} Cookie value
 */
function getCookie(name) {
  const matches = document.cookie.match(new RegExp('(?:^|; )' +
    name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
    '=([^;]*)')
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
