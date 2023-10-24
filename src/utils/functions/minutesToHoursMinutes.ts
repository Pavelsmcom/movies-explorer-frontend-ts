export default function minutesToHoursMinutes(minutes: number) {
  minutes = Number(minutes);

  return Math.floor(minutes / 60) + "ч " + (minutes % 60) + "м";
}
