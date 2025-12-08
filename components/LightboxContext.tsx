"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface LightboxContextType {
    isLightboxOpen: boolean;
    setLightboxOpen: (isOpen: boolean) => void;
}

const LightboxContext = createContext<LightboxContextType | undefined>(undefined);

export function LightboxProvider({ children }: { children: ReactNode }) {
    const [isLightboxOpen, setLightboxOpen] = useState(false);

    return (
        <LightboxContext.Provider value={{ isLightboxOpen, setLightboxOpen }}>
            {children}
        </LightboxContext.Provider>
    );
}

export function useLightbox() {
    const context = useContext(LightboxContext);
    if (context === undefined) {
        throw new Error("useLightbox must be used within a LightboxProvider");
    }
    return context;
}
