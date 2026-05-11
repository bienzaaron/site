import { Command } from "../components/Command";
import { about } from "../data";

export function About() {
  return (
    <>
      <Command>cat about.md</Command>
      <article className="output document" dangerouslySetInnerHTML={{ __html: about.html }} />
    </>
  );
}
