<template>
  <div>
	<particlesJS/>
 <!-- action buttons -->
 <div class="act">
	<router-link to = "/staff">
	<button class="mr-5 p-3 text-white" id="co">STAFF</button>
	</router-link>
	<button class="p-3 text-white" id="cod">ADMIN</button>
</div>
<!-- action buttons -->
  </div>
</template>

<script>
import particlesJS from '../components/particlesJS'

export default {
  name: 'Home',
  components: { particlesJS }
}
</script>

<style scoped>
	.act{
		position: absolute;
		top: 50%;
		z-index: 1;		
		left: 30%;
	}
	button{
		box-shadow:20px 10px 50px  10px black;
		width: 250px;
		font-size: 20px;
		font-weight: 600;
	}
	button:hover{
		font-size: 25px;
	}
	#co{
		background-color: green;
		border: 2px solid green;
		border-radius: 10px;
	}
	#cod{
		background-color: goldenrod;
		border: 2px solid goldenrod;
		border-radius: 10px;
	}
</style>