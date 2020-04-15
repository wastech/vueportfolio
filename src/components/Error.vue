<template>
<div>
    <div class="main">
        <img src="https://cdn.dribbble.com/users/1322726/screenshots/5695684/dribbble-3.gif" />
        <h2>Back to
            <router-link to="/">Home</router-link>
        </h2>
        <h4>{{ note }}</h4>
    </div>
</div>
</template>

<script>
export default {
    name: 'PageNotFound',
    data() {
        return {
            note: 'we are currently working on this page'
        }
    }
}
</script>

<style scoped>
.main {

    max-width: 80%;
    margin: 0 auto;
    text-align: center;
}

img {
    margin-top: -1em;
    max-width: 100%;
}

h2 {
    text-shadow: 1px 1px 1px #000;
    color: blue;
}

h4 {
    text-shadow: 1px 1px 1px #000,
        3px 3px 5px blue;
    color: blue;
    font-size: xx-large;
}
</style>
