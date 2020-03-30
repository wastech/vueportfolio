<template>
<div>

	<h1 class="about">About</h1>
	<div class="About">

	<img src="@/assets/aboutus.jpg" alt="Paris" class="center">
	
	
	<div class="text">
<h1 class="title">WE ARE RESPONSIBLE</h1>
<p class="paragraph"> I'm a Certisfied Computer Scientist and Experienced Software Developer with a demonstrated history 
	of working in the internet industry. Skilled in<b> Nodejs</b>, <b>Mongodb</b>, <b>Vuejs</b>, <b>Javascript</b>,<b>Python</b> and <b>Java</b>. As 
	a professional i would like to climb upon the ladders of knowledge
	 and skills. I can prove myself as mission oriented, enthusiastic and a successful individual.</p>
	<button class="button" >
	 <router-link to="/contact" tag="span" style="cursor: pointer">
    drop messages</router-link>
	</button>

</div>
	
	</div>
	</div>
</template>
<style scoped>


.about{
	
color: white;
position: relative;
margin-top:2em;
text-align:center;
text-transform: capitalize;
text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px white;
font-size: 2em;
font-weight: bolder;
}
.center {
   
  width: 40%;
  height: 350px;
}
.text{
	margin-top: 2em;
	width: 30%;
	height: 350px;
	
}
.title{
	font-size: large;
	text-transform: uppercase;
	text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px white;
	
}
.paragraph{
	  text-indent: 5px;
	     letter-spacing: 2.5px;
		 font-family: Arial, Helvetica, sans-serif;
}
.About{
 display: flex;
  justify-content: center;
  height: 350px;
	
	
}
/*iPad in portrait & landscape*/
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px){
.about {
     margin-top: 8em;
	
	 position: relative;}
	 .About{
		 margin-bottom: 7em;
	 }
	 
	}
	@media only screen and (min-device-width : 601px) and (max-device-width : 964px){
	.about {
     margin-top: 9em;
	
	 position: relative;}
	 .About{
		 margin-bottom: 14em;
	 }
}

@media screen and (max-width: 600px) {
  .about {
     margin-top: 13.5em;
	 position: relative;}
	}
	@media screen and (max-width: 600px) {
  .About {
    width: 100%;
	
	justify-content: center;
	text-align: center;
	display: inline-block;
	
	
	
  }
  .center{
	  width: 80%;
	  height: 250px;
  }
  .text{
	 width: 80%;  
	 text-align: center;
	 margin: 0 auto;
  }}
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

.button:hover {background-color: #3e8e41}

.button:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
	
	
  
</style>