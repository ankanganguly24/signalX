import { X } from "lucide-react";
import { cn } from "../../utils/cn";
import { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onClose}
      />
      
      {/* Content */}
      <div className="relative z-10 w-full max-h-[85vh] sm:w-[90%] bg-[#1A1A1A] border-t sm:border border-[#333333] rounded-t-xl sm:rounded-xl shadow-2xl flex flex-col animate-in slide-in-from-bottom-4 duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#333333]">
            <h3 className="font-semibold text-[#EDEDED]">{title}</h3>
            <button onClick={onClose} className="p-1 hover:bg-[#333333] rounded-md text-[#A1A1A1] transition-colors">
                <X className="h-5 w-5" />
            </button>
        </div>
        
        {/* Scrollable Body */}
        <div className="p-4 overflow-y-auto custom-scrollbar">
            {children}
        </div>
      </div>
    </div>
  );
}
