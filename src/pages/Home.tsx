import { Command } from "../components/Command";
import { PostList } from "../components/PostList";
import { SocialLinks } from "../components/SocialLinks";

export function Home() {
  return (
    <>
      <Command>whoami</Command>
      <div className="output">
        <p>
          Hey! I&apos;m AJ. I&apos;m a software engineer and general computer nerd, currently living
          in Richmond, VA and employed at Capital One.
        </p>
        <p className="muted">
          This is my little corner of the internet. Feel free to click around to find more about me,
          read some of my partially-coherent ramblings, and even download my resume if you are
          interested in hiring me.
        </p>
      </div>

      <Command>ls notes</Command>
      <PostList />

      <Command>cat family.webp</Command>
      <figure className="family">
        <img src="/family.webp" alt="me, my wife, dog, and two cats" width="2726" height="2726" />
        <figcaption className="caption">Me, my wife, and the pets who run the house.</figcaption>
      </figure>

      <Command>cat socials.md</Command>
      <SocialLinks />
    </>
  );
}
