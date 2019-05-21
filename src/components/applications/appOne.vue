<template>
<b-container fluid>
    <b-row>
        <!-- need to make this dynamic not static code header title -->
        <Header title="Transitions X"></Header>
    </b-row>
    <b-row>
        <NavBar/>
    </b-row>
    <b-row>
        <router-view></router-view>
    </b-row>
    <b-row>
        <!-- passing the collector as a slot -->
        <slot></slot>
    </b-row>
</b-container>
</template>


<script>
import Header from "../Header"
import NavBar from "../../containers/Navbar"
export default {
    components: {
        Header,
        NavBar
    }
}
</script>

<style scoped>
</style>

