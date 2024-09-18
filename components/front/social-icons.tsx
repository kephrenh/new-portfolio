import { GitHubIcon } from "@/lib/data/icons";
import { LinkedinIcon, MailIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";

const SocialIcons = ({ padding }: { padding: string }) => {
  return (
    <>
      <Link href="https://www.linkedin.com/in/mohamed-amoussa-665882212/">
        <div
          className={`duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105 ${padding}`}>
          <LinkedinIcon />
        </div>
      </Link>
      <Link href="https://github.com/kephrenh">
        <div
          className={`duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105 ${padding}`}>
          <GitHubIcon />
        </div>
      </Link>
      <Link href="mailto: mohamedj81@hotmail.com">
        <div
          className={`duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105 ${padding}`}>
          <MailIcon />
        </div>
      </Link>
      <Link href="/" title="Call">
        <div
          className={`duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105 ${padding}`}>
          <PhoneIcon />
        </div>
      </Link>
    </>
  );
};

export default SocialIcons;
