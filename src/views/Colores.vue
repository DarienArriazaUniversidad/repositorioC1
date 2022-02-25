<template>
<div id="colores">
    <br>
    <input type = "text" placeholder="Escribe texto" v-on:keydown = "key"  >

    <h3 :style="[coloreSignos]" v-if="keycode >=13 && keycode <=44">texto: {{keycode}}</h3>
    <h3 :style="[colorNumero]" v-if="keycode >=47 && keycode <=58">texto: {{keycode}}</h3>
    <h3 :style="[colorLetra]" v-if="keycode >=64 && keycode <=91">texto: {{keycode}}</h3>
    <h3 :style="[coloreSignos]" v-if="keycode >=94 && keycode <=228">texto: {{keycode}}</h3>

</div>
    
</template> 

<script>
export default {
    name:'Colores',
        data(){
            return{
            keycode:''
        }
    },

    methods:{
        key(event){
        this.keycode=event.keyCode
        }
    },

     computed:{
        colorLetra(){
            return{
            color:"green"
        }
    },
         colorNumero(){
            return{
            color:"red"
        }
    },
         coloreSignos(){
            return{
            color:"yellow"
        }
    }
    }      
}
    
</script>
