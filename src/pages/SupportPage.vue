<script setup lang="ts">
import { ref } from 'vue';
import FooterPanel from "@/panels/FooterPanel.vue";
import SEO from "@/components/SEO.vue";

// Support categories with different types of help
const supportCategories = [
  {
    title: "Website Issues",
    description: "Get help with website functionality, performance, or display problems",
    icon: "🌐",
    items: [
      "Site not loading or loading slowly",
      "Broken links or missing pages",
      "Mobile display issues",
      "Browser compatibility problems",
      "Form submission errors",
      "SSL certificate issues"
    ]
  },
  {
    title: "Content Management",
    description: "Learn how to update and manage your website content",
    icon: "📝",
    items: [
      "Adding or editing pages",
      "Uploading and managing images",
      "Updating contact information",
      "Managing blog posts or news",
      "SEO optimization tips",
      "Backup and restore procedures"
    ]
  },
  {
    title: "E-commerce Support",
    description: "Assistance with online store functionality and management",
    icon: "🛒",
    items: [
      "Product catalog management",
      "Payment processing issues",
      "Inventory tracking problems",
      "Order management system",
      "Shipping configuration",
      "Customer account issues"
    ]
  },
  {
    title: "Technical Maintenance",
    description: "Ongoing technical support and system maintenance",
    icon: "🔧",
    items: [
      "Security updates and patches",
      "Performance optimization",
      "Database maintenance",
      "Server monitoring",
      "Email configuration",
      "Domain and hosting management"
    ]
  }
];

// Support contact methods
const contactMethods = [
  {
    title: "Email Support",
    description: "Send us a detailed description of your issue",
    contact: "support@apotomelabs.com",
    responseTime: "Within 24 hours",
    icon: "📧"
  },
  {
    title: "Phone Support",
    description: "Call us for urgent issues during business hours",
    contact: "+1 720-937-9127",
    responseTime: "Monday-Friday, 9AM-5PM MT",
    icon: "📞"
  },
  {
    title: "Emergency Support",
    description: "For critical website outages or security issues",
    contact: "emergency@apotomelabs.com",
    responseTime: "Within 4 hours",
    icon: "🚨"
  }
];

// Common troubleshooting steps
const troubleshootingSteps = [
  {
    issue: "Website Not Loading",
    steps: [
      "Clear your browser cache and cookies",
      "Try accessing the site from a different browser",
      "Check if the issue occurs on mobile devices",
      "Verify your internet connection",
      "Contact us if the problem persists"
    ]
  },
  {
    issue: "Email Forms Not Working",
    steps: [
      "Ensure all required fields are filled out",
      "Check that email addresses are formatted correctly",
      "Try submitting from a different device or browser",
      "Look for any error messages",
      "Contact support with the specific error details"
    ]
  },
  {
    issue: "Can't Login to Admin Panel",
    steps: [
      "Verify your username and password",
      "Try the 'Forgot Password' feature",
      "Clear browser cookies for the site",
      "Ensure caps lock is not enabled",
      "Contact us if you continue having login issues"
    ]
  }
];

// Track which troubleshooting sections are open
const openTroubleshooting = ref(new Set());

const toggleTroubleshooting = (index) => {
  if (openTroubleshooting.value.has(index)) {
    openTroubleshooting.value.delete(index);
  } else {
    openTroubleshooting.value.add(index);
  }
};

const isTroubleshootingOpen = (index) => {
  return openTroubleshooting.value.has(index);
};
</script>

<template>
  <div>
    <SEO
      title="Technical Support | Get Help | Apotome Labs Trinidad CO"
      description="Get technical support for your website, app, or digital services. We provide comprehensive help for all our clients in Trinidad, Colorado and beyond."
      keywords="technical support, website help, web development support, digital agency support, Apotome Labs help, Trinidad CO web support"
    />

    <div class="panel">
      <div class="supportHeader">
        <div class="big title">Technical Support</div>
        <div class="small subtitle">We're here to help you get the most out of your digital presence. Whether you need assistance with your website, have technical questions, or need ongoing maintenance, our support team is ready to assist.</div>
      </div>

      <div class="supportContent">
        <!-- Contact Methods Section -->
        <section class="supportSection">
          <div class="med sectionTitle">Get Help Now</div>
          <div class="contactMethods">
            <div
              v-for="method in contactMethods"
              :key="method.title"
              class="contactMethod"
            >
              <div class="methodIcon">{{ method.icon }}</div>
              <div class="methodContent">
                <div class="methodTitle">{{ method.title }}</div>
                <div class="methodDescription small">{{ method.description }}</div>
                <div class="methodContact">{{ method.contact }}</div>
                <div class="methodResponse small gray">{{ method.responseTime }}</div>
              </div>
            </div>
          </div>
        </section>

        <!-- Support Categories Section -->
        <section class="supportSection">
          <div class="med sectionTitle">What We Can Help With</div>
          <div class="supportCategories">
            <div
              v-for="category in supportCategories"
              :key="category.title"
              class="supportCategory"
            >
              <div class="categoryHeader">
                <div class="categoryIcon">{{ category.icon }}</div>
                <div class="categoryInfo">
                  <div class="categoryTitle">{{ category.title }}</div>
                  <div class="categoryDescription small">{{ category.description }}</div>
                </div>
              </div>
              <div class="categoryItems">
                <div
                  v-for="item in category.items"
                  :key="item"
                  class="categoryItem small"
                >
                  <div class="checkboxCustom checkboxSelected"></div>
                  {{ item }}
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Troubleshooting Section -->
        <section class="supportSection">
          <div class="med sectionTitle">Common Issues & Solutions</div>
          <div class="troubleshootingContainer">
            <div
              v-for="(trouble, index) in troubleshootingSteps"
              :key="trouble.issue"
              class="troubleshootingItem"
            >
              <div
                class="troubleshootingHeader"
                @click="toggleTroubleshooting(index)"
              >
                <div class="troubleshootingTitle">{{ trouble.issue }}</div>
                <div class="troubleshootingToggle">
                  <div class="plus-icon" :class="{ 'minus-icon': isTroubleshootingOpen(index) }">
                    <div class="line horizontal"></div>
                    <div class="line vertical"></div>
                  </div>
                </div>
              </div>

              <transition name="slide">
                <div
                  v-if="isTroubleshootingOpen(index)"
                  class="troubleshootingSteps"
                >
                  <div class="stepsTitle small">Try these steps:</div>
                  <ol class="stepsList">
                    <li
                      v-for="step in trouble.steps"
                      :key="step"
                      class="stepItem small"
                    >
                      {{ step }}
                    </li>
                  </ol>
                </div>
              </transition>
            </div>
          </div>
        </section>

        <!-- Maintenance Plans Section -->
        <section class="supportSection">
          <div class="med sectionTitle">Maintenance Plans</div>
          <div class="maintenanceInfo">
            <p>Keep your website running smoothly with our maintenance plans:</p>

            <div class="maintenanceTiers">
              <div class="maintenanceTier">
                <div class="tierName">Standard - $20/month</div>
                <div class="tierFeatures small">
                  <div class="tierFeature">
                    <div class="checkboxCustom checkboxSelected"></div>
                    Security updates and monitoring
                  </div>
                  <div class="tierFeature">
                    <div class="checkboxCustom checkboxSelected"></div>
                    Basic technical support
                  </div>
                  <div class="tierFeature">
                    <div class="checkboxCustom checkboxSelected"></div>
                    Monthly performance reports
                  </div>
                </div>
              </div>

              <div class="maintenanceTier">
                <div class="tierName">Full Support - $50/month</div>
                <div class="tierFeatures small">
                  <div class="tierFeature">
                    <div class="checkboxCustom checkboxSelected"></div>
                    Everything in Standard plan
                  </div>
                  <div class="tierFeature">
                    <div class="checkboxCustom checkboxSelected"></div>
                    Priority support (4-hour response)
                  </div>
                  <div class="tierFeature">
                    <div class="checkboxCustom checkboxSelected"></div>
                    Content updates and backups
                  </div>
                </div>
              </div>

              <div class="maintenanceTier">
                <div class="tierName">Enterprise - $200/month</div>
                <div class="tierFeatures small">
                  <div class="tierFeature">
                    <div class="checkboxCustom checkboxSelected"></div>
                    Everything in Full Support plan
                  </div>
                  <div class="tierFeature">
                    <div class="checkboxCustom checkboxSelected"></div>
                    Dedicated support team
                  </div>
                  <div class="tierFeature">
                    <div class="checkboxCustom checkboxSelected"></div>
                    Advanced monitoring and optimization
                  </div>
                </div>
              </div>
            </div>

            <div class="maintenanceCta">
              <RouterLink to="/pricing">
                <div class="button">VIEW PRICING DETAILS</div>
              </RouterLink>
            </div>
          </div>
        </section>

        <!-- Emergency Support Section -->
        <section class="supportSection emergencySection">
          <div class="emergencyContent">
            <div class="emergencyIcon">🚨</div>
            <div class="emergencyInfo">
              <div class="med emergencyTitle">Website Emergency?</div>
              <div class="small emergencyText">If your website is completely down, has been hacked, or you're experiencing a critical issue affecting your business, contact our emergency support immediately.</div>
              <div class="emergencyContact">
                <a href="mailto:emergency@apotomelabs.com" class="button cta">EMERGENCY SUPPORT</a>
                <div class="emergencyPhone small gray">Or call: +1 720-937-9127</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <FooterPanel :nocta="true" />
  </div>
</template>

<style scoped lang="scss">
.panel {
  padding-top: 100px;
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 3rem;
  height: auto;
  margin: 0 auto;
}

.supportHeader {
  .title {
    margin-bottom: 1rem;
  }

  .subtitle {
    line-height: 1.6;
    max-width: 800px;
  }
}

.supportContent {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.supportSection {
  .sectionTitle {
    margin-bottom: 2rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid black;
    text-transform: uppercase;
  }
}

// Contact Methods
.contactMethods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.contactMethod {
  display: flex;
  gap: 1rem;
  padding: 1.5rem;
  border: 1px solid #e0e0e0;
  background-color: #f9f9f9;
}

.methodIcon {
  font-size: 2rem;
  flex-shrink: 0;
}

.methodContent {
  flex: 1;

  .methodTitle {
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .methodDescription {
    margin-bottom: 0.5rem;
    line-height: 1.4;
  }

  .methodContact {
    font-weight: 600;
    margin-bottom: 0.25rem;
  }

  .methodResponse {
    font-style: italic;
  }
}

// Support Categories
.supportCategories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 2rem;
}

.supportCategory {
  border: 1px solid #e0e0e0;
  background-color: #f9f9f9;
  overflow: hidden;
}

.categoryHeader {
  display: flex;
  gap: 1rem;
  padding: 1.5rem;
  border-bottom: 1px solid #e0e0e0;
  background-color: white;
}

.categoryIcon {
  font-size: 2rem;
  flex-shrink: 0;
}

.categoryInfo {
  flex: 1;

  .categoryTitle {
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .categoryDescription {
    line-height: 1.4;
    color: #666;
  }
}

.categoryItems {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.categoryItem {
  display: flex;
  align-items: center;
  gap: 1rem;
  line-height: 1.4;
}

.checkboxCustom {
  width: 1rem;
  height: 1rem;
  border: 1px solid black;
  flex-shrink: 0;
}

.checkboxSelected {
  background-color: black;
}

// Troubleshooting
.troubleshootingContainer {
  display: flex;
  flex-direction: column;
}

.troubleshootingItem {
  border-bottom: 1px solid #e0e0e0;

  &:last-child {
    border-bottom: none;
  }
}

.troubleshootingHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #666;
  }
}

.troubleshootingTitle {
  font-weight: 500;
  line-height: 1.4;
}

.troubleshootingToggle {
  flex-shrink: 0;
}

.plus-icon {
  position: relative;
  width: 25px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.line {
  background-color: black;
  position: absolute;
  transition: transform 0.3s ease;
}

.horizontal {
  width: 20px;
  height: 1px;
}

.vertical {
  width: 1px;
  height: 20px;
  transform: rotate(0deg);
}

.minus-icon .vertical {
  transform: rotate(90deg);
}

.troubleshootingSteps {
  padding-bottom: 1.5rem;
  margin-top: -0.5rem;
}

.stepsTitle {
  font-weight: 600;
  margin-bottom: 1rem;
  color: #000;
}

.stepsList {
  margin: 0;
  padding-left: 1.5rem;

  .stepItem {
    margin-bottom: 0.5rem;
    line-height: 1.5;
    color: #555;
  }
}

// Slide transition
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  opacity: 0;
  padding-bottom: 0;
  margin-top: 0;
}

.slide-enter-to,
.slide-leave-from {
  max-height: 300px;
  opacity: 1;
}

// Maintenance Plans
.maintenanceInfo {
  p {
    margin-bottom: 2rem;
    line-height: 1.6;
  }
}

.maintenanceTiers {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.maintenanceTier {
  border: 1px solid #e0e0e0;
  background-color: #f9f9f9;
  padding: 1.5rem;
}

.tierName {
  font-weight: 600;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e0e0e0;
}

.tierFeatures {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.tierFeature {
  display: flex;
  align-items: center;
  gap: 1rem;
  line-height: 1.4;
}

.maintenanceCta {
  text-align: center;
}

// Emergency Section
.emergencySection {
  background-color: #fff8f0;
  border: 2px solid #ff9500;
  padding: 2rem;
  border-radius: 0;
}

.emergencyContent {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
}

.emergencyIcon {
  font-size: 3rem;
  flex-shrink: 0;
}

.emergencyInfo {
  flex: 1;

  .emergencyTitle {
    margin-bottom: 0.5rem;
    color: #cc3300;
  }

  .emergencyText {
    margin-bottom: 1.5rem;
    line-height: 1.6;
    color: #444;
  }
}

.emergencyContact {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .emergencyPhone {
    font-style: italic;
  }
}

// Mobile responsiveness
@media (max-width: 768px) {
  .panel {
    max-width: none;
    margin: 0;
    gap: 2rem;
  }

  .supportHeader .title {
    font-size: 2.5rem !important;
    line-height: 2.5rem !important;
  }

  .supportContent {
    gap: 3rem;
  }

  .contactMethods {
    grid-template-columns: 1fr;
  }

  .supportCategories {
    grid-template-columns: 1fr;
  }

  .maintenanceTiers {
    grid-template-columns: 1fr;
  }

  .emergencyContent {
    flex-direction: column;
    gap: 1rem;
  }

  .emergencyIcon {
    font-size: 2rem;
    text-align: center;
  }

  .troubleshootingHeader {
    padding: 1rem 0;
  }

  .troubleshootingTitle {
    font-size: 0.9rem;
    margin-right: 0.5rem;
  }
}
</style>
