import React, { ReactNode } from "react";
type OverlayProp = {
  children: ReactNode;
};
export default function Overlay({ children }: OverlayProp) {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-[2000] bg-white/10 backdrop-invert backdrop-opacity-30">
      {children}
    </div>
  );
}
