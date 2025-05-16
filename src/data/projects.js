import artifex1 from "../assets/artifex1.jpg";
import imagine1 from "../assets/imagine1.jpg";
import nelson from "../assets/nelson.png"

const projects = [
    {
        title: "Ceremonial Artifex Scheduler",
        slug: "artifex-scheduler",
        type: "Client-Facing Application", // NEW
        image: artifex1,
        description: "Online appointment and loyalty system for a ceremonial tea business.",
        stack: ["React", "Django", "PostgreSQL", "Stripe", "AWS"],
        link: "#", // TODO: replace when live
        code: "#",
        status: "Live production app",
        details: {
            problem: "The client managed appointments manually through email and phone, leading to missed bookings and scheduling conflicts.",
            solution: "Built a full booking system where customers self-schedule based on availability, admins control approvals, and payments are secured through Stripe.",
            features: [
                "Admin appointment approval dashboard",
                "Client loyalty points tracking tied to Stripe purchases",
                "Real-time customer-facing booking calendar",
                "Automated email confirmations and reminders",
                "Flexible rescheduling and walk-in tracking"
            ],
            future: "Private booking logic and e-commerce tea shop expansion."
        }
    },
    {
        title: "The Imaginarium Internal Scheduler",
        slug: "imaginarium-scheduler",
        type: "Employee-Facing Internal Tool", // NEW
        image: imagine1,
        description: "Internal employee management and scheduling tool for a tattoo studio.",
        stack: ["React", "Django", "PostgreSQL"],
        link: "#",
        code: "#",
        status: "Private business tool",
        details: {
            problem: "Appointment scheduling was done via a single physical master sheet, creating risks of conflicts, loss, and operational slowdowns.",
            solution: "Built a centralized digital scheduler where managers could assign clients, approve edits, and review employee-submitted notes.",
            features: [
                "Multi-employee client scheduling and history tracking",
                "Employee appointment edit request system",
                "Admin approval workflow for edits",
                "Archiving of completed appointments for auditability",
                "Planned revenue analytics and reporting dashboards"
            ],
            future: "Revenue reporting by employee and service type; email alerts for edits."
        }
    },
    {
        title: "Brett Nelson Portfolio",
        slug: "nelson-port",
        image: nelson,
        description:
            "Freelance portfolio site for an insurance broker. Responsive layout, brand-focused, and conversion-ready.",
        stack: ["HTML", "CSS", "JavaScript"],
        link: "https://platnelson.netlify.app/",
        code: "https://github.com/Cameron8325/plat-nelson", // replace if public
        status: "Freelance project (public)",
    },
    {
        title: "React Native ChatApp",
        slug: "react-native-chatapp",
        type: "Mobile Application", // NEW
        image: "https://placehold.co/600x400?text=ChatApp",
        description: "Mobile messaging app built with React Native, Expo, and Firebase backend services.",
        stack: ["React Native", "Expo", "Firebase", "Gifted Chat"],
        link: "#", // Could link to App Store/TestFlight later
        code: "https://github.com/Cameron8325/ChatApp",
        status: "Mobile project (demo available)",
        details: {
            problem: "Build a real-time mobile messaging app capable of offline support, media sharing, and cross-device compatibility, using modern mobile frameworks and serverless backend architecture.",
            solution: "Developed a React Native chat app using Firebase Authentication for user login, Firestore for message storage, and Firebase Storage for image uploads. Integrated Gifted Chat for rich messaging UIs and native device support like photo gallery access and GPS location sharing.",
            features: [
                "Real-time message synchronization across devices",
                "Offline access and message queuing until reconnected",
                "Image upload support from device library",
                "Location sharing through Google Maps view in chat",
                "Firebase Authentication for user sessions",
                "Secure Firestore database usage"
            ],
            future: "Deployment to TestFlight or Google Play Store, optional profile customization features, and push notification integration."
        }
    },
];

export default projects;
