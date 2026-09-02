export interface PubStatusInfo {
  isOpen: boolean;
  statusText: string;
  nextEventText: string;
  dotColor: string;
}

export function getBenjaminPubStatus(): PubStatusInfo {
  const now = new Date();
  const day = now.getDay(); // 0 is Sunday, 1 is Monday, ..., 6 is Saturday
  const hour = now.getHours();
  const minute = now.getMinutes();
  const currentMinutes = hour * 60 + minute;

  // Open Wed (3), Thu (4), Fri (5), Sat (6), Sun (0)
  // Hours: 5:00 PM (17:00 = 1020 mins) to 11:00 PM (23:00 = 1380 mins)
  const isPubDay = day === 0 || (day >= 3 && day <= 6);
  const openTimeMinutes = 17 * 60; // 5:00 PM
  const closeTimeMinutes = 23 * 60; // 11:00 PM

  const isOpen = isPubDay && currentMinutes >= openTimeMinutes && currentMinutes < closeTimeMinutes;

  if (isOpen) {
    const minutesLeft = closeTimeMinutes - currentMinutes;
    const hoursLeft = Math.floor(minutesLeft / 60);
    const minsRem = minutesLeft % 60;
    const timeString = hoursLeft > 0 ? `${hoursLeft}h ${minsRem}m` : `${minsRem}m`;

    return {
      isOpen: true,
      statusText: "Open Tonight Until 11 PM",
      nextEventText: `Taps flowing • Closes in ${timeString}`,
      dotColor: "bg-emerald-400",
    };
  }

  // If closed, figure out when next open
  if (isPubDay && currentMinutes < openTimeMinutes) {
    const minutesToOpen = openTimeMinutes - currentMinutes;
    const hoursToOpen = Math.floor(minutesToOpen / 60);
    return {
      isOpen: false,
      statusText: "Opens Today at 5:00 PM",
      nextEventText: `Doors open in ${hoursToOpen} hours • Scratch kitchen prepping`,
      dotColor: "bg-amber-400",
    };
  }

  // Days closed (Mon/Tue or late night)
  let nextDayStr = "Wednesday";
  if (day === 0 && currentMinutes >= closeTimeMinutes) nextDayStr = "Wednesday";
  else if (day === 1 || day === 2) nextDayStr = "Wednesday";
  else if (day >= 3 && day <= 5 && currentMinutes >= closeTimeMinutes) nextDayStr = "Tomorrow";
  else if (day === 6 && currentMinutes >= closeTimeMinutes) nextDayStr = "Sunday";

  return {
    isOpen: false,
    statusText: "Closed Now",
    nextEventText: `Reopens ${nextDayStr} at 5:00 PM`,
    dotColor: "bg-rose-500",
  };
}
