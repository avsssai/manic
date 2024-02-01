import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/Header";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="bg-background font-primary text-foreground">
      <Header />
    </div>
  );
}
