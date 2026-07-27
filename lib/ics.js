// Build a plain .ics calendar file from a list of all-day alerts.
// No tracking, no server round-trip, generated in the browser and
// downloaded. Meeting the user inside the calendar they already check.

function pad(n) {
  return String(n).padStart(2, "0");
}

function ymd(date) {
  return `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}`;
}

function fold(line) {
  // iCalendar lines should stay under 75 octets; simple fold at 73.
  if (line.length <= 73) return line;
  const out = [];
  let s = line;
  out.push(s.slice(0, 73));
  s = s.slice(73);
  while (s.length > 72) {
    out.push(" " + s.slice(0, 72));
    s = s.slice(72);
  }
  out.push(" " + s);
  return out.join("\r\n");
}

function esc(text) {
  return String(text).replace(/([,;\\])/g, "\\$1").replace(/\n/g, "\\n");
}

// alerts: [{ date: Date, title: string, description: string, uid: string }]
export function buildICS(alerts, stamp) {
  const dtstamp = `${ymd(stamp)}T000000Z`;
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Daykeep//Refill Cycle//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
  ];
  alerts.forEach((a, i) => {
    const next = new Date(a.date);
    next.setDate(next.getDate() + 1); // DTEND is exclusive for all-day.
    lines.push(
      "BEGIN:VEVENT",
      fold(`UID:${a.uid || `daykeep-${ymd(a.date)}-${i}@daykeep.app`}`),
      `DTSTAMP:${dtstamp}`,
      `DTSTART;VALUE=DATE:${ymd(a.date)}`,
      `DTEND;VALUE=DATE:${ymd(next)}`,
      fold(`SUMMARY:${esc(a.title)}`),
      fold(`DESCRIPTION:${esc(a.description || "")}`),
      "BEGIN:VALARM",
      "TRIGGER:-PT9H",
      "ACTION:DISPLAY",
      fold(`DESCRIPTION:${esc(a.title)}`),
      "END:VALARM",
      "END:VEVENT"
    );
  });
  lines.push("END:VCALENDAR");
  return lines.join("\r\n");
}

// From a last-fill date + days supply, the cycle's alert dates.
export function cycleAlerts(lastFill, daysSupply, medLabel) {
  const at = (n) => {
    const d = new Date(lastFill);
    d.setDate(d.getDate() + n);
    return d;
  };
  const med = medLabel ? `, ${medLabel}` : "";
  return [
    { date: at(22), title: `Request your next fill${med}`, description: "Day 22. Send the prescriber request now, before you run out." },
    { date: at(27), title: `Confirm the script transmitted${med}`, description: "Day 27. Check it arrived, and at which pharmacy." },
    { date: at(29), title: `Check stock and transfer if needed${med}`, description: "Day 29. If it is out of stock, use your transfer right." },
    { date: at(daysSupply), title: `Supply runs out${med}`, description: `Day ${daysSupply}. This is zero. You want the fill in hand before today.` },
  ];
}
