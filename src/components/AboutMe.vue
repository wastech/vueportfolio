<template>
<div>
    <h1 class="about">About</h1>
    <div class="About">
        <img src="@/assets/aboutus.jpg" alt="Paris" class="center">
        <div class="text">
            <h1 class="title">WE ARE RESPONSIBLE</h1>
            <p class="paragraph"> I'm a Certified Computer Scientist and Experienced Software Developer with a demonstrated history
                of working in the internet industry. Skilled in<b style="color:green;"> Nodejs</b>, <b style="color:green;">Mongodb</b>, <b style="color:green;">Vuejs</b>, <b style="color:green;">Javascript</b>,<b style="color:green;">Python</b> and <b style="color:green;">Java</b>. As
                a professional i would like to climb upon the ladders of knowledge
                and skills. I can prove myself as mission oriented, enthusiastic and a successful individual.</p>
            <button class="button">
                <router-link to="/contact" tag="span" style="cursor: pointer">
                    drop messages</router-link>
            </button>
        </div>
    </div>
</div>
</template>

<style scoped>
.about {

    color: white;
    height: auto;
    margin-top: 2em;
    text-align: center;
    text-transform: capitalize;
    text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px white;
    font-size: 2em;
    font-weight: bolder;
}

.center {

    width: 40%;
    height: auto;
	object-fit: cover;
}
img{
   object-fit: cover; 
}

.text {
    margin-top: 2em;
    width: 30%;
    height: auto;

}

.title {
    font-size: large;
    text-transform: uppercase;
    text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px white;

}

.paragraph {
    text-indent: 5px;
    letter-spacing: 2.5px;
    font-family: Arial, Helvetica, sans-serif;
}

.About {
    display: flex;
    justify-content: center;
    height: auto;

}

/*iPad in portrait & landscape*/

@media only screen and (min-device-width : 601px) and (max-device-width : 964px) {
    .about {
        margin-top: 5em;

    }

    .About {
        margin-bottom: 3m;
    }
}

@media screen and (max-width: 600px) {
    .about {
        margin-top: 13.5em;
        ;
    }
}

@media screen and (max-width: 600px) {
    .About {
        width: 100%;

        justify-content: center;
        text-align: center;
        display: inline-block;

    }
    img{
   object-fit: cover; 
}

    .center {
        width: 80%;
        height: 250px;
    }

    .text {
        width: 80%;
        text-align: center;
        margin: 0 auto;
    }
}

.button {
    display: inline-block;
    padding: 15px 25px;
    font-size: 24px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    outline: none;
    color: #fff;
    background-color: blue;
    border: none;
    border-radius: 15px;
    box-shadow: 0 9px #999;
}

.button:hover {
    background-color: #3e8e41
}

.button:active {
    background-color: #3e8e41;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
}
</style>
