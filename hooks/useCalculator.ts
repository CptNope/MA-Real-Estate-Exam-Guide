import { useState, useMemo, useCallback } from 'react';

/**
 * Reusable calculator hook for managing calculator state
 * Reduces code duplication across calculator components
 */
export function useCalculator<T>(initialState: T) {
  const [values, setValues] = useState<T>(initialState);
  const [history, setHistory] = useState<T[]>([]);

  const updateValue = useCallback(<K extends keyof T>(key: K, value: T[K]) => {
    setValues(prev => ({ ...prev, [key]: value }));
  }, []);

  const updateValues = useCallback((updates: Partial<T>) => {
    setValues(prev => ({ ...prev, ...updates }));
  }, []);

  const reset = useCallback(() => {
    setValues(initialState);
  }, [initialState]);

  const saveToHistory = useCallback(() => {
    setHistory(prev => [...prev, values]);
  }, [values]);

  const clearHistory = useCallback(() => {
    setHistory([]);
  }, []);

  return {
    values,
    updateValue,
    updateValues,
    reset,
    history,
    saveToHistory,
    clearHistory,
  };
}

/**
 * Hook for formatted currency display
 */
export function useFormattedCurrency(amount: number, decimals: number = 2): string {
  return useMemo(() => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(amount);
  }, [amount, decimals]);
}

/**
 * Hook for percentage formatting
 */
export function useFormattedPercentage(value: number, decimals: number = 2): string {
  return useMemo(() => {
    return new Intl.NumberFormat('en-US', {
      style: 'percent',
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(value / 100);
  }, [value, decimals]);
}
