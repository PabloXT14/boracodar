import { twMerge } from 'tailwind-merge'
import bgMusic from '../../assets/images/bg-music.png'
import { IoPlay, IoPlayBack, IoPlayForward } from 'react-icons/io5'

type ShortMusicCardProps = {
  className?: string
}

export const ShortMusicCard = ({ className }: ShortMusicCardProps) => {
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
    </div>
  )
}
