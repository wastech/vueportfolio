<template>
	<div>
		<div class="contact-us">
 <!-- <div class="title">
    <h1>Contact us</h1>
  </div>-->
  <div class="form">
    <div class="form-items">
      <input type="text" class="input" placeholder="Username">
      <i class="fas fa-user"></i>
    </div>
    <div class="form-items">
      <input type="text" class="input" placeholder="Email">
      <i class="fas fa-envelope"></i>
    </div>
    <div class="form-items">
      <textarea class="input message" cols="30" rows="10" placeholder="Message....."></textarea>
    </div>
  </div>
  
  <div class="btn">
    Submit
    <i class="fas fa-arrow-right"></i>
  </div>
  
  
  <div class="social-icons">
    <div class="facebook">
		<a href="https://www.facebook.com/abdulfatai.abdulwasiu.39">
      <i class="fab fa-facebook-f"></i></a>
    </div>
    <div class="twitter">
				<a href="https://twitter.com/wastech_a">
      <i class="fab fa-twitter"></i></a>
    </div>
    <div class="whatsapp">
				<a href="mailto:fataiwasiu2@gmail.com">
      <i class="fas fa-envelope-open-text fa-3x"></i></a>
    </div>
  </div>
  
</div>
</div>
</template>
<style scoped>
.contact-us{
  width: 100%;
  max-width: 100%;
  background: #fff;
  padding: 50px;
  margin: 0 auto;
  border-radius: 30px;
  position: relative;
 
}

/*.title h1{
 color: white;
position: relative;
margin: 10px;
text-align:center;
text-transform: capitalize;
text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px black;
font-size: xx-large;
font-weight: bolder;
}*/
.form{
	width: 50% ;
	margin: 0 auto;
}


.form-items{
  width: 100%;
}

.form-items .input{
  width: 100%;
  margin-bottom: 12px;
  padding: 15px 40px;
  box-sizing: border-box;
  background: #ebeef1;
  border: 0px;
  outline: none;
  border-radius: 30px;
}

.form-items .input.message{
  height: 125px;
  border-radius: 15px;
  margin-bottom: 30px;
  padding: 15px 15px;
  resize: none;
}

.btn{
  background: #827ffe;
  text-align: center;
  color: #fff;
  padding: 12px;
  border-radius: 25px;
  cursor: pointer;
  width: 10%;
  margin: 0 auto;
}

.btn .fas{
  margin-left: 10px;
  font-size: 12px;
}

.form-items{
  position: relative;
}

.form-items .fas{
  position: absolute;
  top: 15px;
  left: 15px;
  color: #9a99aa;
}

.social-icons{
  position: absolute;
  bottom: -25px;
  left: 50%;
  width: 200px;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-around;
}

.social-icons div{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
}


.social-icons div .fab{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  color: #fff;
}

.social-icons div.facebook{
  background: #5178d9;
}

.social-icons div.twitter{
  background: #41caf6;
}

.social-icons div.google{
  background: #fb4f4f;
}
@media screen and (max-width: 600px) {
  .form {
    width: 100%;
	}
	.btn{
		width: 100%;
	}}

</style>