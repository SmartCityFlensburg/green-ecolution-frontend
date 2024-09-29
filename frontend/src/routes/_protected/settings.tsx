import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/settings")({
  component: Settings,
  meta: () => [
    {
      title: 'Einstellungen',
      path: '/settings',
    },
  ],
});

function Settings() {
  return (
    <div className="container mt-6">
      <article className="2xl:w-4/5">
        <h1 className="font-lato font-bold text-3xl mb-4 lg:text-4xl xl:text-5xl">
          Ihre persönlichen Einstellungen
        </h1>
        <p>
          Eu ipsum occaecat non exercitation occaecat ea aute fugiat quis magna do veniam commodo.
          Magna Lorem cupidatat id fugiat nostrud quis qui in quis fugiat. Irure pariatur anim cupidatat nulla ipsum Lorem irure. 
          Est elit laborum sunt commodo officia nulla cupidatat fugiat tempor exercitation laborum. Sint irure eiusmod sunt. 
          Magna esse proident magna dolore aliqua nulla id sunt adipisicing.
        </p>
      </article>
    </div>
  );
}
