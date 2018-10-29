export const isEmptyObject = function (obj) {
  for (let name in obj) {
    return false;
  }
  return true;
};

export const isNumberic = (num) => {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

// dateString: 要格式化的时间字符串，e.g: 20180515
// type: 时间字符串的类型， yyyyMMddhhmm
// format: 要格式化成的格式， e.g: MM-dd hh:mm
export const dateStringFormat = (dateString, type, format) => {
  var RegExpObj = {
    'M+': type.indexOf('M') > -1 ? +dateString.substr(type.indexOf('M'), 2) : -1,
    'd+': type.indexOf('d') > -1 ? +dateString.substr(type.indexOf('d'), 2) : -1,
    'h+': type.indexOf('h') > -1 ? +dateString.substr(type.indexOf('h'), 2) : -1,
    'm+': type.indexOf('m') > -1 ? +dateString.substr(type.indexOf('m'), 2) : -1,
    's+': type.indexOf('s') > -1 ? +dateString.substr(type.indexOf('s'), 2) : -1
  };

  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (new Date().getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (var k in RegExpObj) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (RegExpObj[k]) : (('00' + RegExpObj[k]).substr(('' + RegExpObj[k]).length)));
    }
  }
  return format.replace('-1:-1', '').replace('-1--1', '').trim();
};
