<template>

<div class="conversion1">
  
  <section class="conversion1">
    <b-card bg-variant="danger">
    <b-form-group
      label-cols-lg="3"
      label="Medidas de longitud"
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
        class="mb-0"
      >
        <b-form-select v-model="selected">
          
          <b-form-select-option value="0">Por favor seleccione una opcion</b-form-select-option>
          <b-form-select-option   value="1">Kilometros a Metros</b-form-select-option>
           <b-form-select-option id="opB"  value="2">Metros a Kilometros</b-form-select-option>
            <b-form-select-option id="opC"  value="3">Metros a Centimetros</b-form-select-option>
             <b-form-select-option id="opD"  value="4">Centimetros a Metros</b-form-select-option>
              <b-form-select-option id="opE"  value="5">Metros a pies</b-form-select-option>
              
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
    name: 'PrimeraConversion',
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
          result= this.data *(1000/1.0);
          results= "El resultado de la conversion Kilometros a Metros es: "+result+"m";

        } 
        if(val ==2){
          result= this.data *(1.0/1000);
          results= "El resultado de la conversion Metros a Kilometros es: "+result+"km";

        } 
        if(val ==3){
          result= this.data *(100/1.0);
          results= "El resultado de la conversion Metros a Centimetros es: "+result+"cm";

        }
        if(val ==4){
          result= this.data *(1.0/100);
          results= "El resultado de la conversion Centimetros a Metros es: "+result+"m";

        }
        if(val ==5){
          result= this.data *(3.28/1.0);
          results= "El resultado de la conversion Metros a Pies es: "+result+"ft";
        }

        return alert(results) //solo se define un return en la funcion
        
    }
  }     
}
</script>
