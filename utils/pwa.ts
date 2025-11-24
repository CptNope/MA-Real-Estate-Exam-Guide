/**
 * PWA Installation and Service Worker utilities
 */

// Check if browser supports PWA installation
export function isPWAInstallable(): boolean {
  return 'serviceWorker' in navigator && 'BeforeInstallPromptEvent' in window;
}

// Register service worker
export async function registerServiceWorker(): Promise<ServiceWorkerRegistration | null> {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/MA-Real-Estate-Exam-Guide/sw.js');
      console.log('[PWA] Service Worker registered:', registration);
      return registration;
    } catch (error) {
      console.error('[PWA] Service Worker registration failed:', error);
      return null;
    }
  }
  return null;
}

// Unregister service worker
export async function unregisterServiceWorker(): Promise<boolean> {
  if ('serviceWorker' in navigator) {
    const registration = await navigator.serviceWorker.ready;
    return registration.unregister();
  }
  return false;
}

// Check if app is running as PWA
export function isPWAMode(): boolean {
  return window.matchMedia('(display-mode: standalone)').matches ||
         (window.navigator as any).standalone === true ||
         document.referrer.includes('android-app://');
}

// Update service worker
export async function updateServiceWorker(): Promise<void> {
  if ('serviceWorker' in navigator) {
    const registration = await navigator.serviceWorker.ready;
    await registration.update();
  }
}

// Check for updates periodically
export function checkForUpdates(intervalMinutes: number = 60): void {
  if ('serviceWorker' in navigator) {
    setInterval(() => {
      navigator.serviceWorker.ready.then((registration) => {
        registration.update();
      });
    }, intervalMinutes * 60 * 1000);
  }
}

// PWA install prompt handler
let deferredPrompt: any = null;

export function setupPWAInstallPrompt(): void {
  window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the default prompt
    e.preventDefault();
    // Store the event for later use
    deferredPrompt = e;
    console.log('[PWA] Install prompt available');
    
    // Dispatch custom event that app can listen to
    window.dispatchEvent(new CustomEvent('pwa-installable'));
  });

  window.addEventListener('appinstalled', () => {
    console.log('[PWA] App installed');
    deferredPrompt = null;
    window.dispatchEvent(new CustomEvent('pwa-installed'));
  });
}

// Show PWA install prompt
export async function showPWAInstallPrompt(): Promise<boolean> {
  if (!deferredPrompt) {
    console.log('[PWA] Install prompt not available');
    return false;
  }

  // Show the install prompt
  deferredPrompt.prompt();

  // Wait for the user's response
  const { outcome } = await deferredPrompt.userChoice;
  console.log('[PWA] User choice:', outcome);

  // Clear the deferred prompt
  deferredPrompt = null;

  return outcome === 'accepted';
}

// Check if install prompt is available
export function isPWAInstallPromptAvailable(): boolean {
  return deferredPrompt !== null;
}
