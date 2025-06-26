import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import { useThemeStore } from "@/store/store";
import { useEffect, useState } from "react";

type SliderProps = React.ComponentProps<typeof Slider>;

export function RoundnessSlider({ className, ...props }: SliderProps) {
  const { roundness, setRoundness } = useThemeStore();
  const [localRoundness, setLocalRoundness] = useState(roundness);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRoundness(localRoundness);
    }, 150);

    return () => clearTimeout(timeout);
  }, [localRoundness]);

  return (
    <Slider
      value={[localRoundness]}
      max={64}
      step={2}
      onValueChange={(val) => setLocalRoundness(val[0])}
      className={cn("w-[90%] cursor-grab", className)}
      {...props}
    />
  );
}
