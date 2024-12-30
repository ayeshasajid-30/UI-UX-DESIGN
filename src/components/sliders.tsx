import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"

type SliderProps = React.ComponentProps<typeof Slider>

export function SliderDemo({ className, ...props }: SliderProps) {
  return (
   <div className="px-5">
    <h1 className="font-bold mb-4">price</h1>
     <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      className={cn("w-[90%]", className)}
      {...props}
    />
    <div className="flex justify-around items-start">
        <h1 className="font-bold">$50</h1>
        <h1 className="font-bold">$1200</h1>
    </div>
   </div>
  )
}