<template>
    <div class="navbar-button-lg">
        <div class="navbar-button-text-lg">{{ buttonText }}</div>
    </div>
</template>


<script>
export default {
    props: ["buttonText"]
}
</script>

<style>

    .navbar-button-lg {
        float: left;
        margin: 0 auto;
        padding-left: 14px;
        padding-right: 14px;
        margin-right: 2px;
        height: 25px;
        border-radius: 3px;

        color: white;
    }

    .navbar-button-lg:hover {
        background-color: #494949;
    }

    .navbar-button-text-lg {
        padding-top: 4px;
        font-size: .8em;
        text-align: center;
        vertical-align: middle;
        font-weight: bold;
        color: #606060;
    }


</style>

