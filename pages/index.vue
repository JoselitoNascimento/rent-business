<template>
  <div class="home-gradient">
    <h1 class="home-title"></h1>  
    <div class="main-content__body">
      <img class="home-image" src="../static/paper.png" width="544" height="164">
    </div>
  </div>
</template>

<style>

  .home-image {
      position: relative;
      width:50%;
      height:50%;
      left: 25%;
      margin-top: 15%;
  }
  .home-title {
      position: relative;
      margin-top: 2%;
      margin-left: 0%;    
      text-align: center;
      font-size: 52px;
      font-weight: bold;
      font-family: Roboto, Arial, Helvetica, sans-serif;
      color:  rgba(23, 2, 139, 0.918);
  }
  .home-gradient {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    background-color: rgb(243, 235, 235); /* For browsers that do not support gradients */
    background-image: linear-gradient(rgb(217, 232, 241), rgb(255, 255, 255));
  }

</style>
