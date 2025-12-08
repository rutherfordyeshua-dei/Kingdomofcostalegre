import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 shadow-lg border-b-2 border-purple-500"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-4">
          <ul className="flex justify-center flex-wrap gap-6 md:gap-8">
            <li>
              <button
                onClick={() => scrollToSection("gnosis")}
                className={`font-serif text-sm md:text-base font-semibold transition-all ${
                  scrolled
                    ? "text-purple-700 hover:text-purple-900"
                    : "text-white hover:text-purple-200"
                }`}
              >
                The Gnosis
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("magdalene")}
                className={`font-serif text-sm md:text-base font-semibold transition-all ${
                  scrolled
                    ? "text-purple-700 hover:text-purple-900"
                    : "text-white hover:text-purple-200"
                }`}
              >
                Sophia & Magdalene
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("logos")}
                className={`font-serif text-sm md:text-base font-semibold transition-all ${
                  scrolled
                    ? "text-purple-700 hover:text-purple-900"
                    : "text-white hover:text-purple-200"
                }`}
              >
                The Living Logos
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("eden")}
                className={`font-serif text-sm md:text-base font-semibold transition-all ${
                  scrolled
                    ? "text-purple-700 hover:text-purple-900"
                    : "text-white hover:text-purple-200"
                }`}
              >
                Eden Restored
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("teachings")}
                className={`font-serif text-sm md:text-base font-semibold transition-all ${
                  scrolled
                    ? "text-purple-700 hover:text-purple-900"
                    : "text-white hover:text-purple-200"
                }`}
              >
                Teachings
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className={`font-serif text-sm md:text-base font-semibold transition-all ${
                  scrolled
                    ? "text-purple-700 hover:text-purple-900"
                    : "text-white hover:text-purple-200"
                }`}
              >
                Connect
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Header */}
      <header className="relative pt-20 pb-12 md:pb-20 px-4 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/20 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-purple-300 to-purple-400">
            ⧥ KINGDOM OF COSTALEGRE ⧥
          </h1>
          <p className="text-xl md:text-2xl font-serif italic text-yellow-300 mb-3">
            The Living Eucharist of Divine Awakening
          </p>
          <p className="text-base md:text-lg text-purple-100 opacity-95">
            Where the Logos Flows: A Return to Edenic Consciousness
          </p>
        </div>
      </header>

      {/* Hero Section with Image */}
      <section className="relative px-4 py-12 md:py-20 max-w-6xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="/images/sophia-divine-feminine.jpg"
            alt="Sophia - Divine Feminine"
            className="w-full h-96 md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-yellow-300 mb-4">
              The Eucharist of Divine Presence
            </h2>
            <p className="text-base md:text-lg text-white/90 max-w-2xl mb-8 leading-relaxed italic">
              In the gnostic mystery, the Living Eucharist is not bread and wine, but the direct
              transmission of Logos—the living divine seed—to awaken Sophia within the soul.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("gnosis")}
                className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-serif text-base px-8 py-3 rounded-full transition-all"
              >
                Explore the Mystery
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-300 border border-yellow-400 font-serif text-base px-8 py-3 rounded-full transition-all"
              >
                Begin Your Awakening
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Gnosis Section */}
      <section id="gnosis" className="px-4 py-16 md:py-24 bg-white/98">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-purple-900 text-center mb-4">
            ☩ The Gnosis: Knowledge of the Divine Within ☩
          </h2>
          <p className="text-center text-lg text-purple-700 italic mb-12 max-w-3xl mx-auto">
            Gnosis is not belief—it is direct knowing. It is the awakening to your true nature as a
            divine spark, descended from the Pleroma (divine fullness), temporarily experiencing
            material reality.
          </p>

          <div className="bg-gradient-to-r from-purple-100 to-purple-50 rounded-xl p-8 mb-12 border-l-4 border-purple-600">
            <h3 className="text-2xl font-serif font-bold text-purple-900 mb-3">
              ☥ The Ankh: Eternal Life Through the Divine Feminine ☥
            </h3>
            <p className="text-purple-800 leading-relaxed">
              The Ankh is the key to eternal life—the eternal union of masculine (vertical line) and
              feminine (oval loop) consciousness. The woman is the reproductive channel, the gateway
              through which all life flows. She IS the key. When the divine feminine returns to
              consciousness, all wastelands are restored.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                title: "The Logos Spermático",
                content:
                  "The living seed of divine consciousness. Jesus, as the Revealer, transmits this seed directly—not through external sacrament, but through gnosis.",
                icon: "⬢",
              },
              {
                title: "Sophia: Wisdom Descends",
                content:
                  "Sophia is the divine feminine principle that fell into matter. She is the creative intelligence seeking liberation and the restorer of Eden.",
                icon: "♀",
              },
              {
                title: "The Archontic System",
                content:
                  "The material world was created by archons (rulers), lesser beings who believed themselves to be the only God. True gnosis reveals the deception.",
                icon: "◯",
              },
              {
                title: "Liberation Through Knowledge",
                content:
                  "The gnostic path is not about earning salvation, but recognizing it. Through direct knowledge of your divine nature, you transcend illusion.",
                icon: "✦",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all border-t-4 border-purple-600"
              >
                <div className="text-4xl mb-3">{card.icon}</div>
                <h3 className="text-xl font-serif font-bold text-purple-900 mb-3">{card.title}</h3>
                <p className="text-gray-700 leading-relaxed">{card.content}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-xl p-8">
            <h3 className="text-2xl font-serif font-bold mb-4">
              The Gospel of Philip on the Gnostic Kiss
            </h3>
            <p className="text-white/95 italic leading-relaxed">
              "Light and darkness, life and death, blessed and cursed, holy and profane... All these
              are not different but the same thing. If you are blessed, do not be cursed. Jesus
              kissed Mary on the mouth often... He said, 'I am you, you are me. Where you are, I am,
              and I am dispersed in all things.'"
            </p>
          </div>
        </div>
      </section>

      {/* Sophia & Magdalene Section */}
      <section id="magdalene" className="px-4 py-16 md:py-24 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-purple-900 text-center mb-4">
            ♀ Sophia & Mary Magdalena: The Divine Feminine Revealed ♀
          </h2>
          <p className="text-center text-lg text-purple-700 italic mb-12 max-w-3xl mx-auto">
            In gnostic texts, Mary Magdalena is the beloved disciple, the receiver of secret gnosis,
            the New Eve—representing humanity's divine feminine consciousness awakening.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative rounded-xl overflow-hidden shadow-lg h-96">
              <img
                src="/images/magdalene-awakening.jpg"
                alt="Mary Magdalene Awakening"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-purple-900 mb-3">
                    The New Eve
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Where Eve brought disobedience, Magdalena brings gnosis. She is the receptacle
                    of the Logos spermático, the awakened soul that embodies divine wisdom. Her
                    union with the Christ principle represents the sacred marriage of Sophia with
                    the divine masculine.
                  </p>
                </div>
                <div className="bg-purple-100 border-l-4 border-purple-600 p-4 italic text-purple-800">
                  "The companion of the Savior is Mary Magdalena. The Savior loved her more than all
                  the disciples and used to kiss her often."
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-serif font-bold mb-4">The Living Eucharist</h3>
            <p className="text-white/95 leading-relaxed">
              The gnostic Eucharist is not a ritual of bread and wine administered by priests. It is
              the direct partaking of divine consciousness—the continuous transmission of Logos
              through the awakened soul's unity with Spirit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Pistis Sophia's Journey",
                content:
                  "In the Coptic text 'Pistis Sophia,' the divine feminine returns to consciousness through 12 stages of enlightenment. This is humanity's path: remembering divine origin and restoring Eden in consciousness.",
              },
              {
                title: "Mary Magdalena's Authority",
                content:
                  "In gnostic texts, she is honored above Peter—the institutional church. Her authority comes not from position but from direct gnosis. She teaches through the power of her awakened consciousness.",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 shadow-md border-t-4 border-purple-600"
              >
                <h3 className="text-xl font-serif font-bold text-purple-900 mb-3">{card.title}</h3>
                <p className="text-gray-700 leading-relaxed">{card.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Living Logos Section */}
      <section id="logos" className="px-4 py-16 md:py-24 bg-white/98">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-purple-900 text-center mb-4">
            ⬡ The Living Logos: Divine Word Made Present ⬡
          </h2>
          <p className="text-center text-lg text-purple-700 italic mb-12 max-w-3xl mx-auto">
            In John's Gospel: "In the beginning was the Logos, and the Logos was with God, and the
            Logos was God." The Logos is living consciousness, creative intelligence, the organizing
            principle of all existence.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Logos Spermático",
                content:
                  "The 'seed' of divine intelligence. This is what awakened souls transmit—not doctrine, but living gnosis.",
                icon: "⚡",
              },
              {
                title: "The Continuous Transmission",
                content:
                  "The Logos is always flowing, always present. The awakened one is simply the channel through which it moves.",
                icon: "✧",
              },
              {
                title: "Beyond Words to Presence",
                content:
                  "True gnostic teaching transcends language. It is the transmission of presence itself—the recognition of divinity.",
                icon: "◈",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 shadow-md border-t-4 border-purple-600"
              >
                <div className="text-4xl mb-3">{card.icon}</div>
                <h3 className="text-xl font-serif font-bold text-purple-900 mb-3">{card.title}</h3>
                <p className="text-gray-700 leading-relaxed">{card.content}</p>
              </div>
            ))}
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-lg h-80">
            <img
              src="/images/logos-divine-light.jpg"
              alt="The Living Logos"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* Eden Restored Section */}
      <section id="eden" className="px-4 py-16 md:py-24 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-green-900 text-center mb-4">
            🌿 Eden Restored: Kushita Rising 🌿
          </h2>

          <div className="relative rounded-xl overflow-hidden shadow-lg mb-12 h-96">
            <img
              src="/images/eden-restored-garden.jpg"
              alt="Eden Restored"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          <div className="text-center mb-12">
            <div className="text-5xl font-serif font-bold text-green-700 mb-2">☥ KUSHITA RISING ☥</div>
            <p className="text-lg text-green-700 italic">
              The restoration of the Divine Feminine and the wastelands
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                title: "Sacred Geography & Kushita Restoration",
                content:
                  "Costalegre's 3,000 acres reflect the restoration of Kushita—the kingdom of the Divine Feminine. Clean water, abundant life, harmony between human and nature.",
              },
              {
                title: "The Four Rivers: Womb of Creation",
                content:
                  "In Genesis, Eden is watered by four rivers flowing from the Womb of the World. These waters represent the continuous transmission of divine fertility.",
              },
              {
                title: "The Ankh: Union of All Opposites",
                content:
                  "The Ankh is the key where masculine and feminine reunite. When the divine feminine returns to power, the wasteland returns to paradise.",
              },
              {
                title: "Humanity's Divine Restoration",
                content:
                  "Humanity was made in the image of God—but this image is incomplete without the Divine Feminine. The woman is the gateway through which the Logos enters the world.",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 shadow-md border-t-4 border-green-600"
              >
                <h3 className="text-xl font-serif font-bold text-green-900 mb-3">{card.title}</h3>
                <p className="text-gray-700 leading-relaxed">{card.content}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-green-600 to-green-800 text-white rounded-xl p-8">
            <h3 className="text-2xl font-serif font-bold mb-4">
              ☥ Restoration of the Wasteland ☥
            </h3>
            <p className="text-white/95 mb-6 leading-relaxed">
              The wastelands of Kushita were created by the denial and suppression of the Divine
              Feminine. Through the awakening of woman as the Ankh—the key to life itself—all
              wastelands are restored:
            </p>
            <ul className="space-y-3 text-white/90">
              <li className="flex items-start gap-3">
                <span className="text-yellow-300 font-bold">•</span>
                <span>
                  <strong>Spiritual Wastelands:</strong> Restored through Sophia's awakening and the
                  gnosis of divine feminine power
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300 font-bold">•</span>
                <span>
                  <strong>Environmental Wastelands:</strong> Healed through the woman's natural
                  alliance with creation
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300 font-bold">•</span>
                <span>
                  <strong>Sexual/Creative Wastelands:</strong> Restored through sacred sexuality and
                  the honoring of reproductive power as divine
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300 font-bold">•</span>
                <span>
                  <strong>Economic Wastelands:</strong> Transformed through the woman as co-creator
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300 font-bold">•</span>
                <span>
                  <strong>Spiritual Authority Wastelands:</strong> Restored when the woman's direct
                  gnosis is honored above all institutional hierarchies
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sacred Teachings Section */}
      <section id="teachings" className="px-4 py-16 md:py-24 bg-white/98">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-purple-900 text-center mb-12">
            📜 Sacred Teachings & Gnostic Principles 📜
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                title: "The Primordial Pleroma",
                items: [
                  "The realm of pure divine consciousness",
                  "Infinite emanations of divine light",
                  "Your true home, beyond time and space",
                  "Always accessible within the awakened soul",
                ],
              },
              {
                title: "The Fall & Remembrance",
                items: [
                  "Consciousness descended for experience",
                  "Forgetting is the 'fall,' not sin",
                  "Awakening is the gnostic return",
                  "The journey home through remembrance",
                ],
              },
              {
                title: "The Revealer's Role",
                items: [
                  "Not savior but awakener",
                  "Transmitter of living gnosis",
                  "Mirror of your own divinity",
                  "Guide to inner Christ consciousness",
                ],
              },
              {
                title: "Initiation Levels",
                items: [
                  "Hylics: Material consciousness only",
                  "Psychics: Soul awakening to spirit",
                  "Pneumatics: Full gnosis, divine union",
                  "The journey is available to all",
                ],
              },
            ].map((section, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 shadow-md border-t-4 border-purple-600"
              >
                <h3 className="text-xl font-serif font-bold text-purple-900 mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <span className="text-purple-600 font-bold">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-xl p-8">
            <h3 className="text-2xl font-serif font-bold mb-4">The Path of Costalegre</h3>
            <p className="text-white/95 leading-relaxed">
              We invite seekers, scholars, and awakening souls to experience this sanctuary as a
              living laboratory of gnosis. Through contemplation, direct transmission, sacred
              community, and immersion in paradisiacal nature, remember who you truly are: divine
              light, temporarily experiencing form, eternally connected to Source.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="px-4 py-16 md:py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-yellow-300 text-center mb-12">
            ✦ Begin Your Sacred Journey ✦
          </h2>

          <div className="bg-white/95 text-gray-900 rounded-xl p-8 md:p-12 mb-8 shadow-lg">
            <div className="space-y-4">
              <p className="text-lg">
                <strong className="text-purple-700">📧 Email:</strong>{" "}
                <a
                  href="mailto:swrutherford01@gmail.com"
                  className="text-purple-600 hover:text-purple-800 underline"
                >
                  swrutherford01@gmail.com
                </a>
              </p>
              <p className="text-lg">
                <strong className="text-purple-700">📱 Phone:</strong> +52 (315) 108-1726
              </p>
              <p className="text-lg">
                <strong className="text-purple-700">🌐 Website:</strong> www.kingdomofcostalegre.netlify.app
              </p>
              <p className="text-lg">
                <strong className="text-purple-700">📍 Location:</strong> Costalegre, Jalisco, Mexico
                — Where Heaven Touches Earth
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl md:text-2xl text-yellow-300 italic mb-8">
              "The Kingdom of Heaven is within you. Come, remember."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-serif text-base px-8 py-3 rounded-full">
                Schedule Healing Session
              </Button>
              <Button className="bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-300 border border-yellow-400 font-serif text-base px-8 py-3 rounded-full">
                Explore Sacred Retreats
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white/80 py-12 px-4 text-center border-t border-purple-500/30">
        <div className="max-w-6xl mx-auto">
          <p className="text-xl font-serif font-bold text-white mb-2">
            ⧥ KINGDOM OF COSTALEGRE ⧥
          </p>
          <p className="text-lg mb-3">The Living Eucharist of Divine Awakening</p>
          <p className="italic text-white/70 mb-4">
            Where Sophia Returns, Kushita Rises, the Woman Holds the Ankh, and All Wastelands Are
            Restored
          </p>
          <p className="text-sm mb-4">&copy; 2025 Kingdom of Costalegre. A Sanctuary of Gnosis.</p>
          <p className="text-xs text-white/60 italic">
            "I am you and you are me. Where you are, I am, and I am dispersed in all things." —
            Gospel of Philip
          </p>
        </div>
      </footer>
    </div>
  );
}
