<template>
  <div id="app">
    <h1>{{title}}</h1>
    <hr />
    <div>
      <h2>添加课程</h2>
      <div>
        <label for="" >课程名称：</label>
        <input type="text" v-model="courseInfo.name"/>
      </div>
      <div>
        <label for="" >课程价格：</label>
        <input type="text" v-model="courseInfo.price"/>
      </div>
      <div>
        <button @click="addCourseToList">添加课程到列表</button>
      </div>
    </div>
    <hr>
    <div>
      <h2>课程列表</h2>
      <table>
        <tr>
          <th>课程名称</th>
          <th>课程价格</th>
          <th>操作</th>
        </tr>
        <tr v-for="(item, index) in courseList" :key="item.id">
          <td>{{item.name}}</td>
          <td>{{item.price}}</td>
          <td><button @click="addCourseToCar(index)">添加到购物车</button></td>
        </tr>
      </table>
    </div>
    <!-- <Car /> -->
    <car :courseItem="courseItem" @removeItem="removeTr"></car>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Car from './components/Car.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld
    Car
  },
  methods: {
    addCourseToList() {
      this.courseList.push(this.courseInfo)
    },
    addCourseToCar(index) {
      let item = this.courseList[index];
      let isHasCourse = this.courseItem.find(x => x.id === item.id);
      if(isHasCourse) {
        isHasCourse.number += 1;
      }else {
        this.courseItem.push({
          ...item,
          number: 1,
          isActive: true,
        })
      }
      // this.courseItem.push(this.courseList[index])
    },
    removeTr(index) {
      this.courseItem.splice(index, 1)
    }
  },
  data() {
    return {
      title: '开课吧-购物车1',
      courseInfo: {
        name: '',
        price: ''
      },
      courseItem: [],
      courseList: [
        {
          id: 0,
          name: 'web全栈开发架构师',
          price: 10000
        },
        {
          id: 1,
          name: 'python人工智能',
          price: 9888
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
