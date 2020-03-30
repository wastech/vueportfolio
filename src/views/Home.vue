<template>
  <div class="home">
     <HelloWorld/>
    <Services/>
	<serv/>
	<me/>
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
import me from '@/components/me';
import experience from '@/components/experience';
import portfolio1 from '@/components/portfolio1';
import Footer from '../components/Footer'



export default {
  name: 'Home',
  components: {
	Services,
	HelloWorld,
	serv,
	me,
	experience,
	portfolio1,
	Footer
  }
}
</script>
