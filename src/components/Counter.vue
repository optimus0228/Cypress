<template>
    <div>
        <span id="count">{{count}}</span>
        <button @click="increment()">+</button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                count:18
            }
        },
        
        methods:{
            increment(){
                this.count++;
            }
        }
    }
</script>