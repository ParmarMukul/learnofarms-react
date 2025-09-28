const items = [
  {
    title: 'Polyhouse Farming',
    desc: 'Advanced controlled-environment agriculture for optimal crop yields and year-round quality vegetables.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M4 20c3-6 7-9 10-10M6 10c4 0 7-3 8-7" />
        <path d="M12 20c-1-4 0-7 3-10" />
      </svg>
    ),
  },
  {
    title: 'Expert Training',
    desc: 'Comprehensive hands-on programs designed by agricultural experts and successful farmers.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M4 20h16M6 18l3-12h6l3 12M9 10h6" />
      </svg>
    ),
  },
  {
    title: 'Profitable Returns',
    desc: 'Proven farming models that increase income through smart agricultural practices.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M3 20h18M6 17l4-6 3 4 4-7" />
        <circle cx="6" cy="17" r="1.5" />
        <circle cx="13" cy="15" r="1.5" />
        <circle cx="17" cy="10" r="1.5" />
      </svg>
    ),
  },
  {
    title: 'Community Support',
    desc: 'Join a thriving community of farmers sharing knowledge, experiences, and success stories.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Z" />
        <path d="M2 22a10 10 0 0 1 20 0" />
      </svg>
    ),
  },
  {
    title: 'Hi-Tech Solutions',
    desc: 'Automated irrigation, climate control, and monitoring systems for modern agriculture.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v10M9 9h6M9 15h6" />
      </svg>
    ),
  },
  {
    title: 'Sustainable Practices',
    desc: 'Eco-friendly methods that protect the environment and support long-term productivity.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M12 22C5 20 3 12 8 7c3-3 8-3 11 0-1 6-5 11-7 15z" />
      </svg>
    ),
  },
];

export default function WhyChoose() {
  return (
    <section className="section" id="why">
      <div className="container">
        <h2>Why Choose Learnofarms</h2>
        <p className="lead">
          We combine traditional farming wisdom with modern technology to create sustainable and profitable agricultural solutions for the future.
        </p>

        <div className="grid">
          {items.map(({ title, desc, icon }, index) => (
            <article className="card" key={index}>
              <div className="icon">{icon}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
