import CryptoJS from 'crypto-js';

const secretKey = 'your-very-secret-key'; // This should be stored securely, e.g., in .env

export const encryptNote = (text) => {
    return CryptoJS.AES.encrypt(text, secretKey).toString();
};

export const decryptNote = (ciphertext) => {
    const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
};
