<template>
  <div class="section-bid__right">
    <div class='section-bid-right__form'>
      <p class="section-bid-right__title">Вызвать замерщика на дом</p>
      <input type="text" class='section-bid-right__input' v-model="bidFormState.form.name"
             placeholder="Представьтесь,пожалуйста">
      <input type="text" class='section-bid-right__input' v-model="bidFormState.form.phone"
             placeholder="Номер телефона">
      <input type="text" class='section-bid-right__input' v-model="bidFormState.form.email" placeholder="E-mail">
      <div class="section-bid-right__row">
        <input
            type="checkbox"
            id="customCheckbox"
            class="section-bid-right__checkbox"
            v-model="bidFormState.isChecked"
        />
        <label for="customCheckbox" class="modal-row__label">
          <div class="custom-checkbox" :class="{ 'checked': bidFormState.isChecked }">
            <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                 class="checkmark">
              <path d="M1.5 15L8.5 22L21.5 1" stroke="#2F2F51" stroke-width="2"/>
            </svg>
          </div>
          <p class="right-agree__description"> Согласен на обработку персональных данных
            в соответствии с <a class='right-agree__span' href="/privacy">политикой конфиденциальности</a></p>
        </label>
      </div>
      <button
          class="right-agree__button"
          @click="submitForm"
          :class="{ 'disabled': bidFormState.isSubmitting || bidFormState.isToastVisible }"
          :disabled="bidFormState.isSubmitting || bidFormState.isToastVisible">
        Отправить заявку
      </button>
      <div v-if="bidFormState.successMessage" class="success-message">{{ bidFormState.successMessage }}</div>
      <img src="../../assets/img/Bid/section1_lineika.png" alt="img" class='right-agree__image'>
    </div>
  </div>
</template>

<style>
.section-bid-right__row {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
}

.section-bid-right__checkbox {
  display: none;
}

.modal-row__label {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.custom-checkbox {
  width: 25px;
  height: 25px;
  display: flex;
  border-radius: 3px;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  position: relative;
  background-color: #E2E2E2;
  border: 1px solid #ccc;
  transition: background-color 0.3s ease;
}


.checkmark {
  width: 20px;
  height: 21px;
  display: none;
}

.custom-checkbox.checked .checkmark {
  display: block;
}

.section-bid__right {
  display: flex;
  flex-direction: column;
  width: 80%;
}

.section-bid-right__form {
  width: 406px;
  height: 428px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #FFFFFF;
  position: relative;
}

.section-bid-right__title {
  font-weight: 700;
  font-size: 18px;
  color: #2F2F51;
  margin-bottom: 27px;
  text-align: center;
}

.section-bid-right__input {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  color: #424268;
  background-color: #E2E2E2;
  font-weight: 400;
  font-size: 14px;
  padding: 12px 0 16px 12px;
  width: 320px;
  border: none;
  outline: none;
}

.section-bid-right__input:focus {
  border-color: #ef7f1a;
  box-shadow: 0 0 5px rgba(239, 127, 26, 0.5);
}

.section-bid-right__input:hover {
  border-color: #ef7f1a;
}

.right-agree__description {
  font-weight: 400;
  font-size: 12px;
  color: #000000;
  width: 287px;
}

.right-agree__span {
  color: blue;
}

.right-agree__button {
  color: #FFFFFF;
  background-color: #EF7F04;
  font-weight: 700;
  font-size: 14px;
  width: 199px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1;
}

.right-agree__button.disabled {
  background-color: #cccccc;
  color: #666666;
  cursor: not-allowed;
}

.right-agree__button.disabled:hover {
  background-color: #cccccc;
  color: #666666;
  transform: none;
}

.right-agree__button:hover {
  color: #ffffff;
  background-color: black;
  transform: scale(1.1);
}

.right-agree__button:active {
  background-color: #0056b3;
  transform: scale(1.05);
}

.right-agree__image {
  width: 611px;
  height: 117px;
  align-self: center;
  position: absolute;
  bottom: -40px;
  right: -120px;
}
</style>

<script setup lang="ts">
import * as yup from 'yup';
import {init, send} from 'emailjs-com';
import {BidFormState} from "~/store/bidFormState";
import {modalsSchema} from "~/utils/vaildation";
import {showToast} from "~/utils/showToast";


const bidFormState = BidFormState();

const submitForm = async () => {
  if (bidFormState.isSubmitting || bidFormState.isToastVisible) return;
  bidFormState.isSubmitting = true;

  try {
    await modalsSchema.validate(bidFormState.form, {abortEarly: false});
    if (!bidFormState.isChecked) {
      showToast('Вы должны согласиться с обработкой персональных данных.', true, bidFormState);
      return;
    }

    init("igmhWkl9x5vvkcYeT");

    const templateParams = {
      from_name: bidFormState.form.name,
      to_name: 'sutrame735@gmail.com',
      message: `Заявка на замер. Номер Телефона: ${bidFormState.form.phone}. Почта: ${bidFormState.form.email}`,
      reply_to: bidFormState.form.email,
    };

    await send('service_7wrfg5b', 'template_1il9zx9', templateParams);

    bidFormState.form =
        {
          name: '',
          phone: '',
          email: ''
        };
    bidFormState.isChecked = false;
    showToast('Заявка на замер отправлена', false, bidFormState);

  } catch (error) {
    if (error instanceof yup.ValidationError) {
      error.inner.forEach(err => {
        showToast(err.message, true, bidFormState);
      });
    } else {
      showToast('Ошибка при отправке', true, bidFormState);
    }
  } finally {
    bidFormState.isSubmitting = false;
  }
};


</script>
