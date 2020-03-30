<template>

	 <div id="page-container">
   <div id="content-wrap">
     <!-- all other page content -->
	 <h1>Get connected with us on social networks!</h1>
   </div>
   <footer id="footer">
	        <div class="ma" v-for="(item, i) in items" v-bind:key="i" >
		 <a :href="item.link">
	     <i v-bind:class="item.icon "></i></a>
		
	</div>
    
 
   </footer>
 </div>
</template>
<script>
export default {
	data(){
		return{
			items:[
				{icon:"fab fa-facebook fa-2x" , link:'https://www.facebook.com/abdulfatai.abdulwasiu.39'},
				{icon:"fab fa-twitter fa-2x", link:'https://twitter.com/wastech_a'},
				{icon:"fab fa-github fa-2x", link:'https://github.com/wastech'},
				{icon:"fab fa-linkedin fa-2x", link:''},
				{icon:"fas fa-envelope-open-text fa-2x", link:'mailto:fataiwasiu2@gmail.com'}			

			]
		}
	}
}
</script>
<style scoped>
#page-container {
	
  position: relative;
  min-height: 6vh;
  margin-top: -2em;
  background-color: white;
  color: black;

}
.fa-facebook{
	cursor: pointer;
}

#content-wrap {
  padding-bottom: 2.5rem;    /* Footer height */
}
.ma{
 margin: 0 auto; 
  text-align: center;
}

#footer {
  
  bottom: 0;
  width: 50%;
  height: 2.5rem;  
   display: flex;  
  align-items: center;
  justify-content: space-between;
   margin: 0 auto; 
  text-align: center; 
  cursor: pointer;  /* Footer height */
}
h1{
	

	text-align: center;
	color: white;
text-transform: capitalize;
font-size:xx-large;
text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px white;
font-weight: bolder;


}
@media screen and (max-width: 600px) {
  #page-container{
margin-top: 25em;
  }
  #footer{
	  width: 80%;
  }
  h1{
	  width: 100%;
	color: white;
text-transform: capitalize;
font-size:x-large;
text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px white;
font-weight: bolder;
  }}

/*iPad in portrait & landscape*/
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px){
	 #page-container{
margin-top: 35em;
  }
  h1{
	  width: 100%;
	color: white;
text-transform: capitalize;
font-size:xx-large;
text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px white;
font-weight:bolder;
  }

}
/*iPad in portrait & landscape*/
@media only screen and (min-device-width : 964px) and (max-device-width : 1025px)
{
	 #page-container{
margin-top: 17em;
  }
  h1{
	  width: 100%;
	color: white;
text-transform: capitalize;
font-size:xx-large;
text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px white;
font-weight:bolder;
  }

}
@media only screen and (min-device-width : 964px) and (max-device-width : 1090px){
	 #page-container{
margin-top: 17em;
  }
}
@media only screen and (min-device-width : 601px) and (max-device-width : 964px){
	 #page-container{
margin-top: 34em;
  }
}
@media only screen and (min-device-width : 800px) and (max-device-width : 964px){
	 #page-container{
margin-top: 17em;
  }
}
@media only screen and (min-device-width : 964px) and (max-device-width : 1091px){
	 #page-container{
margin-top: 17em;
  }
}
@media only screen and (min-device-width : 964px) and (max-device-width : 1091px){
	 #page-container{
margin-top: 17em;
  }
}


 



</style>