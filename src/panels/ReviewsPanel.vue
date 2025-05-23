<script setup lang="ts">

import data from "../data/data.ts";
</script>

<template>

  <div class="panel">
    <div>
      <div class="big title">Our Success Stories</div>
      <div class="small subtitle">{{data.reviews.intro}}</div>
    </div>
    <div class="grid">
      <div class="infoCol">
        <div class="med quote">"{{data.reviews.list[0].quote}}"</div>
        <div>
          <div class="small content">"{{data.reviews.list[0].content}}"</div>
          <div class="reviewerRow">
            <div class="reviewerImage image">

            </div>
            <div class="reviewerInfo">
              <div class="">ZACH STORMANT</div>
              <div class="gray">STORMANT DESIGNS</div>
            </div>
            <div class="buttons flex med">
              <div>
                <
              </div>
              <div>
                >
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="imageCol image">

      </div>
    </div>

  </div>

</template>

<style scoped>

.panel{
  display: grid;
  grid-template-rows: auto 1fr;
}

.grid{
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  margin-top: 2rem;
}

.imageCol{
  height: 100%;
  background-image: url("/agency/agency3.jpg");
}

.infoCol{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.quote,.content{
  margin-bottom: 1rem;
}

.content{
  padding-bottom: 1rem;
  border-bottom: 1px solid black;
}

.reviewerRow{
  display: flex;
}

.reviewerImage{
  width: 150px;
  height: 150px;
  margin-right: 1rem;
  background-color: #a8a8a8;
  background-image: url("/clients/zach.jpg");
  filter: grayscale(1);
}

.buttons{
  margin-left: auto;
  gap: 1rem;
}

.gray{
  color: #a8a8a8;
}


</style>
