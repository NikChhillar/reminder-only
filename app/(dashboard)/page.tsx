import { Skeleton } from "@/components/ui/skeleton";
import { currentUser } from "@clerk/nextjs";
import { Suspense } from "react";

async function WelcomMsg() {
  const user = await currentUser();

  if (!user) {
    return <div>error</div>;
  }

  return (
    <div className="flex w-full mb-12">
      <h1 className="text-4xl font-bold">
        Welcome, <br /> {user.firstName} {user.lastName}
      </h1>
    </div>
  );
}

function WelcomeMsgFallBack() {
  return (
    <div className="flex w-full mb-12">
      <h1 className="text-4xl font-bold">
        <Skeleton className="w-[180px] h-[36px]" />
        <Skeleton className="w-[250px] h-[36px]" />
      </h1>
    </div>
  );
}

const DashboardPage = async () => {
  return (
    <>
      <Suspense fallback={<WelcomeMsgFallBack />}>
        <WelcomMsg />
      </Suspense>
    </>
  );
};

export default DashboardPage;
