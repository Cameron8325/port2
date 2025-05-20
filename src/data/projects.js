import artifex1 from "../assets/artifex1.jpg";
import imagine1 from "../assets/imagine1.jpg";
import nelson from "../assets/nelson.png";
// import ctaImage from "../assets/cta.png"; // TODO: replace with actual CTA graphic

const projects = [
  {
    title: "Ceremonial Artifex Scheduler",
    slug: "artifex-scheduler",
    type: "Client-Facing Application",
    image: artifex1,
    description: "Online appointment and loyalty system for a ceremonial tea business.",
    stack: ["React", "Django", "PostgreSQL", "Material UI", "Django Email"],
    link: "#",
    code: "#",
    status: "In Development (Jun 2024 – Present)",
    details: {
      problem: "Manual appointment and loyalty tracking was time-consuming and error-prone for a ceremonial tea business owner.",
      solution: "Developed a responsive web app enabling clients to book appointments, track loyalty points, and manage profiles, while providing admins with dashboard controls for appointment workflows and notifications.",
      features: [
        "Account creation and secure login with cookie-based authentication",
        "Interactive calendar UI to view and reserve available time slots for tea sessions and classes",
        "Client profile page displaying past appointments and loyalty point balance",
        "Admin dashboard to search and filter clients, adjust loyalty points, and manage appointment states (Flagged, Incoming, Approved, Completed)",
        "Automated email notifications triggered by appointment status changes",
        "At-a-glance agenda view summarizing bookings and pending approvals per date",
        "Calendar-based walk-in appointment scheduling",
        "Password reset and account deletion functionality"
      ],
      future: "Plan to integrate Stripe for payments, implement OAuth authentication, and deploy on AWS (API Gateway, S3, CloudFront, SES)."
    }
  },
  {
    title: "Imaginarium Internal App Scheduler",
    slug: "internal-app-scheduler",
    type: "Employee-Facing Application",
    image: imagine1,
    description: "Centralized scheduling and billing system for a tattoo shop in Capon Bridge, WV.",
    stack: ["React", "Django", "PostgreSQL", "Material UI"],
    link: "#",
    code: "#",
    status: "In Development (Feb 2025 – Present)",
    details: {
      problem: "Appointment management via Facebook messages and handwritten notes led to lost bookings and inefficient reporting.",
      solution: "Built a web application allowing admins and artists to create, edit, and approve appointments, with real-time notifications and auto-generated financial reports.",
      features: [
        "Admin and employee account management with role-based access",
        "Appointment CRUD interface with employee assignment, price quotes, and notes",
        "Employee-driven appointment requests routed to manager notifications for approval",
        "Side-by-side comparison view highlighting field-level edits for appointment change requests",
        "At-a-glance list and filter view of upcoming appointments by employee",
        "Billing and Reports module to generate revenue summaries by employee or time range",
        "CSV and PDF export options for financial reports (planned)",
        "Email notifications for appointment confirmations and change approvals"
      ],
      future: "Add image attachment feature for inspiration photos, client history viewing, and implement report download functionality."
    }
  },
  {
    title: "Brett Nelson Portfolio",
    slug: "brett-nelson-portfolio",
    type: "Portfolio Website",
    image: nelson,
    description: "Responsive portfolio site showcasing professional services for an insurance consultant.",
    stack: ["React", "Styled-Components", "Parallax.js", "React Router"],
    link: "#",
    code: "#",
    status: "Live (Nov 2024)",
    details: {
      problem: "Existing online presence lacked professional branding and interactive features.",
      solution: "Designed and developed a single-page React application with styled components and parallax effects to highlight services and drive user engagement.",
      features: [
        "Custom parallax scrolling sections to enhance visual storytelling",
        "Reusable styled-components for consistent theming and dark mode support",
        "Call-to-action and contact form integration for lead generation",
        "Responsive design optimized for desktop and mobile devices"
      ],
      future: "Replace placeholder CTAs with 'Your Project?' invitation to encourage new project inquiries."
    }
  },
{
  title: "Your Project?",
  slug: "your-project",
  type: "Let’s Collaborate",
  image: "https://placehold.co/600x400?text=Your+Project",
  description: "Whether you’re starting from scratch or need help untangling a tricky problem, I help turn ideas into intuitive, scalable web applications — no jargon, just solutions.",
  stack: ["JavaScript", "React", "Django", "Python", "Material UI", "AWS (Core Services)"],
  link: "mailto:youremail@example.com", // Update this later
  code: "#", // Can leave as-is or hide this field if not needed
  status: "Open to Freelance, Collaboration, or Full-Time",
  details: {
    problem: "Need a clear plan and a technical partner to bring your vision to life? Feeling stuck on implementation or unsure where to start?",
    solution: "I design software around people — not just code. Whether it's scheduling, automation, dashboards, or backend workflows, I specialize in building tools that simplify complexity and work reliably in the real world.",
    features: [
      "Modern, maintainable full-stack architecture",
      "Clear and collaborative planning from start to finish",
      "Responsive and accessible UIs using Material UI",
      "Backend automation and RESTful API design",
      "Flexible deployment options (AWS, Netlify, Heroku) with GitHub version control and CI/CD practices"
    ],
    future: "Let’s talk about your project — no pressure, no hard pitch. If you have an idea or a challenge, I’d love to hear it and see how I can help."
  }
}

];

export default projects;
