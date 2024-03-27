
export default function Home() {
  return (
    <div className="p-4 bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100  h-screen flex flex-col text-center items-center">
      <div className="max-w-2xl">
        <h1 className="font-bold text-5xl">
          Rapidly build modern websites without ever leaving your HTML.
        </h1>
        <h2 className="mt-4 dark:text-slate-400">A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.</h2>
        <button className="bg-sky-500 dark:bg-sky-400 dark:text-slate-950 text-white px-4 py-2 rounded-md font-semibold mt-4 enabled:hover:bg-sky-700 disabled:opacity-60 disabled:cursor-not-allowed">
          Sign in
        </button>
      </div>
    </div>
  );
}
