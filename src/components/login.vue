<template>
	<div class="ad-auth-wrapper">
	    <div class="ad-auth-box">
	        <div class="row align-items-center">
	            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
	                <div class="ad-auth-img">
	                    
	                </div>
	            </div>
	            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
	                <div class="ad-auth-content">
					 
	                    <form>
	                       
	                        <h2><span class="primary">Hello,</span>Welcome!</h2>
	                        <p>请在下面输入您的详细信息以继续</p>
	                        <div class="ad-auth-form">
	                            <div class="ad-auth-feilds mb-30">
	                                <input type="text" v-model="userinfo.username" placeholder="用户名" class="ad-input">
	                                
	                            </div>
	                            <div class="ad-auth-feilds">
	                                <input type="password" v-model="userinfo.password" placeholder="密码" class="ad-input">
	                            </div>
	                        </div>
	                        <div class="ad-other-feilds">
	                            <div class="ad-checkbox">
	                               
	                            </div>
	                            
	                        </div>
	                        <div class="ad-auth-btn"><a @click="login()" class="ad-btn ad-login-member" data-dismiss="alert">登录</a></div>
	                        <p class="ad-register-text">没有账户? <router-link to="/register"><button>点击这里</button></router-link></p>
	                    </form>
						
					
	                </div>
	            </div>
	        </div>
	        
	    </div>
	</div>
	
</template>

<script>
	
import axios from 'axios'
	export default {
	
		data() {
			return {
				userinfo:{
					username:"",
					password:"",
				}
			}
		},
	
		created() {
	
		},
		mounted() {
			
		},
		methods:{
			login(){
				axios.post("http://localhost/user",this.userinfo)
				         // 成功时回调函数
				         .then((data) => {
				 		  if(data.data){
				 			  this.$router.push("/home");
				 		  }
				         })
				         //失败时回调函数
				         .catch((err) => {
				 		  this.$message.error('账号或密码输入错误');
				         });
			
			},
			
		}
			
		}
	
	
	
</script>

<style>
</style>
