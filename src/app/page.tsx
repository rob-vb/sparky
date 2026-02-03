import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold tracking-tight">
          ⚡ Sparky
        </h1>
        <p className="text-xl text-muted-foreground max-w-md">
          Stop building things nobody wants.
        </p>
        <Button size="lg">
          Get Started
        </Button>
      </div>
    </main>
  );
}
