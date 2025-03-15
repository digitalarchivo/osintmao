'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface Project {
  id: number;
  name: string;
  url: string;
}

// Mock data based on MSCHF's projects
const projects: Project[] = [
  { id: 1, name: "THE PERSISTENCE OF CHAOS", url: "https://thepersistenceofchaos.com" },
  { id: 2, name: "MAN EATING FOOD", url: "https://www.reddit.com/r/videos/comments/8yks2s/i_have_videos_of_a_guy_eating_every_food_this_is/" },
  { id: 3, name: "TIMES NEWER ROMAN", url: "https://timesnewerroman.com" },
  { id: 5, name: "NETFLIX HANGOUTS", url: "https://netflixhangouts.com" },
  { id: 7, name: "JESUS SHOES", url: "https://jesus.shoes" },
  { id: 8, name: "BULL & MOON", url: "https://bullandmoon.com" },
  { id: 10, name: "PUFF THE SQUEAKY CHICKEN", url: "https://www.designboom.com/design/puff-the-rubber-chicken-bong-studio-mschf-11-27-2019" },
  { id: 12, name: "THIS FOOT DOES NOT EXIST", url: "https://thisfootdoesnotexist.com" },
  { id: 14, name: "ZUCKWATCH", url: "https://zuckwatch.com" },
  { id: 15, name: "CUSS COLLAR", url: "https://cusscollar.com" },
  { id: 16, name: "MSCHF BOX", url: "https://mschfbox.com" },
  { id: 17, name: "ALL THE STREAMS", url: "https://allthestreams.fm" },
  { id: 1, name: "NBA FM", url: "https://nba.fm" },
  { id: 19, name: "BOOMER EMAIL", url: "https://boomer.email" },
  { id: 20, name: "SEVERED SPOTS", url: "https://severedspots.com" },
  { id: 21, name: "THE OFFICE (SLACK)", url: "https://theofficeslack.com" },
  { id: 2, name: "MSCHF MAG VOL 1", url: "https://bread.mschfmag.com" },
  { id: 3, name: "SCREAM CLUB", url: "https://screamclub.club" },
  { id: 24, name: "FINGER ON THE APP", url: "https://fingeronthe.app" },
  { id: 25, name: "MSCHF X", url: "https://mschfx.com" },
  { id: 26, name: "ALEXAGATE", url: "https://alexagate.com" },
  { id: 4, name: "MSCHF MAG VOL 2", url: "https://store.mschf.com/products/mschfmags?variant=49417911140651" },
  { id: 27, name: "MASTERWIKI", url: "https://masterwiki.how" },
  { id: 28, name: "DINO SWORDS", url: "https://dinoswords.gg" },
  { id: 6, name: "MSCHF LATE NIGHT", url: "https://mschflatenight.tv" },
  { id: 29, name: "CARD V CARD", url: "https://cardvcard.com" },
  { id: 30, name: "MEDICAL BILL ART", url: "https://medicalbill.art" },
  { id: 31, name: "ANTI AD AD CLUB", url: "https://antiadvertisingadvertising.club" },
  { id: 8, name: "MSCHF WHOLESALE", url: "https://mschfwholesale.com" },
  { id: 33, name: "PUSH PARTY", url: "https://pushparty.app" },
  { id: 34, name: "BLUR USD $20", url: "https://store.mschf.com/products/blur" },
  { id: 35, name: "DATA LOTTO", url: "https://datalotto.biz" },
  { id: 10, name: "1800 JINGLES", url: "https://1800jingles.com" },
  { id: 36, name: "WALTS KITCHEN", url: "https://walts.kitchen" },
  { id: 37, name: "KING OF THE CLICKS", url: "https://kingoftheclicks.com" },
  { id: 38, name: "IN THE YEAR 2024", url: "https://intheyear2024.com" },
  { id: 39, name: "BIRKINSTOCK", url: "https://birkinstock.shoes" },
  { id: 40, name: "SPOTS RAMPAGE", url: "https://spotsrampage.com" },
  { id: 12, name: "MSCHF MAG VOL 4", url: "https://store.mschf.com/products/mschfmags?variant=49417911206187" },
  { id: 41, name: "AXE NO 5", url: "https://axenumbercensored.com" },
  { id: 42, name: "DEATH OF THE INFLUENCER", url: "https://deathoftheinfluencer.com" },
];

export default function ProjectList() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [email, setEmail] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  // Flashing cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      alert(`Thanks for subscribing with ${email}!`);
      setEmail('');
    }
  };

  return (
    <div className="pt-16 pb-8 px-4 min-h-screen flex flex-col">
      <div className="flex-grow">
        <ul className="space-y-0 text-lg" style={{ transform: `translateY(${scrollY * 0.05}px)` }}>
          {projects.map((project) => (
            <li
              key={`${project.id}-${project.name}`}
              className="py-1 relative transition-transform duration-300"
              style={{
                transform: hovered === project.id ? 'translateX(10px)' : 'translateX(0)',
              }}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-gray-400 transition-colors duration-200"
              >
                <span className="mr-2 inline-block w-5 text-right text-gray-500">
                  #{project.id}
                </span>
                <span className={`${hovered === project.id ? 'underline' : ''}`}>
                  {project.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 text-center text-white">
        <form onSubmit={handleSubmit} className="flex items-center justify-center">
          <span className="inline-block mr-2">&gt;&gt;&gt;</span>
          <input
            type="email"
            placeholder="Enter e-mail:"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent border-b border-white px-2 py-1 focus:outline-none"
          />
          <span className={`ml-1 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}>|</span>
          <button
            type="submit"
            className="ml-2 border border-white p-1 px-3 hover:bg-white hover:text-black transition-colors"
          >
            &gt;
          </button>
        </form>
      </div>

      <div className="mt-8 text-gray-500">
        <h2 className="text-center mb-2">NEXT UP</h2>
        <div className="text-center">
          <p className="text-sm">#123</p>
          <p className="text-sm">00:03:06:10:55 Mon Mar 17 02PM ET</p>
        </div>
      </div>
    </div>
  );
}
