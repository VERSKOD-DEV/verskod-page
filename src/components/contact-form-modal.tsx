"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const FORM_URL =
  "https://n8n.srv1251167.hstgr.cloud/form/c45416e6-edf6-4f1c-ab92-b6d21cf77273";

export function ContactFormModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-8 inline-block bg-accent px-6 py-3 text-xs font-semibold tracking-widest text-accent-foreground uppercase transition-colors hover:bg-accent-hover"
      >
        Escríbenos →
      </button>

      {open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Formulario de contacto"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            onClick={(event) => {
              if (event.target === event.currentTarget) setOpen(false);
            }}
          >
            <div className="relative max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-lg bg-[#fbfcfe] shadow-2xl">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar formulario"
                className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/5 text-lg leading-none text-gray-600 transition-colors hover:bg-black/10"
              >
                ×
              </button>
              <iframe
                src={FORM_URL}
                title="Formulario de contacto"
                className="h-[85vh] max-h-[90vh] w-full"
              />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
