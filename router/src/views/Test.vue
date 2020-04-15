<template>
    <div>
        <h1>this is testPage</h1>
    </div>
</template>

<script>
    export default {
        //组件路由生命周期  组件守卫
        beforeRouteEnter (to, from, next) {
            console.log(to, from)
            next();
            
        },
        beforeRouteUpdate (to, from, next) {
            console.log(to, from)
            next();
        },
        beforeRouteLeave (to, from, next) {
            console.log(to, from)
            next();
        }
    }
</script>