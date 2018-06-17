const hasher = (message) => {
    const a = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const b = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM';
    return message.replace(/[a-z]/gi, c => b[a.indexOf(c)]);
};

const antiHasher = (message) => {
    const a = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').reverse().join('');
    const b = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM'.split('').reverse().join('');
    return message.replace(/[a-z]/gi, c => b[a.indexOf(c)]);
};

module.exports = {
    hasher,
    antiHasher,
};
