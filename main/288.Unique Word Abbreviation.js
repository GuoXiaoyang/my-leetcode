/**
 * Created by gxy on 2017/6/2.
 */
/****************************************************************
 288.Unique Word Abbreviation
 An abbreviation of a word follows the form <first letter><number><last letter>. Below are some examples of word abbreviations:
 a) it --> it (no abbreviation) 1
 b) d|o|g --> d1g 1 1 1 1---5----0----5--8
 c) i|nternationalizatio|n --> i18n 1 1---5----0
 d) l|ocalizatio|n --> l10n
 Assume you have a dictionary and given a word, find whether its abbreviation is unique in the dictionary. A word's abbreviation is unique if no other word from the dictionary has the same abbreviation.
 Example:
 Given dictionary = [ "deer", "door", "cake", "card" ] isUnique("dear") -> false isUnique("cart") -> true isUnique("cane") -> false isUnique("make") -> true
****************************************************************/
var validWordAbbr = function (strs,word) {
  var map={},abbr;
  for(var i=0;i<strs.length;i++) {
    abbr=getAbbr(strs[i]);
    map[abbr]=map[abbr]?map[abbr]+1:1;
  }

  abbr=getAbbr(word);
  return map[abbr]==1;
};

function getAbbr(word) {
  var abbr;
  if(word.length<=2) {
    abbr=word;
  } else {
    abbr=word[0]+word.substring(1,word.length-2)+word[word.length-1];
  }
  return abbr;
}

//test
var strs = [ "deer", "door", "cake", "card" ],word="deer";
var algo = "algo";
console.time(algo);
var res =validWordAbbr(strs,word) ;
console.timeEnd(algo);
console.log("res:",res);
