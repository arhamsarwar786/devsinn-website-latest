export type ContentSection = {
  title?: string;
  paragraphs?: string[];
  list?: string[];
};

export const companyPageContent = {
  title: "Company",
  eyebrow: "About Devsinn",
  introTitle: "About Devsinn Technologies",
  introParagraphs: [
    "Devsinn Technologies is a leading software development company that offers a wide range of services to help businesses succeed in the digital age. From web and mobile app development to enterprise software solutions, we provide end-to-end services that drive innovation and growth.",
    "Our team of skilled developers, designers, and project managers has years of experience in delivering high-quality software solutions that meet the unique needs of our clients. We take a client-centric approach to every project, ensuring that we understand your business goals and deliver solutions that help you achieve them.",
  ],
  sections: [
    {
      title: "Our Mission",
      paragraphs: [
        "Our mission is to empower businesses with innovative software solutions that drive growth and success. We are committed to delivering top-notch services that help our clients stay ahead of the competition and achieve their business goals.",
      ],
    },
    {
      title: "Our Values",
      list: [
        "Customer-Centric Approach",
        "Innovation and Excellence",
        "Integrity and Transparency",
        "Commitment to Quality",
        "Collaborative Work Environment",
      ],
    },
    {
      title: "Our Expertise",
      paragraphs: [
        "We bring extensive expertise in various domains, ensuring top-tier solutions for our clients:",
      ],
      list: [
        "Custom Software Development",
        "Cloud Infrastructure & Deployment",
        "Cybersecurity & Data Protection",
        "Automation & Workflow Optimization",
        "Business Intelligence & Data Analytics",
        "Internet of Things (IoT) Solutions",
      ],
    },
  ] satisfies ContentSection[],
};

export const whyChooseUsContent = {
  title: "Why Choose Us",
  eyebrow: "Why Clients Choose Devsinn",
  introTitle: "Why Choose Devsinn Technologies?",
  introParagraphs: [
    "At Devsinn Technologies, we are committed to delivering top-notch software solutions that drive innovation and success. Here's why we stand out:",
  ],
  cards: [
    {
      title: "Expertise & Experience",
      description:
        "With a team of skilled developers, designers, and project managers, we bring years of industry experience in web, mobile, and enterprise software development.",
    },
    {
      title: "Client-Centric Approach",
      description:
        "We prioritize your business goals and tailor solutions to meet your unique needs, ensuring seamless collaboration and satisfaction.",
    },
    {
      title: "Cutting-Edge Technologies",
      description:
        "From AI-powered applications to scalable cloud solutions, we leverage the latest technologies to keep you ahead of the competition.",
    },
    {
      title: "Agile & Transparent Process",
      description:
        "Our agile development approach ensures flexibility, faster delivery, and continuous improvement while keeping you informed at every step.",
    },
    {
      title: "Quality & Security First",
      description:
        "We adhere to industry best practices, ensuring that our solutions are secure, scalable, and high-performing.",
    },
    {
      title: "End-to-End Services",
      description:
        "From ideation and development to deployment and maintenance, we provide full-cycle software development services.",
    },
  ],
  closing:
    "Partner with Devsinn Technologies and turn your ideas into reality with reliable, scalable, and innovative software solutions.",
};

export const termsContent = {
  title: "Terms & Conditions",
  eyebrow: "Website Terms",
  introTitle:
    "By using this website, you agree to be bound by the following terms and conditions:",
  items: [
    {
      title: "Use of the Website",
      body: "You may use this website for lawful purposes only. You may not use this website in any way that infringes on the rights of others, or that is in violation of any applicable laws or regulations.",
    },
    {
      title: "Intellectual Property",
      body: "All content on this website, including but not limited to text, graphics, images, and logos, is the property of Dev's Inn Technologies or its licensors and is protected by copyright and other intellectual property laws. You may not use, copy, or distribute any content from this website without our express written consent.",
    },
    {
      title: "Disclaimer of Warranties",
      body: "Dev's Inn Technologies makes no representations or warranties about the accuracy, completeness, or reliability of the information on this website. This website is provided on an \"as is\" and \"as available\" basis.",
    },
    {
      title: "Limitation of Liability",
      body: "Dev's Inn Technologies is not liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of this website. This includes, but is not limited to, damages for loss of profits, data, or other intangible losses.",
    },
    {
      title: "Links to Third-Party Websites",
      body: "This website may contain links to third-party websites that are not owned or controlled by Dev's Inn Technologies. We are not responsible for the content or practices of these websites.",
    },
    {
      title: "Indemnification",
      body: "You agree to indemnify and hold Dev's Inn Technologies and its affiliates, officers, agents, and employees harmless from any claim, demand, or damage, including reasonable attorneys' fees, arising out of or in connection with your use of this website.",
    },
    {
      title: "Changes to Terms and Conditions",
      body: "We reserve the right to update or modify these terms and conditions at any time. Your continued use of this website after any such changes constitutes your acceptance of the new terms and conditions.",
    },
    {
      title: "Governing Law",
      body: "These terms and conditions are governed by the laws of Pakistan, and you agree to submit to the exclusive jurisdiction of the courts located in Lahore, Pakistan for any disputes arising out of or in connection with these terms and conditions.",
    },
  ],
};

export const supportContent = {
  title: "Support",
  eyebrow: "We're Here To Help",
  introTitle: "Get the Help You Need with Dev's Inn",
  introParagraphs: [
    "At Dev's Inn Technologies, we understand the importance of having reliable support when you need it. That's why we offer expert support for all of our website design services. Our team of experienced professionals is always available to answer your questions, troubleshoot issues, and help you make the most of your website.",
    "Whether you need technical assistance, guidance on website design best practices, or simply have a question about our services, we're here to help. We take pride in our commitment to providing top-notch support to our clients, and we're always striving to exceed your expectations.",
  ],
  sections: [
    {
      title: "Features & Benefits",
      list: [
        "Real-time Assistance",
        "Feedback Collection",
        "Remote Assistance",
        "24x7 Support",
      ],
    },
  ] satisfies ContentSection[],
};
