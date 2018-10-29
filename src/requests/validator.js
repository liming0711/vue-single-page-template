/**
 * 数据有效性验证：
 * 当有大量接口返回数据结构一致时，他们需要校验的条件基本一致，
 * 抽取其校验过程，抽象代码，统一返回结果。
 *
 * @param result 通过 axios 请求接口返回的数据对象
 */
export default (result) => {
  if (result.status === 200 && result.data) {
    if (result.data.data) {
      return result.data.data;
    } else {
      console.warn(result.data.errmsg || '数据为空');
    }
  } else {
    console.warn(result.statusText || '获取数据失败');
  }
};
