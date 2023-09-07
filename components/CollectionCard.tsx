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
import { ChevronDown, ChevronUp, Plus, Trash } from "lucide-react";
import { Progress } from "./ui/progress";
import TaskCard from "./TaskCard";
import { Separator } from "./ui/separator";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { deleteCollection } from "@/actions/collections";
import { toast } from "./ui/use-toast";
import { useRouter } from "next/navigation";

interface Props {
  collection: Collection;
}

const tasks: string[] = ["1", "2", "3"];

const CollectionCard = ({ collection }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const [showCreateModal, setShowCreateModal] = useState(false);

  const removeCollection = async () => {
    try {
      await deleteCollection(collection.id);
      toast({
        title: "Success",
        description: "Successfully deleted....",
      });
      router.refresh();
    } catch (e) {
      toast({
        title: "Error",
        description: "Failed to delete the task collection",
        variant: "destructive",
      });
    }
  };

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
        <CollapsibleContent className="flex rounded-b-md flex-col dark:bg-neutral-900 shadow-lg">
          {tasks.length === 0 && <div>No tasks</div>}
          {tasks.length > 0 && (
            <>
              <Progress className="rounded-none" value={50} />
              <div className="p-4 gap-3 flex flex-col">
                {tasks.map((task, i) => (
                  <TaskCard key={i} />
                ))}
              </div>
            </>
          )}

          <Separator />
          <footer className="h-[40px] px-4 p-[2px] text-xs text-neutral-500 flex justify-between items-center ">
            <p>
              Created at {collection.createdAt.toLocaleDateString("en-US")}{" "}
            </p>
            <div>
              <Button size={"icon"} variant={"ghost"}>
                <Plus className="w-4 h-4" />
              </Button>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button size={"icon"} variant={"ghost"}>
                    <Trash className="w-4 h-4" />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogTitle>
                    Delete this task collection..?
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    You sure... you want to delete this..? This will permanently
                    delete your collection and all tasks inside it.
                  </AlertDialogDescription>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => removeCollection()}>
                      Proceed
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </footer>
        </CollapsibleContent>
      </Collapsible>
    </>
  );
};

export default CollectionCard;
