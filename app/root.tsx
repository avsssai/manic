import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css";
import clsx from "clsx";
import { themeSessionResolver } from "./sessions.server";
import {
  PreventFlashOnWrongTheme,
  ThemeProvider,
  useTheme,
} from "remix-themes";
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

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap",
  },
  { rel: "stylesheet", href: stylesheet },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export async function loader({ request }: LoaderFunctionArgs) {
  const { getTheme } = await themeSessionResolver(request);
  return {
    theme: getTheme(),
  };
}

export default function AppWithProviders() {
  const data = useLoaderData<typeof loader>();
  return (
    <ThemeProvider specifiedTheme={data.theme} themeAction="/action/set-theme">
      <App />
    </ThemeProvider>
  );
}

export function App() {
  const data = useLoaderData<typeof loader>();
  const tabAndAbove = useMediaQuery("(min-width: 768px)");

  const [theme] = useTheme();
  return (
    <html lang="en" className={clsx(theme)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="">
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
                      <ListItem link="/browse">
                        <Grid2X2 className="mr-2" size={14} /> Browse
                      </ListItem>
                      <ListItem link="/radio">
                        <Radio className="mr-2" size={14} /> Radio
                      </ListItem>
                    </ul>
                  </nav>
                </section>
                <section>
                  <h2 className="mb-2 text-2xl font-extrabold">Library</h2>
                  <nav>
                    <ul>
                      <ListItem link="/playlists">
                        <PlayCircle className="mr-2" size={14} />
                        Playlists
                      </ListItem>
                      <ListItem link="/songs">
                        <Grid2X2 className="mr-2" size={14} /> Songs
                      </ListItem>
                      <ListItem link="/made-for-you">
                        <User className="mr-2" size={14} /> Made for You
                      </ListItem>
                      <ListItem link="/artists">
                        <Mic2 className="mr-2" size={14} /> Artists
                      </ListItem>
                      <ListItem link="/albums">
                        <Library className="mr-2" size={14} /> Albums
                      </ListItem>
                    </ul>
                  </nav>
                </section>
                <section>
                  <h2 className="mb-2 text-2xl font-extrabold">Playlists</h2>
                  <nav>
                    <ul>
                      <ListItem link="/recently-added">
                        <ListMusic className="mr-2" size={14} />
                        Recently Added
                      </ListItem>
                      <ListItem link="/recently-played">
                        <ListMusic className="mr-2" size={14} /> Recently Played
                      </ListItem>
                      <ListItem link="/top-songs">
                        <ListMusic className="mr-2" size={14} /> Top Songs
                      </ListItem>
                      <ListItem link="/top-albums">
                        <ListMusic className="mr-2" size={14} /> Top Albums
                      </ListItem>
                      <ListItem link="/top-artists">
                        <ListMusic className="mr-2" size={14} /> Top Artists
                      </ListItem>
                      <ListItem link="/discographies">
                        <ListMusic className="mr-2" size={14} /> Discographies
                      </ListItem>
                      <ListItem link="/podcasts">
                        <ListMusic className="mr-2" size={14} /> Podcasts
                      </ListItem>
                    </ul>
                  </nav>
                </section>
              </div>
            ) : (
              ""
            )}
            <main className="flex-1">
              <Outlet />
            </main>
          </div>
        </div>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
