"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type ComboboxPropsType = {
  listData: { value: string; label: string }[];
  placeholderText: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

export default function Combobox({
  listData,
  placeholderText,
  value,
  setValue,
}: ComboboxPropsType) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className="flex items-center">
        <button
          role="combobox"
          aria-expanded={open}
          className="h-[2.5rem] min-w-[6rem] justify-between rounded-md px-2 outline-none ring-1 ring-primary "
        >
          {value
            ? listData.find((data) => data.value === value)?.label
            : placeholderText}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={`search ${placeholderText}...`} />
          <CommandEmpty>{`No ${placeholderText} found.`}</CommandEmpty>
          <CommandGroup>
            {listData.map((framework) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === framework.value ? "opacity-100" : "opacity-0",
                  )}
                />
                {framework.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
