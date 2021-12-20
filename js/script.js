/**
 * I tried to import, but without any success.
 * 
 * import { songsList } from './data.js'
 * import { slct, secondsToMinutes } from './utils.js' 
 */


/*
  An array of objects
*/
const songsList = [
	{ name: `Stunner`, length: 290, genre: `Alternative`, artist: `Milky Chance`, album: `Sadnecessary`, year: 2013, file: `https://cdn.pixabay.com/audio/2021/11/13/audio_cb4f1212a9.mp3`, coverImg: "Milky_Chance_Sadnecessary.jpeg", coverAlt: "sadnecessary album cover" },
	{ name: `Flashed Junk Mind`, length: 264, genre: `Alternative`, artist: `Milky Chance`, album: `Sadnecessary`, year: 2013, file: `https://cdn.pixabay.com/audio/2021/11/24/audio_82498b22da.mp3`, coverImg: "Milky_Chance_Sadnecessary.jpeg", coverAlt: "sadnecessary album cover" },
	{ name: `Becoming`, length: 146, genre: `Alternative`, artist: `Milky Chance`, album: `Sadnecessary`, year: 2013, file: `https://cdn.pixabay.com/audio/2021/11/25/audio_91b32e02f9.mp3`, coverImg: "Milky_Chance_Sadnecessary.jpeg", coverAlt: "sadnecessary album cover" },
	{ name: `Running`, length: 270, genre: `Alternative`, artist: `Milky Chance`, album: `Sadnecessary`, year: 2013, file: `https://cdn.pixabay.com/audio/2021/11/23/audio_035a943c87.mp3`, coverImg: "Milky_Chance_Sadnecessary.jpeg", coverAlt: "sadnecessary album cover" },
	{ name: `Feathery (Slow version)`, length: 198, genre: `Alternative`, artist: `Milky Chance`, album: `Sadnecessary`, year: 2013, file: `https://cdn.pixabay.com/audio/2021/11/01/audio_00fa5593f3.mp3`, coverImg: "Milky_Chance_Sadnecessary.jpeg", coverAlt: "sadnecessary album cover" },
	{ name: `Indigo`, length: 88, genre: `Alternative`, artist: `Milky Chance`, album: `Sadnecessary`, year: 2013, file: `https://cdn.pixabay.com/audio/2021/08/08/audio_dc39bde808.mp3`, coverImg: "Milky_Chance_Sadnecessary.jpeg", coverAlt: "sadnecessary album cover" },
	{ name: `Sadnecessary`, length: 300, genre: `Alternative`, artist: `Milky Chance`, album: `Sadnecessary`, year: 2013, file: `https://cdn.pixabay.com/audio/2021/07/27/audio_202082aa0b.mp3`, coverImg: "Milky_Chance_Sadnecessary.jpeg", coverAlt: "sadnecessary album cover" },
	{ name: `Down by the River`, length: 243, genre: `Alternative`, artist: `Milky Chance`, album: `Sadnecessary`, year: 2013, file: `https://cdn.pixabay.com/audio/2021/07/22/audio_9584aae297.mp3`, coverImg: "Milky_Chance_Sadnecessary.jpeg", coverAlt: "sadnecessary album cover" },
	{ name: `Sweet Sun`, length: 276, genre: `Alternative`, artist: `Milky Chance`, album: `Sadnecessary`, year: 2013, file: `https://cdn.pixabay.com/audio/2020/10/11/audio_746c5a0fb3.mp3`, coverImg: "Milky_Chance_Sadnecessary.jpeg", coverAlt: "sadnecessary album cover" },
	{ name: `Fairytale`, length: 258, genre: `Alternative`, artist: `Milky Chance`, album: `Sadnecessary`, year: 2013, file: `https://cdn.pixabay.com/audio/2021/12/11/audio_0ad0f9e437.mp3`, coverImg: "Milky_Chance_Sadnecessary.jpeg", coverAlt: "sadnecessary album cover" }
]

/**
 * Replacement to document.querySelector()
 */
const slct = (selector) => document.querySelector(selector)

/**
 * Formatin song length to the format MM:SS
 */
const secondsToMinutes = (sec) => {
	return `${Math.floor(sec / 60)}:${Math.round(sec % 60).toString().padStart(2, `0`)}`
}

/**
 *  Doc elements
 */
const album = slct(`#album`)
const artist = slct(`#artist`)
const genreYear = slct(`#genreYear`)
const cover = slct(`#cover`)
const songs = slct(`#songs`)

/**
 * Control Elements
 */

const audioElemt = new Audio()
let songIndex = 0


const playPause = slct(`#btnPlayPause`)
/*
const thePlaylist = slct(`#playlist`)
const playPrev = slct(`#playPrev`)
const playNext = slct(`#playNext`)
const trackVolume = slct(`#trackVolume`)
const trackTime = slct(`#trackTime`)
const trackDuration = slct(`#trackDuration`)
const trackProgress = slct(`#trackProgress`)
*/



/**
 * Reset values to avoid accumulating data to be exhibit
 */
const resetValues = function () {

	album.textContent = ""
	artist.textContent = ""
	genreYear.textContent = ""
	cover.src = ""
	cover.alt = ""
	songs.innerHTML = ""
}

/**
 * Appending to list
 */
const appendToList = function (song) {
	album.textContent = "Album: " + song.album
	artist.textContent = "Artist: " + song.artist
	genreYear.textContent = song.genre + " - " + song.year
	cover.src = "./img/" + song.coverImg
	cover.alt = song.coverAlt
	songs.innerHTML += `<li>${song.name} - ${secondsToMinutes(song.length)}</li>`
}

/**
 * Filtering songs by text
 */
const filterByText = function () {
	let text = slct(`#search`).value
	const albumFiltered = songsList.filter(song => song.name.toLowerCase().includes(text.toLowerCase()))

	slct(`#search`).value = "" //resert search field after filtering
	albumFiltered.forEach(appendToList)
}

/**
 * Using submit button to filter
 */
slct(`#filterSongs`).addEventListener(`submit`, function (event) {
	event.preventDefault()
	resetValues()
	filterByText()
})


/**
 * Controls list
 * 
 */
const togglePlayPause = function (play = false) {
	if (audioElemt.paused || play) {
		audioElemt.play()
		playPause.textContent = `Pause`
	} else {
		audioElemt.pause()
		playPause.textContent = `Play`
	}
}





songsList.forEach(appendToList)
audioElemt.src = songsList[0].file



playPause.addEventListener(`click`, (event) => {
    togglePlayPause()
  })