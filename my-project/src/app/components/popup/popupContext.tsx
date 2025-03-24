'use client';

import { ReactNode, createContext, useContext, useMemo, useState } from 'react';

type PopupContextType = {
   show: boolean;
   setShow: (value: boolean) => void;
};

const PopupContext = createContext<PopupContextType | null>(null);

export const PopupProvider = ({ children }: { children: ReactNode }) => {
   const [show, setShow] = useState(false);
   const popupValue = useMemo(() => ({ show, setShow }), [show, setShow]);
   return <PopupContext.Provider value={popupValue}>{children}</PopupContext.Provider>;
};

export const usePopup = () => {
   const context = useContext(PopupContext);
   if (!context) {
      throw new Error('usePopup must be used within a PopupProvider');
   }
   return context;
};
