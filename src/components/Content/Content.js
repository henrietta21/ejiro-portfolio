import React from "react";
import { useTheme } from "../../context/ThemeContext";
import "./Content.css";

function Content() {
  const { isDark } = useTheme();
  return (
    <div className={`content  ${isDark ? "dark" : "light"}`}>
      <h1>Ejiro Jude E.</h1>
      <h2>Product Designer at Semicolon</h2>
      <div className="description">
        <p>
          I am a product designer that cares about words (copy), a strong user
          advocate with eyes on business goals yet promoting an inclusive
          experience for the users. I have helped companies increase users{" "}
          <span>acquisition, adoption & retention by simple onboarding.</span>{" "}
          With my experience with different engineers, designers, product
          managers and other stakeholders, it has trained me on how to approach
          complex problems with solutions that drives{" "}
          <span> business goals while empowering users.</span>
        </p>
        <p>
          I am currently based in Lagos, Nigeria and I lead the design team at
          Semicolon Africa focusing on <span>UX and strategy direction</span>{" "}
          for Semicolon's internal and external projects.
        </p>
        <p>
          I have experiences in UX/UI Design, User Research, Design Systems,
          Usability Testing, Mentoring, Facilitation, and Culture Cultivation.
        </p>
      </div>
      <div className="actions">
        <button className="view-work">View my work</button>
        <a
          href="https://linkedin.com"
          className="linkedin"
          aria-label="LinkedIn Profile"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Content;
