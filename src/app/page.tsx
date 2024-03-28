export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center bg-slate-50  p-4 text-center text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      <div className="max-w-2xl">
        <h1 className="text-5xl font-bold">
          Rapidly build modern websites without ever leaving your HTML.
        </h1>
        <h2 className="mt-4 dark:text-slate-400">
          A utility-first CSS framework packed with classes like flex, pt-4,
          text-center and rotate-90 that can be composed to build any design,
          directly in your markup.
        </h2>
        <button className="mt-4 rounded-md bg-sky-500 px-4 py-2 font-semibold text-white enabled:hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-sky-400 dark:text-slate-950">
          Sign in
        </button>
      </div>
    </div>
  )
}
