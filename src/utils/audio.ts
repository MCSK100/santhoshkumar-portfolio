import { Howl } from 'howler'

let loadingSound: Howl | null = null
let completeSound: Howl | null = null

const getLoadingSound = () => {
  if (!loadingSound) {
    loadingSound = new Howl({
      src: ['/audio/loading.mp3'],
      volume: 0.3,
      preload: true
    })
  }
  return loadingSound
}

const getCompleteSound = () => {
  if (!completeSound) {
    completeSound = new Howl({
      src: ['/audio/complete.mp3'],
      volume: 0.4,
      preload: true
    })
  }
  return completeSound
}

// Audio removed (no sound effects)
export const playLoadingSound = () => {}

export const playCompleteSound = () => {}

