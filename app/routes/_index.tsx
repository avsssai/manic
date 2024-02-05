import type { MetaFunction } from "@remix-run/node";

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
      </section>
      <section className="mb-4">
        <h1 className="mb-2 text-2xl font-black">Hot Artists</h1>
      </section>
      <section className="mb-4">
        <h1 className="mb-2 text-2xl font-black">Albums</h1>
      </section>
    </div>
  );
}
