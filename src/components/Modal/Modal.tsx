// "use client";
// import { useEffect } from "react";

// import { motion, AnimatePresence } from "framer-motion";

// export default function Modal({ isOpen, onClose, children }: any) {


//     useEffect(() => {
//         const handleEsc = (e: any) => {
//             if (e.key === "Escape") onClose();
//         };

//         if (isOpen) {
//             document.body.style.overflow = "hidden";
//             window.addEventListener("keydown", handleEsc);
//         }

//         return () => {
//             document.body.style.overflow = "auto";
//             window.removeEventListener("keydown", handleEsc);
//         };
//     }, [isOpen]);
//     return (
//         <AnimatePresence>
//             {isOpen && (
//                 <>
//                     {/* Overlay */}
//                     <motion.div
//                         className="fixed inset-0 bg-black/50 z-40"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                         onClick={onClose}
//                     />

//                     {/* Modal Box */}
//                     <motion.div
//                         className="fixed inset-0 flex items-center justify-center z-50"
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         exit={{ opacity: 0, scale: 0.8 }}
//                     >
//                         <div
//                             className="bg-transparent p-6 rounded-xl min-w-[300px] w-full max-w-2xl max-h-[85vh] overflow-y-auto flex items-center justify-center"
//                             onClick={(e) => e.stopPropagation()}
//                         >
//                             {children}
//                         </div>
//                     </motion.div>
//                 </>
//             )}
//         </AnimatePresence>
//     );
// }


"use client";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Modal({ isOpen, onClose, children }: any) {
    useEffect(() => {
        const handleEsc = (e: any) => {
            if (e.key === "Escape") onClose();
        };

        if (isOpen) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleEsc);
        }

        return () => {
            document.body.style.overflow = "auto";
            window.removeEventListener("keydown", handleEsc);
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        className="fixed inset-0 bg-black/50 z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    <motion.div
                        className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        onClick={onClose}
                    >
                        <div className="min-h-full flex items-center justify-center p-4 sm:p-6">
                            <div
                                className="relative w-full max-w-xl"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {children}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}