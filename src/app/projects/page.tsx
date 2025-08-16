import { Globe, LucideApple } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

interface Project {
  name: string;
  description: string;
  imageUrl: string;
  url: string;
  technologies: ReactNode;
  urlAppleStore?: string;
  urlGitHub?: string;
}

const projects: Project[] = [
  {
    name: "Pomodoro",
    description: "A productivity timer for the Pomodoro Technique.",
    url: "https://pomodoro-web-reactjs.vercel.app/",
    imageUrl: "/projects/pomodoro.png",

    technologies: (
      <div className="flex flex-wrap items-center gap-x-2">
        <span className="rounded-full bg-blue-600 px-3 py-1 text-sm font-medium text-white shadow-sm dark:bg-blue-500 dark:text-white">
          TypeScript
        </span>

        <span className="rounded-full bg-cyan-500 px-3 py-1 text-sm font-medium text-white shadow-sm dark:bg-cyan-400 dark:text-cyan-950">
          NextJS
        </span>

        <span className="rounded-full bg-gray-800 px-3 py-1 text-sm font-medium text-white shadow-sm dark:bg-gray-700 dark:text-gray-100">
          TailwindCSS
        </span>
      </div>
    ),
  },
];

function ProjectCard({
  name,
  description,
  imageUrl,
  url,
  technologies,
  urlAppleStore,
}: Project) {
  return (
    <div className="flex-col divide-y divide-zinc-400 overflow-hidden rounded-lg shadow-lg ring-1 ring-zinc-400 dark:divide-zinc-500 dark:ring-zinc-500">
      <div className="flex items-center justify-between gap-4 p-6 max-sm:flex-col max-sm:items-start max-sm:gap-3">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          {name}
        </h2>
        {technologies}
      </div>
      <div>
        <p className="p-6 leading-relaxed text-zinc-600 dark:text-zinc-300">
          {description}
        </p>
      </div>
      <div className="bg-zinc-50 p-4 dark:bg-zinc-800/50">
        <Image
          src={imageUrl}
          width={620}
          height={324}
          alt="Logo for project"
          className="mx-auto w-auto rounded-md object-contain"
        />
      </div>
      <div className="flex w-full justify-between divide-x divide-zinc-400 dark:divide-zinc-500">
        <a
          href={url}
          target="_blank"
          className="flex grow items-center justify-center gap-2 py-4 transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-900/20 dark:hover:text-blue-300"
        >
          <Globe strokeWidth={1.4} className="size-5" /> Visit website
        </a>
        {urlAppleStore && (
          <a
            href={urlAppleStore}
            target="_blank"
            className="flex grow items-center justify-center gap-2 py-4 transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-900/20 dark:hover:text-blue-300"
          >
            <LucideApple strokeWidth={1.4} className="size-5" /> Apple Store
          </a>
        )}
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <h1 className="mb-16 mt-4 text-center text-5xl font-bold text-zinc-900 max-sm:text-4xl dark:text-zinc-100">
        Projects
      </h1>
      <div className="space-y-20">
        {projects.map((project) => (
          <ProjectCard key={project.url} {...project} />
        ))}
      </div>
    </>
  );
}

// Alternative color palette option - more muted and professional
// Replace the technologies section with this for a softer look:

const alternativeTechnologies = (
  <div className="flex flex-wrap items-center gap-x-2">
    {/* Muted blue palette */}
    <span className="rounded-full bg-slate-600 px-3 py-1 text-sm font-medium text-white shadow-sm dark:bg-slate-500">
      TypeScript
    </span>

    <span className="rounded-full bg-teal-600 px-3 py-1 text-sm font-medium text-white shadow-sm dark:bg-teal-500">
      React
    </span>

    <span className="rounded-full bg-zinc-700 px-3 py-1 text-sm font-medium text-white shadow-sm dark:bg-zinc-600">
      React Native
    </span>

    <span className="rounded-full bg-indigo-600 px-3 py-1 text-sm font-medium text-white shadow-sm dark:bg-indigo-500">
      Expo
    </span>

    <span className="rounded-full bg-amber-600 px-3 py-1 text-sm font-medium text-white shadow-sm dark:bg-amber-500">
      Sentry
    </span>

    <span className="rounded-full bg-green-600 px-3 py-1 text-sm font-medium text-white shadow-sm dark:bg-green-500">
      Amplitude
    </span>
  </div>
);
