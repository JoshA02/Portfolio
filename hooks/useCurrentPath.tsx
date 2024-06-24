import { usePathname } from 'next/navigation';

export default function useCurrentPath(path: string): boolean {
  const currentPath = usePathname();
  return currentPath === path;
}