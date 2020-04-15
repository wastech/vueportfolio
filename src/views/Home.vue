<template>
  <div class="home">
     <HelloWorld/>
    <Services/>
	<serv/>
	<AboutMe/>
	<experience/>
	<portfolio1/>
	  <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld';
import Services from '@/components/Services.vue'
import serv from '@/components/serv';
import AboutMe from '@/components/AboutMe';
import experience from '@/components/experience';
import portfolio1 from '@/components/portfolio1';
import Footer from '../components/Footer'



export default {
  name: 'Home',
  components: {
	Services,
	HelloWorld,
	serv,
	AboutMe,
	experience,
	portfolio1,
	Footer
  }
}
</script>
