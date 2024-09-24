import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full flex flex-col justify-center items-center h-screen">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className="underline text-blue-700" href="/">
        Return Home
      </Link>
    </div>
  );
}
