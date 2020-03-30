<template>
<div>
<vueper-slides ref="myVueperSlides" :parallax="parallax" fixed-height="500px" :parallax-fixed-content="parallaxFixedContent">
<vueper-slide
v-for="(slide, i) in slides" :key="i"
:image="slide.image"
:title="parallaxFixedContent ? slide.title : ''"
:content="parallaxFixedContent ? slide.content : ''" />
</vueper-slides>
</div>
</template>

<script>

import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
components: { VueperSlides, VueperSlide },
name: 'HelloWorld',
data () {
return {
parallax: 1,
parallaxFixedContent: true,
slides: [
{ image: 'https://cdn.dribbble.com/users/3809802/screenshots/10373511/media/8259019d3ef70c373be081e011404779.jpg',
title:'Hi, I am Aremu', content:'FRONTEND DEVELOPER AND WEB DEVELOPER' },
{ image: 'https://cdn.dribbble.com/users/902546/screenshots/6233250/11_copy_4x.png?compress=1&resize=800x600',
title:'Clean, minimal & modern design' }
]
}
}

}
</script>
<style >
/*.vueperslide__image {
 
}*/

.vueperslide__title {
  font-size: 3em;
  opacity: 0.7;
  color: blue;
  font-weight: bolder;
  text-transform: uppercase;
  
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.vueperslide__content{
	font-size:1em;
	color:blue;
	font-weight:bolder;

}
@media screen and (max-width: 600px) {
  .vueperslide__content{
	font-size:0.8em;
	font-weight:bolder;

}
.vueperslide__title {
  font-size:large;
  color: blue;
  font-weight: bolder;
  text-transform: uppercase;
  
 
 
}}
 .vueperslide__title{
  font-family: monospace; /* Web-safe typewriter-like font */
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation: 
    typing 3.5s steps(30, end),
    blinking-cursor .5s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blinking-cursor {
  from, to { border-color: transparent }
  50% { border-color: orange; }
}


</style>