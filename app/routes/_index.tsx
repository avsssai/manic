import type { MetaFunction } from "@remix-run/node";
import SoundBar from "~/components/SoundBar";
import tnt from "~/music/tnt.mp3";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="p-4">
      <section className="mb-4">
        <h1 className="mb-2 text-2xl font-black">Chartbusters</h1>
        <p className="text-sm text-muted-foreground">
          The top songs from all over the world.
        </p>
        <SoundBar songUrl={tnt} />
      </section>
      <section className="mb-4">
        <h1 className="mb-2 text-2xl font-black">Hot Artists</h1>
        <p className="text-sm text-muted-foreground">
          The hottest artists, curated for you!
        </p>
      </section>
      <section className="mb-4">
        <h1 className="mb-2 text-2xl font-black">Albums</h1>
        <p className="text-sm text-muted-foreground">Your favorite albums.</p>
      </section>
    </div>
  );
}
