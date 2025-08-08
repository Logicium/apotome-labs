<script setup lang="ts">
import FooterPanel from "@/panels/FooterPanel.vue";
import SEO from "@/components/SEO.vue";
</script>

<template>
  <div>
    <SEO
      title="Terms of Service | Apotome Labs | Trinidad, CO"
      description="Read our terms of service for web development, app design, and digital marketing services provided by Apotome Labs in Trinidad, Colorado."
      keywords="terms of service, web development terms, digital agency terms, Apotome Labs legal, Trinidad CO"
    />

    <div class="panel">
      <div class="termsHeader">
        <div class="big title">Terms of Service</div>
        <div class="small subtitle">Last updated: January 15, 2025</div>
      </div>

      <div class="termsContent">
        <section class="termsSection">
          <div class="med sectionTitle">1. Agreement to Terms</div>
          <div class="sectionContent">
            <p>By accessing and using the services provided by Apotome Labs ("we," "us," or "our"), you ("client" or "you") agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
            <p>These terms apply to all web development, mobile app development, digital marketing, and related services provided by Apotome Labs, located in Trinidad, Colorado.</p>
          </div>
        </section>

        <section class="termsSection">
          <div class="med sectionTitle">2. Services Provided</div>
          <div class="sectionContent">
            <p>Apotome Labs provides digital services including but not limited to:</p>
            <div class="servicesList">
              <div class="serviceItem">
                <div class="checkboxCustom checkboxSelected"></div>
                Web design and development
              </div>
              <div class="serviceItem">
                <div class="checkboxCustom checkboxSelected"></div>
                Mobile application development
              </div>
              <div class="serviceItem">
                <div class="checkboxCustom checkboxSelected"></div>
                E-commerce solutions
              </div>
              <div class="serviceItem">
                <div class="checkboxCustom checkboxSelected"></div>
                Digital marketing and SEO
              </div>
              <div class="serviceItem">
                <div class="checkboxCustom checkboxSelected"></div>
                Website maintenance and support
              </div>
              <div class="serviceItem">
                <div class="checkboxCustom checkboxSelected"></div>
                AI integration and automation
              </div>
            </div>
            <p>Specific deliverables, timelines, and costs will be outlined in individual project agreements or statements of work.</p>
          </div>
        </section>

        <section class="termsSection">
          <div class="med sectionTitle">3. Client Responsibilities</div>
          <div class="sectionContent">
            <p>As our client, you agree to:</p>
            <ul class="responsibilityList">
              <li>Provide accurate, complete, and timely information necessary for project completion</li>
              <li>Respond to requests for feedback and approval within agreed timeframes</li>
              <li>Provide all required content, including text, images, and other media</li>
              <li>Ensure you have legal rights to all content provided to us</li>
              <li>Make payments according to the agreed schedule</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </div>
        </section>

        <section class="termsSection">
          <div class="med sectionTitle">4. Payment Terms</div>
          <div class="sectionContent">
            <p><strong>Project-Based Services:</strong> Payment schedules will be outlined in individual project agreements. Typically, we require a 50% deposit before work begins and the remainder upon project completion.</p>
            <p><strong>Maintenance Services:</strong> Monthly maintenance plans are billed in advance and are non-refundable once services have been rendered.</p>
            <p><strong>Late Payments:</strong> Invoices are due within 30 days. Late payments may incur a 1.5% monthly service charge and may result in suspension of services.</p>
            <p><strong>Refunds:</strong> Refunds are considered on a case-by-case basis and may be subject to work completed and expenses incurred.</p>
          </div>
        </section>

        <section class="termsSection">
          <div class="med sectionTitle">5. Intellectual Property</div>
          <div class="sectionContent">
            <p><strong>Client Content:</strong> You retain all rights to content you provide to us, including text, images, logos, and other materials.</p>
            <p><strong>Custom Development:</strong> Upon full payment, you will own the custom code and design elements specifically created for your project.</p>
            <p><strong>Third-Party Components:</strong> Some projects may include third-party plugins, frameworks, or components that remain under their respective licenses.</p>
            <p><strong>Our Portfolio:</strong> We reserve the right to showcase completed work in our portfolio and marketing materials unless specifically requested otherwise in writing.</p>
          </div>
        </section>

        <section class="termsSection">
          <div class="med sectionTitle">6. Warranties and Disclaimers</div>
          <div class="sectionContent">
            <p>We warrant that our services will be performed in a professional manner consistent with industry standards. However:</p>
            <ul class="disclaimerList">
              <li>We make no guarantees regarding search engine rankings or website traffic</li>
              <li>We are not responsible for third-party service outages or failures</li>
              <li>Browser compatibility is guaranteed for current and previous major versions of Chrome, Firefox, Safari, and Edge</li>
              <li>Mobile responsiveness is tested on common devices but cannot be guaranteed on all devices</li>
            </ul>
          </div>
        </section>

        <section class="termsSection">
          <div class="med sectionTitle">7. Limitation of Liability</div>
          <div class="sectionContent">
            <p>To the maximum extent permitted by law, Apotome Labs shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services.</p>
            <p>Our total liability for any claim related to our services shall not exceed the total amount paid by the client for the specific services giving rise to the claim.</p>
          </div>
        </section>

        <section class="termsSection">
          <div class="med sectionTitle">8. Termination</div>
          <div class="sectionContent">
            <p>Either party may terminate the agreement with 30 days written notice. In case of termination:</p>
            <ul class="terminationList">
              <li>Client will pay for all work completed up to the termination date</li>
              <li>We will provide completed work products in a reasonable format</li>
              <li>Confidential information must be returned or destroyed</li>
              <li>Ongoing maintenance agreements may be terminated with 30 days notice</li>
            </ul>
          </div>
        </section>

        <section class="termsSection">
          <div class="med sectionTitle">9. Governing Law</div>
          <div class="sectionContent">
            <p>These terms are governed by the laws of the State of Colorado. Any disputes will be resolved in the courts of Las Animas County, Colorado.</p>
          </div>
        </section>

        <section class="termsSection">
          <div class="med sectionTitle">10. Contact Information</div>
          <div class="sectionContent">
            <p>For questions about these terms, please contact us:</p>
            <div class="contactInfo">
              <p><strong>Apotome Labs</strong><br>
                612 Park Street<br>
                Trinidad, CO 81082<br>
                Email: kisora@apotomelabs.com<br>
                Phone: +1 720-937-9127</p>
            </div>
          </div>
        </section>
      </div>
    </div>

    <FooterPanel />
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

.termsHeader {
  .title {
    margin-bottom: 1rem;
  }

  .subtitle {
    color: #666;
  }
}

.termsContent {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.termsSection {
  .sectionTitle {
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #e0e0e0;
  }

  .sectionContent {
    line-height: 1.6;
    color: #444;

    p {
      margin-bottom: 1rem;

      &:last-child {
        margin-bottom: 0;
      }
    }

    strong {
      font-weight: 600;
      color: #000;
    }
  }
}

.servicesList {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 1.5rem 0;
}

.serviceItem {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.9rem;
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

.responsibilityList,
.disclaimerList,
.terminationList {
  margin: 1rem 0;
  padding-left: 2rem;

  li {
    margin-bottom: 0.5rem;
    line-height: 1.5;
  }
}

.contactInfo {
  background-color: #f9f9f9;
  padding: 1.5rem;
  border: 1px solid #e0e0e0;
  margin-top: 1rem;

  p {
    margin: 0;
    line-height: 1.6;
  }
}

// Mobile responsiveness
@media (max-width: 768px) {
  .panel {
    max-width: none;
    margin: 0;
    gap: 2rem;
  }

  .termsHeader .title {
    font-size: 2.5rem !important;
    line-height: 2.5rem !important;
  }

  .termsContent {
    gap: 2rem;
  }

  .responsibilityList,
  .disclaimerList,
  .terminationList {
    padding-left: 1.5rem;
  }
}
</style>
