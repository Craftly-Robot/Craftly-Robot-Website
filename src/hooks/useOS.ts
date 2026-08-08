import { useState, useEffect } from 'react';

type OS = 'Windows' | 'macOS' | 'Linux' | 'Unknown';

export function useOS(): OS {
  const [os, setOS] = useState<OS>('Unknown');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const userAgent = window.navigator.userAgent.toLowerCase();
    
    if (userAgent.indexOf('win') !== -1) {
      setOS('Windows');
    } else if (userAgent.indexOf('mac') !== -1) {
      setOS('macOS');
    } else if (userAgent.indexOf('linux') !== -1) {
      setOS('Linux');
    }
  }, []);

  return os;
}
