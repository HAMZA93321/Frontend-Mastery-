import { SocialLinks, TechPillar, CategoryData } from './types';

export const SOCIAL_LINKS: SocialLinks = {
  linkedin: 'https://www.linkedin.com/in/hamza-khan-54a472389/',
  facebook: 'https://web.facebook.com/profile.php?id=61575079227087',
  instagram: 'https://www.instagram.com/hamza_720844/'
};

export const CREATOR_NAME = "Hamza Khan";
export const CREATOR_TITLE = "Frontend Developer";
export const CREATOR_TAGLINE = "I am frontend developer and I can convert your need into real word website apps";

// TODO: To use your own image:
// 1. Upload your image to a hosting site (like imgur) OR put it in your 'public' folder.
// 2. Replace the URL below with your link.
// Currently using a high-quality placeholder that matches the "Man in suit" description.
export const CREATOR_IMAGE_URL = "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80";

export const CATEGORIES: CategoryData[] = [
  {
    id: TechPillar.HTML,
    name: "HTML5",
    description: "The structure of the web. Learn semantic tags, forms, and accessibility.",
    // Official HTML5 Path
    svgPath: "M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.336 3.421-3.937 1.065-3.927-1.065-.244-2.754H3.126l.492 5.54L12 21.563l8.384-2.937.994-11.125H8.531z",
    viewBox: "0 0 24 24",
    color: "text-[#E34F26]", // Official HTML Orange
    gradient: "from-[#E34F26] to-[#F06529]"
  },
  {
    id: TechPillar.CSS,
    name: "CSS3",
    description: "Styling and layout. Master flexbox, grid, animations, and responsive design.",
    // Official CSS3 Path
    svgPath: "M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm10.477 4.41l-.23 2.622H19.32l-.232 2.718H11.977l-.244 2.754h7.126l-.336 3.421-3.937 1.065-3.927-1.065-.244-2.754H3.126l.492 5.54L12 21.563l8.384-2.937.994-11.125H11.977z",
    viewBox: "0 0 24 24",
    color: "text-[#1572B6]", // Official CSS Blue
    gradient: "from-[#1572B6] to-[#33A9DC]"
  },
  {
    id: TechPillar.JAVASCRIPT,
    name: "JavaScript",
    description: "The logic of the web. DOM manipulation, async programming, and modern ES6+.",
    // Official JavaScript Path
    svgPath: "M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.015-1.359 0-2.664.793-2.664 2.38 0 1.691 1.744 2.131 3.135 2.131 1.025 0 2.054-.373 2.054-1.686.012-.276.326-.431.478-.81zM13.625 18.66c-.237-1.488-1.524-2.399-3.23-2.399-1.288 0-2.378.694-2.378 1.995 0 1.487 1.287 1.838 2.378 1.838 1.139 0 2.348-.523 2.348-1.928 0-.256.626-.641.882.494zm9.328-9.907v12.75c0 1.025-.561 2.228-1.465 2.502-1.984.604-5.352 1.341-9.959 1.341-3.692 0-7.859-.445-9.409-1.206-1.138-.56-1.432-1.637-1.432-2.637V8.753c0-1.063.486-2.147 1.432-2.613 1.55-.762 5.717-1.206 9.409-1.206 4.607 0 7.975.738 9.959 1.341.904.274 1.465 1.477 1.465 2.502z",
    viewBox: "0 0 24 24",
    color: "text-[#F7DF1E]", // Official JS Yellow
    gradient: "from-[#F7DF1E] to-[#E5CF10]"
  },
  {
    id: TechPillar.TAILWIND,
    name: "Tailwind CSS",
    description: "Utility-first CSS framework for rapidly building custom user interfaces.",
    // Official Tailwind Path
    svgPath: "M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z",
    viewBox: "0 0 24 24",
    color: "text-[#06B6D4]", // Official Tailwind Cyan
    gradient: "from-[#06B6D4] to-[#22D3EE]"
  },
  {
    id: TechPillar.REACT,
    name: "React",
    description: "A JavaScript library for building user interfaces with components and hooks.",
    // Official React Path
    svgPath: "M22.5 13.5c-.2 0-.4 0-.6-.1 1-.9 1.6-2 1.6-3.4 0-1.3-.6-2.4-1.6-3.4.2 0 .4-.1.6-.1 1.7 0 3 1.3 3 3s-1.3 3-3 3zm-9-5.9c-.3 0-.6 0-.8.1 1.5 1.7 2.3 3.9 2.3 6.3s-.8 4.6-2.3 6.3c.2.1.5.1.8.1 3.6 0 6.5-2.9 6.5-6.4S17.1 7.6 13.5 7.6z M7.1 20.3c1-.9 1.6-2 1.6-3.4 0-1.3-.6-2.4-1.6-3.4-.2 0-.4-.1-.6-.1-1.7 0-3 1.3-3 3s1.3 3 3 3c.2 0 .4 0 .6-.1zm2.3-12.7c-1.5 1.7-2.3 3.9-2.3 6.3s.8 4.6 2.3 6.3c-.2.1-.5.1-.8.1-3.6 0-6.5-2.9-6.5-6.4S5 7.6 8.6 7.6c.3 0 .6 0 .8.1z M12 12.8c-.4 0-.8-.4-.8-.8s.4-.8.8-.8.8.4.8.8-.4.8-.8.8z",
    viewBox: "0 0 24 24",
    color: "text-[#61DAFB]", // Official React Blue
    gradient: "from-[#61DAFB] to-[#21A1C4]"
  }
];

export const INITIAL_SUGGESTIONS: Record<TechPillar, string[]> = {
  [TechPillar.HTML]: ["Semantic Elements", "Forms & Validation", "Accessibility (A11y)", "SEO Basics"],
  [TechPillar.CSS]: ["Flexbox Layout", "CSS Grid", "Animations & Transitions", "Media Queries"],
  [TechPillar.JAVASCRIPT]: ["ES6+ Features", "Async/Await", "DOM Manipulation", "Event Bubbling"],
  [TechPillar.TAILWIND]: ["Responsive Design", "Custom Configurations", "Dark Mode", "Utility Classes"],
  [TechPillar.REACT]: ["useState Hook", "useEffect Hook", "Component Props", "Context API"]
};