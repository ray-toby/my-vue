//拦截请求和响应
const axios = require('axios')

export default function(vm) {
    //设置请求拦截器
    axios.interceptors.request.use(config => {
        //获取token
        const token = localStorage.getItem('token');
        if(token) {
            config.headers.token = token;
        }
        return config;
    })


    //响应拦截器
    //参数1是成功响应，  此处只关心失败情况
    axios.interceptors.response.use(null, err => {
        if(err.response.status == 401) {  //没有登录或者令牌过期
            //退出
            vm.$store.dispatch('logout');
            //跳转到login
            vm.$router.push('/login')
        }

        return Promise.reject(err)
    })

}