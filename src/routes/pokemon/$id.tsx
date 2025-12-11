import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/pokemon/$id')({
  component: Pokemon,
});

function Pokemon() {
  const { id } = Route.useParams();
  return <div>Hello "/pokemon/{id}"!</div>;
}
