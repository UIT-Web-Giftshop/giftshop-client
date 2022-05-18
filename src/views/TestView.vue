<template>
<div>
    {{this.$route.params.test2}}
</div>
</template>

<script>

export default ({
    created() {
        console.log(this.$router)
    }
})
</script>
