export default function TimelineRow({ item, link }) {
  const title = link ? (
    <a href={link} target="_blank" rel="noopener noreferrer" className="cert-title-link">
      {item.title} {'\u2197'}
    </a>
  ) : (
    <p className="exp-combined-title">
      {item.company ? (
        <>
          {item.company}
          <span className="exp-dot"> · </span>
          {item.title}
        </>
      ) : (
        item.title
      )}
    </p>
  );

  const logo = item.logo ? (
    <img src={item.logo} alt={item.company || item.title} className={link ? 'project-logo-right' : 'exp-logo-right'} />
  ) : (
    <span className={link ? 'project-logo-right logo-badge' : 'exp-logo-right logo-badge'} aria-hidden="true">
      {item.logoText}
    </span>
  );

  return (
    <div className="exp-row">
      <div className="about-divider" />
      <div className="exp-row-inner">
        <div className="exp-body">
          {item.date && <span className="exp-date">{item.date}</span>}
          {title}
          <p className="exp-description">{item.description}</p>
        </div>
        {logo}
      </div>
    </div>
  );
}
