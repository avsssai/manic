import type { MetaFunction } from "@remix-run/node";
import {
  Grid2X2,
  Library,
  ListMusic,
  Mic2,
  PlayCircle,
  Radio,
  User,
} from "lucide-react";
import Header from "~/components/Header";
import { ListItem } from "~/components/ListItem";
import { Button } from "~/components/ui/button";
import { useMediaQuery } from "~/hooks/useMediaQuery";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const tabAndAbove = useMediaQuery("(min-width: 768px)");

  return (
    <div className="flex h-screen flex-col bg-background font-primary text-foreground">
      <Header />
      <div className="flex h-full flex-grow">
        {tabAndAbove ? (
          <div className="flex basis-[400px] flex-col space-y-8 border-r-2 p-4">
            <section>
              <h2 className="mb-2 text-2xl font-extrabold">Discover</h2>
              <nav>
                <ul>
                  <ListItem link="/listen-now">
                    <PlayCircle className="mr-2" size={14} /> Listen Now
                  </ListItem>
                  <ListItem link="/listen-now">
                    <Grid2X2 className="mr-2" size={14} /> Browse
                  </ListItem>
                  <ListItem link="/listen-now">
                    <Radio className="mr-2" size={14} /> Radio
                  </ListItem>
                </ul>
              </nav>
            </section>
            <section>
              <h2 className="mb-2 text-2xl font-extrabold">Library</h2>
              <nav>
                <ul>
                  <ListItem link="/listen-now">
                    <PlayCircle className="mr-2" size={14} />
                    Playlists
                  </ListItem>
                  <ListItem link="/listen-now">
                    <Grid2X2 className="mr-2" size={14} /> Songs
                  </ListItem>
                  <ListItem link="/listen-now">
                    <User className="mr-2" size={14} /> Made for You
                  </ListItem>
                  <ListItem link="/listen-now">
                    <Mic2 className="mr-2" size={14} /> Artists
                  </ListItem>
                  <ListItem link="/listen-now">
                    <Library className="mr-2" size={14} /> Albums
                  </ListItem>
                </ul>
              </nav>
            </section>
            <section>
              <h2 className="mb-2 text-2xl font-extrabold">Playlists</h2>
              <nav>
                <ul>
                  <ListItem link="/listen-now">
                    <ListMusic className="mr-2" size={14} />
                    Recently Added
                  </ListItem>
                  <ListItem link="/listen-now">
                    <ListMusic className="mr-2" size={14} /> Recently Played
                  </ListItem>
                  <ListItem link="/listen-now">
                    <ListMusic className="mr-2" size={14} /> Top Songs
                  </ListItem>
                  <ListItem link="/listen-now">
                    <ListMusic className="mr-2" size={14} /> Top Albums
                  </ListItem>
                  <ListItem link="/listen-now">
                    <ListMusic className="mr-2" size={14} /> Top Artists
                  </ListItem>
                  <ListItem link="/listen-now">
                    <ListMusic className="mr-2" size={14} /> Discographies
                  </ListItem>
                  <ListItem link="/listen-now">
                    <ListMusic className="mr-2" size={14} /> Podcasts
                  </ListItem>
                </ul>
              </nav>
            </section>
          </div>
        ) : (
          ""
        )}
        <main className="flex-1"></main>
      </div>
    </div>
  );
}
