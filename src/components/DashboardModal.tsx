import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface DashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: React.ReactNode;
  children: React.ReactNode;
}

export default function DashboardModal({
  isOpen,
  onClose,
  title,
  children,
}: DashboardModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogTrigger />
      <DialogContent className="card w-full max-w-[80%] h-[92vh] overflow-y-scroll [scrollbar-width:none] [&::-webkit-scrollbar]">
        <DialogHeader>
          <DialogTitle className="text-[22px] md:text-[30px] font-normal text-white md:text-2xl max-w-4xl leading-6">
            {title}
          </DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
