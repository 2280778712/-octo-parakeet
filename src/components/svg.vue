<template>
	<div class="test">
	<svg xmlns="http://www.w3.org/2000/svg"
 width="15rem" height="15rem" >
    <symbol id="sym01" >
		<a xlink:href="http://www.baidu.com">
      <rect width="5" height="5" style="fill:rgb(0,0,0)" />
      </a>
    </symbol>
    <use xlink:href="#sym01" x="0" y="200" />
    <use xlink:href="#sym01" x="15" y="185"/>
    <use xlink:href="#sym01" x="30" y="170"/>
    <use xlink:href="#sym01" x="45" y="155"/>
    <use xlink:href="#sym01" x="15" y="215"/>
    <use xlink:href="#sym01" x="30" y="230"/>
    <use xlink:href="#sym01" x="45" y="245"/>
    <use xlink:href="#sym01" x="45" y="200" />
    <use xlink:href="#sym01" x="60" y="185"/>
    <use xlink:href="#sym01" x="75" y="170"/>
    <use xlink:href="#sym01" x="90" y="155"/>
    <use xlink:href="#sym01" x="60" y="215"/>
    <use xlink:href="#sym01" x="75" y="230"/>
    <use xlink:href="#sym01" x="90" y="245"/>
	</svg>
</div>
</template>

<style scoped>
	.test{
		 width: 100px;
		 height: 100px;
		position: absolute;
		float: left;
	}
</style>