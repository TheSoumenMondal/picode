import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import { useThemeStore } from "@/store/store";
import { useEffect, useState } from "react";

type SliderProps = React.ComponentProps<typeof Slider>;

export function PaddingSlider({ className, ...props }: SliderProps) {
  const { padding, setPadding } = useThemeStore();
  const [localPadding, setLocalPadding] = useState(padding);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPadding(localPadding);
    }, 150);

    return () => clearTimeout(timeout);
  }, [localPadding]);

  return (
    <Slider
      value={[localPadding]}
      max={200}
      step={2}
      onValueChange={(val) => setLocalPadding(val[0])}
      className={cn("w-[90%] cursor-grab", className)}
      {...props}
    />
  );
}
