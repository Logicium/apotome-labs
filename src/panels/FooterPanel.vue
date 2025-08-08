<script setup lang="ts">
import data from "../data/data.ts";
import ArrowIcon from "@/assets/icons/ArrowIcon.vue";
import LinkedinIcon from "@/assets/icons/LinkedinIcon.vue";
import FacebookIcon from "@/assets/icons/FacebookIcon.vue";
import InstaIcon from "@/assets/icons/InstaIcon.vue";

defineProps({
  nocta: {
    type: Boolean,
    default: false
  }
});
</script>

<template>

  <div class="panel" :class="{ 'panel-nocta': nocta }">
    <template v-if="!nocta">
      <div class="panelInfo">
        <div class="big title">Ready to Take Your Digital Brand to the Next Level?</div>
        <div class="flex">
          <div class="small subtitle">{{data.cta.intro}}</div>
          <RouterLink to="/contact" class="cta"><div class="button cta">GET STARTED <ArrowIcon/></div></RouterLink>
        </div>
      </div>

      <div class="imageRow">
        <div class="image">

        </div>
      </div>
    </template>

    <div class="footer">

      <div class="linksRow">

        <div class="logoCol">
          <div class="logoWrap">
            <div class="logo">///</div>
            <div class="med">APOTOME LABS</div>
          </div>
          <div class="small gray">{{data.footer.copyright}}</div>
        </div>



        <div class="contact gray">
          <div class="top small black">CONNECT</div>
          <div>612 Park Street, Trinidad CO 81082</div>
          <div>+1 720-937-9127</div>
          <div>kisora@apotomelabs.com</div>
<!--          <div class="socials flex">-->
<!--            <div class="icon"><LinkedinIcon/></div>-->
<!--            <div class="icon"><FacebookIcon/></div>-->
<!--            <div class="icon"><InstaIcon/></div>-->
<!--          </div>-->
        </div>

        <div class="linksCol">

          <div class="links gray">
            <div class="top small black">SITEMAP</div>
            <RouterLink to="/"><div>Home</div></RouterLink>
            <RouterLink to="/"><div>About</div></RouterLink>
            <RouterLink to="/"><div>Testimonials</div></RouterLink>
            <RouterLink to="/"><div>Pricing</div></RouterLink>
            <RouterLink to="/contact"><div>Contact</div></RouterLink>
          </div>

          <div class="links gray">
            <div class="top small black">RESOURCES</div>
            <RouterLink to="/"><div>Blog</div></RouterLink>
            <RouterLink to="/"><div>FAQ</div></RouterLink>
            <RouterLink to="/"><div>Support</div></RouterLink>
            <RouterLink to="/"><div>Terms</div></RouterLink>
            <RouterLink to="/"><div>Privacy</div></RouterLink>
          </div>

        </div>


      </div>


      <!--      <div class="copyright small">-->
<!--        <div>2025 All Rights Reserved</div>-->
<!--        <div class="legal">-->
<!--          <div>Terms</div>-->
<!--          <div>Privacy</div>-->
<!--        </div>-->
<!--      </div>-->
    </div>

  </div>

</template>

<style scoped lang="scss">

.panel{
  display: grid;
  grid-template-rows: auto 1fr auto;
}

.panel-nocta {
  height: fit-content;
}

.panelInfo{
  margin-bottom: 2rem;
}

.logoCol{
  display: flex;
  flex-direction: column;
}

.linksRow{
  margin-top: auto;
  display: flex;
  gap: 4rem;
}

.title{
  width: 70%;
}

.footer{
  padding-top: 2rem;
  border-top: 1px solid black;
  display: flex;
  flex-direction: column;
}

.socials{
  gap: 1rem;
  margin-top: 1rem;
}

.icon{
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.copyright,.legal{
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.cta{
  margin-left: auto;
}

.imageRow{
  margin-bottom: 2rem;
  padding-bottom: 2rem;
}

.image{
  height: 100%;
  background-image: url("/public/mountain/fishers-peak.jpg");
  //filter: grayscale(1);
  display: flex;
  flex-direction: column;
  color: white;
  padding: 1rem;
}

.linksCol{
  margin-left: auto;
  justify-content: end;
  display: flex;
  gap: 4rem;
}

.logoWrap{
  display: flex;
  align-items: center;
  height: fit-content;
  gap: 1rem;
  margin-bottom: 2rem;
}

.logo{
  width: 35px;
  height: 35px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}

a{
  color: #a8a8a8;
  transition: 0.5s;
}
a:hover{
  color: black;
  transition: 0.5s;
}

</style>
