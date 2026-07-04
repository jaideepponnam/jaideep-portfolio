export default function SocialLink({ href, icon, label }) {
  const isExternal = href.startsWith('http') || href.startsWith('mailto:');

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="about-social-link"
      aria-label={label}
    >
      <i className={icon} />
      <span>{label}</span>
    </a>
  );
}
