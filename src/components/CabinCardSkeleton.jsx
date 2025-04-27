
import { Card } from "@/components/ui/card";

const CabinCardSkeleton = () => {
  return (
    <Card className="overflow-hidden">
      <div className="w-full h-48 bg-gray-200 animate-pulse rounded-t-lg"></div>
      <div className="p-4 space-y-3">
        <div className="h-6 bg-gray-200 animate-pulse rounded-md w-3/4"></div>
        <div className="h-4 bg-gray-200 animate-pulse rounded-md w-1/2"></div>
        <div className="flex justify-between items-center pt-2">
          <div className="h-5 bg-gray-200 animate-pulse rounded-md w-1/4"></div>
          <div className="h-8 bg-gray-200 animate-pulse rounded-md w-1/4"></div>
        </div>
      </div>
    </Card>
  );
};

export default CabinCardSkeleton;
