import { twMerge } from 'tailwind-merge'
import bgMusic from '../../assets/images/bg-music.png'
import { IoPlay, IoPlayBack, IoPlayForward } from 'react-icons/io5'

type MiddleMusicCardProps = {
  className?: string
}

export const MiddleMusicCard = ({ className }: MiddleMusicCardProps) => {
  return (
    <div
      className={twMerge(
        'flex flex-col gap-7 rounded-lg bg-violet-950 p-7',
        className,
      )}
    >
      {/* Card Info  */}
      <div className="flex flex-col gap-7 sm:flex-row sm:items-center">
        <div className="h-[190px] w-full overflow-hidden rounded-md sm:size-[84px]">
          <img src={bgMusic} alt="" className="h-full w-full object-cover" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-zinc-200">Acorda Devinho</h2>
          <span className="text-xl font-normal text-zinc-200/65">
            Banda Rocketseat
          </span>
        </div>
      </div>

      {/* Card Actions */}
      <div className="mx-auto flex items-center gap-5 sm:gap-[50px]">
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
