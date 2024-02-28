class VigenereCipher {
  constructor(key) {
    this.key = key.toUpperCase(); // Convert key to uppercase
  }

  encrypt(plaintext) {
    let result = "";
    plaintext = plaintext.toUpperCase().replace(/[^A-Z]/g, ""); // Convert plaintext to uppercase
    // return plaintext;
    for (let i = 0, j = 0; i < plaintext.length; i++) {
      const plainCharCode = plaintext.charCodeAt(i);
      if (plainCharCode >= 65 && plainCharCode <= 90) {
        const keyCharCode = this.key.charCodeAt(j % this.key.length) - 65;
        const encryptedCharCode =
          ((plainCharCode - 65 + keyCharCode) % 26) + 65;
        result += String.fromCharCode(encryptedCharCode);
        j++;
      } else {
        result += plaintext[i];
      }
    }
    // //const encodedChipherText = btoa(result);
    // return encodedChipherText;
    return result;
  }

  decrypt(ciphertext) {
    let result = "";
    ciphertext = ciphertext.toUpperCase().replace(/[^A-Z]/g, "");
    for (let i = 0, j = 0; i < ciphertex.length; i++) {
      const cipherCharCode = ciphertex.charCodeAt(i);
      if (cipherCharCode >= 65 && cipherCharCode <= 90) {
        const keyCharCode = this.key.charCodeAt(j % this.key.length) - 65;
        const decryptedCharCode =
          ((cipherCharCode - 65 - keyCharCode + 26) % 26) + 65;
        result += String.fromCharCode(decryptedCharCode);
        j++;
      } else {
        result += ciphertex[i];
      }
    }
    return result;
  }
}

export default VigenereCipher;
