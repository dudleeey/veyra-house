import { useState } from "react";

const navItems = ["Story", "Suites", "Experience", "Gallery", "Journal", "Contact"];

const suites = [
  {
    name: "The Clay Suite",
    price: "from €180/night",
    details: "King bed · Private terrace · Handmade interiors",
    description:
      "Earth-toned textures, soft shadows, and a quiet corner made for unhurried mornings.",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "The Atrium Room",
    price: "from €240/night",
    details: "Atrium view · Stone bathroom · Artisan lighting",
    description:
      "A luminous room opening into the courtyard, where olive leaves and filtered sun shape the day.",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "The Sea Light Loft",
    price: "from €320/night",
    details: "Loft lounge · Sea glimpses · Curated design library",
    description:
      "An elevated retreat layered with linen, warm woods, and evening light drifting in from the coast.",
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
  },
];

const experiences = [
  {
    title: "Courtyard breakfast",
    description: "Fresh Cretan fruit, warm bread, and slow coffee under bougainvillea shade.",
    image:
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Sunset wine tasting",
    description: "A private terrace ritual with local varieties and sea-gold evenings.",
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Local ceramics & design",
    description: "Hands-on studio visits and stories behind Chania's contemporary makers.",
    image:
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Private Chania guide",
    description: "A curated walk through hidden alleys, old stones, and quiet city corners.",
    image:
      "https://images.unsplash.com/photo-1561998338-13ad7883b20f?auto=format&fit=crop&w=800&q=80",
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1300&q=80",
  "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1300&q=80",
  "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1300&q=80",
  "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1300&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1300&q=80",
  "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1300&q=80",
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1300&q=80",
  "https://images.unsplash.com/photo-1616047006789-b7af3e47f6e4?auto=format&fit=crop&w=1300&q=80",
];

const journal = [
  {
    title: "A slow morning in Chania Old Town",
    excerpt: "Stone lanes, early light, and the small rituals that define a better pace of travel.",
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Hidden sunset spots near the harbor",
    excerpt: "Three quiet viewpoints where sea, architecture, and evening color meet naturally.",
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "The materials behind Veyra House",
    excerpt: "Inside our palette of linen, clay, stone, and handcrafted ceramics from local studios.",
    image:
      "https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=900&q=80",
  },
];

const reviews = [
  { name: "Elena M.", country: "Italy", rating: "★★★★★", quote: "Every corner felt intentional and calm." },
  { name: "Noah R.", country: "Canada", rating: "★★★★★", quote: "A place you remember long after leaving." },
  { name: "Camille D.", country: "France", rating: "★★★★★", quote: "More than a hotel — a complete experience." },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    event.target.reset();
  };

  return (
    <div className="app">
      {/* Header / Navbar */}
      <header className="header">
        <a className="logo" href="#hero">
          Veyra House
        </a>
        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          ))}
          <a className="btn btn-small" href="#contact">
            Reserve
          </a>
        </nav>
      </header>

      <main>
        {/* Hero section */}
        <section id="hero" className="hero">
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="hero-location">Chania, Crete</p>
            <h1>A quiet design retreat in the heart of Crete</h1>
            <p className="hero-sub">An intimate boutique stay shaped by light, texture, and slow living.</p>
            <div className="hero-actions">
              <a href="#story" className="btn btn-light">
                Explore the House
              </a>
              <a href="#contact" className="btn btn-outline">
                Reserve Your Stay
              </a>
            </div>
          </div>
        </section>

        {/* Brand Story section */}
        <section id="story" className="section story">
          <div className="container">
            <h2>Not just a place to stay — a place to feel</h2>
            <p>
              Veyra House was designed for slow mornings and quiet evenings, where natural light moves softly across
              stone and linen. Handcrafted details, warm Mediterranean textures, and thoughtfully private spaces
              create an atmosphere that feels calm, personal, and deeply lived-in.
            </p>
            <div className="values">
              <div>Slow living</div>
              <div>Local craftsmanship</div>
              <div>Intimate design</div>
            </div>
          </div>
        </section>

        {/* Suites section */}
        <section id="suites" className="section suites">
          <div className="container">
            <h2>Suites shaped by material, mood, and light</h2>
            <div className="suite-grid">
              {suites.map((suite, index) => (
                <article className={`suite-card suite-${index + 1}`} key={suite.name}>
                  <img src={suite.image} alt={suite.name} />
                  <div className="suite-content">
                    <p className="suite-price">{suite.price}</p>
                    <h3>{suite.name}</h3>
                    <p>{suite.description}</p>
                    <small>{suite.details}</small>
                    <a href="#contact" className="text-link">
                      Discover Suite
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Experience section */}
        <section id="experience" className="section experience">
          <div className="container">
            <h2>Curated moments, quietly unforgettable</h2>
            <div className="experience-grid">
              {experiences.map((item) => (
                <article className="experience-card" key={item.title}>
                  <img src={item.image} alt={item.title} />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Design details section */}
        <section className="section design-details">
          <div className="container design-wrap">
            <img
              src="https://images.unsplash.com/photo-1618220048045-10a6dbdf83e0?auto=format&fit=crop&w=1200&q=80"
              alt="Natural textures and handmade ceramics"
            />
            <div>
              <h2>Designed with tactile Mediterranean warmth</h2>
              <p>
                From natural stone walls to linen fabrics and warm ambient lighting, every element is chosen for
                softness and depth. Wood textures and handmade ceramics bring an earthy rhythm that makes each space
                feel grounded, quiet, and human.
              </p>
              <ul>
                <li>Natural stone</li>
                <li>Linen fabrics</li>
                <li>Warm lighting</li>
                <li>Wood textures</li>
                <li>Handmade ceramics</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Gallery section */}
        <section id="gallery" className="section gallery">
          <div className="container">
            <h2>Atmosphere in frames</h2>
            <div className="gallery-grid">
              {gallery.map((image, index) => (
                <img key={image} src={image} alt={`Veyra House mood ${index + 1}`} />
              ))}
            </div>
          </div>
        </section>

        {/* Journal section */}
        <section id="journal" className="section journal">
          <div className="container">
            <h2>Journal / Local Guide</h2>
            <div className="journal-grid">
              {journal.map((entry) => (
                <article className="journal-card" key={entry.title}>
                  <img src={entry.image} alt={entry.title} />
                  <div>
                    <h3>{entry.title}</h3>
                    <p>{entry.excerpt}</p>
                    <button type="button" className="text-link">
                      Read More
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews section */}
        <section className="section reviews">
          <div className="container">
            <h2>Guest reflections</h2>
            <div className="reviews-grid">
              {reviews.map((review) => (
                <article className="review-card" key={review.name}>
                  <p className="rating">{review.rating}</p>
                  <p className="quote">"{review.quote}"</p>
                  <p className="author">
                    {review.name} · {review.country}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Reservation section */}
        <section id="contact" className="section reservation">
          <div className="container reservation-wrap">
            <div>
              <h2>Reserve your stay at Veyra House</h2>
              <p>
                Share your preferred dates and suite. Our team will return with a thoughtful proposal tailored to your
                stay.
              </p>
              <p className="trust">Direct reservation request · Response within 24 hours</p>
            </div>
            <form onSubmit={handleSubmit} className="reservation-form">
              <label>
                Full name
                <input type="text" name="name" required />
              </label>
              <label>
                Email
                <input type="email" name="email" required />
              </label>
              <label>
                Arrival date
                <input type="date" name="arrival" required />
              </label>
              <label>
                Departure date
                <input type="date" name="departure" required />
              </label>
              <label>
                Preferred suite
                <select name="suite" required>
                  <option value="">Select a suite</option>
                  {suites.map((suite) => (
                    <option key={suite.name} value={suite.name}>
                      {suite.name}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Message
                <textarea name="message" rows="4" placeholder="Tell us about your stay style..." />
              </label>
              <button className="btn btn-dark" type="submit">
                Submit Request
              </button>
              {isSubmitted && <p className="success">Thank you. Your reservation request has been received.</p>}
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <h3>Veyra House</h3>
            <p>18 Serifos Lane, Old Port District, Chania, Crete</p>
            <p>stay@veyrahouse.com</p>
            <p>+30 2821 00 4268</p>
          </div>
          <div>
            <h4>Quick links</h4>
            <div className="footer-links">
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`}>
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
        <p className="demo-note">Demo website created for portfolio purposes.</p>
      </footer>
    </div>
  );
}

export default App;
