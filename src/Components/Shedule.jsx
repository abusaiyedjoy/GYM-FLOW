import Image from "next/image";

const schedule = {
  Monday: [
    { time: "9:00am - 10:00am", title: "FITNESS", color: "text-orange-500" },
    { time: "10:00am - 11:00am", title: "BODY BUILDING", color: "text-sky-500" },
    { time: "4:00pm - 5:00pm", title: "RUNNING", color: "text-purple-500" },
    { time: "6:00pm - 7:00pm", title: "FITNESS", color: "text-orange-500" },
  ],
  Tuesday: [
    { time: "9:00am - 10:00am", title: "BOXING", color: "text-red-500" },
    { time: "4:00pm - 5:00pm", title: "RUNNING", color: "text-purple-500" },
  ],
  Wednesday: [
    { time: "9:00am - 10:00am", title: "CYCLING", color: "text-lime-500" },
    { time: "11:00am - 12:00pm", title: "BODY BUILDING", color: "text-sky-500" },
  ],
  Thursday: [
    { time: "1:00pm - 2:00pm", title: "BOXING", color: "text-red-500" },
  ],
  Friday: [
    { time: "1:00pm - 2:00pm", title: "MEDITATION", color: "text-teal-500" },
  ],
  Saturday: [
    { time: "1:00pm - 2:00pm", title: "BOXING", color: "text-red-500" },
  ],
  Sunday: [
    { time: "10:00am - 11:00am", title: "BODY BUILDING", color: "text-sky-500" },
    { time: "4:00pm - 5:00pm", title: "RUNNING", color: "text-purple-500" },
  ],
};

const hours = [
  "9:00am",
  "10:00am",
  "11:00am",
  "1:00pm",
  "4:00pm",
  "6:00pm",
];

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function ClassSchedule() {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-20 relative overflow-hidden">
      <div className="text-center mb-12">
        <p className="text-sm uppercase font-bold text-white inline-block bg-red-500 px-4 py-1 rounded-full mb-2">
          Time & Table
        </p>
        <h2 className="text-3xl font-bold mb-2">Weekly Class Schedule</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Gymat an unknown printer took a galley of type and scrambled to make a type specimen book.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="p-3 border border-gray-700 text-left w-24">Time</th>
              {days.map((day) => (
                <th key={day} className="p-3 border border-gray-700 text-center">
                  {day.slice(0, 3).toUpperCase()}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {hours.map((hour) => (
              <tr key={hour}>
                <td className="p-3 border border-gray-700">{hour}</td>
                {days.map((day) => {
                  const slot = schedule[day]?.find((s) => s.time.startsWith(hour));
                  return (
                    <td key={day + hour} className="p-3 border border-gray-700 text-center">
                      {slot ? (
                        <div>
                          <div className={`font-bold ${slot.color}`}>{slot.title}</div>
                          <div className="text-xs text-gray-400">{slot.time}</div>
                          {day === "Friday" && hour === "1:00pm" && (
                            <div className="mt-2 bg-white text-black p-2 rounded shadow-lg text-left">
                              <div className="flex items-center gap-2">
                                <Image
                                  src=""
                                  alt="Trainer"
                                  className="w-10 h-10 rounded-full"
                                />
                                <div>
                                  <p className="text-sm font-semibold">Flex Wheeler</p>
                                  <p className="text-xs text-pink-600">Yoga Trainer</p>
                                  <button className="mt-1 text-xs text-white bg-red-500 px-2 py-1 rounded-full">
                                    View Profile
                                  </button>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      ) : (
                        ""
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
