import { useMediaQuery } from "~/hooks/useMediaQuery";
import { SideDrawer } from "./ui/sideDrawer";
import { Music } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  const tabletAndBelow = useMediaQuery(`(max-width: 768px)`);
  return (
    <main className="flex items-center space-x-2 border border-b-2 px-4 py-2">
      {tabletAndBelow ? (
        <span>
          <SideDrawer />
        </span>
      ) : (
        ""
      )}
      <h4 className="flex w-fit items-center rounded-sm border-2 border-foreground p-1 text-lg font-extrabold tracking-wide text-foreground shadow-md">
        <Music className="mr-1" /> Manic
      </h4>
      <nav className="flex space-x-2">
        <ModeToggle />
      </nav>
    </main>
  );
}
