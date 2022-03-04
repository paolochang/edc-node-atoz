let count = 0;

function increase() {
  count++;
}

function getCount() {
  return count;
}

/** 4:40
 * 'exports'는 'module'안의 'exports'를 참조하는 있어
 * 'module'을 생략하고 'exports'를 사용 할 수 있지만,
 * 'exports'에 다른값을 할당하면 더이상 'module'의 'exports' 값을
 * 참조하지 않기 때문에 전혀 다른 'Object'를 참조하여 'Error'가 발생한다.
 */
console.log(module);
module.exports.getCount = getCount;
console.log(module.exports === exports);
// exports = {};
console.log(module.exports === exports);
exports.increase = increase;
