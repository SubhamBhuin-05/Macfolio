import React, { useEffect, useMemo, useState } from "react";

const DateTime = () => {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatted = useMemo(() => {
    const options = {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    };

    // macOS menu bar style: e.g. "Sat 8 Mar 10:23 AM"
    return now
      .toLocaleString(undefined, options)
      .replace(/,/g, "")
      .replace(/\s{2,}/g, " ");
  }, [now]);

  return (
    <div className="date-time" aria-label="Current date and time">
      {formatted}
    </div>
  );
};

export default DateTime;
