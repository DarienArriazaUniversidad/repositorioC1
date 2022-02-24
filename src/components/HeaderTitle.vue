<template>
    <div>
        <h1 style="color:blue">{{title}}</h1>
        <hr/>
    </div>
</template>

<script>
export default {
    name:'HeaderTitle',
    props:{
        title:String
    }
}
</script>