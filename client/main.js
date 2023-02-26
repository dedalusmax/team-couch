const app = Vue.createApp({
    data() {
      return {
        image: './assets/images/sofa.webp',
        isShown: true,
        teams: [
          { id: 1, name: 'Java', color: 'yellow'},
          { id: 1, name: 'QA', color: 'purple'},
          { id: 1, name: 'Consultants', color: 'green'},
          { id: 1, name: '.NET', color: 'blue'},
        ],         
        leads: [
          { id: 1, name: 'Duje'},
          { id: 2, name: 'Mislav'},
          { id: 3, name: 'Mario'},
          { id: 4, name: 'Josipa'}
        ],
        project: 0,
        inStock: true
      }
    },
    methods: {
      addToProject() {
        this.project += 1
      }
    },
    computed: {
      title() {
        return 'Team Couch (' + this.project + ')'
      }
    }
  })