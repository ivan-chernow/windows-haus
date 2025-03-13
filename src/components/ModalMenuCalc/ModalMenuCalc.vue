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
        <CalculationIcon class="modal_calc-button"/>
        <p class="modal-row__title">Заказать расчет</p>
      </div>
      <input type="text" v-model="modalCalc.form.name" class="modal-row__input" placeholder="Ваше имя"/>
      <input type="text" v-model="modalCalc.form.phone" class="modal-row__input" placeholder="Номер телефона"/>
      <input type="text" v-model="modalCalc.form.email" class="modal-row__input" placeholder="Email"/>
      <div class="modal__row">
        <input
            type="checkbox"
            id="customCheckbox"
            class="modal-row__checkbox"
            v-model="modalCalc.isChecked"
        />
        <label for="customCheckbox" class="modal-row__label">
          <div class="custom-checkbox" :class="{ 'checked': modalCalc.isChecked }">
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
          :class="{ 'disabled': modalCalc.isSubmitting || modalCalc.isToastVisible }"
          :disabled="modalCalc.isSubmitting || modalCalc.isToastVisible">
        Заказать расчет
      </button>
      <div v-if="modalCalc.successMessage" class="success-message">{{ modalCalc.successMessage }}</div>
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
  background-color: #2F2F51;
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

.modal_calc-button {
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
  color: #ef7f1a;
}

.modal__button {
  font-weight: 700;
  color: #2F2F51;
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
import * as yup from 'yup';
import {init, send} from 'emailjs-com';
import {useToast} from 'vue-toastification';
import CalculationIcon from "~/components/CalculationIcon/CalculationIcon.vue";
import {modalsSchema} from "~/utils/vaildation";
import {ref} from "vue";
import {ModalCalcState} from "~/store/modalState";
import {usePressEscape} from "~/hooks/usePressEscape";
import {showToast} from "~/utils/showToast";

const toast = useToast();
const emit = defineEmits();
const hover = ref(false);

const modalCalc = ModalCalcState();
usePressEscape([modalCalc.closeModalCalc])


const submitForm = async () => {
  if (modalCalc.isSubmitting || modalCalc.isToastVisible) return;
  modalCalc.isSubmitting = true;

  try {
    await modalsSchema.validate(modalCalc.form, {abortEarly: false});
    if (!modalCalc.isChecked) {
      showToast('Вы должны согласиться с обработкой персональных данных.', true, modalCalc);
      return;
    }

    init("igmhWkl9x5vvkcYeT");

    const templateParams = {
      from_name: modalCalc.form.name,
      to_name: 'sutrame735@gmail.com',
      message: `Заявка на расчет. Номер Телефона: ${modalCalc.form.phone}. Почта: ${modalCalc.form.email}`,
      reply_to: modalCalc.form.email,
    };

    await send('service_7wrfg5b', 'template_1il9zx9', templateParams);

    modalCalc.form = {name: '', phone: '', email: ''};
    modalCalc.isChecked = false;
    showToast('Заявка на расчет отправлена', false, modalCalc);
    emit('close');

  } catch (error) {
    if (error instanceof yup.ValidationError) {
      error.inner.forEach(err => {
        showToast(err.message, true, modalCalc);
      });
    } else {
      showToast('Ошибка при отправке', true, modalCalc);
    }
  } finally {
    modalCalc.isSubmitting = false;
  }
};


</script>
