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
			imgLists: [
				{
					name: 'creative',
					list: [],
					active: true,
					randomNums: []
				},
				{
					name: 'gastro',
					list: [],
					active: true,
					randomNums: []
				},
				{
					name: 'pokemon',
					list: [],
					active: true,
					randomNums: []
				},
				{
					name: 'space',
					list: [],
					active: true,
					randomNums: []
				}
			],
			randomAmount: 1,
			sidepanelToggle: false,
			windowWidth: 1000,
			iconList: 3,
			iconIndex: 34,
			nameList1: 0,
			nameIndex1: 0,
			nameList2: 0,
			nameIndex2: 0,
			mouseMode: true
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
		this.imgLists.map(async imglist => {
			var jsonData = await fetch(
				'./json/svg-' + imglist.name.toLowerCase() + '.json'
			)
			var result = await jsonData.json()
			imglist.list = result
		})

		document.addEventListener('keydown', this.keydown)

		document.addEventListener('click', this.mouseDown)

		this.getNames()
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
		},
		getNames() {
			this.randomIcon()

			this.nameList1 = random(this.wordlists)
			this.nameIndex1 = random(this.wordlists[this.nameList1].list)
			this.nameList2 = random(this.wordlists)
			this.nameIndex2 = random(this.wordlists[this.nameList2].list)
		},
		randomIcon() {
			this.iconList = random(this.imgLists)
			this.iconIndex = random(this.imgLists[this.iconList].list)
		},
		keydown(event) {
			var keys = [
				'Space',
				'ArrowLeft',
				'ArrowRight',
				'Enter',
				'NumpadEnter',
				'n'
			]
			console.log(event.code)
			if (keys.includes(event.code)) {
				event.preventDefault()
				this.getNames()
			}

			if (event.code == 'Tab') {
				this.mouseMode = false
			}
		},
		mouseDown() {
			this.mouseMode = true
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
		},
		icon() {
			return (
				'./svg/' +
				this.imgLists[this.iconList].name +
				'/' +
				this.imgLists[this.iconList].list[this.iconIndex]
			)
		},
		name() {
			var name1 = this.wordlists[this.nameList1].isColor
				? this.wordlists[this.nameList1].list[this.nameIndex1].name
				: this.wordlists[this.nameList1].list[this.nameIndex1]

			var name2 = this.wordlists[this.nameList2].isColor
				? this.wordlists[this.nameList2].list[this.nameIndex2].name
				: this.wordlists[this.nameList2].list[this.nameIndex2]

			return name1 + ' ' + name2
		}
	}
})

function random(list) {
	return Math.floor(Math.random() * list.length)
}
