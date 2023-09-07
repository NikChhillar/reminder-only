import { Collection } from "@prisma/client";


interface Props {
  collection: Collection & {
    tasks: [];
  };
}

const CollectionCard = ({ collection }: Props) => {
  return (
    <div>CollectionCard</div>
  )
}

export default CollectionCard