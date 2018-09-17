export const hasher = (message: string) => {
    const a = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const b = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM';
    return message.replace(/[a-z]/gi, c => b[a.indexOf(c)]);
};

export const antiHasher = (message: string) => {
    const a = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').reverse().join('');
    const b = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM'.split('').reverse().join('');
    return message.replace(/[a-z]/gi, c => b[a.indexOf(c)]);
};