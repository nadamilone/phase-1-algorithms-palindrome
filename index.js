function isPalindrome(word) {
  for (let i = 0; i < word.length / 2; i++) {
    const j = word.length - 1 - i;
    if (word[i] !== word[j]) return false;
  }
  return true;
}

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("civic"));

  console.log("Vroom!");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("cabbage"));

  console.log("Vroom Vroom");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("kayak"));
}

module.exports = isPalindrome;
