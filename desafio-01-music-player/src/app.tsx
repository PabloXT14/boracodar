import { LongMusicCard } from './components/long-music-card'
import { MiddleMusicCard } from './components/middle-music-card'
import { ShortMusicCard } from './components/short-music-card'

export function App() {
  return (
    <div className="flex h-full min-h-screen w-full items-center justify-center">
      <div className="grid w-full gap-8 px-4 py-8 align-middle md:w-fit md:grid-cols-[266px_357px] md:grid-rows-[auto_1fr]">
        <LongMusicCard className="md:row-span-2 md:h-[498px]" />
        <MiddleMusicCard className="h-fit" />
        <ShortMusicCard className="" />
      </div>
    </div>
  )
}
