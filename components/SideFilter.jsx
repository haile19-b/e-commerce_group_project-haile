"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const productCategories = [
  {
    value: "electronics",
    label: "Electronics",
  },
  {
    value: "clothing",
    label: "Clothing",
  },
  {
    value: "home-garden",
    label: "Home & Garden",
  },
  {
    value: "beauty",
    label: "Beauty & Personal Care",
  },
  {
    value: "sports",
    label: "Sports & Outdoors",
  },
  {
    value: "toys",
    label: "Toys & Games",
  },
  {
    value: "books",
    label: "Books & Media",
  },
  {
    value: "food",
    label: "Food & Grocery",
  },
  {
    value: "health",
    label: "Health & Wellness",
  },
  {
    value: "automotive",
    label: "Automotive",
  },
  {
    value: "office",
    label: "Office Supplies",
  },
  {
    value: "pet",
    label: "Pet Supplies",
  },
]

export function SideFilter() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? productCategories.find((category) => category.value === value)?.label
            : "Select category..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search categories..." />
          <CommandList>
            <CommandEmpty>No category found.</CommandEmpty>
            <CommandGroup>
              {productCategories.map((category) => (
                <CommandItem
                  key={category.value}
                  value={category.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === category.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {category.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}