<template>
<div class="main1">
    <div class="main">
        <div class="headtitle">
            <h1>Experience</h1>
        </div>
        <!--<div class="text">

<p>Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur</p>

</div>-->
        <div class="card1">
            <div class="card" v-for="(item, i) in items" v-bind:key="i">
                <h3>{{item.icon}}</h3>
                <div class="title">
                    <h2>{{item.hd}}</h2>
                </div>

                <div class="paragraph">
                    <p>{{item.text}}</p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            items: [{
                    icon: "2019-2020",
                    hd: 'Uniosun Data Science member',
                    text: 'I was among the volounteer developers Organising and conducting the Osogbo Data science Community with the aims of cater for and training over 2 thousand students across the State.'
                },
              
                {
                    icon: "2020-2020",
                    hd: 'OIC Frontend Developer',
                    text: 'OIC is the leading nigeria IT company focused on innovation, because w believe the future we all anticipate starts in africa'
                },

            ]
        }
    }
}
</script> 

<style scoped>
.main {
    max-width: 100%;
    width: 70%;
    text-align: center;
    margin-top: 2em;
    margin: 0 auto;
}

.main1 {
    margin: 3em;
}

h1 {

    text-align: center;
    color: white;
    text-transform: capitalize;
    font-size: xx-large;
    text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px white;
    font-weight: bolder;

}

h2 {
    text-align: center;
    color: white;
    text-transform: capitalize;
    font-size: medium;
    text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px black;
    font-weight: bolder;

}

.card1 {
    grid-gap: 0.5em;
    display: grid;
    border: 1 solid #ccc;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    text-align: center;
    margin-top: 2em;

}

.card {
    width: 90%;
    height: auto;
    box-shadow: 0 10px 5px rgb(97, 97, 219);
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    text-align: center;

}

.paragraph {
    text-align: center;
}

@media screen and (max-width: 600px) {
    h1 {
        font-size: x-large;
    }

    .card {
        width: 90%;
    }

    .main {
        width: 100%;
    }
}

/*iPad in portrait & landscape*/
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {

    .card {
        width: 95%;
    }
}

@media only screen and (min-device-width : 800px) and (max-device-width : 964px) {
    .main1 {
        margin: 0.5em;
    }
}
</style>
