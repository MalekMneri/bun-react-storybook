import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_app/profile')({
  component: ProfilePage,
});

function ProfilePage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
      <p className="text-muted-foreground">Manage your personal information and preferences.</p>
      <div className="bg-card text-card-foreground rounded-lg border p-6 shadow-xs">
        <p>Hello from the Profile Page!</p>
      </div>
    </div>
  );
}
