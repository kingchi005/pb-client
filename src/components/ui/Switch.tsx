"use client";
import { useState } from "react";
import { Switch } from "@headlessui/react";

type SwitchProp = {
    enabled: boolean
    setEnabled: (value: boolean)=>void
}

export default function Example({enabled, setEnabled}: SwitchProp) {
//   const [enabled, setEnabled] = useState(false);

  return (
    <div className="">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? "bg-primary" : "bg-secondary-gray"}
          relative inline-flex h-[1.5rem] w-[3rem] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-6" : "translate-x-1"}
            pointer-events-none inline-block h-[1rem] w-[1rem] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
}
