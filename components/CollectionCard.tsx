"use client";

import { Collection } from "@prisma/client";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { CollectionColor, CollectionColors } from "@/lib/constants";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Props {
  collection: Collection;
}

const CollectionCard = ({ collection }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <Button
            variant={"ghost"}
            className={cn(
              "flex w-full justify-between p-6",
              isOpen && "rounded-b-none",
              CollectionColors[collection.color as CollectionColor]
            )}
          >
            <span className="text-white font-bold">{collection.name}</span>
            {!isOpen && <ChevronDown className="h-6 w-6" />}
            {isOpen && <ChevronUp className="h-6 w-6" />}
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="flex items-center gap-1 p-8 py-12 rounded-none"></CollapsibleContent>
      </Collapsible>
    </>
  );
};

export default CollectionCard;
