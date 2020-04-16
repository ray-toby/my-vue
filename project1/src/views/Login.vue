<template>
    <div>
        <cube-form
            :model="model"
            :schema="schema"
            @validate="validateHandler"
            @submit="submitHandler"
        >
        </cube-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                validity: {},
                valid: undefined,
                model: {
                    username: '',
                    pwd: ''
                },
                schema: {
                    fields: [
                        {
                            type: 'input',
                            modelKey: 'username',
                            label: '用户名',
                            props: {
                                placeholder: '请输入用户名'
                            },
                            rules: {
                                required: true
                            },
                            trigger: 'blur'
                        },
                        {
                            type: 'input',
                            modelKey: 'pwd',
                            label: '密码',
                            props: {
                                type: 'password',
                                placeholder: '请输入密码',
                                eye: {
                                    open: false
                                }
                            },
                            rules: {
                                required: true
                            },
                            trigger: 'blur'
                        },
                        {
                            type: 'submit',
                            label: '登录'
                        }
                    ]
                   
                },
                options: {
                    scrollToInvalidField: true,
                    layout: 'standard' // classic fresh
                }
            }
        },
        methods: {
            submitHandler(e) {
                e.preventDefault();
                console.log('submit', e);
                const that = this
                //登录请求
                this.$store.dispatch('login', this.model)
                    .then(code => {
                        if(code) {
                            //登录成功
                            const path = that.$route.query.redirect || '/';
                            that.$router.push(path)
                        }
                    })
                    .catch(err => {
                        //登录失败或者错误
                        const toast = this.$createToast({
                            time: 2000,
                            txt: err.message || err.response.data.message || '登录失败',
                            type: 'error'
                        })
                        toast.show()
                    })
            },
            validateHandler(res) {
                console.log(res)
                this.validity = res.validity
                this.valid = res.valid
                // e.preventDefault()
            }
        
        }
    }
</script>

<style lang="scss" scoped>

</style>