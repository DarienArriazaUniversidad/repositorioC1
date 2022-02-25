<template>
    <div>
        <b-navbar type="dark" variant="success">
            <b-navbar-nav>

                <!-- Aqui estan implementacion de rutas dee la actividad de la semana 5 -->
                <!-- Tambien son las que aparecen en el main.js -->
                <b-nav-item to="/">Home</b-nav-item>
                <b-nav-item to="/Colores">S3 - Colores</b-nav-item>
                <b-nav-item to="/conversion1">S4 - Conversion1</b-nav-item>
                <b-nav-item to="/conversion2">S4 - Conversion2</b-nav-item>
                <b-nav-item to="/conversion3">S4 - Conversion3</b-nav-item>
                <b-nav-item to="/conversion4">S4 - Conversion4</b-nav-item>
                <b-nav-item to="/conversion5">S4 - Conversion5</b-nav-item>
            </b-navbar-nav>
        </b-navbar>
        <router-view/>
    </div>  
</template>
<script>
export default {
    name:'Navigation'
}
</script>