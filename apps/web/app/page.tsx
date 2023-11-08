import { Github } from "@/ui/icons";
import Menu from "@/ui/menu";
import Editor from "@/ui/editor";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center sm:px-5 sm:pt-[calc(7vh)]">
      <a
        href="https://github.com/steven-tey/novel"
        target="_blank"
        className="absolute z-10 p-2 transition-colors duration-200 rounded-lg bottom-5 left-5 max-h-fit hover:bg-stone-100 sm:bottom-auto sm:top-5"
      >
        <Github />
      </a>
      <Menu />
      <Editor />
    </div>
  );
}
