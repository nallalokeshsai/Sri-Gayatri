import { useState } from "react";
import { ClassicalHeader } from "./ClassicalHeader";
import { ClassicalFooter } from "./ClassicalFooter";
import { AdmissionModal } from "./AdmissionModal";
import { WhatsAppButton } from "./WhatsAppButton";
import { LayoutContext } from "@/context/LayoutContext";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [defaultStream, setDefaultStream] = useState("mpc");
  const [defaultBranch, setDefaultBranch] = useState("asilmetta");

  const openAdmissionModal = (stream = "mpc", branch = "asilmetta") => {
    setDefaultStream(stream);
    setDefaultBranch(branch);
    setIsModalOpen(true);
  };

  return (
    <LayoutContext.Provider value={{ openAdmissionModal }}>
      <div className="min-h-screen flex flex-col bg-[#F9FAFB] text-slate-800 antialiased">
        <ClassicalHeader onOpenAdmissionModal={() => openAdmissionModal()} />

        <main className="flex-grow">{children}</main>

        <ClassicalFooter />

        <WhatsAppButton />

        <AdmissionModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          defaultStream={defaultStream}
          defaultBranch={defaultBranch}
        />
      </div>
    </LayoutContext.Provider>
  );
};

export default Layout;
