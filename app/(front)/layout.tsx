import FrontFooter from "@/components/front/front-footer";
import FrontHeader from "@/components/front/front-header";

export default function FrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <FrontHeader />
      <main className="flex-1 w-full flex justify-center">{children}</main>;
      <FrontFooter />
    </>
  );
}
