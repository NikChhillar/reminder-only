"use client";

import { Collection } from "@prisma/client";

interface Props {
  open: boolean;
  collection: Collection;
  setOpen: (open: boolean) => void;
}

export default function CreateTaskDialog({ open, setOpen, collection }: Props) {
  return <div>CreateTaskDialog</div>;
}
