<template>
    <div>
        <b-navbar type="dark" variant="dark">
            <b-navbar-nav>
                <b-nav-item to="/">Home</b-nav-item>
                <b-nav-item to="/about">About</b-nav-item>
                <b-nav-item to="/nuevo">Nuevo</b-nav-item>
                <b-nav-item to="/conversion1">Conversion1</b-nav-item>
                <b-nav-item to="/conversion2">Conversion2</b-nav-item>
                <b-nav-item to="/conversion3">Conversion3</b-nav-item>
                <b-nav-item to="/conversion4">Conversion4</b-nav-item>
                <b-nav-item to="/conversion5">Conversion5</b-nav-item>
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