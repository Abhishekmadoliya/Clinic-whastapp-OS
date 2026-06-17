import * as React from "react";
import { cn } from "@/lib/utils";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(
          "text-[10px] font-bold text-slate-700 uppercase tracking-wider select-none",
          className
        )}
        {...props}
      />
    );
  }
);
Label.displayName = "Label";

export { Label };
