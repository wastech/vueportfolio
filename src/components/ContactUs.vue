<template>
<div>
    
  <section id="fancy-form">
   <div class="container">
    <div class="form-sections">
      <!-- Form left -->
      <div class="Form-left">
        <h1>Get In Touch</h1>
        <div class="line"></div> <!--border-bottom line-->
        <p>Contact us for latest news and updates. subscribe our news letter :)</p><br>

        <!--first Heading -->
        <h4>ADDRESS</h4>
         <span>Osogbo,Osun State Nigeria</span>
         <hr><br><br>

         <!--second Heading -->
        <h4>PHONE</h4>
         <span>+2348137632165</span>
         <hr><br><br>

       <!--third Heading -->
        <h4>EMAIL</h4>
         <span>fataiwasiu2@gmail.com</span>
         <hr> <br>

         <!-- social media icons -->
         <a href="https://www.facebook.com/abdulfatai.abdulwasiu.39">
						<i class="fab fa-facebook-f"></i
					></a>
         	<a href="https://twitter.com/wastech_a">
						<i class="fab fa-twitter"></i
					></a>
          <a href="mailto:fataiwasiu2@gmail.com">
						<i class="fas fa-envelope-open-text fa-1x"></i
					></a>
         <a href="https://www.linkedin.com/in/abdulfatai-abdulwasiu-370582111/">
						<i class="fab fa-linkedin fa-1x"></i
					></a>
        <a href="https://github.com/wastech">
						<i class="fab fa-github fa-1x"></i
					></a>
      </div>

      <!-- form right -->
      <div class="Form-right">
        <h1>Contact Us</h1>
        <div class="line"></div>
        <!-- form -->
        <form action="">
          <h5>NAME</h5>
          <input type="text"><br><br>
          <h5>EMAIL</h5>
          <input type="email"><br><br>
          <h5>PHONE</h5>
          <input type="number"><br><br>
          <h5>YOUR MESSAGE</h5>
          <textarea name="" id="" cols="50" rows="7"></textarea><br>
          <button>Send</button>
        </form>
      </div>
    </div>
    </div>
  </section>
</div>
</template>

<style scoped>
body{
 padding: 0;
 margin: 0;
 line-height: 1.5;
 box-sizing: border-box;
 color:rgba(248, 248, 248, 0.938);
 
}

/* background image  */
#fancy-form{
 background: linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.6)),url("../assets/back.jpg");
 background-size: cover;
 background-position: center;
 height: 100vh;
}

/* container utility */
#fancy-form .container{
  width: 80%;
  margin: auto;
  overflow: hidden;
}

/* main div */
.form-sections{
  margin-top: 5rem;
  display: grid;
  grid-gap: 5rem;
  grid-template-columns: repeat(2, 1fr);
}

/* Form-left styling */
.Form-left h1{
  color: #fff;
  padding: 0;
  margin: 0;
}

.Form-left h4{
  padding: 0;
  margin: 0;
  color: rgb(243, 235, 235);
}
.line{
  border-bottom: 2px solid rgb(12, 168, 207);
  width: 8%;
  margin-left: 0;
}
.Form-left span{
  color: rgb(187, 182, 182);
  font-weight: bold;
}

.Form-left hr{
  width: 25rem;
  margin-left: 0;
  border: 1px solid rgb(53, 52, 52);
}

/* socail media icons */
.fas, .fab{
  padding: 8px;
  font-size: 18px;
  width: 50px;
  text-align: center;
  text-decoration: none;
  /* margin: 5px 2px; */
  color: rgb(187, 182, 182);
}
.fas, .fab:hover{
  color: rgb(16, 135, 190);;
}



/* Form Right Styling */
.Form-right h1{
  color: #fff;
  padding: 0;
  margin: 0;
}

form{
  padding-top: 2rem;
}

form h5{
  padding: 0;
  margin: 0;
  color: rgb(228, 218, 218);
}
form input{
  padding:0.6rem;
  width: 27rem;
  border: none;
  background-color:rgba(136, 133, 133, 0.3);
  color:white;
  border: none;
  outline:none;
}

form textarea{
  padding:0.6rem;
  width: 27rem;
  border: none;
  background-color:rgba(136, 133, 133, 0.3);
  color:white;
  border: none;
  outline:none;
 }

 form button{
    width: 9rem;
    background: rgb(12, 168, 207);
    padding: 5px;
    outline: none;
    border-color: transparent;
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    letter-spacing: 2px;
    text-align: center;
    margin-top: 0.9rem;
    border-radius: 50px;
    cursor: pointer;
 }


 /* media queries */
   @media (max-width: 968px){

     #fancy-form .form-sections{
       display: block;
       width: 100%;
       text-align: left;
          }

      /* background image  */
      #fancy-form{
        background: linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.9)),url("../assets/back.jpg");
        background-size: cover;
        background-position: center;
        height: auto;
        width: 100%;
         }

      .form-sections .Form-right{
        margin-top: 2rem;
        margin-bottom: 2rem;
         }

    /* socail media icons */
        .fa{
         padding: 8px;
         font-size: 18px;
         width: 30px;
         text-align: center;
         text-decoration: none;
         color: rgb(187, 182, 182);
             }
          }

</style>
