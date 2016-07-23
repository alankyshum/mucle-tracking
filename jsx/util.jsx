// ===================
// === OVERRIDE JS ===
// ===================
Date.prototype.toDateInputValue = (function () {
  const local = new Date(this);
  local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
  return local.toJSON().slice(0, 10);
});
Date.prototype.toTimeInputValue = (function () {
  const local = new Date(this);
  const stamps = local.toLocaleTimeString().split(':');
  stamps[0] = stamps[0].length === 1 ? `0${stamps[0]}` : stamps[0];
  stamps[1] = stamps[1].length === 1 ? `0${stamps[1]}` : stamps[1];
  return `${stamps[0]}:${stamps[1]}`;
});


const serialise = (obj) => {
  const str = [];
  Object.keys(obj).forEach((p) => {
    if (obj.hasOwnProperty(p)) {
      str.push(`${encodeURIComponent(p)}=${encodeURIComponent(obj[p])}`);
    }
  });
  return str.join('&');
};

export default function () {
  return {
    serialise
  };
}
