<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ subGreeting }}</h2>
    <ul>
      <li>
        <a
          href="https://www.fundebug.com"
          target="_blank"
        >主页</a>
      </li>
      <li>
        <a
          href="https://www.fundebug.com/price"
          target="_blank"
        >价格</a>
      </li>
      <li>
        <a
          href="https://docs.fundebug.com"
          target="_blank"
        >文档</a>
      </li>
      <li>
        <a
          href="https://blog.fundebug.com"
          target="_blank"
        >博客</a>
      </li>
    </ul>
  </div>
</template>

<script>
// TEST 01：onerror捕获全局uncaught错误
// setTimeout(function() {
//   var TESET01;
//   TEST01.b = "";
// }, 2000);

export default {
  name: "HelloFundebug",
  props: {
    subGreeting: String
  },
  data: function() {
    // TEST 02: caught by errorHandler
    let udf = undefined; // or null
    let greeting = udf.len;
    return {
      msg: "Hello, Fundebug!" + greeting
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
