import { LongMusicCard } from './components/long-music-card'
import { MiddleMusicCard } from './components/middle-music-card'
import { ShortMusicCard } from './components/short-music-card'
// import music2 from './assets/musics/Never Stop Learning - Do While 2020 Theme.mp3'
import musicUrl01 from './assets/musics/Build The Future - DoWhile 2021 Theme.mp3'
import { Music } from './components/@types/music'

export function App() {
  const music1: Music = {
    url: musicUrl01,
    name: 'Never Stop Learning',
    artist: 'Banda Rocketseat',
  }

  return (
    <div className="flex h-full min-h-screen w-full items-center justify-center">
      <div className="grid w-full gap-8 px-4 py-8 align-middle md:w-fit md:grid-cols-[266px_357px] md:grid-rows-[auto_1fr]">
        <LongMusicCard className="md:row-span-2 md:h-[498px]" music={music1} />
        <MiddleMusicCard className="h-fit" />
        <ShortMusicCard className="" />
      </div>
    </div>
  )
}
