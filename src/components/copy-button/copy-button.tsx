import React, { useEffect, useRef } from 'react';
import Clipboard from 'clipboard';

interface EmailCopyButtonProps {
  name: string;
}

const CopyButton: React.FC<EmailCopyButtonProps> = ({ name }) => {
  const nameRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let clipboard: Clipboard | null = null;

    if (nameRef.current) {
      // Inicjalizacja biblioteki Clipboard.js po zamontowaniu komponentu
      clipboard = new Clipboard(nameRef.current, {
        text: () => name,
      });

      clipboard.on('success', () => {
        alert('Adres e-mail został skopiowany do schowka.');
      });

      clipboard.on('error', () => {
        alert('Nie udało się skopiować adresu e-mail. Spróbuj ponownie.');
      });
    }

    return () => {
      // Zniszczenie obiektu Clipboard.js przy odmontowaniu komponentu
      if (clipboard) {
        clipboard.destroy();
      }
    };
  }, [name]);

  return (
    <span ref={nameRef} style={{ cursor: 'pointer' }}>
      {name}
    </span>
  );
};

export default CopyButton;
