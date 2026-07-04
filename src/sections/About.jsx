import { socialLinks } from '../data/portfolio';
import SocialLink from '../ui/SocialLink';

const profileImage = `${import.meta.env.BASE_URL}images/profile-pic.jpg`;

export default function About() {
  return (
    <section id="about" className="modern-section about-section">
      <div className="container">
        <div className="about-hero-grid">
          <div className="about-hero-left">
            <h1 className="about-hero-name">jaideep ponnam</h1>
            <p className="about-hero-tagline">software developer, backend systems, and cloud architecture.</p>
            <div className="about-social-links">
              {socialLinks.map((link) => (
                <SocialLink key={link.href} {...link} />
              ))}
            </div>
          </div>

          <div className="about-hero-right">
            <img
              src={profileImage}
              alt="Jaideep Ponnam"
              className="about-hero-photo"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
