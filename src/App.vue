<template>
    <div>
        <index ></index>
    </div>
</template>
<script>
import index from './components/index.vue'
    export default {
        data () {
            return {
                value: [20, 50]
            }
        },
        components: {
            index
        }
    }
</script>
