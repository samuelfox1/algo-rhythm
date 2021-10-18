// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist


const mostSongsInPlaylist = (arr) => {

  const sortedArr = arr.sort()
  let totalMins = 0
  let totalSongs = 0

  for (let i = 0; i < sortedArr.length; i++) {
    let currentSong = sortedArr[i]

    if (totalMins + currentSong <= 60) {
      totalMins += currentSong
      totalSongs++
    } else { return totalSongs }
  }

  return totalSongs
}

module.exports = mostSongsInPlaylist