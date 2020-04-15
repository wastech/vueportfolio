<template>
<div class="container">
    <h5> let's create progress together</h5>
    <div class="row">
        <div class="neumorphic variation1 col-sm" v-for="item in items" :key="item">
            <span><strong>
                    <a :href="item.link">
                        <i :class="item.icon">
                        </i>
                    </a></strong></span>
        </div>
    </div>
    <contactusform />
</div>
</template>

<script>
import contactusform from '@/components/contactusform.vue'
import Image from '@/assets/twitter.png'
import Image2 from '@/assets/github.jpg'
export default {
    components: {
        contactusform
    },
    data() {
        return {
            items: [{
                    icon: 'fab fa-whatsapp',
                    link: 'https://wa.me/2348137632165'

                },
                {
                    icon: 'fab fa-twitter',
                    link: 'https://twitter.com/wastech_a'
                }, {
                    icon: 'fas fa-envelope-open-text',
                    link: 'mailto:fataiwasiu2@gmail.com'
                }, {
                    icon: 'fab fa-github ',
                    link: 'https://github.com/wastech'
                },

            ]
        }
    }
}
</script>

<style scoped>
body {
    padding: 3rem 4rem 0;
    background-color: #e0e0e0;
    color: #999;
    display: flex;
    flex-wrap: wrap;
    max-width: 680px;
    font-family: "Arial", sans-serif;
    margin: 0 auto;
}

h2 {
    margin-top: 0;
    margin-bottom: 1.5rem;
}

* {
    box-sizing: border-box;
}

.neumorphic {
    box-shadow: 12px 12px 24px 0 rgba(0, 0, 0, 0.2),
        -12px -12px 24px 0 rgba(255, 255, 255, 0.5);
    font-size: 5rem;
    width: 5em;
    height: 10%;
    border-radius: 40px;
    overflow: hidden;
    padding: 1.3rem;
    display: flex;
    margin: 1rem;
}

.variation1 {
    background: linear-gradient(-45deg,
            rgba(0, 0, 0, 0.2),
            rgba(255, 255, 255, 0.3));
}

.variation1 span {

    text-align: center;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    overflow: hidden;
    padding: 0.65rem;
    box-shadow: inset 8px 8px 16px 0 rgba(0, 0, 0, 0.2),
        inset -8px -8px 16px 0 rgba(255, 255, 255, 0.4);
}

.variation1 strong {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    overflow: hidden;
    background-color: white;
    color: white;
}

.variation1.pressed strong {
    background-color: #bb3c20;
}

.v-application--wrap {
    background-color: #269;
    background-image: linear-gradient(white 2px, transparent 2px), linear-gradient(90deg, white 2px, transparent 2px), linear-gradient(rgba(255, 255, 255, .3) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, .3) 1px, transparent 1px);
    background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
    background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
}

h5 {
    margin-bottom: 0.5em;
    color: white;
    text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
    text-align: center;
    font-weight: bolder;

    font-size: 2em;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-transform: capitalize;
}
</style>
