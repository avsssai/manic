import { useMediaQuery } from "~/hooks/useMediaQuery";
import { SideDrawer } from "./ui/sideDrawer";

export default function Header() {
  const tabletAndBelow = useMediaQuery(`(max-width: 768px)`);
  console.log(tabletAndBelow);
  return (
    <main className="flex space-x-2 border border-b-2 px-4 py-2">
      {tabletAndBelow ? (
        <span>
          <SideDrawer />
        </span>
      ) : (
        ""
      )}
      <h4 className="text-lg font-bold tracking-wide">Manic</h4>
    </main>
  );
}
