<template>
    <div>
        this is testPage
        <!-- 这是单份 -->
        <!-- <div>
            <button @click="minus">-</button>
            <h1>{{$store.state.count}}</h1>
            <button @click="add">+</button>
        </div> -->

        <!-- 这是modules -->
            <h1>{{$store.state.count.count}}</h1>
            <h1>{{$store.state.number.number}}</h1>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
    export default {
        methods: {
            //组件分发action的几种方法

            // add() {
            //     this.$store.dispatch('increment')
            // },
            // minus() {
            //     this.$store.dispatch('decrement')
            // }
            
            ...mapActions({
                add: 'increment',
                minus: 'decrement'
            })
        },
    }
</script>