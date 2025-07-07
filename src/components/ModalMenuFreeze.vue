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
            :stroke="hover ? 'black' : 'white'"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
      </svg>
      <div class="modal__row">
        <FreezeIcon class="modal__freeze-icon"/>
        <p class="modal-row__title">Вызвать замерщика на дом</p>
      </div>
      <input type="text" v-model="modalFreeze.form.name" class="modal-row__input" placeholder="Ваше имя"/>
      <input type="text" v-model="modalFreeze.form.phone" class="modal-row__input" placeholder="Номер телефона"/>
      <input type="text" v-model="modalFreeze.form.email" class="modal-row__input" placeholder="Email"/>
      <div class="modal__row">
        <input
            type="checkbox"
            id="customCheckbox"
            class="modal-row__checkbox"
            v-model="modalFreeze.isChecked"
        />
        <label for="customCheckbox" class="modal-row__label">
          <div class="custom-checkbox" :class="{ 'checked': modalFreeze.isChecked }">
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
          <p class="modal-row__text" @click.stop>
            Я согласен(на) на обработку
            <a class="modal-row__span" href="/agreement">персональных данных</a>
          </p>
        </label>
      </div>

      <button
          class="modal__button"
          @click="submitForm"
          :class="{ 'disabled': modalFreeze.isSubmitting || modalFreeze.isToastVisible }"
          :disabled="modalFreeze.isSubmitting || modalFreeze.isToastVisible">
        Отправить заявку
      </button>
      <div v-if="modalFreeze.successMessage" class="success-message">{{ modalFreeze.successMessage }}</div>
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
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal {
  min-width: 650px;
  max-height: 580px;
  background-color: #ef7f1a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 25px 19px 69px 0;
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
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
}

.modal__freeze-icon {
  width: 30px;
  height: 26px;
  margin-right: 20px;
}

.modal-row__title {
  padding-top: 5px;
  color: #ffffff;
  font-weight: 700;
  font-size: 24px;
}

.modal-row__input {
  padding: 17px 17px;
  color: #424268;
  font-weight: 400;
  background-color: #ffffff;
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
  background-color: white;
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
  color: #ffffff;
  padding-top: 5px;
}

.modal-row__span {
  color: #2f2f51;
}

.modal__button {
  font-weight: 700;
  color: #ef7f1a;
  background-color: #ffffff;
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


</style>


<script setup lang="ts">
import {ref} from 'vue';
import * as yup from 'yup';
import FreezeIcon from "~/components/FreezeIcon.vue";
import {init, send} from 'emailjs-com';
import {modalsSchema} from "~/utils/vaildation";
import {ModalFreezeState} from "~/store/modalState";
import {usePressEscape} from "~/hooks/usePressEscape";
import {showToast} from "~/utils/showToast";

const emit = defineEmits();
const hover = ref(false);

const modalFreeze = ModalFreezeState()

usePressEscape([modalFreeze.closeModalFreeze])

const submitForm = async () => {
  if (modalFreeze.isSubmitting || modalFreeze.isToastVisible) return;
  modalFreeze.isSubmitting = true;

  try {
    await modalsSchema.validate(modalFreeze.form, {abortEarly: false});
    if (!modalFreeze.isChecked) {
      showToast('Вы должны согласиться с обработкой персональных данных.', true, modalFreeze);
      return;
    }

    init("igmhWkl9x5vvkcYeT");

    const templateParams = {
      from_name: modalFreeze.form.name,
      to_name: 'sutrame735@gmail.com',
      message: `Заявка на замер. Номер Телефона: ${modalFreeze.form.phone}. Почта: ${modalFreeze.form.email}`,
      reply_to: modalFreeze.form.email,
    };

    await send('service_7wrfg5b', 'template_1il9zx9', templateParams);

    modalFreeze.form = {name: '', phone: '', email: ''};
    modalFreeze.isChecked = false;
    showToast('Заявка на замер отправлена', false, modalFreeze);
    emit('close');

  } catch (error) {
    if (error instanceof yup.ValidationError) {
      error.inner.forEach(err => {
        showToast(err.message, true, modalFreeze);
      });
    } else {
      showToast('Ошибка при отправке', true, modalFreeze);
    }
  } finally {
    modalFreeze.isSubmitting = false;
  }
};


</script>
