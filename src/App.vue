<script>
import Cabecalho from './components/Header/Header.vue'
import Discont from './components/Desconto/Desconto.vue'
import Foote from './components/Footer/Footer.vue'


export default {
  components: {
    Cabecalho,
    Discont,
    Foote

  }
}
</script>

<template>
  <Cabecalho />
  <nav class="nav-bar">
    <h2 class="nav-text">Navegue por modelagens</h2>
    <ul class="nav-bar-item">
      <li class="nav-bar-item-li"><router-link to="/"><img class="logo-roupas"
            src="../src/Img/item_3_blusa.jpg">Blusas</router-link></li>
      <li class="nav-bar-item-li"><router-link to="/Bory"><img class="logo-roupas"
            src="../src/Img/item_1_bory.webp">Borys</router-link></li>
      <li class="nav-bar-item-li"><router-link to="/Cropped"><img class="logo-roupas"
            src="../src/Img/cropped.jpg">Croppeds</router-link></li>
      <li class="nav-bar-item-li"><router-link to="/Macacao"><img class="logo-roupas"
            src="../src/Img/item_5_vestido.jpg">Macacão</router-link></li>
      <li class="nav-bar-item-li"><router-link to="/Vestido"><img class="logo-roupas"
            src="../src/Img/item_4_vestidos.jpg">Vestidos</router-link></li>
    </ul>
  </nav>
  <RouterView />
  <Discont />
  <Foote />
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

* {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.nav-bar {
  margin-top: 70px;
}

.nav-text{
  font-size: 14px;
  font-weight: 600;
  padding-bottom: 20px;
  padding-left: 10px;
  color: #808080;
}

.nav-bar-item {
  padding: 0;
  display: flex;
}

.nav-bar-item-li {
  list-style: none;
  display: flex;
}

.nav-bar-item-li a {
  color: #bc8f8f;
  text-decoration: none;
  text-align: center;
  font-weight: bolder;
  font-family: Roboto;
}

.logo-roupas {
  width: 50px;
  height: 50px;
  border-radius: 50px;

}
</style>
