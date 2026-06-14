export default function Section({ id, kicker, title, intro, children }) {
  return (
    <section id={id} className="section reveal">
      <div className="section__head">
        <p className="section__kicker">{kicker}</p>
        <h2 className="section__title">{title}</h2>
        {intro && <p className="section__intro">{intro}</p>}
      </div>
      {children}
    </section>
  )
}
