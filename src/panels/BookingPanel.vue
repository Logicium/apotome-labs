<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import ArrowIcon from "@/assets/icons/ArrowIcon.vue";
import LeftIcon from "@/assets/icons/LeftIcon.vue";
import RightIcon from "@/assets/icons/RightIcon.vue";
import data from "@/data/data.ts";
import BookingCard from "@/components/cards/BookingCard.vue";
import DateCard from "@/components/cards/DateCard.vue";

// Date handling
const currentDate = ref(new Date());
const selectedDate = ref(new Date()); // Default to today's date
const showConfirmation = ref(false);
const selectedTime = ref(null);

// Status message handling
const statusMessage = ref('');
const showStatusMessage = ref(false);
const statusMessageType = ref('success'); // 'success' or 'error'
const confirmationPanelRef = ref(null);

// Pagination for time slots
const currentPage = ref(0);
const itemsPerPage = 6; // Show 9 time slots per page

// Form data
const name = ref('');
const email = ref('');
const projectDescription = ref('');
const meetupType = ref('virtual'); // Default to virtual meetup

// Function to get the start of the week (Sunday)
const getStartOfWeek = (date) => {
  const d = new Date(date);
  const day = d.getDay(); // 0 for Sunday, 1 for Monday, etc.
  d.setDate(d.getDate() - day); // Go back to the start of the week (Sunday)
  return d;
};

// Get the current week's start date
const weekStartDate = computed(() => {
  return getStartOfWeek(currentDate.value);
});

// Generate an array of dates for the current week (Monday to Friday only)
const weekDates = computed(() => {
  const dates = [];
  const startDate = new Date(weekStartDate.value);

  // Start from Monday (1) and go to Friday (5)
  for (let i = 1; i <= 5; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    dates.push(date);
  }

  return dates;
});

// Format date for display
const formatDate = (date) => {
  return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
};

// Go to previous week
const previousWeek = () => {
  const newDate = new Date(currentDate.value);
  newDate.setDate(newDate.getDate() - 7);
  currentDate.value = newDate;
  // Set selectedDate to the first day of the week (Monday)
  selectedDate.value = weekDates.value[0];
  selectedTime.value = null;
  showConfirmation.value = false;
  currentPage.value = 0; // Reset to first page when week changes
};

// Go to next week
const nextWeek = () => {
  const newDate = new Date(currentDate.value);
  newDate.setDate(newDate.getDate() + 7);
  currentDate.value = newDate;
  // Set selectedDate to the first day of the week (Monday)
  selectedDate.value = weekDates.value[0];
  selectedTime.value = null;
  showConfirmation.value = false;
  currentPage.value = 0; // Reset to first page when week changes
};

// Generate time slots from 10am to 5pm in 30-minute intervals
const generateTimeSlots = () => {
  const slots = [];
  // Start at 10:00 AM (10 * 60 minutes)
  let startMinutes = 10 * 60;
  // End at 5:00 PM (17 * 60 minutes)
  const endMinutes = 17 * 60;

  while (startMinutes < endMinutes) {
    const hours = Math.floor(startMinutes / 60);
    const minutes = startMinutes % 60;
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const hour12 = hours % 12 || 12; // Convert 0 to 12 for 12-hour format

    slots.push({
      time: `${hour12}:${minutes.toString().padStart(2, '0')} ${ampm}`,
      value: startMinutes
    });

    // Increment by 30 minutes
    startMinutes += 30;
  }

  return slots;
};

const timeSlots = computed(() => generateTimeSlots());

// Filter out past times for the current date
const availableTimeSlots = computed(() => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  // If selected date is in the past, return empty array
  if (selectedDate.value < today) {
    return [];
  }

  // If selected date is today, filter out past times
  if (selectedDate.value.toDateString() === today.toDateString()) {
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTimeInMinutes = currentHour * 60 + currentMinute;

    return timeSlots.value.filter(slot => {
      return slot.value > currentTimeInMinutes;
    });
  }

  // If selected date is in the future, return all time slots
  return timeSlots.value;
});

// Get the current page of time slots
const paginatedTimeSlots = computed(() => {
  const availableSlots = availableTimeSlots.value;
  const startIndex = currentPage.value * itemsPerPage;
  return availableSlots.slice(startIndex, startIndex + itemsPerPage);
});

// Go to previous page of time slots
const previousPage = () => {
  // If no available time slots, don't paginate
  if (availableTimeSlots.value.length === 0) return;

  if (currentPage.value > 0) {
    currentPage.value--;
  } else {
    // Wrap around to the last page
    const totalPages = Math.ceil(availableTimeSlots.value.length / itemsPerPage);
    currentPage.value = totalPages - 1;
  }
};

// Go to next page of time slots
const nextPage = () => {
  // If no available time slots, don't paginate
  if (availableTimeSlots.value.length === 0) return;

  const totalPages = Math.ceil(availableTimeSlots.value.length / itemsPerPage);
  if (currentPage.value < totalPages - 1) {
    currentPage.value++;
  } else {
    // Wrap around to the first page
    currentPage.value = 0;
  }
};

// Handle date selection
const selectDate = (date) => {
  selectedDate.value = date;
  selectedTime.value = null;
  showConfirmation.value = false;
  currentPage.value = 0; // Reset to first page when a new date is selected
};

// Handle time selection
const selectTime = (time) => {
  selectedTime.value = time;
  // No longer automatically show confirmation panel
  // This will be triggered by the NEXT button
};

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

// Confirm booking
const confirmBooking = async () => {
  // Validate form
  if (!name.value || !email.value) {
    displayStatusMessage('Please fill in all required fields', 'error');
    return;
  }

  try {
    // Format date for API
    const formattedDate = selectedDate.value.toISOString(); // ISO format for backend

    // Prepare data for API
    const bookingData = {
      name: name.value,
      email: email.value,
      date: formattedDate,
      time: selectedTime.value.time,
      type: meetupType.value,
      projectDescription: projectDescription.value || '' // Ensure it's never undefined
    };

    // Send data to server - use relative URL for better portability
    const response = await fetch('http://localhost:3000/api/meetings', {
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

      // Reset form after successful booking
      setTimeout(() => {
        selectedDate.value = new Date();
        selectedTime.value = null;
        showConfirmation.value = false;
        name.value = '';
        email.value = '';
        projectDescription.value = '';
        meetupType.value = 'virtual'; // Reset to default
      }, 3000);
    } else {
      // Show error message
      displayStatusMessage(result.message || 'Failed to create booking', 'error');
    }
  } catch (error) {
    console.error('Error creating booking:', error);
    displayStatusMessage('An error occurred. Please try again later.', 'error');
  }
};

// Back function (previously cancelBooking)
const cancelBooking = () => {
  showConfirmation.value = false;
};

// Check if a date is the selected date
const isSelectedDate = (date) => {
  if (!selectedDate.value) return false;
  return date.toDateString() === selectedDate.value.toDateString();
};

// Reset current page when available time slots change
watch(availableTimeSlots, () => {
  currentPage.value = 0;
});
</script>

<template>
  <div class="panel">
    <div>
      <div class="big title">{{ data.contact.booking.title }}</div>
      <div class="small subtitle">{{ data.contact.booking.subtitle }}</div>
    </div>

    <div class="bookingContainer">
      <!-- Main Booking Layout -->
      <div class="bookingFlexContainer">
        <!-- Left Column: Date and Time Selection -->
        <div class="selectionColumn">
          <!-- Date Selection -->
          <div class="dateSelection">
            <div class="weekNavigation">
              <div class="weekLabel med"> {{ formatDate(weekDates[0]) }} - {{ formatDate(weekDates[4]) }}</div>

              <div class="buttons flex">
                <div class="button navButton" @click="previousWeek">
                  <
                </div>
                <div class="button navButton" @click="nextWeek">
                  >
                </div>
              </div>
            </div>

            <div class="dateGrid">
              <DateCard
                v-for="date in weekDates"
                :key="date.toISOString()"
                :date="date"
                :is-selected="isSelectedDate(date)"
                @select="selectDate(date)"
              />
            </div>
          </div>

          <!-- Time Selection -->
          <div class="timeSelection">
            <div class="timeNavigation">
              <div class="med timeSelectionTitle">Available Times on {{ formatDate(selectedDate) }}</div>
              <div class="buttons flex" v-if="availableTimeSlots.length > 0">
                <div class="button navButton" @click="previousPage">
                  <
                </div>
                <div class="button navButton" @click="nextPage">
                  >
                </div>
              </div>
            </div>

            <transition name="fade" mode="out-in">
            <div v-if="availableTimeSlots.length > 0" class="timeGrid">
              <BookingCard
                v-for="slot in paginatedTimeSlots"
                :key="slot.value"
                :time="slot.time"
                :value="slot.value"
                :is-selected="selectedTime && selectedTime.value === slot.value"
                @select="selectTime(slot)"
              />
            </div>
            <div v-else class="gray">
              <p>No available times for this date</p>
            </div>
            </transition>

            <!-- NEXT button to reveal confirmation panel -->
            <transition name="fade" mode="out-in">
            <div class="nextButtonContainer" v-if="selectedTime">
              <div class="button cta nextButton" @click="showConfirmation = true">NEXT</div>
            </div>
            </transition>
          </div>

          <transition name="fade" mode="out-in">
            <div class="confirmationWrap" v-if="showConfirmation">
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
                        <input type="radio" v-model="meetupType" value="virtual" class="radioInput" />
                        <div class="radioCustom" :class="{ 'radioSelected': meetupType === 'virtual' }"></div>
                        <span>Virtual</span>
                      </label>
                      <label class="radioLabel">
                        <input type="radio" v-model="meetupType" value="inPerson" class="radioInput" />
                        <div class="radioCustom" :class="{ 'radioSelected': meetupType === 'inPerson' }"></div>
                        <span>In Person</span>
                      </label>
                    </div>
                  </div>

                  <div class="formGroup">
                    <!--              <label for="name" class="gray">NAME</label>-->
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
                    <!--              <label for="email" class="gray">EMAIL</label>-->
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
                    <!--              <label for="projectDescription" class="gray">PROJECT DESCRIPTION</label>-->
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

          </transition>

        </div>


        <!-- Right Column: Image -->
        <div class="image">
          <!-- This div will have the background image -->
        </div>

        <!-- Confirmation Panel (now absolutely positioned) -->


      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.panel {
  display: grid;
  padding-top: 100px;
  grid-template-rows: auto 1fr;
}

.bookingContainer {
  margin-top: 2rem;
  height: calc(100% - 2rem);
}

.bookingFlexContainer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  height: 100%;
}

.selectionColumn {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative; /* Added for absolute positioning of confirmationPanel */
}

.dateSelection {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.weekNavigation {
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
}

.tags{
  margin-top: 1rem;
}

.tag{
  background-color: black;
}

.navButton {
  cursor: pointer;
  width: 45px;
  max-width: 45px;
  padding: 0;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 200;
  font-size: 1.8rem;
  transition: 0.5s;
}

.navButton:hover {
  background-color: black;
  color: white;
}


.dateGrid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
}

.buttons{
  margin-left: 1rem;
  gap: 1rem;
}

.timeSelection {
  display: flex;
  flex-direction: column;
}

.timeSelectionTitle {
  margin-bottom: 1rem;
}

.timeGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
}

.timeNavigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  border-top: 1px solid #a8a8a8;
}

.image {
  flex: 1;
  background-image: url("/agency/agency4.jpg");
}

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
  z-index: 10;
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

.nextButtonContainer {
  display: flex;
  justify-content: flex-end;
  margin-top: 1.5rem;
  border-top: 1px solid #a8a8a8;
  padding-top: 1.5rem;
}

.nextButton {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.noTimesMessage {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  border: 1px solid #a8a8a8;
  color: #a8a8a8;
  font-size: 1.2rem;
  text-align: center;
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
  z-index: 20;
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
