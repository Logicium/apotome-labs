<script setup lang="ts">

import data from "@/data/data.ts";
</script>

<template>
<div class="wrap">
  <div class="titleWrap">
    <div class="title">CONTACT</div>
    <div class="subtitle">{{data.contact.intro}}</div>
  </div>
  <div class="contactWrap">

    <div class="bookingWrap">
      <div class="buttonWrap">
        <div class="bookButton reverse"> BOOK MEETING </div>
      </div>
    </div>

    <div class="messageWrap">
      <input class="text" type="text" name="name" placeholder="name" v-model="name"/>
      <input class="text" type="email" name="email" placeholder="email" v-model="email"/>
      <input class="text" type="text" name="subject" placeholder="subject" v-model="subject"/>
      <textarea class="message" type="text" name="message" placeholder="message" v-model="message"/>
      <div class="bookButtonWrap">
        <div class="bookButton reverse"> SEND MESSAGE </div>
      </div>
    </div>

  </div>
</div>
</template>

<style scoped>

input,textarea{
  border: none;
  flex: 1;
  box-shadow: none;
  font-size: 1.2rem;
  font-family: "Work Sans",sans-serif;
  border-bottom: #b6b6b6 solid 2px;
}

.bookButton{
  cursor: pointer;
}

.buttonWrap,.bookButtonWrap{
  margin-top: auto;
  display: flex;
  justify-content: center;
  padding-bottom: 2rem;
  border-top: 1px solid black;
  width: 100%;
  padding-top: 2rem;
}

.bookButtonWrap{
  border: 1px solid black;
}

.bookingWrap{
  border: 1px solid black;
  display: flex;
  flex-direction: column;
}

.messageWrap{
  display: flex;
  flex-direction: column;
}

.contactWrap{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100%;
  grid-gap: 2rem;
  padding-top: 2rem;
  height: 100%;
}

.wrap{
  padding: 2rem;
  padding-top: 10vh;
  height: calc(90vh - 2rem);
}

.titleWrap{
  display: flex;
  border-bottom: solid black 1px;
}

.title{
  font-size: 7rem;
  line-height: 7rem;
}

.subtitle{
  margin-top: auto;
  margin-left: auto;
  font-size: 1.2rem;
  width: 33%;
  text-align: right;
}


</style>
