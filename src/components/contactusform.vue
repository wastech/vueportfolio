<template>
	<div>
		<div class="container">
			<!-- <div class="title">
    <h1>Contact us</h1>
  </div>--> <h1> send us a message</h1>
			<div class="form">
               
				<div class="form-items">
					<input type="text" class="input" placeholder="Username" />
					<i class="fas fa-user"></i>
				</div>
				<div class="form-items">
					<input type="text" class="input" placeholder="Email" />
					<i class="fas fa-envelope"></i>
				</div>
				<div class="form-items">
					<textarea
						class="input message"
						cols="30"
						rows="10"
						placeholder="Message....."
					></textarea>
				</div>
			</div>
			<button class="btn">
				Submit
				<i class="fas fa-arrow-right"></i>
			</button>
			<div class="social-icons">
				<div class="facebook">
					<a href="https://www.facebook.com/abdulfatai.abdulwasiu.39">
						<i class="fab fa-facebook-f"></i
					></a>
				</div>
				<div class="twitter">
					<a href="https://twitter.com/wastech_a">
						<i class="fab fa-twitter"></i
					></a>
				</div>
				<div class="whatsapp">
					<a href="mailto:fataiwasiu2@gmail.com">
						<i class="fas fa-envelope-open-text fa-3x"></i
					></a>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
button {
    margin: 0 auto;
    display: block;
    max-width: 40%;
    width: 100%;
}

	.contact-us {
		width: 100%;
		max-width: 100%;
		background: #fff;
		padding: 50px;
		margin: 0 auto;
		border-radius: 30px;
		position: relative;
	}
	.container {
		background: transparent;
		box-shadow: 6px 6px 14px 0 rgba(0, 0, 0, 0.2),
			-8px -8px 18px 0 rgba(255, 255, 255, 0.55);
		border-radius: 40px;
        max-width: 90%;
        width: 100%;
       
       
	}
	.form {
         height: 90%;
          padding-top: 3em;
	}
	.form-items {
		width: 100%;
        
	}

	.form-items .input {
		width: 100%;
		margin-bottom: 12px;
		padding: 15px 40px;
		box-sizing: border-box;
		background: #ebeef1;
		border: 0px;
		outline: none;
		border-radius: 16px;
	}

	.form-items .input.message {
		height: 125px;
		border-radius: 5px;
		margin-bottom: 30px;
		padding: 15px 15px;
		resize: none;
	}

	.btn {
		background: #827ffe;
		text-align: center;
		color: #fff;
		
		border-radius: 25px;
		cursor: pointer;

		
	}

	.btn .fas {
		margin-left: 10px;
		font-size: 12px;
	}

	.form-items {
		position: relative;
	}

	.form-items .fas {
		position: absolute;
		top: 15px;
		left: 15px;
		color: #9a99aa;
	}

	.social-icons {
		position: absolute;
		bottom: -25px;
		left: 50%;
		width: 200px;
		transform: translateX(-50%);
		display: flex;
		justify-content: space-around;
	}

	.social-icons div {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		position: relative;
		cursor: pointer;
	}

	.social-icons div .fab {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: #fff;
	}
    h1{
        text-align: center;
    }

	.social-icons div.facebook {
		background: #5178d9;
	}

	.social-icons div.twitter {
		background: #41caf6;
	}

	.social-icons div.google {
		background: #fb4f4f;
	}

	@media screen and (max-width: 600px) {
		.form {
			width: 100%;
		}

		.btn {
			width: 100%;
		}
	}
</style>
