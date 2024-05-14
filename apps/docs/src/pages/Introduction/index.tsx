import React from 'react'

const Introduction: React.FC = () => {
  return (
    <article className="rounded border-dark border flex flex-col items-center shadow-inset-2 justify-center gap-8 p-12 mx-48 mt-12">
      <section>
        <p className="mb-4 text-3xl font-bold">What is Neumify?</p>
        <p>
          A Neumorphic Components Library for React ( also known as Soft UI, or
          neumorphism ), base on ( and highly inspired by ) shadcn-ui and
          radix-ui.
        </p>
      </section>
      <section>
        <p className="mb-4 text-3xl font-bold">What is neumorphism?</p>
        <p>
          As you can see, the neumorphism design style utilizes light and shadow
          to create a sense of depth on a 2D plane ( the screen ).
        </p>
      </section>
      <section>
        <p className="mb-4 text-3xl font-bold">How can I use Neumify?</p>
        <p>
          Until now, this library is unavailable. But you can see
          some demonstrations on the components page. Once the stable version is
          released, you can download it via package management tools, pnpm,
          yarn, etc. It won't take long.
        </p>
      </section>
    </article>
  )
}

export { Introduction }
