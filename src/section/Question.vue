<template>
  <div class="card" id="question">
    <h2 class="card__title">Вопрос-ответ</h2>
    <Accordion value="0" class="accordion">
      <AccordionPanel value="0" class="accordion__panel">
        <AccordionHeader class="card__item-header ">Сколько по времени занимает изготовление пластиковых
          окон?

        </AccordionHeader>
        <AccordionContent class="accordion__content">
          <p class="card__item-description">Изготовление пластиковых окон занимает обычно от 5 до 10 рабочих дней, в
            зависимости от
            сложности заказа и наличия материалов. После установки сроки могут варьироваться. <br> Для точной информации
            свяжитесь с нашей командой!
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel value="1" class="accordion__panel">
        <AccordionHeader class="card__item-header">Какие существуют способы оплаты?</AccordionHeader>
        <AccordionContent class="accordion__content">
          <p class="card__item-description">Существует несколько способов оплаты: <br>
            1.Банковские карты (Visa, MasterCard). <br>
            2.Электронные кошельки (PayPal, Яндекс.Деньги). <br>
            3.Мобильные платежи (Apple Pay, Google Pay). <br>
            4.Банковские переводы. <br>
            5.Наложенный платеж. <br>
            6.Криптовалюты (Bitcoin, Ethereum). <br>
            7.Рассрочка через партнерские организации. <br>
            8.Выбирайте удобный для вас способ!</p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel value="2" class="accordion__panel">
        <AccordionHeader class="card__item-header">Где я могу посмотреть образцы?</AccordionHeader>
        <AccordionContent class="accordion__content">
          <p class="card__item-description">
            1.Запрос образцов через нашу службу поддержки <br>
            2.Социальные сети (Instagram, Facebook) для актуальных фотографий. <br>
            3.Галерея проектов с примерами работ.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel value="3" class="accordion__panel">
        <AccordionHeader class="card__item-header">Зачем вызывать замерщика? Я могу дать размеры</AccordionHeader>
        <AccordionContent class="accordion__content">
          <p class="card__item-description">Вызывать замерщика необходимо, чтобы обеспечить точность размеров и учесть
            все нюансы
            помещения.<br>Специалист проведет замеры, оценит состояние стен и пола, а также предложит оптимальные
            решения
            для отделки. <br> Это поможет избежать ошибок и дополнительных расходов в будущем.

          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel value="4" class="accordion__panel">
        <AccordionHeader class="card__item-header">Хотелось бы отделать балкон. Поможете?</AccordionHeader>
        <AccordionContent class="accordion__content">
          <p class="card__item-description">Конечно! Мы можем помочь с отделкой балкона. У нас есть различные материалы
            и варианты
            дизайна.</p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel value="5" class="accordion__panel">
        <AccordionHeader class="card__item-header">Мне надо нанимать грузчиков для подъема?</AccordionHeader>
        <AccordionContent class="accordion__content">
          <p class="card__item-description">Нет, команда мастеров все сами аккуратно доставят и внесут.</p>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  </div>
</template>

<style scoped>
.card {
  width: 1280px;
  margin: 0 auto;
  padding: 40px 101px;
  background-color: #EF7F1A;
  border-radius: 7px;
}

.card__title {
  text-align: center;
  margin-bottom: 49px;
  font-weight: 700;
  font-size: 24px;
  color: #FFFFFF;
}

.accordion__panel {
  margin-bottom: 14px;
  background-color: #FFFFFF;
  border: none;

}

.card__item-header {
  padding: 32px 31px 32px 19px;
  background-color: #FFFFFF;
  border-radius: 3px !important;
  border: none;
  font-weight: 700;
  font-size: 18px;
  color: #2F2F51;
}

.card__item-header:hover {
  background-color: #FFFFFF !important;
  color: #EF7F04 !important;
  transition: color 0.2s ease-in-out !important;
}

.accordion__content * {
  border: none !important;

}

.card__item-description {
  width: 950px;
  padding: 0 31px 20px 19px;
  line-height: 1.2;
  border-radius: 3px;
  border: none;
  background-color: #FFFFFF;
}
</style>

<script setup lang="ts">
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
</script>
