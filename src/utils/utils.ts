// 获取url后的参数
/**
 * @param {string} name 字段名
 */
export const getParam = (name: any) => {
  const str = window.location.href.split('?')[1] || '';
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  const r = str.match(reg);
  if (r) return decodeURI(r[2]);
  return ''; //返回参数值
};
