<template>
    <div>
        <label for="">{{label}}</label>
        <div>
            <slot></slot>
            <p v-if="errStatus">{{errMessage}}</p>
        </div>
    </div>
</template>

<script>
    import schema from 'async-validator';
    export default {
        inject: ['myForm'],
        props: ['label', 'prop'],
        data() {
            return {
                errMessage: '',
                errStatus: false
            }
        },
        mounted() {
            this.$on('validate', this.validator)
        },
        methods: {
            validator() {
                const rules = this.myForm.rules[this.prop];
                const value = this.myForm.model[this.prop];
                let descriptor = {[this.prop]: rules};
                let validators = new schema(descriptor);

                validators.validate({[this.prop]: value}, errors => {
                    if(errors) {
                        this.errMessage = errors[0].message;
                        this.errStatus = true;
                    }else {
                        this.errMessage = '';
                        this.errStatus = '';
                    }
                })
            }
        },
    }
</script>

<style scoped>

</style>