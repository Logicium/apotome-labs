<script setup lang="ts">
import { ref } from 'vue';
import FooterPanel from "@/panels/FooterPanel.vue";
import SEO from "@/components/SEO.vue";

// FAQ data organized by category
const faqCategories = [
  {
    title: "General Questions",
    questions: [
      {
        id: "general-1",
        question: "What services does Apotome Labs offer?",
        answer: "We offer comprehensive digital services including web design and development, mobile app development, e-commerce solutions, SEO and digital marketing, website maintenance, and AI integration. We specialize in helping businesses in Trinidad, Colorado and southern Colorado establish and grow their online presence."
      },
      {
        id: "general-2",
        question: "How long has Apotome Labs been in business?",
        answer: "Apotome Labs was founded in 2024, but our team brings over 7 years of combined experience in web development, digital marketing, and software engineering. We're committed to bringing enterprise-level expertise to rural communities like Trinidad, Colorado."
      },
      {
        id: "general-3",
        question: "Do you work with businesses outside of Trinidad, CO?",
        answer: "While we're based in Trinidad, Colorado, we work with clients throughout southern Colorado and beyond. We offer both virtual and in-person consultations, making our services accessible regardless of your location."
      },
      {
        id: "general-4",
        question: "What makes Apotome Labs different from other web development agencies?",
        answer: "We combine big-city expertise with small-town values. You work directly with our developers and designers, not account managers. We're invested in our local community's success and provide personalized attention that larger agencies can't match."
      }
    ]
  },
  {
    title: "Project Process",
    questions: [
      {
        id: "process-1",
        question: "What is your typical project timeline?",
        answer: "Project timelines vary based on scope and complexity. A basic website typically takes 4-6 weeks, while more complex projects with e-commerce or custom functionality may take 8-12 weeks. We'll provide a detailed timeline during our initial consultation."
      },
      {
        id: "process-2",
        question: "How do you handle project communication?",
        answer: "We maintain regular communication through email, phone calls, and video meetings. You'll receive weekly progress updates and have direct access to our team. We believe in transparency and keeping you informed throughout the entire process."
      },
      {
        id: "process-3",
        question: "What information do you need to start a project?",
        answer: "We'll need your business goals, target audience information, content (text and images), branding materials, and any specific functionality requirements. Don't worry if you don't have everything ready – we'll guide you through the process."
      },
      {
        id: "process-4",
        question: "Can I make changes during the development process?",
        answer: "Yes, we encourage feedback and collaboration. Minor changes are included in our process, while significant scope changes may require timeline and cost adjustments. We'll always discuss any changes with you before implementing them."
      }
    ]
  },
  {
    title: "Pricing & Payment",
    questions: [
      {
        id: "pricing-1",
        question: "How much does a website cost?",
        answer: "Our projects start at $800 for basic websites, $1,600 for growth packages with e-commerce, and $3,400+ for enterprise solutions. The final cost depends on your specific requirements, functionality, and complexity. We provide detailed quotes after our initial consultation."
      },
      {
        id: "pricing-2",
        question: "What payment methods do you accept?",
        answer: "We accept payments via bank transfer, check, and major credit cards. For projects, we typically require a 50% deposit to begin work and the remainder upon completion. Monthly maintenance plans are billed in advance."
      },
      {
        id: "pricing-3",
        question: "Do you offer payment plans?",
        answer: "Yes, for larger projects we can arrange payment plans to spread costs over the project timeline. We'll discuss payment options during our consultation to find a solution that works for your budget."
      },
      {
        id: "pricing-4",
        question: "What's included in your maintenance plans?",
        answer: "Our maintenance plans start at $20/month and include security updates, performance monitoring, content updates, and technical support. Higher-tier plans include priority support, analytics reporting, and ongoing improvements."
      }
    ]
  },
  {
    title: "Technical Questions",
    questions: [
      {
        id: "tech-1",
        question: "What technologies do you use?",
        answer: "We use modern technologies including Vue.js, React, Node.js, Python, and various database systems. We choose the best technology stack for each project based on your specific needs, scalability requirements, and long-term goals."
      },
      {
        id: "tech-2",
        question: "Will my website work on mobile devices?",
        answer: "Absolutely! All websites we create are fully responsive and optimized for mobile devices. We test on various screen sizes and devices to ensure your site looks and functions perfectly everywhere."
      },
      {
        id: "tech-3",
        question: "Do you provide hosting?",
        answer: "We work with reliable hosting providers and can help you set up hosting that's appropriate for your needs. We'll handle the technical setup and ensure your site is properly configured for optimal performance and security."
      },
      {
        id: "tech-4",
        question: "Can you help with SEO?",
        answer: "Yes! SEO is built into our development process. We implement technical SEO best practices, optimize site speed, create SEO-friendly content structure, and can provide ongoing SEO services to help improve your search rankings."
      },
      {
        id: "tech-5",
        question: "What if my current website needs updates?",
        answer: "We can work with existing websites to add new features, improve performance, update design, or migrate to a new platform. We'll assess your current site and recommend the best approach for your goals and budget."
      }
    ]
  },
  {
    title: "Support & Maintenance",
    questions: [
      {
        id: "support-1",
        question: "What kind of support do you provide after launch?",
        answer: "We provide ongoing technical support, security updates, performance monitoring, and content updates based on your maintenance plan. We're always available to help with questions or issues that arise."
      },
      {
        id: "support-2",
        question: "How quickly do you respond to support requests?",
        answer: "We aim to respond to all support requests within 24 hours, with priority support clients receiving responses within 4 hours during business hours. Emergency issues are handled immediately."
      },
      {
        id: "support-3",
        question: "Can I update my website content myself?",
        answer: "Yes! We can build your website with a user-friendly content management system that allows you to easily update text, images, and basic content. We'll provide training and documentation to help you manage your site."
      },
      {
        id: "support-4",
        question: "What happens if something breaks on my website?",
        answer: "If you have a maintenance plan with us, we'll fix any technical issues at no additional cost. We also maintain backups of your site, so we can quickly restore functionality if needed."
      }
    ]
  }
];

// Track which questions are open
const openQuestions = ref(new Set());

// Toggle question open/closed
const toggleQuestion = (questionId) => {
  if (openQuestions.value.has(questionId)) {
    openQuestions.value.delete(questionId);
  } else {
    openQuestions.value.add(questionId);
  }
};

// Check if question is open
const isQuestionOpen = (questionId) => {
  return openQuestions.value.has(questionId);
};
</script>

<template>
  <div>
    <SEO
      title="FAQ | Frequently Asked Questions | Apotome Labs Trinidad CO"
      description="Find answers to common questions about our web development, app design, and digital marketing services. Get the information you need about working with Apotome Labs."
      keywords="FAQ, frequently asked questions, web development questions, digital agency FAQ, Apotome Labs help, Trinidad CO web services"
    />

    <div class="panel">
      <div class="faqHeader">
        <div class="big title">Frequently Asked Questions</div>
        <div class="small subtitle">Find answers to common questions about our services, process, and pricing. Don't see your question? <RouterLink to="/contact" class="contactLink">Contact us</RouterLink> for personalized assistance.</div>
      </div>

      <div class="faqContent">
        <div
          v-for="category in faqCategories"
          :key="category.title"
          class="faqCategory"
        >
          <div class="med categoryTitle">{{ category.title }}</div>

          <div class="questionsContainer">
            <div
              v-for="question in category.questions"
              :key="question.id"
              class="questionItem"
            >
              <div
                class="questionHeader"
                @click="toggleQuestion(question.id)"
              >
                <div class="questionText">{{ question.question }}</div>
                <div class="questionToggle">
                  <div class="plus-icon" :class="{ 'minus-icon': isQuestionOpen(question.id) }">
                    <div class="line horizontal"></div>
                    <div class="line vertical"></div>
                  </div>
                </div>
              </div>

              <transition name="slide">
                <div
                  v-if="isQuestionOpen(question.id)"
                  class="questionAnswer"
                >
                  <div class="answerText small">{{ question.answer }}</div>
                </div>
              </transition>
            </div>
          </div>
        </div>

        <!-- Contact CTA -->
        <div class="faqCta">
          <div class="ctaContent">
            <div class="med ctaTitle">Still have questions?</div>
            <div class="small ctaText">We're here to help! Schedule a free consultation to discuss your project and get personalized answers to your questions.</div>
            <RouterLink to="/contact">
              <div class="button cta">SCHEDULE CONSULTATION</div>
            </RouterLink>
          </div>
        </div>
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

.faqHeader {
  .title {
    margin-bottom: 1rem;
  }

  .subtitle {
    line-height: 1.6;

    .contactLink {
      color: #000;
      text-decoration: underline;

      &:hover {
        color: #666;
      }
    }
  }
}

.faqContent {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.faqCategory {
  .categoryTitle {
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid black;
    text-transform: uppercase;
  }
}

.questionsContainer {
  display: flex;
  flex-direction: column;
}

.questionItem {
  border-bottom: 1px solid #e0e0e0;

  &:last-child {
    border-bottom: none;
  }
}

.questionHeader {
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

.questionText {
  font-weight: 500;
  line-height: 1.4;
  flex: 1;
  margin-right: 1rem;
}

.questionToggle {
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

.questionAnswer {
  padding-bottom: 1.5rem;
  margin-top: -0.5rem;
}

.answerText {
  line-height: 1.6;
  color: #555;
  max-width: 90%;
}

// Slide transition for answers
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
  max-height: 500px;
  opacity: 1;
}

.faqCta {
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  padding: 2rem;
  text-align: center;
  margin-top: 2rem;
}

.ctaContent {
  max-width: 500px;
  margin: 0 auto;

  .ctaTitle {
    margin-bottom: 1rem;
  }

  .ctaText {
    margin-bottom: 1.5rem;
    line-height: 1.6;
    color: #666;
  }
}

// Mobile responsiveness
@media (max-width: 768px) {
  .panel {
    max-width: none;
    margin: 0;
    gap: 2rem;
  }

  .faqHeader .title {
    font-size: 2.5rem !important;
    line-height: 2.5rem !important;
  }

  .faqContent {
    gap: 2rem;
  }

  .questionHeader {
    padding: 1rem 0;
  }

  .questionText {
    font-size: 0.9rem;
    margin-right: 0.5rem;
  }

  .answerText {
    max-width: 100%;
  }

  .faqCta {
    padding: 1.5rem;
    text-align: left;
  }

  .ctaContent {
    text-align: center;
  }
}
</style>
