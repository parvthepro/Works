import React, { useState, useEffect } from "react";
import manager from "./assets/manager.png";
import parvicon from "./assets/parv_vector.png";
// TODO: Place your CV PDF in src/assets/ and import it here:
import cvPDF from "./assets/cv.pdf";

const FiChevronLeft = ({ className, size }) => (
    <svg
        className={className}
        width={size}
        height={size}
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
    >
        <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
);
const FiChevronRight = ({ className, size }) => (
    <svg
        className={className}
        width={size}
        height={size}
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
    >
        <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
);

const FaFacebook = ({ className, size }) => (
    <svg
        className={className}
        width={size}
        height={size}
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 320 512"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
    </svg>
);
const FaTwitter = ({ className, size }) => (
    <svg
        className={className}
        width={size}
        height={size}
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
    </svg>
);
const FaInstagram = ({ className, size }) => (
    <svg
        className={className}
        width={size}
        height={size}
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 448 512"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12.1 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
    </svg>
);
const FaLinkedin = ({ className, size }) => (
    <svg
        className={className}
        width={size}
        height={size}
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 448 512"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
    </svg>
);

const FiMonitor = ({ className, size }) => (
    <svg
        className={className}
        width={size}
        height={size}
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
    </svg>
);
const FiLayout = ({ className, size }) => (
    <svg
        className={className}
        width={size}
        height={size}
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="3" y1="9" x2="21" y2="9"></line>
        <line x1="9" y1="21" x2="9" y2="9"></line>
    </svg>
);
const FiSmartphone = ({ className, size }) => (
    <svg
        className={className}
        width={size}
        height={size}
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
    </svg>
);
const FiPenTool = ({ className, size }) => (
    <svg
        className={className}
        width={size}
        height={size}
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
        <path d="M2 2l7.586 7.586"></path>
        <circle cx="11" cy="11" r="2"></circle>
    </svg>
);

// --- MOCK DATA ---

const PROJECTS = [
    {
        id: 1,
        title: "AirCalling Landing Page Design",
        category: "Web Design",
        color: "#e0e7ff",
        image: null,
    },
    {
        id: 2,
        title: "Business Landing Page Design",
        category: "Web Design",
        color: "#d1fae5",
        image: null,
    },
    {
        id: 3,
        title: "Ecom Web Page Design",
        category: "Web Design",
        color: "#ffedd5",
        image: null,
    },
    {
        id: 4,
        title: "Banking App UI",
        category: "App Design",
        color: "#dbeafe",
        image: null,
    },
    {
        id: 5,
        title: "Brand Identity",
        category: "Graphic Design",
        color: "#fce7f3",
        image: null,
    },
    {
        id: 6,
        title: "User Research Dashboard",
        category: "UI/UX",
        color: "#f3e8ff",
        image: null,
    },
];

const TESTIMONIALS = [
    {
        id: 1,
        name: "Sarah Jenkins",
        role: "CEO, TechStart",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        color: "#d1d5db",
    },
    {
        id: 2,
        name: "Khandegar",
        role: "Manager, Techfest",
        text: "Working with Parv was an amazing experience. His attention to detail, creativity, and understanding of user experience truly made our product stand out. The design not only looked great but also improved how our users interacted with the platform.",
        color: "#1f2937",
    },
    {
        id: 3,
        name: "Michael Chen",
        role: "Product Lead",
        text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
        color: "#9ca3af",
    },
    {
        id: 4,
        name: "Emily Davis",
        role: "Marketing Director",
        text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        color: "#6b7280",
    },
];

const globalCSS = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

  :root {
    --primary-color: #962AA0;
    --primary-hover: #7e22ce;
    --text-dark: #000000;
    --text-gray: #4b5563;
    --text-light: #9ca3af;
    --bg-light: #f9fafb;
    --border-color: #e5e7eb;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Poppins', sans-serif; color: var(--text-dark); background: #fff; overflow-x: hidden; }
  
  .container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
  .section-title { font-size: 3rem; font-weight: 600; text-align: center; margin-bottom: 1rem; }
  .section-subtitle { text-align: center; color: var(--text-dark); max-width: 700px; margin: 0 auto 3rem; }
  
  .btn { padding: 0.75rem 1.5rem; border-radius: 0.375rem; font-weight: 500; cursor: pointer; border: none; transition: background-color 0.3s; font-family: inherit; font-size: 0.875rem;}
  .btn-primary { background-color: var(--primary-color); color: #fff; box-shadow: 0 4px 14px rgba(147, 51, 234, 0.3); }
  .btn-primary:hover { background-color: var(--primary-hover); }

  /* Navbar */
  .navbar { display: flex; justify-content: space-between; align-items: center; padding: 1.5rem 0; }
  .nav-logo-group { display: flex; align-items: center; gap: 0.75rem; }
  .nav-logo-icon { width: 48px; height: 48px; border-radius: 50%; background: linear-gradient(to top right, #c084fc, #f9a8d4); display: flex; justify-content: center; overflow: hidden; }
  .nav-logo-inner { width: 32px; height: 32px; background: #1f2937; border-radius: 50%; margin-top: 16px; }
  .nav-logo-text { display: flex; flex-direction: column; }
  .nav-logo-name { font-weight: 600; font-size: 0.875rem; line-height: 1.2; }
  .nav-logo-sub { font-size: 0.625rem; color: var(--text-light); line-height: 1.2; }
  .nav-links { display: flex; gap: 2rem; font-size: 0.875rem; font-weight: 500; }
  .nav-links a { text-decoration: none; color: var(--text-dark); transition: color 0.3s; }
  .nav-links a:hover { color: var(--primary-color); }

  /* Hero */
  .hero { display: flex; align-items: center; justify-content: space-between; padding: 5rem 0; gap: 2rem; }
  .hero-content { flex: 1; }
  .hero-greeting { font-size: 1.25rem; font-weight: 600; }
  .hero-name { color: var(--primary-color); font-size: 2rem; font-weight: 600; }
  .hero-title { font-size: 4.5rem; font-weight: 700; line-height: 1; margin-bottom: 1.2rem}
  .hero-desc { color: var(--text-dark); margin-bottom: 2rem; max-width: 520px; }
  .hero-visuals { flex: 1; display: flex; flex-direction: column; align-items: center; position: relative; }
  .hero-avatar-wrapper { width: 450px; height: 430px; border-radius: 50%; display: flex; align-items: flex-start; justify-content: center; overflow: hidden; }
  .hero-image { object-fit: fill; width: 100%; }
  .social-icons { display: flex; gap: 1.5rem;}
  .social-icon { cursor: pointer; color: var(--text-dark); transition: color 0.3s;}
  .social-icon:hover { color: var(--primary-color); }
  .hire-me-btn {  padding: 0.5rem 2rem; border-radius: 0.375rem; font-weight: 500; cursor: pointer; border: none; transition: background-color 0.3s; font-family: inherit; font-size: 0.875rem; background-color: var(--primary-color); color: #fff;}

  /* About */
  .about { display: flex; align-items: center; justify-content: space-between; padding: 6rem 0; gap: 4rem; }
  .about-visuals { flex: 1; display: flex; justify-content: center; }
  .about-image { width: 400px; height: 400px; border-radius: 50%; border: 4px solid #e9d5ff; background: linear-gradient(to bottom right, #f9fafb, #fff); box-shadow: inset 0 2px 4px rgba(0,0,0,0.06); display: flex; align-items: center; justify-content: center; color: var(--text-light); font-weight: 500;}
  .about-content { flex: 1; }
  .about-title { font-size: 2.5rem; font-weight: 600; }
  .about-desc { color: var(--text-dark); line-height: 1.6; margin-bottom: 2rem; }
  .skill-item { margin-bottom: 1.5rem; }
  .skill-name { font-weight: 700; font-size: 0.875rem; margin-bottom: 0.5rem; display: block; }
  .skill-track { width: 100%; height: 12px; background-color: #f3f4f6; border-radius: 6px; position: relative; display: flex; align-items: center; }
  .skill-fill { position: absolute; left: 0; height: 100%; background-color: var(--primary-color); border-radius: 6px; }
  .skill-thumb { position: absolute; width: 20px; height: 20px; background-color: #fff; border: 2px solid var(--primary-color); border-radius: 50%; box-shadow: 0 1px 2px rgba(0,0,0,0.1); margin-left: -10px; }

  /* Services */
  .services { padding: 6rem 0; }
  .services-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
  .service-card { background-color: var(--bg-light); border-radius: 0.75rem; padding: 2rem; transition: box-shadow 0.3s; }
  .service-card:hover { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); }
  .service-icon-wrapper { width: 64px; height: 64px; background-color: #fff; border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; box-shadow: 0 1px 2px rgba(0,0,0,0.05); transition: transform 0.3s; }
  .service-card:hover .service-icon-wrapper { transform: scale(1.1); }
  .service-icon { color: var(--primary-color); }
  .service-title { font-size: 1.25rem; font-weight: 700; margin-bottom: 1rem; }
  .service-desc { font-size: 0.875rem; color: var(--text-dark); line-height: 1.6; }

  /* Projects */
  .projects { padding: 6rem 0; }
  .tabs { display: flex; flex-wrap: wrap; justify-content: center; gap: 1rem; margin-bottom: 4rem; }
  .tab-btn { padding: 0.5rem 1.5rem; border-radius: 0.375rem; border: 1px solid var(--border-color); background: #fff; cursor: pointer; font-size: 0.875rem; font-weight: 500; transition: all 0.3s; }
  .tab-btn:hover { border-color: var(--primary-color); }
  .tab-btn.active { background-color: var(--primary-color); color: #fff; border-color: var(--primary-color); }
  .projects-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2.5rem; }
  .project-card { cursor: pointer; text-align: left; }
  .project-image { width: 100%; height: 320px; border-radius: 1rem; margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: center; overflow: hidden; background-color: #f3f4f6; }
  .project-image img { width: 100%; height: 100%; object-fit: cover; border-radius: 1rem; }
  .project-image-inner { background: rgba(255,255,255,0.5); width: 75%; height: 75%; border-radius: 0.5rem; border: 1px solid #fff; padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.05); }
  .project-img-bar { width: 50%; height: 16px; background-color: #e5e7eb; border-radius: 4px; }
  .project-img-box { width: 100%; height: 96px; background-color: #f3f4f6; border-radius: 4px; margin-top: 8px; }
  .project-img-fill { width: 100%; flex: 1; background-color: #f3f4f6; border-radius: 4px; }
  .project-category { color: var(--primary-color); font-size: 0.875rem; font-weight: 500; display: block; margin-bottom: 0.5rem; }
  .project-title { font-size: 1.25rem; font-weight: 700; transition: color 0.3s; }
  .project-card:hover .project-title { color: var(--primary-color); }

  /* Testimonials */
  .testimonials { padding: 6rem 0; overflow: hidden; text-align: center; }
  .carousel-main-container { position: relative; max-width: 1000px; margin: 0 auto; }
  .carousel-wrapper { position: relative; height: 300px; max-width: 800px; margin: 0 auto; display: flex; align-items: center; justify-content: center; }
  .carousel-card { position: absolute; width: 100%; max-width: 600px; background-color: var(--bg-light); border-radius: 1rem; padding: 2rem; display: flex; align-items: center; gap: 2rem; border: 1px solid var(--border-color); transition: all 0.5s ease-in-out; }
  .carousel-img { width: 128px; height: 128px; border-radius: 50%; flex-shrink: 0; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); }
  .carousel-content { text-align: left; position: relative; flex: 1; }
  .quote-mark { color: var(--primary-color); font-size: 2.5rem; font-family: serif; position: absolute; }
  .quote-mark.start { top: -1rem; left: -0.5rem; }
  .quote-mark.end { bottom: 1.5rem; right: 0; transform: rotate(180deg); }
  .carousel-text { color: var(--text-gray); margin-bottom: 1rem; padding-left: 1rem; position: relative; z-index: 10; font-size: 0.875rem; line-height: 1.6; }
  .carousel-author { padding-left: 1rem; }
  .carousel-name { font-weight: 700; font-size: 1.125rem; }
  .carousel-role { font-size: 0.875rem; color: var(--text-light); }
  
  /* New Arrow Styles */
  .carousel-arrow { position: absolute; top: 50%; transform: translateY(-50%); width: 48px; height: 48px; border-radius: 50%; background: #fff; border: 1px solid var(--border-color); display: flex; align-items: center; justify-content: center; cursor: pointer; z-index: 50; color: var(--text-dark); box-shadow: 0 4px 6px rgba(0,0,0,0.05); transition: all 0.3s; }
  .carousel-arrow:hover { background: var(--primary-color); color: #fff; border-color: var(--primary-color); }
  .carousel-arrow.left { left: 1rem; }
  .carousel-arrow.right { right: 1rem; }

  .carousel-dots { display: flex; justify-content: center; gap: 0.75rem; margin-top: 3rem; }
  .dot { width: 32px; height: 12px; border-radius: 6px; background-color: #d1d5db; border: none; cursor: pointer; transition: all 0.3s; }
  .dot.active { background-color: var(--primary-color); }

  /* Contact */
  .contact { padding: 6rem 0; text-align: center; max-width: 800px; margin: 0 auto; }
  .contact-form { display: flex; gap: 1rem; justify-content: center; margin-top: 3rem; }
  .contact-input { flex: 1; max-width: 400px; padding: 1rem 1.5rem; border: 1px solid var(--border-color); border-radius: 0.5rem; background-color: var(--bg-light); font-family: inherit; font-size: 1rem; }
  .contact-input:focus { outline: none; border-color: var(--primary-color); box-shadow: 0 0 0 2px rgba(147, 51, 234, 0.2); }
  .contact-success { color: var(--primary-color); font-weight: 600; font-size: 1rem; margin-bottom: 1rem; }

  /* Footer */
  .footer { padding: 2rem 0; text-align: center; background-color: var(--bg-light); color: var(--text-light); font-size: 0.875rem; margin-top: 3rem; }

    /* Landing Animation */
  .landing-overlay {
    position: fixed;
    top: 0; left: 0; width: 100vw; height: 100vh;
    background: #fff;
    z-index: 9999;
    animation: fadeOutOverlay 0.5s ease 2.8s forwards;
    pointer-events: none;
  }

  .landing-logo-wrapper {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 220px;
    height: 220px;
    margin-top: -110px;
    margin-left: -110px;
    border-radius: 50%;
    overflow: hidden;
    z-index: 10000;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    animation:
      bounceZoom 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards,
      moveToCorner 1s cubic-bezier(0.25, 1, 0.5, 1) 1.8s forwards;
  }

  .landing-logo-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .landing-shine {
    position: absolute;
    top: 0; left: -150%;
    width: 50%; height: 100%;
    background: linear-gradient(to right, transparent, rgba(255,255,255,0.8), transparent);
    transform: skewX(-20deg);
    animation: shineMove 1s ease-in-out 0.8s forwards;
  }

  @keyframes bounceZoom {
    0% { transform: scale(0.5); opacity: 0; }
    70% { transform: scale(1.3); opacity: 1; }
    100% { transform: scale(1); opacity: 1; }
  }

  @keyframes shineMove {
    0% { left: -150%; }
    100% { left: 200%; }
  }

  @keyframes moveToCorner {
    0% {
      top: 50%;
      left: 50%;
      width: 220px;
      height: 220px;
      margin-top: -110px;
      margin-left: -110px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }
    100% {
      top: 24px;
      left: calc(50% - min(50%, 600px));
      width: 48px;
      height: 48px;
      margin-top: 0;
      margin-left: 0;
      box-shadow: 0 0 0 rgba(0,0,0,0);
    }
  }

  @keyframes fadeOutOverlay {
    0% { background: rgba(255, 255, 255, 1); }
    100% { background: rgba(255, 255, 255, 0); }
  }

  /* Responsive */
  @media (max-width: 1024px) {
    .services-grid { grid-template-columns: repeat(2, 1fr); }
    .projects-grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 768px) {
    .nav-links { display: none; }
    .hero { flex-direction: column; text-align: center; padding: 3rem 0; }
    .hero-content { padding-right: 0; margin-bottom: 3rem; display: flex; flex-direction: column; align-items: center; }
    .hero-title { font-size: 3.5rem; }
    .about { flex-direction: column; text-align: center; padding: 3rem 0; }
    .services-grid { grid-template-columns: 1fr; }
    .projects-grid { grid-template-columns: 1fr; }
    .carousel-card { flex-direction: column; text-align: center; }
    .carousel-content { text-align: center; }
    .carousel-author, .carousel-text { padding-left: 0; }
    .contact-form { flex-direction: column; align-items: center; }
    .contact-input { max-width: 100%; width: 100%; }
  }
`;

export default function App() {
    const [showLanding, setShowLanding] = useState(true);

    return (
        <div>
            {showLanding && (
                <LandingSection onComplete={() => setShowLanding(false)} />
            )}
            <style dangerouslySetInnerHTML={{ __html: globalCSS }} />

            <Navbar />
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <ProjectsSection />
            <TestimonialsSection />
            <ContactSection />

            <footer className="footer">
                Made with ❤ | Parv Agrawal, IIT Bombay
            </footer>
        </div>
    );
}

function LandingSection({ onComplete }) {
    useEffect(() => {
        document.body.style.overflow = "hidden";

        const timer = setTimeout(() => {
            document.body.style.overflow = "auto";
            onComplete();
        }, 3300);

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = "auto";
        };
    }, [onComplete]);

    return (
        <div className="landing-overlay">
            <div className="landing-logo-wrapper">
                <img
                    src={parvicon}
                    alt="Logo Placeholder"
                    className="landing-logo-img"
                />
                <div className="landing-shine"></div>
            </div>
        </div>
    );
}

function Navbar() {
    const navLinks = [
        "Home",
        "About Me",
        "Services",
        "Projects",
        "Testimonials",
        "Contact",
    ];

    const handleDownloadCV = () => {
        const link = document.createElement("a");
        link.href = cvPDF;
        link.download = "Parv_Agrawal_CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <nav className="container navbar">
            <div className="nav-logo-group">
                <div className="nav-logo-icon">
                    <img src={parvicon} />
                </div>
                <div className="nav-logo-text">
                    <span className="nav-logo-name">Parv Agrawal</span>
                    <span className="nav-logo-sub">
                        Indian Institute of Technology
                        <br />
                        Bombay
                    </span>
                </div>
            </div>

            <div className="nav-links">
                {navLinks.map((link) => (
                    <a
                        key={link}
                        href={`#${link.replace(/\s+/g, "").toLowerCase()}`}
                    >
                        {link}
                    </a>
                ))}
            </div>

            <button className="btn btn-primary" onClick={handleDownloadCV}>
                Download CV
            </button>
        </nav>
    );
}

function HeroSection() {
    return (
        <section id="home" className="container hero">
            <div className="hero-content">
                <h2 className="hero-greeting">Hi, I am</h2>
                <h3 className="hero-name">Parv Agrawal</h3>
                <h1 className="hero-title">
                    UI & UX <br />
                    &ensp;&ensp;&ensp;&ensp; Designer
                </h1>
                <p className="hero-desc">
                    I turn confusing interfaces into experiences users actually
                    enjoy. Less frustration, more interaction!
                </p>
                {/* <button className="hire-me-btn">Hire Me</button> */}
            </div>

            <div className="hero-visuals">
                <div className="hero-avatar-wrapper">
                    <img src={manager} className="hero-image" />
                </div>
                <div className="social-icons">
                    <FaFacebook className="social-icon" size={24} />
                    <FaTwitter className="social-icon" size={24} />
                    <FaInstagram className="social-icon" size={24} />
                    <FaLinkedin className="social-icon" size={24} />
                </div>
            </div>
        </section>
    );
}

function AboutSection() {
    const skills = [
        { name: "UX", level: 90 },
        { name: "Website Design", level: 85 },
        { name: "App Design", level: 92 },
        { name: "Graphic Design", level: 88 },
    ];

    return (
        <section id="aboutme" className="container about">
            <div className="about-visuals">
                <div className="about-image">
                    <img src={parvicon} style={{ width: "100%" }} />
                </div>
            </div>

            <div className="about-content">
                <h2 className="about-title">About Me</h2>
                <p className="about-desc">
                    I <i>love</i> crafting interfaces that not only look great
                    but also make users feel like everything just "works". When
                    I'm not designing, I'm probably exploring new tools,
                    redesigning something that wasn't broken, or aligning pixels
                    that no one will ever notice.
                </p>

                <div className="skills-container">
                    {skills.map((skill) => (
                        <div className="skill-item" key={skill.name}>
                            <span className="skill-name">{skill.name}</span>
                            <div className="skill-track">
                                <div
                                    className="skill-fill"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                                <div
                                    className="skill-thumb"
                                    style={{ left: `${skill.level}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ServicesSection() {
    const services = [
        {
            title: "UI/UX",
            icon: <FiMonitor className="service-icon" size={32} />,
            desc: "Designing user-friendly interfaces that make navigation feel effortless. Because good design should never make users think too hard.",
        },
        {
            title: "Web Design",
            icon: <FiLayout className="service-icon" size={32} />,
            desc: "Creating modern and responsive websites that look great on every screen; from giant desktops to tiny phones.",
        },
        {
            title: "App Design",
            icon: <FiSmartphone className="service-icon" size={32} />,
            desc: "Designing mobile experiences that feel smooth, intuitive, and satisfying to use. No confusing buttons allowed.",
        },
        {
            title: "Graphic Design",
            icon: <FiPenTool className="service-icon" size={32} />,
            desc: "Crafting visuals that communicate ideas clearly and creatively; from branding to social media designs.",
        },
    ];

    return (
        <section id="services" className="container services">
            <h2 className="section-title">Services</h2>
            <p className="section-subtitle">
                I craft visually engaging and user-centered digital experiences,
                combining creativity with functionality to design impactful
                websites, apps, and brand visuals.
            </p>

            <div className="services-grid">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <div className="service-icon-wrapper">
                            {service.icon}
                        </div>
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-desc">{service.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

function ProjectsSection() {
    const tabs = ["All", "UI/UX", "Web Design", "App Design", "Graphic Design"];
    const [activeTab, setActiveTab] = useState("All");

    const filteredProjects = PROJECTS.filter(
        (p) => activeTab === "All" || p.category === activeTab,
    );

    return (
        <section id="projects" className="container projects">
            <h2 className="section-title">My Projects</h2>
            <p className="section-subtitle">
                A collection of my designs where creativity meets functionality.
                Each project is built with the goal of making digital
                experiences smoother, smarter, and a little more delightful.
            </p>

            <div className="tabs">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="projects-grid">
                {filteredProjects.map((project) => (
                    <div key={project.id} className="project-card">
                        <div
                            className="project-image"
                            style={
                                !project.image
                                    ? { backgroundColor: project.color }
                                    : {}
                            }
                        >
                            {project.image ? (
                                <img src={project.image} alt={project.title} />
                            ) : (
                                <div className="project-image-inner">
                                    <div className="project-img-bar"></div>
                                    <div className="project-img-box"></div>
                                    <div className="project-img-fill"></div>
                                </div>
                            )}
                        </div>

                        <span className="project-category">
                            {project.category}
                        </span>
                        <h3 className="project-title">{project.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}

function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(1);

    const handlePrev = () => {
        setCurrentIndex(
            (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
        );
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    };

    const getCardStyle = (index) => {
        const total = TESTIMONIALS.length;
        let relativeIndex = (index - currentIndex + total) % total;

        if (relativeIndex === 0) {
            return {
                transform: "translateX(0) scale(1)",
                opacity: 1,
                zIndex: 30,
            };
        } else if (relativeIndex === 1 || relativeIndex === -3) {
            return {
                transform: "translateX(65%) scale(0.8)",
                opacity: 0.4,
                zIndex: 20,
            };
        } else if (relativeIndex === total - 1 || relativeIndex === -1) {
            return {
                transform: "translateX(-65%) scale(0.8)",
                opacity: 0.4,
                zIndex: 20,
            };
        }
        return { transform: "translateX(0) scale(0)", opacity: 0, zIndex: 0 };
    };

    return (
        <section id="testimonials" className="container testimonials">
            <h2 className="section-title">Testimonials</h2>
            <p className="section-subtitle">
                Some kind words from people who trusted me with their ideas and
                projects.
            </p>

            <div className="carousel-main-container">
                <button
                    className="carousel-arrow left"
                    onClick={handlePrev}
                    aria-label="Previous testimonial"
                >
                    <FiChevronLeft size={24} />
                </button>

                <div className="carousel-wrapper">
                    {TESTIMONIALS.map((testimonial, index) => {
                        const style = getCardStyle(index);
                        return (
                            <div
                                key={testimonial.id}
                                className="carousel-card"
                                style={style}
                            >
                                <div
                                    className="carousel-img"
                                    style={{
                                        backgroundColor: testimonial.color,
                                    }}
                                ></div>

                                <div className="carousel-content">
                                    <span className="quote-mark start">"</span>
                                    <p className="carousel-text">
                                        {testimonial.text}
                                    </p>
                                    <span className="quote-mark end">"</span>
                                    <div className="carousel-author">
                                        <h4 className="carousel-name">
                                            {testimonial.name}
                                        </h4>
                                        <p className="carousel-role">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <button
                    className="carousel-arrow right"
                    onClick={handleNext}
                    aria-label="Next testimonial"
                >
                    <FiChevronRight size={24} />
                </button>
            </div>

            <div className="carousel-dots">
                {TESTIMONIALS.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`dot ${index === currentIndex ? "active" : ""}`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}

function ContactSection() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail("");
        setSubmitted(true);
    };

    return (
        <section id="contact" className="container contact">
            <h2 className="section-title">Lets Design Together</h2>
            <p className="section-subtitle">
                Have an idea, a project, or just want to say hello? Let's
                connect and create something amazing together.
            </p>

            {submitted && <p className="contact-success">Submitted</p>}

            <form className="contact-form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="contact-input"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="btn btn-primary">
                    Contact Me
                </button>
            </form>
        </section>
    );
}
