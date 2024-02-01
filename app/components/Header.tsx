import { Menu } from "lucide-react";
export default function Header() {
  return (
    <main className="flex space-x-2 border border-b-2 px-4 py-2">
      <span>
        <Menu />
      </span>
      <h4 className="text-lg font-bold tracking-wide">Manic</h4>
    </main>
  );
}
