<template>
    <div>
        <slot></slot>
        <form></form>
    </div>
</template>

<script>
    export default {
        provide() {
            return {
                myForm: this
            }
        },
        props: {
            model: {
                type: Object,
                required: true
            },
            rules: {
                type: Object
            }
        }
    }
</script>

<style scoped>

</style>