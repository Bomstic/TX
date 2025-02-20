<template>
	<el-container class="layout-container-demo" style="height: 100%; width: 205vh">
		<el-aside width="25vh">
			<el-scrollbar>
				<el-menu :default-openeds="['1', '3']">
					<el-sub-menu index="1">
						<template #title>
							<el-icon>
								<message />
							</el-icon>Navigator One
						</template>
						<el-menu-item-group>
							<template #title>Group 1</template>
							<el-menu-item index="1-1">Option 1</el-menu-item>
							<el-menu-item index="1-2">Option 2</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group title="Group 2">
							<el-menu-item index="1-3">Option 3</el-menu-item>
						</el-menu-item-group>
						<el-sub-menu index="1-4">
							<template #title>Option4</template>
							<el-menu-item index="1-4-1">Option 4-1</el-menu-item>
						</el-sub-menu>
					</el-sub-menu>
					<el-sub-menu index="2">
						<template #title>
							<el-icon><icon-menu /></el-icon>Navigator Two
						</template>
						<el-menu-item-group>
							<template #title>Group 1</template>
							<el-menu-item index="2-1">Option 1</el-menu-item>
							<el-menu-item index="2-2">Option 2</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group title="Group 2">
							<el-menu-item index="2-3">Option 3</el-menu-item>
						</el-menu-item-group>
						<el-sub-menu index="2-4">
							<template #title>Option 4</template>
							<el-menu-item index="2-4-1">Option 4-1</el-menu-item>
						</el-sub-menu>
					</el-sub-menu>
					<el-sub-menu index="3">
						<template #title>
							<el-icon>
								<setting />
							</el-icon>Navigator Three
						</template>
						<el-menu-item-group>
							<template #title>Group 1</template>
							<el-menu-item index="3-1">Option 1</el-menu-item>
							<el-menu-item index="3-2">Option 2</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group title="Group 2">
							<el-menu-item index="3-3">Option 3</el-menu-item>
						</el-menu-item-group>
						<el-sub-menu index="3-4">
							<template #title>Option 4</template>
							<el-menu-item index="3-4-1">Option 4-1</el-menu-item>
						</el-sub-menu>
					</el-sub-menu>
				</el-menu>
			</el-scrollbar>
		</el-aside>

		<el-container>
			<el-header style="text-align: right; font-size: 12px">

				<div class="toolbar">
					<el-row :gutter="20" style="margin-top: -2vh;">
						<el-col :span="2">
							<div class="grid-content ep-bg-purple" />
							<el-button type="primary">LOGO</el-button>

						</el-col>
						<el-col :span="10">
							<div class="grid-content ep-bg-purple" />
							<el-button type="primary" plain>Option1</el-button>
						</el-col>
						<el-col :span="3">
							<div class="grid-content ep-bg-purple" />
							<el-button type="primary" plain>Option2</el-button>
						</el-col>
						<el-col :span="3">
							<div class="grid-content ep-bg-purple" />
							<el-button type="primary" plain>Option3</el-button>
						</el-col>
						
						<el-col :span="3"><img src="../static/picture/2.jpg" style="height: 6vh; width: 6vh; border-radius: 50%; margin-top: 2vh;"/></el-col>
						
						<el-col :span="1">
							<div class="grid-content ep-bg-purple" />
																				
							<el-dropdown>
								<el-icon :size="30" style="margin-right: 1px">
									<setting />

								</el-icon>

								<template #dropdown>
									<el-dropdown-menu>
										<el-dropdown-item>View</el-dropdown-item>
										<el-dropdown-item>Add</el-dropdown-item>
										<el-dropdown-item>Delete</el-dropdown-item>
									</el-dropdown-menu>
								</template>

							</el-dropdown>
													
						</el-col>
						
					</el-row>


				</div>
			</el-header>

			<el-main>

				<el-scrollbar>


					<div style="width: 180vh;height: 85vh; z-index: 1; position: relative;">

						<div  id="map" class="map-view"> 
							<el-input v-model="input2"								
								style="width: 100vh;height: 5vh;margin-left: 35vh;margin-top: -5vh; z-index: 999; position: absolute;"
								placeholder="Please Input" :prefix-icon="Search" />
							
						</div> 
					</div> 
				</el-scrollbar>
			</el-main>
			<el-footer>

				<el-row :gutter="20">
					<el-col :span="4">
						<div class="grid-content ep-bg-purple" />
						<el-row>Product</el-row>						
					</el-col>
					<el-col :span="4">
						<div class="grid-content ep-bg-purple" />Support
					</el-col>
					<el-col :span="4">
						<div class="grid-content ep-bg-purple" />Resource
					</el-col>
					<el-col :span="4">
						<div class="grid-content ep-bg-purple" />Relation
					</el-col>
					<el-col :span="4">
						<div class="grid-content ep-bg-purple" />More
					</el-col>
					<el-col :span="4">
						<div class="grid-content ep-bg-purple" />

						<el-row>Contact Us</el-row>
						<el-row>
							<el-icon :size="30" style="margin-left: 3vh;">
								<Promotion />
							</el-icon>
						</el-row>
						<el-row>
							<el-text class="mx-1" size="small">Consulation for use: Online</el-text>
							<el-text class="mx-1" size="small">Customer Service</el-text>
							<el-text class="mx-1" size="small">Sale Hotile: 400-659-9879</el-text>
							</el-row>

					</el-col>
				</el-row>

			</el-footer>

		</el-container>


	</el-container>

</template>

<script setup>
	import {
		onMounted,
		onUnmounted,
		isVNode
	} from "vue";
	import {
		Loader
	} from "@googlemaps/js-api-loader"

	import {
		ref
	} from 'vue'
	import {
		Menu as IconMenu,
		Message,
		Setting,
		Edit,
		Grid,
		Promotion
	} from '@element-plus/icons-vue'

	const item = {
		date: '2016-05-02',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	}

	var map
	const loader = new Loader({
		apiKey: "AIzaSyAfU_ONw5YcBgMCVBr65Pq-kNxY_RyK1IU",
		version: "beta",
		language: "EN"
	});
	const mapOptions = {
		"tilt": 0,
		"heading": 0,
		"zoom": 18,
		"center": {
			lat: '20',
			lng: '260'
		},
		"mapId": "7a41e63d873e1b56",
		mapTypeId: "roadmap",
		'zoomControl': true,
		'mapTypeControl': true,
		'scaleControl': true,
		'streetViewControl': true,
		'rotateControl': true,
		'fullscreenControl': true
	};

	initMap()

	function initMap() {
		loader.load().then(() => {
			//绑定DIV
			const mapDiv = document.getElementById("map");
			const apiLoader = new Loader(loader);
			apiLoader.load();
			map = new google.maps.Map(mapDiv, mapOptions);
			//initWebGLOverlayView(map)
			//click事件获得定位
			map.addListener("click", (e) => {
				console.log(e.latLng.lat(), e.latLng.lng());
			});
			map.moveCamera({
				center: new google.maps.LatLng('38', '263'),
				zoom: 5, //缩放等级
				heading: 0,
				tilt: 60,
				
			});
		});
	}
</script>

<style scoped>
	#container {
		padding: 0px;
		margin: 0px;
		width: 100%;
		height: 100%;
	}
	
	.map-view {
	  height: 85vh;
	  position: relative;  
	  z-index: 2;          
	}

	
	.layout-container-demo .el-header {
		position: relative;
		background-color: var(--el-color-primary-light-10);
		color: var(--el-text-color-primary);
	}

	.layout-container-demo .el-aside {
		color: var(--el-text-color-primary);
		background: var(--el-color-primary-light-10);
	}

	.layout-container-demo .el-menu {
		border-right: none;
	}

	.layout-container-demo .el-main {
		padding: 0;
	}

	.layout-container-demo .toolbar {
		/* display: inline-flex; */
		align-items: center;
		justify-content: center;
		height: 100%;
		right: 20px;
	}

	.el-row {
		margin-bottom: 20px;
	}

	.el-row:last-child {
		margin-bottom: 0;
	}

	.el-col {
		border-radius: 4px;
	}

	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}
</style>