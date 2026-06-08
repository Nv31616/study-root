import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
const url = import.meta.env.VITE_SUPABASE_URL
const key = import.meta.env.VITE_SUPABASE_KEY

// Initialize your Supabase client
const supabase = createClient(url, key);

// 🌟 Extracted Unique Subject Array List
const AVAILABLE_SUBJECTS = [
  "Advanced Algorithm",
  "Advanced Algorithms",
  "Advanced Data Structures and Algorithms",
  "Advanced Database Management System",
  "Advanced Digital Signal Processing",
  "Advanced Java Laboratory",
  "Advanced Machine Learning",
  "Advanced Operating System",
  "Advanced Quantitative Techniques",
  "Advanced Security",
  "Advanced VLSI",
  "Adv. Business Intelligence",
  "Additive Manufacturing",
  "Analog Communication",
  "Analysis of Algorithms",
  "Applied Cryptography",
  "Applied Mathematics",
  "Artificial Intelligence",
  "Artificial Intelligence in Cybersecurity",
  "Artificial Intelligence in Finance",
  "Automobile Engineering",
  "Automotive Prime Movers",
  "Basic VLSI",
  "BEE",
  "Big Data Analysis",
  "Big Data Analytics",
  "Big Data Infrastructure",
  "Big Data Laboratory",
  "Bioinformatics",
  "Blockchain Architecture",
  "Blockchain for Cybersecurity",
  "Blockchain Technology",
  "Business Analytics",
  "CAD/CAM/CIM",
  "CEM",
  "Chemistry",
  "Cloud Computing",
  "Cloud Computing and Security",
  "Cloud Computing Laboratory",
  "Cognitive Computing",
  "Community Engagement Service",
  "Compiler Design",
  "Computational Fluids Dynamics",
  "Computational Methods and Pricing Models",
  "Computational Motion Planning",
  "Computational Neuroscience",
  "Computer Aided Machine Drawing Laboratory",
  "Computer Communication and Networks",
  "Computer Graphics",
  "Computer Graphics & Virtual Reality",
  "Computer Networks",
  "Computer Networks & Security",
  "Computer System Fundamentals",
  "Computer Vision",
  "Computer Vision-I",
  "Computer Vision-II",
  "Constitution of India",
  "Control Systems",
  "Corporate Finance Management",
  "Corporate Social Responsibility",
  "Cryptography and Network Security",
  "Cryptocurrency Technology",
  "Cyber Security and Laws",
  "Cyber Security, Policies and Laws",
  "Cybersecurity",
  "Data Analytics Laboratory",
  "Data Compression & Encryption",
  "Data Engineering",
  "Data Engineering & Visualization Laboratory",
  "Data Mining and Warehouse",
  "Data Science Laboratory (Python)",
  "Data Structures",
  "Data Structures and Algorithms",
  "Data Warehousing and Mining",
  "Database Management System",
  "Database Management System Laboratory",
  "Database Management Systems",
  "Database Systems",
  "Deep Learning",
  "Department Elective 1- MLOps",
  "Department Elective 1- DevOps",
  "Department Elective 2- Game Programming",
  "Department Elective 2- Spatial Data Analytics",
  "Department Elective 3- Computational Intelligence",
  "Department Elective 3- Computer Graphics & Virtual Reality",
  "Department Elective 4- Web Programming",
  "Department Elective 4- Text, Web & Social Analytics",
  "Design and Analysis of Algorithms",
  "Design of Heat Exchanger Equipments",
  "Design of Mechanical Systems",
  "Design Patterns",
  "Design Thinking",
  "Design Thinking Laboratory",
  "DevOps Laboratory",
  "Digital Communication",
  "Digital Electronics",
  "Digital Marketing Management",
  "Digital Signal Processing",
  "Digital Signal Processing and Applications",
  "Digital System Design",
  "Disaster Management and Mitigation Measures",
  "Discrete Structures",
  "Distributed Computing",
  "Economics and Financial Management",
  "Econometric Modelling",
  "ECS",
  "Electrical Networks Analysis & Synthesis Laboratory",
  "Electronics Circuit Design",
  "Electromagnetic Wave Propagation",
  "EME",
  "Embedded System and IoT",
  "Embedded Systems",
  "EMN",
  "Energy Audit and Management",
  "Engineering Mathematics III",
  "Engineering Mathematics - III",
  "Engineering Mathematics-III",
  "Engineering Mathematics IV",
  "Engineering Mathematics - IV",
  "Engineering Mathematics-IV",
  "Engineering Thermodynamics",
  "Engg. Graphics",
  "Enterprise Governance of Information Technology",
  "Entrepreneurship and Startup Ecosystem",
  "Entrepreneurship Development and Management",
  "Environmental Engineering",
  "Environmental Management",
  "Environmental Studies",
  "Ethical AI",
  "Ethical Hacking and Digital Forensics",
  "FAIDS",
  "FAIML",
  "FDA",
  "Financial Decision Making",
  "Financial Market and Risk Analysis",
  "Finite Element Analysis",
  "FIT",
  "Fluid Mechanics",
  "Formal Language & Automata Theory",
  "Formal Languages and Automata Theory",
  "Foundation of Data Science",
  "Fundamentals of Biomedical Instruments",
  "Fundamentals of Digital Image Processing",
  "FSST",
  "Game Design",
  "Gamification",
  "Geo-Spatial Data Science",
  "High Performance Computing",
  "Heat Transfer",
  "Human Machine Interaction",
  "Human Resource Management",
  "Image Generative AI",
  "Image Processing and Computer Vision",
  "Industrial Automation Laboratory",
  "Industrial Engineering",
  "Industrial Electronics and Controls",
  "Industrial Internet of Things",
  "Industrial Internet of Everything",
  "Industrial Waste Management",
  "Infrastructure Security",
  "Information Security",
  "Innovative Product Development I",
  "Innovative Product Development II",
  "Innovative Product Development III",
  "Innovative Product Development IV",
  "Innovative Product Development-I",
  "Innovative Product Development-II",
  "Innovative Product Development-III",
  "Innovative Product Development-IV",
  "Institute Elective",
  "Institute Level Optional Courses- I",
  "Institute Level Optional Courses- II",
  "Institute Professional Elective",
  "Integrated Circuits",
  "Intelligent Systems",
  "Internet Engineering & Network Security",
  "Internet of Things",
  "IoT & Edge Computing",
  "IoT and Applications",
  "IPR & Patenting",
  "IPR and Patenting",
  "Java",
  "Kinematics of Machinery",
  "Labour and Corporate Law",
  "Language Models",
  "Linear Algebra",
  "Linear Algebra and Optimization Techniques",
  "Logistics and Supply Chain Management",
  "Machine Health Monitoring Management",
  "Machine Design I",
  "Machine Design II",
  "Machine Learning",
  "Machine Learning - I",
  "Machine Learning-II (Deep Learning)",
  "Machine Learning - III (Reinforcement Learning)",
  "Machine Learning for Signal Processing",
  "Machine Tool Engineering",
  "Machine Shop Practice I",
  "Machine Shop Practice II",
  "Malware Analysis",
  "Management Information System",
  "Manufacturing Processes",
  "Materials Technology",
  "Mathematics for Intelligent Systems",
  "Maths",
  "Maths-II",
  "Mechanical Measurements and Metrology",
  "Mechanical Vibrations",
  "Mechatronics",
  "Microcontrollers and Embedded Systems",
  "Microcontroller & Applications-I",
  "Microcontroller & Applications II",
  "Microwave Amplifier & Oscillator Design",
  "Microwave Engineering",
  "Mobile Communication System",
  "Mobile Device Security and Forensics",
  "Motor Sports Engineering",
  "Natural Language Processing",
  "Natural Language Text Processing",
  "Network Engineering",
  "Neural Network & Fuzzy Logic",
  "Open Elective I",
  "Open Elective II",
  "Open Digital Library Courses/MOOC",
  "Open Source Technologies Laboratory",
  "Operating System",
  "Operating Systems",
  "Operations Research",
  "Optical Communication",
  "Parallel and Distributed Computing",
  "Personal Finance Management",
  "Physics",
  "Power Engineering",
  "Power Electronics",
  "Predictive Analytics",
  "Predictive Modeling",
  "Probabilistic Graph Models",
  "Probabilistic Models",
  "Process Equipment Design",
  "Processor Organization and Architecture",
  "Production Planning and Control",
  "Professional and Business Communication",
  "Professional and Business Communication Laboratory",
  "Professional and Business Communication Tutorial",
  "Professional Communication & Ethics",
  "Programming Laboratory I (Python Programming)",
  "Programming Laboratory II (Web Development)",
  "Programming Laboratory-I (Java)",
  "Programming Laboratory-II (Python)",
  "Programming Laboratory-III (Full Stack Development using NextJs)",
  "Project Management",
  "Public System & Policies",
  "Public Systems and Policies",
  "Python for Mechanical Engineering",
  "Python Programming Laboratory",
  "Quality Engineering",
  "Quantum AI",
  "Quantum Computing",
  "Quantitative Portfolio Management",
  "Radar Engineering",
  "Radiating Systems",
  "Radio Frequency Circuit Design",
  "Recommendation Systems",
  "Refrigeration and Air Conditioning",
  "Reinforcement Learning",
  "Reliability Engineering",
  "Renewable Energy Systems",
  "Research Methodology",
  "Robotics",
  "Robotics & AI",
  "Satellite Communication",
  "Science of Well-being",
  "Secure Software Engineering",
  "Secure Software Systems",
  "Semantic Web Technology",
  "Service Oriented Architecture",
  "Smart Industries",
  "Smart Materials",
  "Signals & Systems",
  "Social Network Analysis",
  "Software Architecture",
  "Software Engineering",
  "Software Testing and Quality Assurance",
  "SPC",
  "Speech Processing",
  "Statistical Analysis",
  "Statistics for Data Science",
  "Statistics for Engineers",
  "Strength of Materials",
  "Sustainable Energy Management",
  "Theoretical Computer Science",
  "Time Series Analysis",
  "Time Series Analysis for Financial Applications",
  "Tribology",
  "UI/UX Design",
  "Universal Human Values",
  "User Centered Design",
  "Web Application Development Laboratory",
  "Web Engineering Laboratory",
  "Web Intelligence",
  "Web Programming Laboratory",
  "Wireless Network",
  "Wireless Sensor Network",
];

export default function UploadSection() {
  const [subject, setSubject] = useState("");
  const [examType, setExamType] = useState("TT1");
  const [academicYear, setAcademicYear] = useState("2025-26");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!subject || !file) {
      setMessage({
        text: "Please select a valid subject and choose a PDF file.",
        type: "error",
      });
      return;
    }

    setLoading(true);
    setMessage({ text: "Uploading file", type: "info" });

    try {
      const cleanSubject = subject.trim().replace(/[\s\.\,\-]+/g, "_");

      const customFileName = `${cleanSubject}_${examType}_${academicYear}.pdf`;
      const bucketName = "subjects";
      const storagePath = `${examType}/${cleanSubject}/${customFileName}`;

      const { error } = await supabase.storage
        .from(bucketName)
        .upload(storagePath, file, {
          cacheControl: "3600",
          upsert: true,
        });

      if (error) throw error;

      setMessage({
        text: `Successfully uploaded under ${examType}/${cleanSubject}!`,
        type: "success",
      });

      // Clear layout elements
      setSubject("");
      setFile(null);
      const fileInput = document.getElementById("file-input");
      if (fileInput) fileInput.value = "";
    } catch (error) {
      console.error("Upload Error Details:", error);
      setMessage({ text: `Upload failed: ${error.message}`, type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="p-5 sm:p-8 flex flex-col gap-6 border max-w-150 bg-amber-100 border-amber-900 rounded-2xl m-3">
        <h2 className="font-bold text-2xl sm:text-3xl text-amber-900 text-center">
          Upload Previous Year Papers
        </h2>

        <form onSubmit={handleUpload} className="flex flex-col gap-4 w-full">
          {/* Subject Select Dropdown Group */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs sm:text-sm font-bold font-mono text-amber-900 uppercase tracking-wider">
              Select Subject
            </label>
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className="w-full p-2.5 bg-amber-100 border  border-amber-800 rounded-xl font-mono text-sm sm:text-base text-amber-900 focus:outline-none focus:ring-2 focus:ring-[#B83D1E] focus:border-transparent transition-all cursor-pointer"
            >
              <option value="" disabled>
                -- Choose a Subject --
              </option>
              {AVAILABLE_SUBJECTS.map((sub, idx) => (
                <option key={idx} value={sub}>
                  {sub}
                </option>
              ))}
            </select>
          </div>

          {/* Papers Type Group */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs sm:text-sm font-bold font-mono text-amber-900 uppercase tracking-wider">
              Exam Type
            </label>
            <select
              value={examType}
              onChange={(e) => setExamType(e.target.value)}
              className="w-full p-2.5 bg-amber-100 border border-amber-800 rounded-xl font-mono text-sm sm:text-base text-amber-900 focus:outline-none focus:ring-2 focus:ring-[#B83D1E] transition-all cursor-pointer"
            >
              <option value="TT1">Term Test 1 (TT1)</option>
              <option value="TT2">Term Test 2 (TT2)</option>
              <option value="ESE">End Semester Examination (ESE)</option>
            </select>
          </div>

          {/* File Picker Selection Group */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs sm:text-sm font-bold font-mono text-amber-900 uppercase tracking-wider">
              Choose File
            </label>
            <input
              type="file"
              onChange={handleFileChange}
              required
              className="w-full p-2 bg-amber-100 border border-dashed border-[#B83D1E] rounded-xl font-mono text-sm file:text-sm text-amber-900 file:mr-3 file:py-1 file:px-3 file:cursor-pointer file:rounded-full file:border file:font-semibold file:border-[#B83D1E] file:bg-[#B83D1E] file:text-white hover:file:text-[#B83D1E] hover:file:bg-white cursor-pointer file:transition-colors"
            />
          </div>

          {/* Optimized Action Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="mt-2 self-center max-w-xs hover:scale-[1.02] active:scale-[0.98] transition-transform cursor-pointer bg-[#B83D1E] border-2 border-[#B83D1E] font-mono hover:bg-white hover:text-[#B83D1E] rounded-3xl w-full h-11 text-white text-sm sm:text-base font-bold disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-2"
          >
            {loading ? (
              <span className="animate-pulse">Uploading File...</span>
            ) : (
              "Upload"
            )}
          </button>
        </form>

        {/* Styled Responsive Feedback Notifications */}
        {message && (
          <div
            className={`p-3.5 rounded-xl font-mono text-xs sm:text-sm text-center text-amber-900 bg-amber-100`}
          >
            {message.text}
          </div>
        )}
      </div>
    </div>
  );
}
