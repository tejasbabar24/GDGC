import React, { useEffect, useState } from "react";

// ✅ Reusable Counter Hook
function useCounter(target, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 50); // update every 50ms

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(Math.ceil(start));
      }
    }, 50);

    return () => clearInterval(counter);
  }, [target, duration]);

  return count;
}

function Events() {
  const events = useCounter(44, 2000);     // 2s duration
  const workshops = useCounter(7, 2000);
  const members = useCounter(1200, 2500);  // 2.5s duration

  return (
    <section className="text-center py-16 bg-white">
      {/* Title */}
      <h2 className="text-4xl font-extrabold mb-8">
        EVENTS <span className="text-blue-600">&</span> WORKSHOPS
      </h2>

      {/* Stats */}
      <div className="flex justify-center gap-16 mb-12">
        <div>
          <h3 className="text-4xl font-bold">{events}</h3>
          <p className="text-red-500 font-semibold">Events</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold">{workshops}</h3>
          <p className="text-green-600 font-semibold">Workshop</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold">
            {members}
            <span className="text-black">+</span>
          </h3>
          <p className="text-yellow-500 font-semibold">Members</p>
        </div>
      </div>

      {/* Upcoming Events */}
      <h3 className="text-2xl font-bold text-blue-600">Upcoming Events</h3>
    </section>
  );
}

export default Events;
