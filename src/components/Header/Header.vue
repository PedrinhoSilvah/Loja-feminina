<script >
    
</script>

<template>
  <header class="header">

    <img class="logo" src="C:\Users\Micro\Loja_mayhane\src\components\Header\img\Logo_loja-removebg-preview.png" alt="">

    <h1>Moda<span>Feminina</span></h1>
    <div class="end">
      <img class="carrinho" src="c:\Users\Micro\Loja_mayhane\public\sacolas-de-compras.png" alt="">
    </div>


  </header>
 
  <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="3000">
      <img src="https://i.pinimg.com/originals/dc/52/07/dc5207236a72fdb0282d821103c39183.jpg" class="d-block w-100 active" height="500px" alt="...">
    </div>
    <div class="carousel-item" data-bs-interval="3000">
      <img src="https://i.pinimg.com/originals/d4/0a/ef/d40aefeda4cfb7d747f642b57a7bfca7.jpg" class="d-block w-100" height="500px" alt="...">
    </div>
    <div class="carousel-item"  data-bs-interval="3000">
      <img src="https://i.pinimg.com/originals/3a/07/12/3a0712bc732db15934bc4626f30e2dd2.jpg" class="d-block w-100" height="500px" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

</template>

<style lang="scss" scoped>
  @import './Header.scss';
</style>