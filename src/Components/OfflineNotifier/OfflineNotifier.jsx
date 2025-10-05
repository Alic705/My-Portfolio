import React, { useState, useEffect } from "react";
import styles from "./OfflineNotifier.module.css";

const OfflineCloudIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={styles.offlineIcon}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774"
    />
    <line x1="1" y1="1" x2="23" y2="23" strokeWidth="2" />
  </svg>
);

const OfflineNotifier = ({ children }) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showOverlay, setShowOverlay] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setTimeout(() => setShowOverlay(false), 500);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowOverlay(true);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const overlayClassName = `
    ${styles.overlay}
    ${isOnline ? styles.overlayHidden : styles.overlayVisible}
  `;

  return (
    <div>
      {children}
      {showOverlay && (
        <div className={overlayClassName.trim()} role="alert">
          <OfflineCloudIcon />
          <h2 className={styles.title}>Connection Lost</h2>
          <p className={styles.message}>
            Oops! It looks like you're offline. Please check your internet
            connection.
          </p>
        </div>
      )}
    </div>
  );
};

export default OfflineNotifier;
