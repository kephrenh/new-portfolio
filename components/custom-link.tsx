import Link from "next/link";

type LinkProps = {
  text: string;
  href: string;
};

const CustomLink = (link: LinkProps) => {
  return <Link href={link.href}>{link.text}</Link>;
};
export default CustomLink;
