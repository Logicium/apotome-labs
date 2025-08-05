<script setup lang="ts">
import FooterPanel from "@/panels/FooterPanel.vue";
import SEO from "@/components/SEO.vue";
import PricingPanel from "@/panels/PricingPanel.vue";
</script>

<template>
  <div>
    <SEO
      title="Pricing & Packages | Web Development Services | Apotome Labs"
      description="Explore our affordable web development, app design, and digital marketing packages. Apotome Labs offers transparent pricing for businesses in Trinidad, CO and beyond."
      keywords="web development pricing, app design packages, affordable website design Trinidad CO, web services cost, digital marketing packages southern Colorado"
    />
    <div class="panel">
      <div>
        <div class="big title">Choose a Plan that Fits Your Business Best</div>
        <div class="small subtitle">From websites starting at $800 to maintenance plans starting at $25, we strive for both quality and affordability.</div>
      </div>
      <div class="pricingGrid">
        <div class="priceCardSmall">
          <div class="med">Startup Package</div>
          <div class="">$800/Project</div>
          <div class="big num gray">01</div>
        </div>
        <div class="priceCardSmall">
          <div class="med">Growth Package</div>
          <div class="">$1500/Project</div>
          <div class="big num gray">02</div>
        </div>
        <div class="priceCardLarge">
          <div class="med">Enterprise Package</div>
          <div class="">$3400+/Project</div>
          <div class="big num gray">03</div>
        </div>
      </div>
    </div>
    <div class="panel">
      <div>
        <div class="big title">Maintenance Packages</div>
        <div class="small subtitle">Our maintenance plans start at $25, to keep your site secure and with the latest updates.</div>
      </div>
      <div class="maintenanceGrid">

        <div class="maintenanceCard">
          <div class="med">Standard Maintenance</div>
          <div>$20/Month</div>
          <div class="big num gray">01</div>
        </div>
        <div class="maintenanceCardLarge"></div>
        <div class="maintenanceCard">
          <div class="med">Full Support Maintenance</div>
          <div>$50/Month</div>
          <div class="big num gray">02</div>
        </div>
        <div class="maintenanceCard">
          <div class="med">Enterprise Maintenance</div>
          <div>$200/Month</div>
          <div class="big num gray">03</div>
        </div>
      </div>

    </div>
    <FooterPanel/>
  </div>
</template>

<style scoped>

.panel{
  padding-top: 100px;
  display: grid;
  grid-template-rows: auto 1fr;
}

.title{
  width: 70%;
}

.pricingGrid,.maintenanceGrid{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 2rem;
  margin-top: 2rem;
}
.maintenanceGrid{
  grid-template-rows: 1fr 1fr 1fr;
}

.priceCardSmall{
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 2rem;
}

.priceCardLarge{
  border: 1px solid black;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  grid-column: span 2;
}

.maintenanceCard{
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 2rem;
}

.maintenanceCardLarge{
  border: 1px solid black;
  padding: 2rem;
  grid-row: span 3;
  grid-column: 2;
}

.num{
  margin-top: auto;
  margin-left: auto;
}

</style>
