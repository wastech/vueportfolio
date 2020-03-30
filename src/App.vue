<template>
  <v-app>
	  <NavBar/>
	  <div>
    <vue-scroll-progress-bar @complete="handleComplete" height="2rem" />
  </div>
	 <vue-page-transition name="fade-in-down">
	  <router-view/>
	  
	 </vue-page-transition>

	
   
  </v-app>
</template>

<script>

import NavBar from './components/NavBar'


export default {
  name: 'App',

  components: {
  //  HelloWorld,
	NavBar 
	
  },

  data: () => ({
    //
  }),
};
</script>
