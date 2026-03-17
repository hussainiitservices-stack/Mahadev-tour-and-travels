import { motion } from "framer-motion";

const LoadingScreen = () => (
  <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    className="loading-screen"
  >
    {/* Keyframes injected into the document head via a real style tag */}
    <style>{`
      @keyframes roadScroll {
        from { transform: translateX(0px); }
        to   { transform: translateX(-56px); }
      }
      @keyframes wheelSpin {
        from { transform: rotate(0deg); }
        to   { transform: rotate(360deg); }
      }
      @keyframes carFloat {
        0%,100% { transform: translateY(0px); }
        50%     { transform: translateY(-2px); }
      }
      .mtt-road-dashes {
        animation: roadScroll 0.5s linear infinite;
      }
      .mtt-front-wheel {
        transform-box: fill-box;
        transform-origin: center;
        animation: wheelSpin 0.5s linear infinite;
      }
      .mtt-rear-wheel {
        transform-box: fill-box;
        transform-origin: center;
        animation: wheelSpin 0.5s linear infinite;
      }
      .mtt-car {
        animation: carFloat 1s ease-in-out infinite;
      }
    `}</style>

    <div className="flex flex-col items-center gap-6 select-none">

      {/* Scene container */}
      <div style={{ width: 280, height: 90, position: "relative", overflow: "hidden" }}>
        <svg
          width="280"
          height="90"
          viewBox="0 0 280 90"
          style={{ position: "absolute", inset: 0 }}
        >
          {/* Ground line */}
          <line
            x1="0" y1="78" x2="280" y2="78"
            stroke="#f97316" strokeWidth="1.5" strokeOpacity="0.25"
          />

          {/* ── Road dashes scrolling ── */}
          <g className="mtt-road-dashes">
            {[0, 56, 112, 168, 224, 280, 336].map((x) => (
              <rect
                key={x}
                x={x} y="82"
                width="32" height="3"
                rx="1.5"
                fill="#f97316"
                opacity="0.35"
              />
            ))}
          </g>

          {/* ── Car body ── */}
          <g className="mtt-car">

            {/* Body silhouette */}
            <path
              d="M55 68 L55 52 Q57 44 68 44 L88 44 L104 26 Q108 20 118 20
                 L168 20 Q180 20 186 26 L204 44 L222 44 Q234 44 236 52 L236 68 Z"
              fill="none"
              stroke="#f97316"
              strokeWidth="2.2"
              strokeLinejoin="round"
              strokeLinecap="round"
            />

            {/* Windscreen */}
            <path
              d="M104 26 L96 44 L148 44 L148 22 Q140 20 128 20 Q116 20 104 26 Z"
              fill="none"
              stroke="#f97316"
              strokeWidth="1.4"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeOpacity="0.65"
            />

            {/* Rear window */}
            <path
              d="M186 26 L198 44 L152 44 L152 22 Q164 20 174 20 Q180 20 186 26 Z"
              fill="none"
              stroke="#f97316"
              strokeWidth="1.4"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeOpacity="0.65"
            />

            {/* Door line */}
            <line
              x1="149" y1="22" x2="150" y2="66"
              stroke="#f97316" strokeWidth="1.2" strokeOpacity="0.45" strokeLinecap="round"
            />

            {/* Headlight */}
            <circle cx="229" cy="54" r="3.5" fill="none" stroke="#f97316" strokeWidth="1.4" strokeOpacity="0.8" />

            {/* Tail light */}
            <rect x="57" y="50" width="5" height="8" rx="1.5" fill="none" stroke="#f97316" strokeWidth="1.4" strokeOpacity="0.6" />

            {/* Front bumper */}
            <path d="M230 60 Q238 62 240 66 L236 68" fill="none" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.55" />

            {/* Rear bumper */}
            <path d="M60 60 Q53 62 52 66 L55 68" fill="none" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.55" />

            {/* ── Front wheel ── */}
            <circle cx="195" cy="68" r="14" fill="none" stroke="#f97316" strokeWidth="2.2" />
            <g className="mtt-front-wheel">
              {/* spokes + hub drawn relative to wheel centre 195,68 */}
              <circle cx="195" cy="68" r="4.5" fill="none" stroke="#f97316" strokeWidth="1.8" />
              <line x1="195" y1="54" x2="195" y2="58" stroke="#f97316" strokeWidth="1.4" strokeOpacity="0.7" />
              <line x1="195" y1="78" x2="195" y2="82" stroke="#f97316" strokeWidth="1.4" strokeOpacity="0.7" />
              <line x1="181" y1="68" x2="185" y2="68" stroke="#f97316" strokeWidth="1.4" strokeOpacity="0.7" />
              <line x1="205" y1="68" x2="209" y2="68" stroke="#f97316" strokeWidth="1.4" strokeOpacity="0.7" />
              <line x1="185" y1="58" x2="188" y2="61" stroke="#f97316" strokeWidth="1.4" strokeOpacity="0.7" />
              <line x1="202" y1="75" x2="205" y2="78" stroke="#f97316" strokeWidth="1.4" strokeOpacity="0.7" />
              <line x1="205" y1="58" x2="202" y2="61" stroke="#f97316" strokeWidth="1.4" strokeOpacity="0.7" />
              <line x1="185" y1="78" x2="188" y2="75" stroke="#f97316" strokeWidth="1.4" strokeOpacity="0.7" />
            </g>

            {/* ── Rear wheel ── */}
            <circle cx="95" cy="68" r="14" fill="none" stroke="#f97316" strokeWidth="2.2" />
            <g className="mtt-rear-wheel">
              <circle cx="95" cy="68" r="4.5" fill="none" stroke="#f97316" strokeWidth="1.8" />
              <line x1="95" y1="54" x2="95" y2="58" stroke="#f97316" strokeWidth="1.4" strokeOpacity="0.7" />
              <line x1="95" y1="78" x2="95" y2="82" stroke="#f97316" strokeWidth="1.4" strokeOpacity="0.7" />
              <line x1="81" y1="68" x2="85" y2="68" stroke="#f97316" strokeWidth="1.4" strokeOpacity="0.7" />
              <line x1="105" y1="68" x2="109" y2="68" stroke="#f97316" strokeWidth="1.4" strokeOpacity="0.7" />
              <line x1="85" y1="58" x2="88" y2="61" stroke="#f97316" strokeWidth="1.4" strokeOpacity="0.7" />
              <line x1="102" y1="75" x2="105" y2="78" stroke="#f97316" strokeWidth="1.4" strokeOpacity="0.7" />
              <line x1="105" y1="58" x2="102" y2="61" stroke="#f97316" strokeWidth="1.4" strokeOpacity="0.7" />
              <line x1="85" y1="78" x2="88" y2="75" stroke="#f97316" strokeWidth="1.4" strokeOpacity="0.7" />
            </g>

          </g>{/* end mtt-car */}
        </svg>
      </div>

      {/* Brand name */}
      <motion.span
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-sm font-semibold tracking-widest uppercase text-primary"
      >
        Mahadev Tours &amp; Travels
      </motion.span>

    </div>
  </motion.div>
);

export default LoadingScreen;