<template >
<div class="conversion4">
    
  <section class="conversion4">
    <b-card bg-variant="success">
    <b-form-group
      label-cols-lg="3"
      label="Conversor de tiempo"
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
          <b-form-select-option   value="1">Minutos a Horas</b-form-select-option>
           <b-form-select-option id="opB"  value="2">Horas a Minutos</b-form-select-option>
            <b-form-select-option id="opC"  value="3">Dias a Minutos</b-form-select-option>
             <b-form-select-option id="opD"  value="4">Minutos a Segundos</b-form-select-option>
              <b-form-select-option id="opE"  value="5">Meses en años</b-form-select-option>
              
        </b-form-select>
        <hr>
        <b-button @click="calcular()" variant="dark" size="lg" class="pt-2">Convertir a</b-button>
    </b-form-group>
    </b-form-group>
  </b-card>
  </section>
</div>
</template>

<script lang="js">

  export default  {
    name: 'conversion4',
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
          result= this.data *(1.0/60);
          results= "El resultado de la conversion Minutos a Horas es: "+result+"h";
//Minutos a Horas
        } 
if(val ==2){
          result= this.data *(60/1.0);
          results= "El resultado de la conversion Horas a Minutos es: "+result+"min";
//Horas a Minutos
        } 
if(val ==3){
          result= this.data *(1440/1.0);
          results= "El resultado de la conversion Dias a Minutos es: "+result+"min";
//Dias a Minutos
        } 
if(val ==4){
          result= this.data *(60/1.0);
          results= "El resultado de la conversion Minutos a Segundos es: "+result+"seg";
//Minutos a Segundos
        } 
if(val ==5){
          result= this.data *(60/1.0);
          results= "El resultado de la conversion Minutos a Segundos es: "+result+"seg";
//Minutos a Segundos
        } 

        return alert(results) //solo se define un return en la funcion

    }
  }
}


</script>


