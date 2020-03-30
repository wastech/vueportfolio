<template>
<div >
	 <h1> contactus page</h1>
	<div class="body">
	
    <div class="card" v-for="(item, i) in items" v-bind:key="i">
        <div class="image">
			<a :href="item.link">
            <img v-bind:src='item.image' alt=" aremu"></a>
        </div>
        <div class="title">{{item.title}}</div>
        <div class="text">
            <p>{{item.text}}</p>
        </div>
    </div>
	</div>
	<contactusform/>
	</div>
</template>
<script>
import contactusform from '@/components/contactusform.vue'
import Image from '@/assets/twitter.png'
import Image2 from '@/assets/github.jpg'
export default {
	components:{contactusform},
	data(){
		return{
			items:[
				{image:Image, title:'', text:' Find me on the Twitters for witty banter and software development related nuggets.' ,  link:'https://twitter.com/wastech_a'},
				{image:'https://neurogadget.net/wp-content/uploads/2016/06/WhatsApp-2.16.38-1.jpg',  title:'', text:'Most everyones professional anchor. Add me to your network if we are like-minded.', link:'https://api.whatsapp.com/send?phone=+2348137632165'},
				{image:Image2,  title:'', text:'Fork. Clone. Star. Follow. My source code and some front-end hosted projects.', link:'https://github.com/wastech'},
			

			]
		}
	}
}
</script>
<style scoped>
.v-application--wrap {
        background-color: #269;
        background-image: linear-gradient(white 2px, transparent 2px), linear-gradient(90deg, white 2px, transparent 2px), linear-gradient(rgba(255, 255, 255, .3) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, .3) 1px, transparent 1px);
        background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
        background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
    }
    
    h1 {
		margin-bottom: 0.5em;
        color: white;
        text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
        text-align: center;
        font-weight: bolder;
        font-size: 4em;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        text-transform: capitalize;
    }
	.body{
display: grid;
	grid-gap:1rem;
	grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
	width: 75%;
	margin: 0 auto;
	
	}
    
    .card {
       
        height: 290px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        text-align: center;
        background-color: blue;
        color: white;
        word-wrap: break-word;
		border-radius: 10%;
        
    transition: all .25s ease;
		width: 400px;
		margin: 0 auto;;
		
		
	
	
    }
	img{
		width: 100%;
		height: 200px;
		cursor: pointer;
	}
    
    p {
        text-indent: 10px;
       text-align: center;
        letter-spacing: 1px;
        font-weight: normal;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-style: oblique;
    }
    
    .title {
        text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
        text-align: center;
        font-weight: bolder;
        font-size: xx-large;
        text-transform: capitalize;
		cursor: pointer;
    }
    
    .card:hover {
        background-color:white;
        
        color: white;
        font-weight: bolder;
        cursor: pointer;
        text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
    }
    
    @media only screen and (max-width: 600px) {
        .card {
            width: 80%;
	height: 280px;
	justify-content: center;
	text-align: center;
	border-top-left-radius: 30%;
		border-top-right-radius: 30%;}
	.title{
		text-align: center;
		cursor: pointer;
	}
	p{
		text-align: center;
		height: 50px;
	}
	img{
		width: 100%;
		height: 150px;
		border-top-left-radius: 30%;
		border-top-right-radius: 30%;
	}
	h1{
		font-size: 2.5em;
	}
	.body{
		width: 100%;
	}

    }
</style>