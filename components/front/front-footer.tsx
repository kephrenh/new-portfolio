import data from "@/data/data";
import CustomLink from "../custom-link";

const year = new Date().getFullYear();

const FrontFooter = () => {
  const { social } = data;
  return (
    <footer className="flex flex-col justify-center sm:flex-row sm:justify-between items-center w-full border-t px-4 py-6">
      <p className="text-xs  text-muted-foreground">
        &copy; {year} Mohamed Amoussa. Tous droits réservés.
      </p>
      <nav className="sm:ml-auto text-muted-foreground flex gap-4 sm:gap-6">
        <ul className="text-xs flex gap-3">
          {social.map(({ text, href }) => (
            <li key={href}>
              <CustomLink href={href} text={text} />
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};
export default FrontFooter;
