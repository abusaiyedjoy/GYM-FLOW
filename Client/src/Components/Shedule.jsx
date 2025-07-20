import Image from "next/image";
import Title from "./ui/Title";
import { days, hours, schedule } from "./Resource";


export default function ClassSchedule() {
  return (
    <section className="bg-[#F9FAFB] text-white pb-12 px-4 md:px-20 relative overflow-hidden">
      <div className="text-center mb-12">
        <p className="text-sm uppercase font-bold text-primary inline-block px-4 py-1 rounded-full">
          Time & Table
        </p>
        <Title className="!mt-0" title={"Weekly Class Schedule"} description={"Gymat an unknown printer took a galley of type and scrambled to make a type specimen book."} />
      </div>

      <div className="overflow-x-auto rounded-lg">
        <table className="w-full text-sm bg-black rounded-lg">
          <thead>
            <tr>
              <th className="p-3 border border-gray-700 text-left w-24">Time</th>
              {days?.map((day) => (
                <th key={day} className="p-3 border border-gray-700 text-center">
                  {day.slice(0, 3).toUpperCase()}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {hours?.map((hour) => (
              <tr key={hour}>
                <td className="p-3 border border-gray-700">{hour}</td>
                {days?.map((day) => {
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
