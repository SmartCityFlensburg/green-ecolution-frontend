import ButtonLink from '@/components/general/links/ButtonLink'
import IntroductionSlider from '@/components/startpage/IntroductionSlider'
import KeyFacts from '@/components/startpage/KeyFacts'
import { createFileRoute } from '@tanstack/react-router'
import { Mail, MoveRight } from 'lucide-react'
import Lottie from 'lottie-react';
import dashboardAnimation from '../../src/animations/dashboardAnimation.json';
import QuickLinks from '@/components/startpage/QuickLinks'
import useStore from '@/store/store'

export const Route = createFileRoute('/')({
  component: Startpage,
})

function Startpage() {
  const { isAuthenticated } = useStore((state) => ({
    isAuthenticated: state.auth.isAuthenticated,
  }));

  return (
    <>
      <article className="container my-20 lg:my-24 xl:grid xl:grid-cols-2 xl:gap-x-16 xl:items-center">
        <div>
          <p className="text-green-dark mb-4 text-lg font-semibold">Green Ecolution</p>
          <h1 className="font-lato font-bold text-4xl mb-4 lg:text-5xl xl:text-6xl">
            Willkommen beim smarten<br />Grünflächen&shy;management
          </h1>
          <p>
            Labore id duis minim nisi duis incididunt. Aliqua qui dolor laborum anim aliquip sit nulla eiusmod laboris excepteur sit non laboris do.
            Occaecat exercitation dolor irure fugiat ullamco elit cupidatat commodo fugiat consectetur.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 mt-10 xl:justify-start">
            {isAuthenticated ? (
              <ButtonLink
                url="/dashboard"
                label="Zum Dashboard"
                icon={MoveRight} />
            ) : (
              <ButtonLink
                url="/login"
                label="Einloggen"
                icon={MoveRight} />
            )}
            <a
              href="mailto:info@green-ecolution.de"
              className="bg-green-dark w-fit text-white px-5 py-2 group flex gap-x-3 rounded-xl items-center transition-all ease-in-out duration-300 hover:bg-green-light"
            >
              Kontakt
              <Mail />
            </a>
          </div>
        </div>

        <div className="mt-10 max-w-screen-md mx-auto">
          <Lottie animationData={dashboardAnimation} />
        </div>
      </article>

      <QuickLinks />
      <KeyFacts />
      <IntroductionSlider />
    </>
  )
}