<template>
  <div id="app">
    {{value}}
    <!-- <my-input :value="value" @input="value = arguments[0]"></my-input> -->
    <my-form :model="model" :rules="rules" >
      <my-form-item label="用户名" prop="username">
        <my-input v-model="model.username"></my-input>
      </my-form-item>
      <my-form-item label="密码" prop="password">
        <my-input v-model="model.password" type="password"></my-input>
      </my-form-item>
    </my-form>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MyInput from './components/MyInput.vue';
import MyFormItem from './components/FormItem.vue';
import MyForm from './components/Form.vue';

export default {
  name: 'app',
  // provide() {
  //   return {
  //     someval: '来自app.vue'
  //   }
  // },
  components: {
    // HelloWorld
    MyInput,
    MyFormItem,
    MyForm
  },
  data() {
    return {
      value: '',
      model: { username: 'tom', password: "" },
      rules: {
        username: [
          { required: true, message: "请输入用户名" },
          { minn: 6, max: 10, message: "请输入6~10的用户名" }
        ],
        password: [
          { required: true, message: "请输入密码" }
        ]
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
