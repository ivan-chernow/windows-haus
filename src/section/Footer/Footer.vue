<template>
  <section class="footer">
    <div class="footer-content">
      <div class="footer__left">
        <nuxt-link to="/">
          <img src="../../assets/img/Footer/footer-logo.png" alt="Логотип" class="footer-left__img">
        </nuxt-link>
        <p class="footer-left__title">© ООО “Окна Хаус”, 2011 - 2022</p>
      </div>
      <div class="footer__right">
        <nuxt-link to="/privacy" class="footer__right__text">Политика конфиденциальности</nuxt-link>
        <nuxt-link to="/agreement" class="footer__right__text">Пользовательское соглашение</nuxt-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.footer {
  min-width: 100%;
  display: inline-block;
  padding: 55px 0;
  background-color: #2F2F51;
}

.footer-content {
  width: 1300px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.footer__left {
  display: flex;
  align-items: center;
}

.footer__right {
  display: flex;
  align-items: center;
}

.footer-left__img {
  margin-right: 22px;
  width: 55px;
  height: 39px;
}

.footer-left__title {
  font-weight: 400;
  color: #FFFFFF;
}

.footer__right__text {
  font-weight: 400;
  font-size: 14px;
  color: #FFFFFF;
  text-decoration: none;
}

.footer__right__text:hover {
  color: #EF7F1A;
  transition: color 0.2s ease-in-out;
}

.footer__right__text:not(:last-child) {
  margin-right: 15px;
}
</style>

<script setup lang="ts">
</script>
