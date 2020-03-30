<template>
<div>
<div class="headtitel">
		<h1>Recent projects</h1>
		</div>
	<div class="main" >
		
		<div class="card"  v-for="(item, i) in items" v-bind:key="i">
			<div class="imgbx">
				<img v-bind:src='item.image'>
			</div>

			<div class="details">
				<h2>{{item.detail}}</h2>
				<p>
				    {{item.text}}</p>
			</div>

		</div>

	</div>
	</div>
</template>
<script>
import contactusform from '@/components/contactusform.vue'

export default {
	components:{contactusform},
	data(){
		return{
			items:[
				{image:'https://cdn.dribbble.com/users/67640/screenshots/1675433/pl-robot-animate.gif', detail:'CSC ROBOT', text:' '},
				{image:'https://cdn.dribbble.com/users/774375/screenshots/7517289/media/3b81b356fc9be5f3fd19076c88792ec4.png',  detail:'PORTFOLIO', text:''},
				{image:'https://i.pinimg.com/564x/32/bf/2e/32bf2ed4ab6a4cd7dffb6c4ca95cfa13.jpg',  detail:'BUSINESS WEB', text:' '},
			

			]
		}
	}
}
</script>
<style scoped>
h1{

	text-align: center;
	color: white;
text-transform: capitalize;
font-size:xx-large;
text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px white;
font-weight: bolder;

}

.main{

width: 80%;
height: 400px;
margin:0 auto;

background-color: transparent;
margin-top: 2em;
display: grid;
	grid-gap:1rem;
	grid-template-columns: repeat(auto-fit,minmax(300px,1fr));


}


.card{


transform: translate(-0%,-0%);
width: 100%;
height: 300px;
background: #979797;
overflow: hidden;

border-bottom: 1.6px solid #228dff;



    border-radius: 16px 8px 200px 72px;
  -moz-border-radius: 16px 8px 200px 72px;
  -webkit-border-radius: 16px 8px 80px 20px;



-webkit-box-shadow: 0px 0px 40px 0px rgba(34,141,255,1);
-moz-box-shadow: 0px 0px 40px 0px rgba(34,141,255,1);
box-shadow: 0px 0px 40px 0px rgba(34,141,255,1);




}

.card .imgBx,
.card .details
{

width: 100%;
height: 100%;
position: absolute;
box-sizing: border-box;
transition: 0.5s;


}


.card .imgbx
{

	top:0;
	left: 0;
}

.card:hover .imgbx{
top:0;
left: -100%;

}

.card .imgbx img{

width: 100%;

}


.card .details{

	top:0;
	left:100%;
	background: #222d35;
	padding: 50px 30px;
}


.card:hover .details{

top:0;
left: 0;

}

.card .details h2{

color: #228dff;
text-align: center;
margin: 0;
padding:  0 0 10px;
border-bottom: 2px solid #fff;
font-family: yd;


}
img{
	width: 300px;
height: 400px;
}

.card .details p 
{

margin: 20px 0 0;
color: #fff;
font-family: sans-serif;
font-size: 13px;

}
@media screen and (max-width: 600px) {
  .card{
    width: 100%;
	height: 250px;
	
	
	
	
	
  }}

</style>