<script setup lang="ts">
import ArrowIcon from "@/assets/icons/ArrowIcon.vue";
</script>

<template>
  <div class="panel">
    <div class="valueGrid">
      <div class="imageCol">
        <div class="valueImage image"></div>
      </div>

      <div class="contentCol">
        <div class="valueHeader">
          <div class="big title">Why Choose a Local Partner?</div>
          <div class="small subtitle">Working with Apotome Labs means choosing quality, accessibility, and genuine partnership over the impersonal experience of big city agencies.</div>
        </div>

        <div class="valuePoints">
          <div class="valuePoint">
            <div class="pointNumber small">01</div>
            <div class="pointContent">
              <div class="med pointTitle">Direct Access to Your Team</div>
              <div class="small pointDesc">No account managers or middlemen. You work directly with the developers and designers building your project, ensuring clear communication and faster decisions.</div>
            </div>
          </div>

          <div class="valuePoint">
            <div class="pointNumber small">02</div>
            <div class="pointContent">
              <div class="med pointTitle">Big City Quality, Small Town Values</div>
              <div class="small pointDesc">We bring enterprise-level expertise to Trinidad and southern Colorado, but with the personal attention and fair pricing that only a local business can provide.</div>
            </div>
          </div>

          <div class="valuePoint">
            <div class="pointNumber small">03</div>
            <div class="pointContent">
              <div class="med pointTitle">Invested in Your Success</div>
              <div class="small pointDesc">Your success is our reputation in the community. We're not just building websites—we're building lasting relationships and helping local businesses thrive in the digital age.</div>
            </div>
          </div>

          <div class="valuePoint">
            <div class="pointNumber small">04</div>
            <div class="pointContent">
              <div class="med pointTitle">Flexible and Responsive</div>
              <div class="small pointDesc">Need a quick update or have an urgent question? We're here in Trinidad, available when you need us, without the bureaucracy and delays of large agencies.</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.panel {
  display: grid;
  grid-template-rows: 1fr;
}

.valueGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
  align-items: center;
}

.imageCol {
  height: 100%;
}

.valueImage {
  height: 100%;
  min-height: 400px;
  background-image: url("/agency/agency10.jpg");
}

.contentCol {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.valueHeader {
  .title {
    margin-bottom: 1rem;
    width: 100%;
  }

  .subtitle {
    width: 90%;
  }
}

.valuePoints {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.valuePoint {
  display: flex;
  gap: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e0e0e0;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
}

.pointNumber {
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  margin-top: 0.25rem;
}

.pointContent {
  flex: 1;
}

.pointTitle {
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.pointDesc {
  line-height: 1.5;
  color: #666;
}

.ctaSection {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid black;
}

.ctaText {
  flex: 1;
  margin-right: 2rem;
}

// Mobile responsiveness
@media (max-width: 768px) {
  .valueGrid {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }

  .valueImage {
    min-height: 200px;
  }

  .contentCol {
    gap: 2rem;
  }

  .valueHeader .title {
    font-size: 2.5rem !important;
    line-height: 2.5rem !important;
  }

  .valueHeader .subtitle {
    width: 100%;
  }

  .ctaSection {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;

    .ctaText {
      margin-right: 0;
      margin-bottom: 1rem;
    }
  }

  .valuePoints {
    gap: 1.5rem;
  }

  .valuePoint {
    gap: 1rem;
    padding-bottom: 1.5rem;
  }
}
</style>
