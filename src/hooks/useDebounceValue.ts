import { useState, useEffect, useRef } from "react";

/**
 * @name useDebounceValue 防抖更新
 * @param value 需要防抖的值
 * @param timer 延迟毫秒数
 */
export default function useDebounceValue<T>(value: T, delay: number = 200): T {
  const timer = useRef<NodeJS.Timeout>(null!);

  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setDebouncedValue(value), delay);
    return () => {
      clearTimeout(timer.current);
    };
  }, [value, delay]);

  return debouncedValue;
}
