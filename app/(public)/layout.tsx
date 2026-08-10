import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import MessageModal from "@/components/modal/MessageModal";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <MessageModal />
    </>
  );
}
