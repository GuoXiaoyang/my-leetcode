/**
 * Created by gxy on 2017/6/5.
 */
/****************************************************************
 535. Encode and Decode TinyURL
 TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl and it returns a short URL such as http://tinyurl.com/4e9iAk.

 Design the encode and decode methods for the TinyURL service. There is no restriction on how your encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.
****************************************************************/
/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var URL=[];
var encode = function(longUrl) {
  console.log("URL:",URL);
  var res="https://leetcode.com/"+URL.length;
  URL.push(longUrl);
  return res;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
  var short=shortUrl.split('/');
  var index=parseInt(short[short.length-1]);
  return URL[index];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

//test
var url="https://leetcode.com/problems/encode-and-decode-tinyurl/#/solutions"
var shortUrl=encode(url);
console.log("shortUrl:",shortUrl);
var longUrl=decode(shortUrl);
console.log("longUrl:",longUrl);