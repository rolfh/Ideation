var vm = new Vue({
	el: '#app',
	data() {
		return {
			wordlists: [
				{
					name: 'Animals',
					list: animals,
					active: true,
					randomNums: []
				},
				{
					name: 'Boys',
					list: boys,
					active: true,
					randomNums: []
				},
				{
					name: 'Colors',
					list: colors,
					active: true,
					randomNums: [],
					isColor: true
				},
				{
					name: 'Design',
					list: design,
					active: true,
					randomNums: []
				},
				{
					name: 'Emotions',
					list: emotions,
					active: true,
					randomNums: []
				},
				{
					name: 'Galaxies',
					list: galaxies,
					active: true,
					randomNums: []
				},
				{
					name: 'Girls',
					list: girls,
					active: true,
					randomNums: []
				},
				{
					name: 'Greekgods',
					list: greekgods,
					active: true,
					randomNums: []
				},
				{
					name: 'Lakes',
					list: lakes,
					active: true,
					randomNums: []
				},
				{
					name: 'Marketing',
					list: marketing,
					active: true,
					randomNums: []
				},
				{
					name: 'Mountains',
					list: mountains,
					active: true,
					randomNums: []
				},
				{
					name: 'Nationalparks',
					list: nationalparks,
					active: true,
					randomNums: []
				},
				{
					name: 'Norsegods',
					list: norsegods,
					active: true,
					randomNums: []
				},
				{
					name: 'Periodictable',
					list: periodictable,
					active: true,
					randomNums: []
				},
				{
					name: 'Programming',
					list: programming,
					active: true,
					randomNums: []
				},
				{
					name: 'Scientists',
					list: scientists,
					active: true,
					randomNums: []
				},
				{
					name: 'Stars',
					list: stars,
					active: true,
					randomNums: []
				},
				{
					name: 'Trees',
					list: trees,
					active: true,
					randomNums: []
				}
			],
			randomAmount: 10
		}
	},
	mounted() {
		this.randomAll()
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
		}
	}
})
