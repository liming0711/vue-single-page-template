<template>
  <div class="hello">
    <div>接口测试：</div>
    <div>{{ msg }}</div>
  </div>
</template>

<script>
import Example from '@/requests/example';
import validator from '@/requests/validator';

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: ''
    };
  },
  created () {
    Example.example1()
      .then(res => {
        res = validator(res);
        this.msg = res.title;
      })
      .catch(error => {
        this.msg = `发生错误，错误代码${error.status}，错误信息${error.statusText}`;
      });
  }
};
</script>

<style scoped>

</style>
