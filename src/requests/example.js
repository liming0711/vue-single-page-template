/**
 * 登陆的相关请求
 */
import BaseModule from './base-module';

class Example extends BaseModule {
  example1 () {
    return this.get('https://cnodejs.org/api/v1/topic/5433d5e4e737cbe96dcef312');
  }
  example2 (data) {
    return this.post('/example2', data);
  }
}

export default new Example();
