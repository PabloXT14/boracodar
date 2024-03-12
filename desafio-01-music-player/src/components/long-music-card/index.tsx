import { twMerge } from 'tailwind-merge'
import bgMusic from '../../assets/images/bg-music.png'
import { IoPlay, IoPlayBack, IoPlayForward } from 'react-icons/io5'

type LongMusicCardProps = {
  className?: string
}

export const LongMusicCard = ({ className }: LongMusicCardProps) => {
  return (
    <div
      className={twMerge(
        'flex w-full flex-col gap-7 overflow-hidden rounded-lg bg-violet-950 p-7 md:h-full md:px-9 md:py-12',
        className,
      )}
    >
      {/* Card Image */}
      <div className="h-[190px] w-full overflow-hidden rounded-md">
        <img src={bgMusic} alt="" className="h-full w-full object-cover" />
      </div>

      {/* Card Info */}
      <div>
        <h2 className="text-2xl font-bold text-zinc-200">Acorda Devinho</h2>
        <span className="text-xl font-normal text-zinc-200/65">
          Banda Rocketseat
        </span>
      </div>

      {/* Card Actions */}
      <div className="mx-auto flex items-center gap-5 sm:gap-12 md:mx-0 md:justify-between">
        <button className="text-zinc-200">
          <IoPlayBack size={28} />
        </button>

        <button className="text-zinc-200">
          <IoPlay size={28} />
        </button>

        <button className="text-zinc-200">
          <IoPlayForward size={28} />
        </button>
      </div>

      {/* Card Timeline */}
      <div className="flex flex-col gap-2.5">
        <progress
          id="file"
          value="90"
          max="100"
          className="h-1.5 w-full overflow-hidden rounded-full [&::-webkit-progress-bar]:bg-zinc-300/30 [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:bg-zinc-300"
        />

        <div className="flex items-center justify-between">
          <span className="text-sm font-normal text-zinc-400">03:20</span>
          <span className="text-sm font-normal text-zinc-400">00:12</span>
        </div>
      </div>
    </div>
  )
}
