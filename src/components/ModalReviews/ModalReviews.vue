<template>
  <div class="modal__overlay" @click="$emit('close')">
    <div class="modal" @click.stop>
      <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="modal__cross-icon"
          @mouseover="hover = true"
          @mouseleave="hover = false"
          @click="$emit('close')"
          :class="{ 'hover': hover }"
      >
        <path
            d="M21.75 1.14355L1.25 21.6436M1.25 1.14355L21.75 21.6436"
            :stroke="hover ? '#ef7f1a' : 'black'"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
      </svg>
      <div class="modal__row">
        <ReviewsIcon class="modal__row__img" stroke="#EF7F1A"/>
        <p class="modal-row__title">Добавьте Ваш отзыв</p>
      </div>
      <input type="text" v-model="modalReviews.form.name" class="modal-row__input" placeholder="Ваше имя"/>
      <input type="text" v-model="modalReviews.form.contract" class="modal-row__input" placeholder="Номер договора"/>
      <input type="text" v-model="modalReviews.form.email" class="modal-row__input" placeholder="E-mail"/>
      <textarea type="text" class='contacts-right__input contacts-right__input-text' v-model="modalReviews.form.reviews"
                maxlength="500"
                placeholder="Ваш отзыв"
      ></textarea>
      <div class="modal__row">
        <input
            type="checkbox"
            id="customCheckbox"
            class="modal-row__checkbox"
        />

        <label for="customCheckbox" class="modal-row__label">
          <div class="custom-checkbox" :class="{ 'checked': modalReviews.isChecked }"
               @click="modalReviews.isChecked = !modalReviews.isChecked"
          >
            <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="checkmark"
            >
              <path
                  d="M1.5 7.5L6 12L13.5 1.5"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
              />
            </svg>
          </div>
          <p class="modal-row__text">
            Я согласен(на) на обработку
            <a class="modal-row__span" href="/agreement">персональных данных</a>
          </p>
        </label>
      </div>
      <button
          class="modal__button"
          @click="submitForm"
          :class="{ 'disabled': modalReviews.isSubmitting || modalReviews.isToastVisible }"
          :disabled="modalReviews.isSubmitting || modalReviews.isToastVisible">
        Оставить отзыв
      </button>
      <div v-if="modalReviews.successMessage" class="success-message">{{ modalReviews.successMessage }}</div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal {
  animation: fadeIn 0.3s ease-out;
}

.modal__overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal {
  min-width: 595px;
  max-height: 667px;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 25px 19px 62px 20px;
  position: relative;
}

.modal__cross-icon {
  align-self: flex-end;
  cursor: pointer;
  margin-bottom: 10px;
  transition: transform 0.3s ease, stroke 0.3s ease;
}

.modal__cross-icon.hover {
  transform: scale(1.1);
}

.modal__row {
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 30px;
}

.modal__row__img {
  width: 30px;
  height: 27px;
  margin-right: 45px;
}

.modal-row__title {
  padding-top: 5px;
  color: #2F2F51;
  font-weight: 700;
  font-size: 24px;
}

.modal-row__input {
  padding: 17px 17px;
  color: #424268;
  font-weight: 400;
  background-color: #E2E2E2;
  width: 395px;
  margin-bottom: 21px;
  border: 2px solid transparent;
  outline: none;
  border-radius: 3px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.modal-row__input:focus {
  border-color: #ef7f1a;
  box-shadow: 0 0 5px rgba(239, 127, 26, 0.5);
}

.modal-row__input:hover {
  border-color: #ef7f1a;
}

.modal-row__checkbox {
  display: none;
}

.contacts-right__input-text {
  height: 134px;
  padding-bottom: 100px;
  padding-left: 15px;
  overflow: auto;
  resize: none;

}

.contacts-right__input {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 15px;
  color: #424268;
  background-color: #E2E2E2;
  font-weight: 400;
  font-size: 14px;
  padding: 12px 0 16px 12px;
  width: 395px;
  border: none;
  outline: none;
  position: relative;
}

.contacts-right__input-text::-webkit-scrollbar {
  display: none;
}

.contacts-right__input-text::placeholder {
  display: flex;
  position: absolute;
  left: 17px;
  top: 16px;
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

}

.custom-checkbox.checked {
  background-color: #E2E2E2;
}

.checkmark {
  display: none;
}

.custom-checkbox.checked .checkmark {
  display: block;
}

.modal-row__text {
  font-weight: 400;
  font-size: 14px;
  color: #111E97;
  padding-top: 5px;
}

.modal-row__span {
  color: #EF7F1A;
}

.modal__button {
  font-weight: 700;
  color: #FFFFFF;
  background-color: #EF7F1A;
  padding: 16px 60px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.modal__button.disabled {
  background-color: #cccccc;
  color: #666666;
  cursor: not-allowed;
  transform: none;
}

.modal__button.disabled:hover {
  color: #666666;
  transform: none;
  background-color: #cccccc;

}

.modal__button:hover {
  color: #ffffff;
  background-color: black;
  transform: scale(1.1);
}

.modal__button:active {
  background-color: #0056b3;
  transform: scale(1.05);
}

.contacts-right__input-text {
  height: 134px;
  padding-bottom: 100px;
  padding-left: 15px;
  overflow: auto;
  resize: none;
  border: 2px solid transparent;
  outline: none;
  border-radius: 3px;

}

.contacts-right__input-text:focus {
  border-color: #ef7f1a;
  box-shadow: 0 0 5px rgba(239, 127, 26, 0.5);
}

.contacts-right__input-text:hover {
  border-color: #ef7f1a;
}
</style>


<script setup lang="ts">
import * as yup from 'yup';
import {init, send} from 'emailjs-com';
import ReviewsIcon from "~/components/ReviewsIcon/ReviewsIcon.vue";
import {reviewsSchema} from "~/utils/vaildation";
import {ModalReviewsState} from "~/store/modalState";
import {usePressEscape} from "~/hooks/usePressEscape";
import {showToast} from "~/utils/showToast";

const emit = defineEmits();
const hover = ref(false);

const modalReviews = ModalReviewsState()

usePressEscape([() => emit('close')]);

const submitForm = async () => {
  if (modalReviews.isSubmitting || modalReviews.isToastVisible) return;
  modalReviews.isSubmitting = true;
  try {
    await reviewsSchema.validate(modalReviews.form, {abortEarly: false});
    if (!modalReviews.isChecked) {
      showToast('Вы должны согласиться с обработкой персональных данных.', true, modalReviews);
      return;
    }

    init("igmhWkl9x5vvkcYeT");

    const templateParams = {
      from_name: modalReviews.form.name,
      to_name: 'sutrame735@gmail.com',
      message: `На вашем сайте оставлен отзыв! Номер договора: ${modalReviews.form.contract}. Почта: ${modalReviews.form.email}
      Отзыв: ${modalReviews.form.reviews}`,
      reply_to: modalReviews.form.email,
    };

    await send('service_7wrfg5b', 'template_1il9zx9', templateParams);

    modalReviews.form = {name: '', contract: '', email: '', reviews: ''};
    modalReviews.isChecked = false;
    showToast('Ваш отзыв будет размещен после модерации!' + '\n' + 'Спасибо!', false, modalReviews);
    emit('close');

  } catch (error) {
    if (error instanceof yup.ValidationError) {
      error.inner.forEach(err => {
        showToast(err.message, true, modalReviews);
      });
    } else {
      showToast('Ошибка при отправке', true, modalReviews);
    }
  } finally {
    modalReviews.isSubmitting = false;
  }
};


</script>
