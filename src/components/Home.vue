<template>
<div>
    <button @click="test()">Click</button>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Home',
    data(){
        return {
            values : {},
            error : []
        }
    },
    mounted(){
        axios.get('https://apicovid19.com/summary')
        .then( response => {
            this.values = response.data
        })
    },
    methods: {
        test(){
            console.log(this.values)
            alert('Testing')
        }
    }
}
</script>