/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Arshaq",
  logo_name: "Arshaq.ck()",
  full_name: "Arshaq ck",
  subTitle:
    "Senior Software Engineer, React Native Enthusiast , Hybrid Mobile Appp Developer (Android & iOS).",
  resumeLink:
    "https://drive.google.com/file/d/1F8trTwYuH3kRoZFIRTxqsk_wg4NWKXyn/view?usp=sharing",
  mail: "mailto:arshaqueck@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/arshaqckcode95/",
  linkedin: "https://www.linkedin.com/in/arshaq-ck-187150160/",
  gmail: "mailto:arshaqueck@gmail.com",
  // gitlab: "https://gitlab.com/harikanani",
  facebook: "https://www.facebook.com/arshaq.ck/",
  twitter: "https://twitter.com/arsh1087/",
  instagram: "https://www.instagram.com/arshaq__ck/",
};

const skills = {
  data: [
    {
      title: "Skills & Tools",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive User Interfaces for Mobile Applications",
        "⚡ Building and uploading applications for both IOS and Android",
        "⚡ Building app with Expo and EAS services",
        "⚡ Integration of third party services such as Firebase , AWS , Social media authentication ,SQLITE ,Redux ,Google Map API's and other features",
        "⚡ Propose & Implement technical solutions for complex problems",
        "⚡ Plan source code structure & reviewing source codes",
      ],
      softwareSkills: [
        {
          skillName: "React Native",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Typescript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#1572B6",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Expo",
          fontAwesomeClassname: "simple-icons:expo",
          style: {
            color: "#292a2d",
          },
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "iOS",
          fontAwesomeClassname: "simple-icons:ios",
          style: {
            color: "#292a2d",
          },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "SQLite",
          fontAwesomeClassname: "simple-icons:sqlite",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "PPG Institute of Science and Technology",
      subtitle: "Bachelors in Computer Science and Engineering",
      logo_path: "SRM_Logo.jpeg",
      alt_name: "SSEC",
      duration: "2014 - 2018",
      descriptions: [
        "⚡ I have completed my Bachelors in Computer Science and Engineering.",
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "https://www.annauniv.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "B TECH Certificate",
      subtitle: "Anna University",
      logo_path: "SRM_Logo.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/1ncW2k_Dw9ybw_hsX2xyT8dvY1gO5Ur7c/view?usp=sharing",
      alt_name: "Anna University",
      color_code: "#2AAFED",
    },
    {
      title: "BTECH Provisional Certificate",
      subtitle: "Anna University",
      logo_path: "SRM_Logo.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/1a4a2hk5ORi6GKwgj9fwrnEfXXPRNZS_6/view?usp=sharing",
      alt_name: "hse",
      color_code: "#C5E2EE",
    },
    {
      title: "HSE Certificate (12th)",
      subtitle: "Govt of Kerala",
      logo_path: "hse_logo.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/1_ndQWbuBPX9ISxJRhvL6BnLKjN6EP-Hg/view?usp=sharing",
      alt_name: "hse",
      color_code: "#f47e2c",
    },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "",
  description:
    "I've 5+ years of experience in React Native and worked over 17+ projects throughout my career.I've deployed more than 10+ apps on both Android and iOS.Also i have worked in React for developing Web apps.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Senior software engineer",
          company: "QSS Technosoft",
          company_url: "https://www.qsstechnosoft.com/",
          logo_path: "Qss_logo.jpeg",
          duration: "Jul 2022 - Present",
          location: "Noida , Uttar Pradesh , India",
          description:
            "Role: Build, develop, deploy and test hybrid mobile applications and services by 3rd party library integration for their enterprise platform.",
          color: "#ee3c26",
        },
        {
          title: "Senior Software Engineer",
          company: "Zerone Consulting Pvt Ltd",
          company_url: "https://technocolabs.com/",
          logo_path: "Zerone_logo.jpeg",
          duration: "October 2020 - July 2022",
          location: "Cochin , kerala, India",
          description:
            "Role: Build, develop, deploy and test hybrid mobile applications and services by 3rd party library integration for their enterprise platform.",
          color: "#0071C5",
        },
        {
          title: "Junior Software Engineer",
          company: "Sysboon Technologies",
          company_url: "",
          logo_path: "Sysboon_logo.jpeg",
          duration: "October 2019 - October 2020",
          location: "Kozhikode , kerala, India",
          description: "Role: Develop hybrid mobile applications.",
          color: "#0071C5",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create and develop Mobile Applications for both Android and IOS. Below are some of my projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile_photo_2.jpeg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others.",
    link: "https://medium.com/@vedanshvijay/",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "GoPath",
      url: "https://github.com/vvHacker007/Tune-In",
      description:
        "GoPath is a health care management application where customers can book for an apponitment for any laboratary tests at specific slots.It allows to manage and track the users booking and provides necessary needs for the tests required.It is the perfect pocket tool for medical laboratory tests and enables you to browse through a huge library of common lab tests to find out more about clinical laboratory values",
      languages: [
        {
          name: "React Native",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Android",
          iconifyClass: "ant-design:android-filled",
        },
        {
          name: "iOS",
          iconifyClass: "ant-design:apple-filled",
        },
      ],
    },
    {
      id: "1",
      name: "GoPath Agent",
      url: "https://github.com/vvHacker007/Tune-In",
      description:
        "Online Aggregator Platform which connects labs to patients by optimising end to end supply chain and providing services of certified phlebotomists for Home Collection of all Lab Test Samples from anywhere and at any time to the patient's preferred lab.It allows Phlebotomists to receive the Lab Test Booking details of patients that book their Lab Test via Curelo App / Website as well as the patients assigned directly by the Admin. The Phlebotomists will be able to update the status for the Home Sample Collection on the App, allowing the Admin to keep a record of the Sample Collection Process.",
      languages: [
        {
          name: "React Native",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Android",
          iconifyClass: "ant-design:android-filled",
        },
        {
          name: "iOS",
          iconifyClass: "ant-design:apple-filled",
        },
      ],
    },
    {
      id: "2",
      name: "Delibo",
      url: "https://github.com/vvHacker007/Movie-Recommendation-Systems",
      description:
        "Delibo is an online grocery shopping app where users can purchase and order groceries online.users can create an account for browsing the list of necessary grocery items and make an order of the item to his desired location.The app allows online payment integration which helps the user to pay for the items at the time of ordering.",
      languages: [
        {
          name: "React Native",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Android",
          iconifyClass: "ant-design:android-filled",
        },
        {
          name: "iOS",
          iconifyClass: "ant-design:apple-filled",
        },
      ],
    },
    {
      id: "3",
      name: "Delibo Delivery App",
      url: "https://github.com/vvHacker007/Youtube-Downloader/",
      description:
        "Delivery application for Delibo where the delivery agents can track and manage customers orders to deliver the item.With the help of delivery application ,businesses can handle large amounts of orders while saving time and resources.",
      languages: [
        {
          name: "React Native",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Android",
          iconifyClass: "ant-design:android-filled",
        },
        {
          name: "iOS",
          iconifyClass: "ant-design:apple-filled",
        },
      ],
    },
    {
      id: "4",
      name: "Kimst Hospital App",
      url: "https://github.com/vvHacker007/Tetris",
      description:
        "App for Kimst Hospital which provides services for patients and also track the patients medical profile associated with the doctors and professionals.It helps the patients to book for appointments for consulting the desired medical care professionals and helps hi track and manage his booking.",
      languages: [
        {
          name: "React Native",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Android",
          iconifyClass: "ant-design:android-filled",
        },
        {
          name: "iOS",
          iconifyClass: "ant-design:apple-filled",
        },
      ],
    },
    {
      id: "5",
      name: "Comet",
      url: "https://www.mindspace.cf/",
      description:
        "Social networking app designed for doctors and health care professionals to stay upto date on medical news and updates.The app allows the health care professionals to create posts and also upload videos,images and documents to connect with other professionals.The app provides zoom video connect feature to connect with other doctors of higher background to understand and discuss various health related discussions.",
      languages: [
        {
          name: "React Native",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Android",
          iconifyClass: "ant-design:android-filled",
        },
        {
          name: "iOS",
          iconifyClass: "ant-design:apple-filled",
        },
      ],
    },
    {
      id: "6",
      name: "Skyline Tracking App",
      url: "https://github.com/vvHacker007/Youtube-Downloader/",
      description:
        "Providing Skyline asset management clients (only) with remote access to their assets and fleets. Supporting real time location, reporting and asset control features.Skyline’s remote asset management systems allow a range of alerts to be sent to an internal or external 24/7 operations room, empowering them with the information they need to take decisive action.",
      languages: [
        {
          name: "React Native",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Android",
          iconifyClass: "ant-design:android-filled",
        },
        {
          name: "iOS",
          iconifyClass: "ant-design:apple-filled",
        },
      ],
    },
    {
      id: "7",
      name: "Health Fabric",
      url: "https://github.com/vvHacker007/Notepad",
      description:
        "Unity from Health Fabric provides a multilingual service for people to manage their health and wellness. Health professionals from a range of health disciplines create health and wellness plans which can be followed by users to improve the quality of their lives. The app enables users to create social circles of health and wellness support by inviting friends, family and clinicians to view their data and provide them ongoing support. This is further complemented by premium support services for the user including virtual consultations.",
      languages: [
        {
          name: "React Native",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Android",
          iconifyClass: "ant-design:android-filled",
        },
        {
          name: "iOS",
          iconifyClass: "ant-design:apple-filled",
        },
      ],
    },

    {
      id: "8",
      name: "OCR Scan Easyish",
      url: "https://github.com/vvHacker007/Steganography",
      description:
        "Its an OCR tool for finding texts in an image which is specifically designed for zerone organisation.It also provides extra features like generating a PDF file from converted texts and also helps the user to share his texts or pdf file to other applications on the users specific devices.",
      languages: [
        {
          name: "React Native",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Android",
          iconifyClass: "ant-design:android-filled",
        },
        {
          name: "iOS",
          iconifyClass: "ant-design:apple-filled",
        },
      ],
    },
    {
      id: "9",
      name: "Lifetoken",
      url: "https://github.com/vvHacker007/Login-Authenticator",
      description:
        "Lifetoken is your audience management tool to fuel engagement. Use Lifetoken to inspire and excite your audience. Connect with your most engaged followers, uncover hidden treasure in your fanbase, and encourage your passive audience to engage with you.",
      languages: [
        {
          name: "React Native",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Android",
          iconifyClass: "ant-design:android-filled",
        },
        {
          name: "iOS",
          iconifyClass: "ant-design:apple-filled",
        },
      ],
    },
    {
      id: "10",
      name: "Spendable App",
      url: "https://github.com/vvHacker007/Calculator",
      description:
        "SpendAble is the worlds first debit card meeting the payment needs of people with disability and elderly people. The platform focuses on increasing financial independence through capacity building, supported decision making and skill development. The card network allows participants to connect trusted support workers to their money in a safe, auditable way that doesn’t require a participant to hand over their personal cash or debit card. This increases a participants ability to know and control who is spending their money and on what at all times. SpendAble's core utility focuses on: - Participant financial skill development and capacity building - Smarter shared payments that enable safer community access - 1 on 1 and group support environments - SIL and group home expense management - Service provider business expense solutions",
      languages: [
        {
          name: "React Native",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Android",
          iconifyClass: "ant-design:android-filled",
        },
        {
          name: "iOS",
          iconifyClass: "ant-design:apple-filled",
        },
      ],
    },

    {
      id: "11",
      name: "CaseTrack App",
      url: "https://github.com/vvHacker007/Mini-Paint",
      description:
        "CaseTrack is an end-to-end tool for recording and tracking cases specifically designed for law firms, as well as in-house legal departments.",
      languages: [
        {
          name: "React Native",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Android",
          iconifyClass: "ant-design:android-filled",
        },
        {
          name: "iOS",
          iconifyClass: "ant-design:apple-filled",
        },
      ],
    },
    {
      id: "12",
      name: "Recruit Online",
      url: "https://github.com/vvHacker007/Speed-test",
      description:
        "RecruitOnline manages the complete recruitment life cycle by providing an all-in-one recruitment platform that gives a single view of the business. This allows a business to nurture candidates and clients more efficiently.",
      languages: [
        {
          name: "React Native",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Android",
          iconifyClass: "ant-design:android-filled",
        },
        {
          name: "iOS",
          iconifyClass: "ant-design:apple-filled",
        },
      ],
    },
    {
      id: "13",
      name: "Litehouse Mobile App",
      url: "https://github.com/vvHacker007/Cat-Classifier",
      description:
        "Litehouse is provides easy shift management for nurses in their respective client.It helps to track and manage daily shifts.",
      languages: [
        {
          name: "React Native",
          iconifyClass: "logos-react",
        },
        {
          name: "TypeScript",
          iconifyClass: "logos:typescript-icon",
        },
        {
          name: "Android",
          iconifyClass: "ant-design:android-filled",
        },
        {
          name: "iOS",
          iconifyClass: "ant-design:apple-filled",
        },
      ],
    },
    {
      id: "14",
      name: "Litehouse Web App",
      url: "https://github.com/vvHacker007/Cat-Classifier",
      description:
        "Litehouse is provides easy shift management for nurses in their respective client.It helps to track and manage daily shifts.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "TypeScript",
          iconifyClass: "logos:typescript-icon",
        },
      ],
    },
    {
      id: "15",
      name: "Litehouse Admin Web App",
      url: "https://github.com/vvHacker007/Cat-Classifier",
      description:
        "Litehouse Admin app is for managing nurses and scheduler users with ease of management for shifts.Also manages the nurse documents and other onboarding process.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "TypeScript",
          iconifyClass: "logos:typescript-icon",
        },
      ],
    },
    {
      id: "16",
      name: "Litehouse Scheduler Web App",
      url: "https://github.com/vvHacker007/Cat-Classifier",
      description:
        "Litehouse Scheduler app can create shifts and assign the shifts respective for the nurses.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "TypeScript",
          iconifyClass: "logos:typescript-icon",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
