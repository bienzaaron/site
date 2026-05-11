import { Command } from "../components/Command";

export function NotFound() {
  return (
    <>
      <Command>cat missing-file</Command>
      <div className="output document">
        <h1>Not Found</h1>
        <p>
          That page does not exist. Try <a href="/">heading home</a>.
        </p>
      </div>
    </>
  );
}
