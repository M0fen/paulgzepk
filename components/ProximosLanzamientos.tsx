"use client";

const RELEASES = [
  {
    track: "Unknown",
    feat: "Santos OG",
    location: "PEREIRA x MEDALLO",
    date: "ABRIL - XXXX",
    status: "confirmed" as const,
  },
  {
    track: "[ ENCRIPTADO ]",
    feat: null,
    location: null,
    date: "TBA",
    status: "encrypted" as const,
  },
  {
    track: "[ ENCRIPTADO ]",
    feat: null,
    location: null,
    date: "TBA",
    status: "encrypted" as const,
  },
];

export default function ProximosLanzamientos() {
  return (
    <section
      id="lanzamientos"
      className="relative w-full bg-black py-16 sm:py-24 px-4"
    >
      <div className="w-full max-w-4xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-neutral-800" />
          <h2 className="font-mono text-xs sm:text-sm tracking-[0.3em] text-neutral-500 uppercase whitespace-nowrap">
            [ RADAR DE LANZAMIENTOS ]
          </h2>
          <div className="h-px flex-1 bg-neutral-800" />
        </div>

        {/* Column Labels (desktop only) */}
        <div className="hidden sm:flex justify-between px-4 pb-3 border-b border-neutral-700">
          <div className="flex gap-12">
            <span className="font-mono text-[10px] tracking-[0.25em] text-neutral-600 uppercase w-44">
              TRACK
            </span>
            <span className="font-mono text-[10px] tracking-[0.25em] text-neutral-600 uppercase">
              FEAT / INFO
            </span>
          </div>
          <span className="font-mono text-[10px] tracking-[0.25em] text-neutral-600 uppercase">
            RELEASE
          </span>
        </div>

        {/* Data Rows */}
        <ul className="divide-y divide-neutral-800/60">
          {RELEASES.map((release, i) => (
            <li
              key={i}
              className="flex flex-col sm:flex-row sm:items-center justify-between py-4 px-4 hover:bg-neutral-900/50 transition-colors duration-200 group"
            >
              {/* Left block */}
              <div className="flex flex-col sm:flex-row sm:gap-12">
                {/* Track name */}
                <div className="flex items-center gap-2 sm:w-44">
                  {/* Status indicator */}
                  <span
                    className={`inline-block w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                      release.status === "confirmed"
                        ? "bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.6)]"
                        : "bg-neutral-700"
                    }`}
                  />
                  <span
                    className={`font-mono text-sm tracking-wide ${
                      release.status === "encrypted"
                        ? "text-neutral-600 blur-[0.5px] select-none"
                        : "text-white"
                    }`}
                  >
                    {release.track}
                  </span>
                </div>

                {/* Feat / Info */}
                <span className="font-mono text-xs text-neutral-400 tracking-wide mt-1 sm:mt-0 pl-4 sm:pl-0">
                  {release.feat
                    ? `ft. ${release.feat}`
                    : release.status === "encrypted"
                      ? "—"
                      : ""}
                  {release.location && (
                    <span className="text-neutral-600 ml-3">
                      // {release.location}
                    </span>
                  )}
                </span>
              </div>

              {/* Right block: Date */}
              <span
                className={`font-mono text-xs tracking-[0.2em] uppercase mt-2 sm:mt-0 pl-4 sm:pl-0 ${
                  release.status === "encrypted"
                    ? "text-neutral-600 blur-[1px] select-none"
                    : "text-white"
                }`}
              >
                {release.date}
              </span>
            </li>
          ))}
        </ul>

        {/* Footer line */}
        <div className="mt-8 flex items-center gap-3">
          <div className="h-px flex-1 bg-neutral-800" />
          <span className="font-mono text-[9px] tracking-[0.4em] text-neutral-700 uppercase">
            SYS.RADAR // LIVE_FEED
          </span>
          <div className="h-px flex-1 bg-neutral-800" />
        </div>

      </div>
    </section>
  );
}
