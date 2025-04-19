"use client";
import { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { ChevronDownIcon, ChevronUpDownIcon } from "@heroicons/react/24/solid";

export default function List({
  dropdownList,
  selectedValue,
  setSelectedValue,
  label,
}) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredList = dropdownList.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchKeyDown = (e) => {
    if (e.key === " ") {
      e.preventDefault();
      setSearchQuery((prev) => prev + " ");
    }
  };

  return (
    <div className="relative z-[300] w-full">
      <Listbox value={selectedValue} onChange={setSelectedValue}>
        <span className="text-sm font-semibold text-primary hover:bg-red-500">
          {label}
        </span>
        <Listbox.Button className="relative flex h-[3rem] w-full items-center border px-4">
          <span className="block capitalize truncate ">
            {selectedValue.name === "" ? "Loading..." : selectedValue.name}
          </span>
          <span className="ml-auto">
            <ChevronUpDownIcon
              className="w-6 h-6 text-primary"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute z-[500] option list-option w-full overflow-y-auto rounded-md bg-white px-4 py-1 text-base shadow-lg sm:text-sm">
            <div className="relative mb-2">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearchKeyDown}
                className="w-full border px-3 py-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            {filteredList.slice(0, 50).map((person, personIdx) => (
              <Listbox.Option
                key={personIdx}
                className={({ active }) =>
                  `relative flex cursor-auto select-none items-center py-2 pl-10 pr-4 hover:text-primary ${
                    active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                  }`
                }
                value={person}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`text-gray ml-2 block cursor-pointer truncate hover:bg-primary ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {person.name}
                    </span>
                    {selected ? (
                      <span className="inset-y-0 left-0 flex items-center pl-3 ml-auto text-amber-600">
                        <CheckIcon className="w-5 h-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  );
}
