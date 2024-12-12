"use client";
import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const isAccepted = document.cookie.split('; ').find(row => row.startsWith('cookieConsent='));
    if (!isAccepted) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    setShowBanner(false);
    document.cookie = "cookieConsent=true; path=/; max-age=" + 60 * 60 * 24 * 365;
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-8 md:right-8 bg-gray-200 text-gray-800 p-4 rounded-xl shadow-lg border border-gray-300">
      <p className="text-xs md:text-sm mb-2">
        Używamy plików cookies na naszej stronie internetowej.
        Kontynuując korzystanie z naszej strony internetowej, wyrażasz zgodę na przetwarzanie Twoich danych osobowych, takich jak adres IP, w celach marketingowych i analitycznych.
      </p>
      <div className="flex justify-end space-x-2">
        <button
          onClick={handleAccept}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300"
        >
          Akceptuję
        </button>
      </div>
    </div>
  );
}
