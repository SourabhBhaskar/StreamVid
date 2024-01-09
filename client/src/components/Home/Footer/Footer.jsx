// Footer.js
import React from "react";
import FooterLogoSection from "./FooterLogoSection";
import FooterListSection from "./FooterListSection";



function Footer({ children }) {
  const mustWatchMovies = [
    "Inception",
    "The Shawshank Redemption",
    "The Dark Knight",
    "Pulp Fiction",
    "Forrest Gump",
    "The Matrix",
    "Titanic",
    "Avatar",
    "The Lord of the Rings",
    "Star Wars",
  ];
  const genres = [
    "Action",
    "Drama",
    "Science Fiction",
    "Comedy",
    "Adventure",
    "Thriller",
    "Romance",
    "Horror",
    "Fantasy",
    "Mystery",
  ];
  const helpLinks = [
    "My Account",
    "Customer Support",
    "Contact Us",
    "Advertise",
    "Jobs",
    "FAQs",
    "Terms and Conditions",
    "Privacy Policy",
    "Feedback",
    "Accessibility",
  ];
  const jobsLinks = [
    "View Plans",
    "Blog",
    "Devices",
    "About Us",
    "Careers",
    "Partnerships",
    "Press",
    "Investors",
    "Media Kit",
    "Events",
  ];

  return (
    <div className="w-full h-auto bg-footer-color">
        <footer className="w-full flex justify-between flex-wrap gap-4 px-2 xl:p-16 ">
            <FooterLogoSection />
            <FooterListSection title="Must Watch Movies" links={mustWatchMovies} />
            <FooterListSection title="Genres" links={genres} />
            <FooterListSection title="Help" links={helpLinks} />
            <FooterListSection title="Jobs" links={jobsLinks} /> 
        </footer>
        {children}
    </div>
  );
}

export default Footer;
