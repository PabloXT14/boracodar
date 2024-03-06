export function App() {
  return (
    <div className="flex h-full min-h-screen w-full items-center justify-center">
      <div className="grid w-full gap-8 px-4 align-middle md:w-fit md:grid-cols-[266px_357px] md:grid-rows-2">
        <div className="bg-red-500 md:row-span-2 md:h-[498px]">player 1</div>
        <div className="bg-green-500">player 2</div>
        <div className="bg-blue-500">player 3</div>
      </div>
    </div>
  )
}
