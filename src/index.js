module.exports = function reverse (n) {
    let b=String(Math.abs(n));
    let a='';
    for (var i=0; i<b.length; i++) {
        a += b[b.length-i-1];
    }
    return a/1;
}