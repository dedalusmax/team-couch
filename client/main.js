const app = Vue.createApp({
    data() {
      return {
        image: './assets/images/sofa.webp',
        showImage: false,
        teams: [
          { id: 1, name: 'Java', color: '#aaDDcc', capacity: 13},
          { id: 1, name: 'QA', color: '#88FFCC', capacity: 5},
          { id: 1, name: 'Consultants', color: '#88CC88', capacity: 8},
          { id: 1, name: '.NET', color: '#668976', capacity: 12}
        ],         
        leads: [
          { id: 1, name: 'Duje'},
          { id: 2, name: 'Mislav'},
          { id: 3, name: 'Mario'},
          { id: 4, name: 'Josipa'}
        ],
        project: 0,
        selectedProject: 0
      }
    },
    methods: {
      showProject(index) {
        this.selectedProject = index
        console.log(index)
      },
      addToProject() {
        this.project += 1
      }
    },
    computed: {
      title() {
        return 'Team Couch (' + this.project + ')'
      },
      hasCapacity() {
        return this.teams[this.selectedProject].capacity
      }
    }
  })