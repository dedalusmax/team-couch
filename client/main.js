const app = Vue.createApp({
    data() {
      return {
        title: 'Team Couch',
        image: './assets/images/sofa.webp',
        isShown: true,
        teams: ['Java 1', 'Java 2', 'Java 3', 'QA', 'Consultants', '.NET', 'Misc 1', 'Misc 2', 'Misc 3'],
        premium: true,
        cart: []
      }
    }
  })