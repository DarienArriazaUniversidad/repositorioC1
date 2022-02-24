<template>
<div class="Conversion3">
 
  <section class="conversion3">
    <b-card bg-variant="info">
    <b-form-group
      label-cols-lg="3"
      label="Conversor de peso"
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
          <b-form-select-option   value="1">Kilogramo a Miligramo</b-form-select-option>
           <b-form-select-option id="opB"  value="2">Kilogramo a Libra</b-form-select-option>
            <b-form-select-option id="opC"  value="3">Kilogramo a Gramo</b-form-select-option>
             <b-form-select-option id="opD"  value="4">Libra a Kilogramo</b-form-select-option>
              <b-form-select-option id="opE"  value="5">Libra a Gramo</b-form-select-option>
              
        </b-form-select>
        <hr>
        <b-button @click="calcular()" variant="dark" size="lg" class="pt-2">Convertir a</b-button>
    </b-form-group>
    </b-form-group>
  </b-card>
  </section>
</div>
</template>

<script>

  export default  {
    name: 'TerceraConversion',
    data(){ 
       return {
        selected: 0,
        data:''
     }
    },
    methods: {
      calcular(){        
        let val = this.selected;
        let result=0;
        let results="";
        if(val ==1){
          result= this.data *(1000000/1.0);
          results= "El resultado de la conversion Kilogramo a Miligramo de es: "+result+"Mg";
        //Kilogramo a Miligramo
        }
        if(val ==2){
          result= this.data *(2.2046/1.0);
          results= "El resultado de la conversion Kilogramo a Libra de es: "+result+"Lb";
        //Kilogramo a Libra
        }
        if(val ==3){
          result= this.data *(1000/1.0);
          results= "El resultado de la conversion Kilogramo a Gramo de es: "+result+"g";
        //Kilogramo a Gramo
        }
        if(val ==4){
          result= this.data *(1/2.2046);
          results= "El resultado de la conversion Libra a Kilogramo es: "+result+"Kg";
        //Libra a Kilogramo
        }
        if(val ==5){
          result= this.data *(453.59/1.0);
          results= "El resultado de la conversion Libra a Gramo es: "+result+"g";
        //Libra a Gramo
        }
        return alert(results) //solo se define un return en la funcion

    }
  }
}


</script>
