"use client";

import Image from "next/image";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-white py-24 px-6 flex flex-col items-center"
    >
      <h2
        className="text-2xl md:text-3xl font-bold tracking-wider text-black mb-16 uppercase"
        data-aos="fade-up"
        data-aos-once="false"
        data-aos-anchor-placement="center-center"
      >
        Using Now:
      </h2>

      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-40"
        data-aos="fade-up"
        data-aos-once="false"
        data-aos-anchor-placement="center-center"
      >
        <div className="flex flex-col items-center">
          <Image src="/images/html.svg" alt="HTML5" width={60} height={60} />
          <span className="mt-4 text-sm font-medium text-gray-800">HTML5</span>
        </div>

        <div className="flex flex-col items-center">
          <Image src="/images/css3.svg" alt="CSS3" width={60} height={60} />
          <span className="mt-4 text-sm font-medium text-gray-800">CSS3</span>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src="/images/tailwindcss.svg"
            alt="tailwind"
            width={60}
            height={60}
          />
          <span className="mt-4 text-sm font-medium text-gray-800">
            Tailwind CSS
          </span>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src="/images/bootstrap.svg"
            alt="Bootstrap"
            width={60}
            height={60}
          />
          <span className="mt-4 text-sm font-medium text-gray-800">
            Bootstrap
          </span>
        </div>

        <div className="flex flex-col items-center">
          <Image src="/images/js.svg" alt="JavaScript" width={60} height={60} />
          <span className="mt-4 text-sm font-medium text-gray-800">
            JavaScript
          </span>
        </div>

        <div className="flex flex-col items-center">
          <Image src="/images/react.svg" alt="React" width={60} height={60} />
          <span className="mt-4 text-sm font-medium text-gray-800">React</span>
        </div>

        <div className="flex flex-col items-center">
          <Image src="/images/vue.svg" alt="vue" width={60} height={60} />
          <span className="mt-4 text-sm font-medium text-gray-800">vue</span>
        </div>

        <div className="flex flex-col items-center">
          <Image src="/images/kotlin.svg" alt="kotlin" width={60} height={60} />
          <span className="mt-4 text-sm font-medium text-gray-800">Kotlin</span>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src="/images/typescript.svg"
            alt="Typescript"
            width={60}
            height={60}
          />
          <span className="mt-4 text-sm font-medium text-gray-800">
            Typescript
          </span>
        </div>

        <div className="flex flex-col items-center">
          <Image src="/images/git.svg" alt="Git" width={60} height={60} />
          <span className="mt-4 text-sm font-medium text-gray-800">Git</span>
        </div>
      </div>
    </section>
  );
}
