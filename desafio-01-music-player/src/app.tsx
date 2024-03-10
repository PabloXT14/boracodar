import { LongMusicCard } from './components/long-music-card'
import { MiddleMusicCard } from './components/middle-music-card'

export function App() {
  return (
    <div className="flex h-full min-h-screen w-full items-center justify-center">
      <div className="grid w-full gap-8 px-4 py-8 align-middle md:w-fit md:grid-cols-[266px_357px] md:grid-rows-2">
        <LongMusicCard className="md:row-span-2 md:h-[498px]" />
        <MiddleMusicCard className="" />
        <div className="bg-blue-500">player 3</div>
      </div>
    </div>
  )
}
