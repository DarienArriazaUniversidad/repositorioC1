<template >

<div class="conversion2">
      
  <section class="conversion2">
    <b-card bg-variant="warning">
    <b-form-group
      label-cols-lg="3"
      label="Conversor de monedas"
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

        <b-form-input v-model="data" type="number"></b-form-input>
      </b-form-group>
        <b-form-group
          label="Conversion a:"
          label-cols-sm="3"
          label-align-sm="right"
          class="mb-0">

          <b-form-select v-model="selectedValue">            
            <b-form-select-option value="0">Por favor seleccione una opcion</b-form-select-option>
            <b-form-select-option  value="1">Dolar a Euro</b-form-select-option>
            <b-form-select-option id="opB"  value="2">Euro a Dolar</b-form-select-option>
              <b-form-select-option id="opC"  value="3">Colon a Dolar</b-form-select-option>
              <b-form-select-option id="opD"  value="4">Dolar a Colon</b-form-select-option>
              <b-form-select-option id="opE"  value="5">Libra Esterlina a Dolar</b-form-select-option>
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
    name: 'conversion2',
    data(){ 
       return {
        selectedValue: 0,
        data:''
     }
    },
    methods: {
      calcular(){        
        let val = this.selectedValue;
        let result=0;
        let results="";
        if(val ==1){
          result= this.data *0.8252;
          results= "El resultado de la conversion Dolar a Euro de es: "+result;
        }
        if(val==2){
          result=this.data*1.2118;
          results= "El resultado de la conversion Euro a Dolar de es: "+result;
        }
        if(val==3){
          result=this.data*0.1141;
          results= "El resultado de la conversion Colon a Dolar de es: "+result;
        }
        if(val==4){
          result=this.data*8.7653;
          results= "El resultado de la conversion Colon a Colon de es: "+result;
        }
        if(val==5){
          result=this.data*1.4016;
          results= "El resultado de la conversion Libra Esterlina a Colon de es: "+result;
        }
        if(val==0){
          alert('Seleccione una opcion por favor!')
        }
        return alert(results) //solo se define un return en la funcion
      }
    }
  }
  </script>
      
    