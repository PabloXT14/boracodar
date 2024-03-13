import { twMerge } from 'tailwind-merge'
import bgMusic from '../../assets/images/bg-music.png'
import {
  IoPlay,
  IoPlayBack,
  IoPlayForward,
  IoPause,
  IoVolumeMedium,
  IoVolumeMute,
} from 'react-icons/io5'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { formatTime } from '../../utils/formate-time'
import { Music } from '../@types/music'

type LongMusicCardProps = {
  className?: string
  music: Music
}

export const LongMusicCard = ({ className, music }: LongMusicCardProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.4)

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef?.current?.pause()
    } else {
      audioRef?.current?.play()
    }

    setIsPlaying((prevState) => !prevState)
  }

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef?.current?.currentTime || 0)
  }

  const handleLoadedData = () => {
    setDuration(audioRef?.current?.duration || 0)
  }

  const handleSeek = (event: ChangeEvent<HTMLInputElement>) => {
    if (!audioRef?.current) return

    const seekTime = Number(event.target.value)
    audioRef.current.currentTime = seekTime ?? 0
    setCurrentTime(seekTime)
  }

  // const handleVolumeChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   const newVolume = parseFloat(event.target.value)

  //   setVolume(newVolume)
  // }

  if (audioRef.current) {
    audioRef.current.volume = volume
  }

  useEffect(() => {
    if (currentTime === duration) {
      setIsPlaying(false)
    }
  }, [currentTime, duration])

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
        <h2 className="text-2xl font-bold text-zinc-200">{music.name}</h2>
        <span className="text-xl font-normal text-zinc-200/65">
          {music.artist}
        </span>
      </div>

      {/* Card Actions */}
      <div className="mx-auto flex items-center gap-5 sm:gap-12 md:mx-0 md:justify-between">
        <button className="text-zinc-200">
          <IoPlayBack size={28} />
        </button>

        <button className="text-zinc-200" onClick={togglePlayPause}>
          {isPlaying ? <IoPause size={28} /> : <IoPlay size={28} />}
        </button>

        <button className="text-zinc-200">
          <IoPlayForward size={28} />
        </button>
      </div>

      {/* Card Audio */}
      <audio
        ref={audioRef}
        src={music.url}
        onTimeUpdate={handleTimeUpdate}
        onLoadedData={handleLoadedData}
      />

      {/* Card Timeline */}
      <div className="flex flex-col gap-2.5">
        {/* Card Volume (future) */}
        {/* <div className="group flex cursor-pointer items-center gap-2">
          {volume > 0 ? (
            <IoVolumeMedium size={18} className="text-zinc-200" />
          ) : (
            <IoVolumeMute size={18} className="text-zinc-200" />
          )}
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={handleVolumeChange}
            className="hidden h-1.5 w-full cursor-pointer appearance-none overflow-hidden rounded-full border-none bg-zinc-300/30 outline-none transition-all group-hover:inline-block [&::-webkit-slider-thumb]:h-1.5 [&::-webkit-slider-thumb]:w-1.5 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-zinc-300 [&::-webkit-slider-thumb]:shadow-[-403px_0_0_400px] [&::-webkit-slider-thumb]:shadow-zinc-300"
          />
        </div> */}

        <input
          type="range"
          value={currentTime}
          max={duration}
          className="h-1.5 w-full cursor-pointer appearance-none overflow-hidden rounded-full border-none bg-zinc-300/30 outline-none [&::-webkit-slider-thumb]:h-1.5 [&::-webkit-slider-thumb]:w-1.5 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-zinc-300 [&::-webkit-slider-thumb]:shadow-[-403px_0_0_400px] [&::-webkit-slider-thumb]:shadow-zinc-300"
          onChange={handleSeek}
        />
        <div className="flex items-center justify-between">
          <span className="text-sm font-normal text-zinc-400">
            {formatTime(currentTime)}
          </span>
          <span className="text-sm font-normal text-zinc-400">
            {formatTime(duration)}
          </span>
        </div>
      </div>
    </div>
  )
}
