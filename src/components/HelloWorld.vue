<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <van-button type="primary">主要按钮</van-button>
    <van-cell @touchstart.native.stop="show = true">弹出默认键盘</van-cell>
    <van-number-keyboard
      :show="show"
      @blur="show = false"
      @input="onInput"
      @delete="onDelete"
    />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      show: false,
    }
  },
  created() {
    this.initWebSocket()
  },
  destroyed() {
    this.websocketclose()
  },
  methods: {
    onInput() {
      // Toast(value)
    },
    onDelete() {
      // Toast('删除')
    },
    initWebSocket: function () {
      // WebSocket与普通的请求所用协议有所不同，ws等同于http，wss等同于https
      this.websock = new WebSocket("ws://10.4.249.23:8080/websocket/test");
      this.websock.onopen = this.websocketonopen;
      this.websock.onerror = this.websocketonerror;
      this.websock.onmessage = this.websocketonmessage;
      this.websock.onclose = this.websocketclose;
    },
    websocketonopen: function () {
      console.log("WebSocket连接成功");
    },
    websocketonerror: function () {
      console.log("WebSocket连接发生错误");
    },
    websocketonmessage: function (e) {
      console.log(e.data);                // console.log(e);
    },
    websocketclose: function (e) {
      console.log("connection closed (" + e.code + ")");
    }
  }
}
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
