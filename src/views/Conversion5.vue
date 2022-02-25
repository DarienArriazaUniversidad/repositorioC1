<template >
<div class="conversion5">
    
  <section class="conversion5">
     <b-card bg-variant="dark">
    <b-form-group
      label-cols-lg="3"
      label="Conversor de Almacenamiento"
      label-size="lg"
      label-class="font-weight-bold pt-0"
      class="mb-0"
    >
      <b-form-group
        label="Primer Valor:"
        label-for="n1"
        label-cols-sm="3"
        label-align-sm="right"
      >
        <b-form-input v-model="data" type="number" id="n1"></b-form-input>
      </b-form-group>
      <b-form-group
        label="Conversion a:"
        label-cols-sm="3"
        label-align-sm="right"
        class="mb-0">
        <b-form-select v-model="selected">
          
          <b-form-select-option value="0">Por favor seleccione una opcion</b-form-select-option>
          <b-form-select-option   value="1">Byte a Bit</b-form-select-option>
           <b-form-select-option id="opB"  value="2">Bit a Nibble</b-form-select-option>
            <b-form-select-option id="opC"  value="3">Bit a Kilobit</b-form-select-option>
             <b-form-select-option id="opD"  value="4">Bit a Megabyte</b-form-select-option>
              <b-form-select-option id="opE"  value="5">Bit a Gigabit</b-form-select-option>
              
        </b-form-select>
        <hr>
        <b-button @click="calcular()" variant="info" size="lg" class="pt-2">Convertir a</b-button>
    </b-form-group>
    </b-form-group>
  </b-card>
  </section>
</div>
</template>

<script lang="js">

  export default  {
    name: 'conversion5',
    data() {
      return {
        selected: 0,
        data:'',
      }
    },
    methods: {
      calcular(){
        let val = this.selected;
        let result=0;
        let results="";
if(val ==1){
          result= this.data *(8/1.0);
          results= "El resultado de la conversion Byte a Bit es: "+result+" bit";
//Byte a Bit
        } 
if(val ==2){
          result= this.data *0.25;
          results= "El resultado de la conversion Bit a Nibble es: "+result+" Nibble";
//Bit a Nibble
        } 
if(val ==3){
          result= this.data *0.0009765625 ;
          results= "El resultado de la conversion Bit a Kilobit es: "+result+" Kilobit";
//Bit a Kilobit
        } 
if(val ==4){
          result= this.data *1.1920928955078 ;
          results= "El resultado de la conversion Bit a Megabyte es: "+result+" Megabyte";
//Bit a Megabyte
        } 
if(val ==5){
          result= this.data *9.3132257461548 ;
          results= "El resultado de la conversion Bit a Gigabit es: "+result+" Gigabit";
//Bit a Gigabit
        } 
        return alert(results) //solo se define un return en la funcion

    }
  }
}

</script>
