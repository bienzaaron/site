import { html as aboutHtml } from "./markdown/about.md";

type Frontmatter = {
  title: string;
  description: string;
  tags: string[];
};

type MarkdownDocument = {
  attributes: Record<string, unknown>;
  html: string;
};

export type Post = Frontmatter & {
  id: string;
  html: string;
};

const modules = import.meta.glob("./markdown/posts/*.md", {
  eager: true,
});

export const posts: Post[] = Object.entries(modules)
  .map(([path, document]) => {
    const id = path.split("/").pop()?.replace(/\.md$/, "");

    if (!id || !isMarkdownDocument(document)) {
      throw new Error(`Invalid post import: ${path}`);
    }

    const frontmatter = parsePostFrontmatter(document.attributes, path);

    return {
      id,
      ...frontmatter,
      html: document.html,
    };
  })
  .sort((a, b) => a.id.localeCompare(b.id));

export const about = {
  html: aboutHtml,
};

export const socials = [
  { label: "GitHub", href: "https://github.com/bienzaaron" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abienz" },
  { label: "npm", href: "https://www.npmjs.com/~ajbienz" },
];

function isMarkdownDocument(value: unknown): value is MarkdownDocument {
  return (
    typeof value === "object" &&
    value !== null &&
    "attributes" in value &&
    "html" in value &&
    typeof value.html === "string"
  );
}

function parsePostFrontmatter(fields: Record<string, unknown>, path: string): Frontmatter {
  if (
    typeof fields.title !== "string" ||
    typeof fields.description !== "string" ||
    !Array.isArray(fields.tags) ||
    !fields.tags.every((tag) => typeof tag === "string")
  ) {
    throw new Error(`Invalid frontmatter in ${path}`);
  }

  return {
    title: fields.title,
    description: fields.description,
    tags: fields.tags,
  };
}
