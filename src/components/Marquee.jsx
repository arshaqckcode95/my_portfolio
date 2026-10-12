/**
 * Infinite horizontal marquee. Renders `items` twice so the CSS keyframe
 * (translateX -50%) loops seamlessly. Pauses on hover.
 */
export default function Marquee({ items, duration = 30, className = "" }) {
  const row = (ariaHidden) => (
    <div aria-hidden={ariaHidden} className="flex shrink-0 items-center">
      {items.map((item, i) => (
        <span key={i} className="flex items-center whitespace-nowrap">
          <span className="px-5">{item}</span>
          <span className="select-none text-flame-500">✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="marquee-track" style={{ "--marquee-duration": `${duration}s` }}>
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
