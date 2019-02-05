var vm = new Vue({
	el: '#app',
	data() {
		return {
			wordlists: [
				{
					name: 'Animals',
					list: [],
					active: true,
					randomNums: []
				},
				{
					name: 'Boys',
					list: [],
					active: true,
					randomNums: []
				},
				{
					name: 'Colors',
					list: [],
					active: true,
					randomNums: [],
					isColor: true
				},
				{
					name: 'Design',
					list: [],
					active: true,
					randomNums: []
				},
				{
					name: 'Emotions',
					list: [],
					active: true,
					randomNums: []
				},
				{
					name: 'Galaxies',
					list: [],
					active: true,
					randomNums: []
				},
				{
					name: 'Girls',
					list: [],
					active: true,
					randomNums: []
				},
				{
					name: 'Greekgods',
					list: [],
					active: true,
					randomNums: []
				},
				{
					name: 'Lakes',
					list: [],
					active: true,
					randomNums: []
				},
				{
					name: 'Marketing',
					list: [],
					active: true,
					randomNums: []
				},
				{
					name: 'Mountains',
					list: [],
					active: true,
					randomNums: []
				},
				{
					name: 'Nationalparks',
					list: [],
					active: true,
					randomNums: []
				},
				{
					name: 'Norsegods',
					list: [],
					active: true,
					randomNums: []
				},
				{
					name: 'Periodictable',
					list: [],
					active: true,
					randomNums: []
				},
				{
					name: 'Programming',
					list: [],
					active: true,
					randomNums: []
				},
				{
					name: 'Scientists',
					list: [],
					active: true,
					randomNums: []
				},
				{
					name: 'Stars',
					list: [],
					active: true,
					randomNums: []
				},
				{
					name: 'Trees',
					list: [],
					active: true,
					randomNums: []
				}
			],
			randomAmount: 1,
			sidepanelToggle: true,
			windowWidth: 1000
		}
	},
	mounted() {
		this.randomAll()

		this.windowWidth = innerWidth
		window.addEventListener('resize', event => {
			this.windowWidth = innerWidth
		})
		this.wordlists.map(async wordlist => {
			var jsonData = await fetch(
				'./json/' + wordlist.name.toLowerCase() + '.json'
			)
			var result = await jsonData.json()
			wordlist.list = result
		})
	},
	methods: {
		randomFromList(list) {
			var list = this.wordlists.filter(
				wordlist => wordlist.name == list.name
			)[0]
			var listLength = list.list.length
			var result = []
			for (var i = 0; i < this.randomAmount; i++) {
				result.push(Math.floor(Math.random() * listLength))
			}
			list.randomNums = result
		},
		randomAll() {
			this.wordlists.forEach(wordlist => this.randomFromList(wordlist))
		}
	},
	computed: {
		randomWordlists() {
			return this.wordlists
				.filter(wordlist => wordlist.active)
				.map(wordlist => {
					return {
						filtered: wordlist.list.filter((words, wordsIndex) =>
							wordlist.randomNums.includes(wordsIndex)
						),
						...wordlist
					}
				})
		},
		hideSidepanel() {
			return !this.sidepanelToggle && this.windowWidth < 1000
		}
	}
})
