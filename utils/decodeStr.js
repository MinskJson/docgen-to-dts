// https://stackoverflow.com/a/39924269/3400830
const map = { amp: '&', lt: '<', gt: '>', quot: '"', '#039': "'" };
module.exports = str => str.replace(/&([^;]+);/g, (m, c) => map[c]);
