<template>
<div>
	<div class="main">
		<div class="header">
          <h3 class="head">OUR SERVICES</h3>
		</div>
		<div class="text">
			<p>What we are known for</p>

		</div>
	</div>
	
</div>
</template>
<script>
// @ is an alias to /src




export default {
  name: 'Home',
  components: {
	
  }
}
</script>

<style scoped>
.main{
	
	margin-top: 0.3em;
	height: 150px;
	background-color: rgba(0, 0, 255, 0.87);
	color: white;
    text-align: center;
	 box-shadow: 10px 10px 5px grey;
	 max-width: 100%;

}
.header{
	font-size: 2.5em;
	text-transform: uppercase;
	font-weight: bolder;
	text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
}
.text{
	text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
	font-size: 1em;
}
</style>