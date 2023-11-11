<template>
  <base-container mode="layoutblock">
    <base-header content="About"></base-header>
    <p id="description">
      Hello, everyone. My name is Panagiotis Macharas and I have graduated from the department of Applied Informatics, at University of Macedonia. With the engagement in the computer science I have
      understood that i am passionate about software engineering and especially with the quality of code. Some examples of the technologies that i am skilled are JavaScript, Node.js, Vue.js, HTML5,
      mongoDB, php, python. Throughout my studies, my team and i have developed a deep variety of applications on mobile, desktop and web. We are interested in to create innovative solutions that
      solve complex problems, improve efficiency, and enhance user experiences.
    </p>
    <a href="/MACHAIRAS_PANAGIOTIS.pdf" download>
      <base-button mode="big" content="Download CV"></base-button>
    </a>
    <div class="bio">
      <bio-section image="briefcase" title="Experience">
        <bio-content contenth="Software Solution Engineer at pfizer" contentp="Jul 2023 - Dec 2023"></bio-content>
        <bio-content contenth="Website Developer, Freelance" contentp="Jun 2021 - Sep 2021"></bio-content>
      </bio-section>
      <bio-section image="graduation-cap" title="Education">
        <bio-content contenth="Msc Applied Informatics, Software Development and Cloud" contentp="Jul 2023 - Dec 2023"></bio-content>
        <bio-content contenth="Bsc Applied Informatics, Computer Science and Technology, University of Macedonia" contentp="Sep 2019 - Jun 2023"></bio-content>
      </bio-section>
    </div>
  </base-container>
</template>

<script>
import BioContent from "../BioComponents/BioContent.vue";
import BioSection from "../BioComponents/BioSection.vue";
export default {
  components: {
    BioContent,
    BioSection,
  },
};
</script>

<style scoped>
#description {
  display: flex;
  text-align: justify;
  padding-left: 50px;
  padding-right: 50px;
}
a {
  text-decoration: inherit;
  color: inherit;
}
.bio {
  display: flex;
}
@media (max-width: 700px) {
  .bio {
    display: block;
    padding-bottom: 10px;
  }
}
</style>
