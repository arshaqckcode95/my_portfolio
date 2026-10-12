/** Shared section shell: anchor offset, vertical rhythm, max-width gutter. */
export default function Section({ id, className = "", children }) {
  return (
    <section id={id} className={`scroll-mt-28 py-24 md:py-36 ${className}`}>
      <div className="mx-auto max-w-6xl px-5 md:px-8">{children}</div>
    </section>
  );
}
