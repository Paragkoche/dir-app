import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const SearchFilter = () => {
  return (
    <div className="flex items-start justify-start lg:w-[80%] gap-1.5">
      <DropdownMenu>
        <DropdownMenuTrigger>Category</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>s</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger>Sub-Category</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>s</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default SearchFilter;
