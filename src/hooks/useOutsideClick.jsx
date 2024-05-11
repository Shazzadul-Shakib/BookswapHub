import { useEffect, useRef, useState } from "react";

const useOutsideClick = (value) => {
  const [open, setOpen] = useState(value);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (!ref?.current?.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return [open, setOpen, ref];
};

export default useOutsideClick;
