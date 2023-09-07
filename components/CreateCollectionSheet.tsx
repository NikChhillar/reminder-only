import { Sheet, SheetContent, SheetDescription, SheetHeader } from "./ui/sheet";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function CreateCollectionSheet({ open, onOpenChange }: Props) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent>
        <SheetHeader>Add new collection...</SheetHeader>
        <SheetDescription>
          Create collections for your tasks like anime collection, coding
          collection...
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
}
