<template>
<div class="main">
    <div class="ma" v-for="(item, i) in items" v-bind:key="i">

        <i v-bind:class="item.icon"></i>
        <div class="head">{{item.hd}}</div>
        <div class="text">{{item.text}}</div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            items: [{
                    icon: "fas fa-code fa-2x",
                    hd: 'SOFTWARE DEVELOPMENT',
                    text: 'If you are facing a problem and looking for someone to fix that using the latest tech, I can help you with that. I can automate things, connect different services, and/or create a whole Web App'
                },
                {
                    icon: "fas fa-phone-square fa-2x",
                    hd: 'I.T CONSULTANCY',
                    text: 'I will guide you through the steps of writing company mission, target customers, setting sales and marketing goals and plans.'
                },
                {
                    icon: "fas fa-vector-square fa-2x",
                    hd: 'WEBSITE DESIGN',
                    text: ' I am a professional in web design and development,My sites are designed with maximum optimization to my valued clients.'
                }

            ]
        }
    }
}
</script>

<style scoped>
.fa-code,
.fa-phone-square,
.fa-vector-square {
    color: blue;
}

.main {
    position: relative;
    margin-top: -3em;
    height: 200px;
    max-width: 100%;
    width: 100%;
    transition: 0.5s;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

}

.text {
    text-shadow: 1px 1px 2px white, 0 0 25px white, 0 0 5px white;
}

.ma {

    text-align: left;
    background-color: white;

    width: 80%;
    margin: 0 auto;
    box-shadow: 0 10px 5px rgb(97, 97, 219);
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

}

.fa-utensils {
    height: 80%;
    color: burlywood;
}

@media screen and (max-width: 600px) {
    .ma {
        width: 80%;
        height: 200px;
        justify-content: center;

    }
}

.head {
    text-transform: uppercase;
    color: white;
    font-size: large;
    text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;

}

.text {
    text-indent: 2px;
    letter-spacing: 0.5px;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
}
</style>
