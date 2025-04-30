import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

const DateRangePicker = ({
  checkInDate,
  checkOutDate,
  onCheckInChange,
  onCheckOutChange,
  className
}) => {
  const [isCheckInOpen, setIsCheckInOpen] = useState(false);
  const [isCheckOutOpen, setIsCheckOutOpen] = useState(false);

  // Format the date display text
  const formatDateOrPlaceholder = (date, placeholder) => {
    return date ? format(date, "MMM dd, yyyy") : placeholder;
  };

  // Disable dates before today for check-in and before check-in date for check-out
  const disableCheckInDates = (date) => {
    return date < new Date(new Date().setHours(0, 0, 0, 0));
  };

  const disableCheckOutDates = (date) => {
    if (!checkInDate) return disableCheckInDates(date);
    return date <= checkInDate;
  };

  return (
    <div className={cn("flex flex-col sm:flex-row gap-3", className)}>
      {/* Check-in Date Picker */}
      <div className="flex-1">
        <Popover open={isCheckInOpen} onOpenChange={setIsCheckInOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "justify-start text-left font-normal w-full bg-wood-50 border-cabin-200 hover:bg-wood-100",
                !checkInDate && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4 text-cabin-500" />
              {formatDateOrPlaceholder(checkInDate, "Check-in date")}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={checkInDate}
              onSelect={(date) => {
                onCheckInChange(date);
                setIsCheckInOpen(false);
                // If check-out date is not set or is before check-in, open check-out picker
                if (!checkOutDate || (date && checkOutDate <= date)) {
                  setTimeout(() => setIsCheckOutOpen(true), 100);
                }
              }}
              disabled={disableCheckInDates}
              initialFocus
              className="p-3 pointer-events-auto"
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Check-out Date Picker */}
      <div className="flex-1">
        <Popover open={isCheckOutOpen} onOpenChange={setIsCheckOutOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "justify-start text-left font-normal w-full bg-wood-50 border-cabin-200 hover:bg-wood-100",
                !checkOutDate && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4 text-cabin-500" />
              {formatDateOrPlaceholder(checkOutDate, "Check-out date")}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={checkOutDate}
              onSelect={(date) => {
                onCheckOutChange(date);
                setIsCheckOutOpen(false);
              }}
              disabled={disableCheckOutDates}
              initialFocus
              className="p-3 pointer-events-auto"
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default DateRangePicker