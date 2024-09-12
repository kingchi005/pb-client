"use client";
import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function Dropdown({ lists, selected, setSelected, label }) {
  return (
    <div className="relative w-full">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <label
            htmlFor={label}
            className="text-r ml-2 text-sm font-semibold capitalize"
          >
            {label}
          </label>
          <Listbox.Button className="border-dark relative flex h-[3rem] w-full cursor-default items-center rounded-lg border bg-primary pl-3 pr-10 text-left sm:text-sm">
            <span className="text-gray block truncate text-lg">
              {selected.name}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex h-full items-center pr-2">
              <ChevronDownIcon
                className="z-[100] h-5 w-5 text-secondary-gray text-white"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-[100] mt-1 max-h-60 w-full overflow-auto rounded-md bg-white  py-1 text-base shadow-lg  sm:text-sm">
              {lists.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active
                        ? " bg-pramry text-primary-foreground"
                        : "text-gray"
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
