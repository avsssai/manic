import {
  ArrowLeftIcon,
  Grid2X2,
  Library,
  ListMusic,
  Menu,
  Mic2,
  PlayCircle,
  Radio,
  User,
} from "lucide-react";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "./drawer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";
import { Link, NavLink } from "@remix-run/react";
import { ListItem } from "../ListItem";

export function SideDrawer() {
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Menu />
      </DrawerTrigger>
      <DrawerContent className="p-2">
        <div className="mb-6 text-left">
          <DrawerClose>
            <ArrowLeftIcon />
          </DrawerClose>
        </div>
        <Accordion collapsible type="single" className="mb-4 w-full">
          <AccordionItem value="menu">
            <AccordionTrigger>Menu</AccordionTrigger>
            <AccordionContent>
              <nav>
                <ul className="">
                  <li className="px-1 py-1">
                    <Link to={"/"}>File</Link>
                  </li>
                  <li className="px-1 py-1">
                    <Link to={"/"}>Edit</Link>
                  </li>
                  <li className="px-1 py-1">
                    <Link to={"/"}>View</Link>
                  </li>
                  <li className="px-1 py-1">
                    <Link to={"/"}>Account</Link>
                  </li>
                </ul>
              </nav>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="flex flex-col space-y-4">
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
      </DrawerContent>
    </Drawer>
  );
}
