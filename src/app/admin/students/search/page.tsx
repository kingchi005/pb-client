import { Button } from "@/components";

export default function page() {
  return (
    <section className="mt-4">
      <div className="relative flex h-[3rem] w-full">
        <input
          type="search"
          name=""
          id=""
          placeholder="search"
          className="w-10/12 flex-1  border px-3  outline-none"
        />
        <button className="h-full w-2/12 bg-primary text-white">search</button>
      </div>
    </section>
  );
}
