import {Input} from "@/components/ui/input"
import { Icons } from '@/components/icons'

interface SearchBarProps {
  placeholder: string;
}

export function SearchBar({ placeholder }: SearchBarProps) {
  return (
    <div className="flex items-center w-full max-w-md mx-auto">
      <div className="relative">
        <Icons.search className="absolute left-3 top-2 w-5 h-5" />
        <Input
          className="w-full rounded-full border border-gray-50 bg-white py-3 pl-12 pr-4 text-sm focus:border-neutral-700 focus:outline-none focus:ring-1 focus:ring-neutral-500 dark:border-neutal-600 dark:bg-neutral-800 dark:text-neutral-200 dark:focus:border-neutral-500 dark:focus:ring-neutral-500"
          placeholder={placeholder}
          type="search"
        />
      </div>
    </div>
  )
}