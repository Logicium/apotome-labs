<script setup lang="ts">
import { ref } from 'vue';
import ArrowIcon from "@/assets/icons/ArrowIcon.vue";

const props = defineProps({
  selectedDate: {
    type: Date,
    required: true
  },
  selectedTime: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['cancel', 'bookingSuccess']);

// Status message handling
const statusMessage = ref('');
const showStatusMessage = ref(false);
const statusMessageType = ref('success'); // 'success' or 'error'

// Confirmation panel reference for blur effect
const confirmationPanelRef = ref(null);

// Display status message
const displayStatusMessage = (message, type = 'success') => {
  statusMessage.value = message;
  statusMessageType.value = type;
  showStatusMessage.value = true;

  // Add blur class to confirmation panel
  if (confirmationPanelRef.value) {
    confirmationPanelRef.value.classList.add('blur');
  }

  // Hide message and remove blur after 3 seconds
  setTimeout(() => {
    showStatusMessage.value = false;

    // Ensure blur is removed even if there's an error
    try {
      if (confirmationPanelRef.value) {
        confirmationPanelRef.value.classList.remove('blur');
      }
    } catch (error) {
      console.error('Error removing blur effect:', error);
    }
  }, 3000);
};

// Local form data
const name = ref('');
const email = ref('');
const projectDescription = ref('');
const meetupType = ref('virtual'); // Default to virtual meetup

// Format date for display
const formatDate = (date) => {
  return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
};

// Confirm booking
const confirmBooking = async () => {
  // Validate form
  if (!name.value || !email.value) {
    displayStatusMessage('Please fill in all required fields', 'error');
    return;
  }

  try {
    // Format date for API
    const formattedDate = props.selectedDate.toISOString(); // ISO format for backend

    // Prepare data for API
    const bookingData = {
      name: name.value,
      email: email.value,
      date: formattedDate,
      time: props.selectedTime.time,
      type: meetupType.value,
      projectDescription: projectDescription.value || '' // Ensure it's never undefined
    };

    console.log(bookingData);

    // Send data to server - use relative URL for better portability
    const response = await fetch((import.meta.env.VITE_API_URL || 'http://localhost:3000')+'/api/meetings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    });

    const result = await response.json();

    if (result.success) {
      // Show success message
      displayStatusMessage('Booking confirmed successfully!');

      // Emit success event for parent component to handle
      emit('bookingSuccess', 'Booking confirmed successfully!');

      // Reset form after successful booking
      name.value = '';
      email.value = '';
      projectDescription.value = '';
      meetupType.value = 'virtual'; // Reset to default
    } else {
      // Show error message
      displayStatusMessage(result.message || 'Failed to create booking', 'error');
    }
  } catch (error) {
    console.error('Error creating booking:', error);
    displayStatusMessage('An error occurred. Please try again later.', 'error');
  }
};

// Handle cancel button click
const cancelBooking = () => {
  emit('cancel');
};
</script>

<template>
  <div class="confirmationWrap">
    <transition name="fade" mode="out-in">
      <div v-if="showStatusMessage" class="statusMessage" :class="statusMessageType">
        {{ statusMessage }}
      </div>
    </transition>

    <div class="confirmationPanel" ref="confirmationPanelRef">
      <div class="confirmationContent">
        <div class="med">Confirm Your Booking</div>
        <div class="tags">
          <div class="top">{{ ' 30 Minute Consultation '.toUpperCase() }}</div>
          <div class="top"><span class="gray">DATE /</span> {{ formatDate(selectedDate).toUpperCase() }}&nbsp;</div>
          <div class=""><span class="gray">TIME /</span> {{ selectedTime ? selectedTime.time : '' }}&nbsp;</div>
        </div>

        <div class="meetupTypeSelection">
          <div class="radioGroup">
            <label class="radioLabel">
              <input
                type="radio"
                value="virtual"
                v-model="meetupType"
                class="radioInput"
              />
              <div class="radioCustom" :class="{ 'radioSelected': meetupType === 'virtual' }"></div>
              <span>Virtual</span>
            </label>
            <label class="radioLabel">
              <input
                type="radio"
                value="inPerson"
                v-model="meetupType"
                class="radioInput"
              />
              <div class="radioCustom" :class="{ 'radioSelected': meetupType === 'inPerson' }"></div>
              <span>In Person</span>
            </label>
          </div>
        </div>

        <div class="formGroup">
          <input
            type="text"
            id="name"
            v-model="name"
            placeholder="Name"
            class="formInput"
            required
          />
        </div>

        <div class="formGroup">
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Email"
            class="formInput"
            required
          />
        </div>

        <div class="formGroup top">
          <textarea
            id="projectDescription"
            v-model="projectDescription"
            placeholder="Anything you want to share about your project?"
            class="formTextarea"
            rows="3"
          ></textarea>
        </div>

        <div class="confirmationButtons">
          <div class="button" @click="cancelBooking">BACK</div>
          <div class="button cta" @click="confirmBooking">CONFIRM <ArrowIcon /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.confirmationWrap {
  position: absolute;
  width: calc(100%);
  height: calc(100%);
}

.confirmationPanel {
  position: relative;
  background-color: white;
  border: 1px solid black;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  z-index: 1;
  transition: 0.5s;
}

.confirmationContent {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.emptyConfirmation {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #a8a8a8;
}

.confirmationButtons {
  display: flex;
  gap: 1rem;
}

.cta {
  margin-left: auto;
}

.formGroup {
  display: flex;
  flex-direction: column;
}

.formInput, .formTextarea {
  border: 1px solid #a8a8a8;
  padding: 0.75rem;
  font-family: inherit;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.formInput:focus, .formTextarea:focus {
  outline: none;
  border-color: black;
}

.formTextarea {
  resize: none;
  min-height: 80px;
}

.tags {
  margin-top: 1rem;
}

.meetupTypeSelection {
  margin-top: 1rem;
}

.radioGroup {
  display: flex;
  gap: 2rem;
}

.radioLabel {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.radioInput {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.radioCustom {
  width: 1rem;
  height: 1rem;
  border: 1px solid black;
  margin-right: 0.5rem;
  display: inline-block;
  transition: 0.5s;
}

.radioSelected {
  background-color: black;
  transition: 0.5s;
}

.statusMessage {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem 2rem;
  color: white;
  z-index: 2;
  text-align: center;
  max-width: 80%;
  background-color: black;
}

.blur {
  filter: blur(1px);
  transition: filter 0.5s ease;
  pointer-events: none;
}
</style>
