import { ref, computed } from 'vue'

// Available languages
export const LANGUAGES = {
  en: { code: 'en', name: 'English', flag: '🇺🇸' },
  km: { code: 'km', name: 'ខ្មែរ', flag: '🇰🇭' },
  zh: { code: 'zh', name: '中文', flag: '🇨🇳' }
}

// Current language state
const currentLanguage = ref('en')

// Translation data
const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      education: 'Education',
      contact: 'Contact'
    },
    // Hero Section
    hero: {
      roles: [
        'Web Application Developer',
        'Frontend Developer',
        'Vue.js Developer',
        'UI/UX Designer',
        'Full Stack Developer'
      ],
      taglines: [
        'Passionate Web Developer & UI/UX Designer',
        'Building responsive web interfaces with Vue.js',
        'Creating beautiful and functional user experiences',
        'Turning ideas into interactive web applications',
        'Crafting modern solutions with clean code'
      ],
      viewProjects: 'View Projects',
      viewCV: 'View CV',
      downloadCV: 'Download CV'
    },
    // About Section
    about: {
      title: 'About Me',
      text: 'A motivated and detail-oriented Year 3 (Semester 1) student at ACLEDA University majoring in Computer Science and Engineering. Passionate about Web Development and UI/UX Design, with solid skills in problem-solving, database design, and building responsive web interfaces. Always eager to apply both academic and technical knowledge to real projects, learn new technologies, and contribute effectively to a development team.',
      location: 'Location',
      experience: 'Years of Experience',
      status: 'Status',
      statusValue: 'Open to Opportunities'
    },
    // Skills Section
    skills: {
      title: 'Skills',
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Database',
      tools: 'Tools',
      items: {
        frontend: [
          'Vue.js',
          'Vue 3 (Composition API)',
          'JavaScript',
          'HTML5',
          'CSS3',
          'Tailwind CSS',
          'Responsive Design',
          'UI/UX Design'
        ],
        backend: [
          'Django REST Framework',
          'Python',
          'RESTful APIs',
          'JWT Authentication',
          'PostgreSQL',
          'Database Design'
        ],
        tools: [
          'Git',
          'Version Control',
          'Axios',
          'Web Service',
          'Database Management',
          'Problem Solving'
        ]
      }
    },
    // Projects Section
    projects: {
      title: 'Projects',
      items: [
        {
          title: 'E-commerce Web Application with Admin Dashboard',
          description: 'A full-stack e-commerce solution with product catalog, shopping cart, checkout system, and order tracking. Features a comprehensive admin dashboard for managing products, stock, orders, users, and real-time sales analytics.'
        },
        {
          title: 'Web Application for Inventory and Sales Management',
          description: 'A web application for managing inventory and sales using Django REST Framework and Vue.js. Features a comprehensive admin dashboard for managing products, stock, orders, users, and real-time sales analytics.'
        }
      ],
      github: 'GitHub',
      liveDemo: 'Live Demo'
    },
    // Experience Section
    experience: {
      title: 'Experience',
      viewDetails: 'View Details',
      hideDetails: 'Hide Details',
      items: [
        {
          role: 'E-commerce Web Application Developer',
          company: 'ACLEDA University of Business',
          dateRange: '2023 - 2025',
          achievements: [
            'Built a full e-commerce web application with product catalog, cart, checkout, and order tracking, plus a separate admin dashboard for managing products, stock, orders, and users',
            'Developed the frontend using Vue.js (Composition API) and Tailwind CSS, with reusable components for product cards, filters, modals, and tables',
            'Implemented secure APIs using Django REST Framework, including authentication (JWT), role-based permissions (admin vs customer), and endpoints for products, orders, payments, and reports',
            'Designed PostgreSQL database schemas with relations between users, products, categories, stock, orders, and payments to keep data consistent and easy to query',
            'Integrated Axios with Vue for CRUD operations in the admin dashboard: admins can create/update products, adjust stock, confirm orders, and view sales analytics in real time',
            'Added responsive layout and mobile-first UI so both the shop and admin dashboard work smoothly on desktop, tablet, and phone'
          ]
        },
        {
          role: 'Web Application Developer',
          company: 'Sekai Technologies',
          dateRange: '2022 - 2023',
          achievements: [
            'Developed a web application for a client to manage their inventory and sales using Django REST Framework and Vue.js',
            'Implemented secure APIs using Django REST Framework, including authentication (JWT), role-based permissions (admin vs customer), and endpoints for products, orders, payments, and reports',
            'Designed PostgreSQL database schemas with relations between users, products, categories, stock, orders, and payments to keep data consistent and easy to query',
            'Integrated Axios with Vue for CRUD operations in the admin dashboard: admins can create/update products, adjust stock, confirm orders, and view sales analytics in real time'
          ]
        },
        {
          role: 'Intern Web Application Developer',
          company: 'AIKIMI Technology',
          dateRange: '2021 - 2022',
          achievements: [
            'Developed a web application for a client to manage their inventory and sales using Django REST Framework and Vue.js',
            'Implemented secure APIs using Django REST Framework, including authentication (JWT), role-based permissions (admin vs customer), and endpoints for products, orders, payments, and reports',
            'Designed PostgreSQL database schemas with relations between users, products, categories, stock, orders, and payments to keep data consistent and easy to query',
            'Integrated Axios with Vue for CRUD operations in the admin dashboard: admins can create/update products, adjust stock, confirm orders, and view sales analytics in real time'
          ]
        }
      ]
    },
    // Education Section
    education: {
      title: 'Education',
      description: 'A quick look at my academic background and achievements.',
      viewCertificate: 'View Certificate',
      certificateNA: 'Certificate N/A',
      downloadCertificate: 'Download Certificate',
      keyHighlights: 'Key Highlights:',
      close: 'Close',
      download: 'Download',
      status: {
        inProgress: 'In Progress',
        graduated: 'Graduated',
        completed: 'Completed',
        onHold: 'On Hold'
      },
      items: [
        {
          degree: 'Bachelor of Computer Science and Engineering',
          institution: 'ACLEDA University of Business',
          location: 'Phnom Penh, Cambodia',
          dateRange: '2023 - 2027',
          status: 'In Progress',
          description: [
            'Majoring in Computer Science and Engineering with focus on Web Development, Database Design, and Software Engineering principles.',
            'Specialized coursework in algorithms, data structures, web technologies, and system design.',
            'Active participation in coding competitions and technology events.'
          ],
          highlights: [
            'Year 3 (Semester 1)',
            'Web Development Specialization',
            'Dean\'s List Recognition',
            'Programming Club Member',
            'Tech Event Participant'
          ]
        },
        {
          degree: 'High School of Electronic Robotics',
          institution: 'Juang Jing Vocational High School',
          location: 'Taiwan',
          dateRange: '2023 - 2024',
          status: 'Completed',
          description: [
            'Specialized vocational training in electronic systems and robotics technology.',
            'Hands-on experience with microcontroller programming and embedded systems.',
            'Cross-cultural learning experience in international educational environment.'
          ],
          highlights: [
            'Electronic Circuit Design',
            'Robotics Programming',
            'Microcontroller Systems',
            'International Experience',
            'Technical Excellence Award'
          ]
        },
        {
          degree: 'High School Diploma',
          institution: 'Bat Doeng High School',
          location: 'Cambodia',
          dateRange: '2020 - 2023',
          status: 'Graduated',
          description: [
            'Completed secondary education with strong performance in mathematics and sciences.',
            'Developed foundational interest in computer programming and technology.',
            'Active participation in school technology clubs and STEM activities.'
          ],
          highlights: [
            'Top 10% of Class',
            'STEM Excellence',
            'Technology Club Leader',
            'Mathematics Award',
            'Science Fair Participant'
          ]
        },
        {
          degree: 'Lower Secondary Certificate',
          institution: 'Bat Doeng Secondary School',
          location: 'Cambodia',
          dateRange: '2017 - 2020',
          status: 'Completed',
          description: [
            'Foundation education covering core academic subjects and basic computer literacy.',
            'First exposure to computer programming concepts and digital technologies.',
            'Strong performance in mathematics and science subjects.'
          ],
          highlights: [
            'Academic Excellence',
            'Computer Literacy Certificate',
            'Mathematics Proficiency',
            'Student Leadership Role'
          ]
        },
        {
          degree: 'Primary Education Certificate',
          institution: 'Trapeang Thmor Primary School',
          location: 'Cambodia',
          dateRange: '2010 - 2017',
          status: 'Completed',
          description: [
            'Elementary education covering fundamental academic skills and early technology exposure.',
            'Development of strong foundation in core subjects including mathematics and language arts.',
            'Early demonstration of interest in technology and problem-solving.'
          ],
          highlights: [
            'Outstanding Academic Performance',
            'Perfect Attendance Award',
            'Early Technology Interest',
            'Student Council Member'
          ]
        }
      ]
    },
    // Contact Section
    contact: {
      title: 'Get In Touch',
      description: 'Feel free to reach out if you\'d like to collaborate or just say hello!',
      contactInfo: 'Contact Information',
      phone: 'Phone',
      email: 'Email',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      facebook: 'Facebook',
      telegram: 'Telegram',
      viewProjects: 'View Projects',
      professionalProfile: 'Professional Profile',
      socialProfile: 'Social Profile',
      instantMessaging: 'Instant Messaging'
    },
    // Footer
    footer: {
      allRightsReserved: 'All rights reserved.'
    },
    // Common
    common: {
      backToTop: 'Back to Top',
      loading: 'Loading...',
      error: 'Error occurred'
    },
    // Personal Info
    personalInfo: {
      name: 'Moeng Kimheang'
    }
  },
  km: {
    // Navigation
    nav: {
      home: 'ទំព័រដើម',
      about: 'អំពីខ្ញុំ',
      skills: 'ជំនាញ',
      projects: 'គម្រោង',
      experience: 'បទពិសោធន៍',
      education: 'ការអប់រំ',
      contact: 'ទំនាក់ទំនង'
    },
    // Hero Section
    hero: {
      roles: [
        'អ្នកអភិវឌ្ឍន៍កម្មវិធីវេប',
        'អ្នកអភិវឌ្ឍន៍ផ្នែកមុខ',
        'អ្នកអភិវឌ្ឍន៍ Vue.js',
        'អ្នករចនា UI/UX',
        'អ្នកអភិវឌ្ឍន៍ពេញលេញ'
      ],
      taglines: [
        'អ្នកអភិវឌ្ឍន៍វេបដែលមានចំណង់ចំណូលចិត្ត និងអ្នករចនា UI/UX',
        'បង្កើតចំណុចប្រទាក់វេបឆ្លើយតបជាមួយ Vue.js',
        'បង្កើតបទពិសោធន៍អ្នកប្រើប្រាស់ស្រស់ស្អាត និងមានមុខងារ',
        'បំលែងគំនិតទៅជាកម្មវិធីវេបអន្តរកម្ម',
        'បង្កើតដំណោះស្រាយទំនើបជាមួយកូដស្អាត'
      ],
      viewProjects: 'មើលគម្រោង',
      viewCV: 'មើល CV',
      downloadCV: 'ទាញយក CV'
    },
    // About Section
    about: {
      title: 'អំពីខ្ញុំ',
      text: 'សិស្សឆ្នាំទី៣ (សម័យទី១) ដែលមានការលើកទឹកចិត្ត និងយកចិត្តទុកដាក់លម្អិតនៅសាកលវិទ្យាល័យ ACLEDA ដែលរៀនជំនាញវិទ្យាសាស្ត្រកុំព្យូទ័រ និងវិស្វកម្ម។ មានចំណង់ចំណូលចិត្តខាងការអភិវឌ្ឍន៍វេប និងការរចនា UI/UX ជាមួយនឹងជំនាញរឹងមាំក្នុងការដោះស្រាយបញ្ហា ការរចនាមូលដ្ឋានទិន្នន័យ និងការបង្កើតចំណុចប្រទាក់វេបឆ្លើយតប។ តែងតែឆ្ងល់ចង់អនុវត្តចំណេះដឹងសិក្សា និងបច្ចេកទេសទៅកាន់គម្រោងពិត រៀនបច្ចេកវិទ្យាថ្មីៗ និងចូលរួមយ៉ាងមានប្រសិទ្ធិភាពទៅកាន់ក្រុមអភិវឌ្ឍន៍។',
      location: 'ទីតាំង',
      experience: 'ឆ្នាំនៃបទពិសោធន៍',
      status: 'ស្ថានភាព',
      statusValue: 'បើកទទួលឱកាស'
    },
    // Skills Section
    skills: {
      title: 'ជំនាញ',
      frontend: 'ផ្នែកមុខ',
      backend: 'ផ្នែកក្រោយ',
      database: 'មូលដ្ឋានទិន្នន័យ',
      tools: 'ឧបករណ៍'
    },
    // Projects Section
    projects: {
      title: 'គម្រោង',
      items: [
        {
          title: 'កម្មវិធីវេប E-commerce ជាមួយ Admin Dashboard',
          description: 'ដំណោះស្រាយ E-commerce ពេញលេញជាមួយកាតាឡុកផលិតផល រទេះទិញទំនិញ ប្រព័ន្ធទូទាត់ និងការតាមដានការបញ្ជាទិញ។ មាន Admin Dashboard ពេញលេញសម្រាប់គ្រប់គ្រងផលិតផល ស្តុក ការបញ្ជាទិញ អ្នកប្រើប្រាស់ និងការវិភាគការលក់ពេលវេលាពិត។'
        },
        {
          title: 'កម្មវិធីវេបសម្រាប់គ្រប់គ្រងស្តុក និងការលក់',
          description: 'កម្មវិធីវេបសម្រាប់គ្រប់គ្រងស្តុក និងការលក់ដោយប្រើ Django REST Framework និង Vue.js។ មាន Admin Dashboard ពេញលេញសម្រាប់គ្រប់គ្រងផលិតផល ស្តុក ការបញ្ជាទិញ អ្នកប្រើប្រាស់ និងការវិភាគការលក់ពេលវេលាពិត។'
        }
      ],
      github: 'GitHub',
      liveDemo: 'ការបង្ហាញផ្ទាល់'
    },
    // Experience Section - Khmer
    experience: {
      title: 'បទពិសោធន៍',
      viewDetails: 'មើលលម្អិត',
      hideDetails: 'លាក់លម្អិត',
      items: [
        {
          role: 'អ្នកអភិវឌ្ឍន៍កម្មវិធីវេប E-commerce',
          company: 'សាកលវិទ្យាល័យ ACLEDA',
          dateRange: '2023 - 2025',
          achievements: [
            'បានបង្កើតកម្មវិធីវេប E-commerce ពេញលេញជាមួយកាតាឡុកផលិតផល រទេះទិញទំនិញ ការទូទាត់ និងការតាមដានការបញ្ជាទិញ បូកនឹង Admin Dashboard ដាច់ដោយឡែកសម្រាប់គ្រប់គ្រងផលិតផល ស្តុក ការបញ្ជាទិញ និងអ្នកប្រើប្រាស់',
            'បានអភិវឌ្ឍ frontend ដោយប្រើ Vue.js (Composition API) និង Tailwind CSS ជាមួយ components ដែលអាចប្រើប្រាស់ម្តងទៀតសម្រាប់កាតផលិតផល filters modals និងតារាង',
            'បានអនុវត្ត APIs ដែលមានសុវត្ថិភាពដោយប្រើ Django REST Framework រួមមាន authentication (JWT) role-based permissions (admin vs customer) និង endpoints សម្រាប់ផលិតផល ការបញ្ជាទិញ ការទូទាត់ និងរបាយការណ៍',
            'បានរចនា PostgreSQL database schemas ជាមួយទំនាក់ទំនងរវាងអ្នកប្រើប្រាស់ ផលិតផល ប្រភេទ ស្តុក ការបញ្ជាទិញ និងការទូទាត់ដើម្បីរក្សាទិន្នន័យស៊ីសង្វាក់ និងងាយស្រួលសួរ',
            'បានបញ្ចូល Axios ជាមួយ Vue សម្រាប់ CRUD operations នៅក្នុង admin dashboard: admins អាចបង្កើត/ធ្វើបច្ចុប្បន្នភាពផលិតផល កែសម្រួលស្តុក បញ្ជាក់ការបញ្ជាទិញ និងមើលការវិភាគការលក់ពេលវេលាពិត',
            'បានបន្ថែម layout ឆ្លើយតប និង mobile-first UI ដើម្បីឱ្យទាំង shop និង admin dashboard ដំណើរការដោយរលូននៅលើ desktop tablet និងទូរស័ព្ទ'
          ]
        },
        {
          role: 'អ្នកអភិវឌ្ឍន៍កម្មវិធីវេប',
          company: 'Sekai Technologies',
          dateRange: '2022 - 2023',
          achievements: [
            'បានអភិវឌ្ឍកម្មវិធីវេបសម្រាប់អតិថិជនដើម្បីគ្រប់គ្រងស្តុក និងការលក់របស់ពួកគេដោយប្រើ Django REST Framework និង Vue.js',
            'បានអនុវត្ត APIs ដែលមានសុវត្ថិភាពដោយប្រើ Django REST Framework រួមមាន authentication (JWT) role-based permissions (admin vs customer) និង endpoints សម្រាប់ផលិតផល ការបញ្ជាទិញ ការទូទាត់ និងរបាយការណ៍',
            'បានរចនា PostgreSQL database schemas ជាមួយទំនាក់ទំនងរវាងអ្នកប្រើប្រាស់ ផលិតផល ប្រភេទ ស្តុក ការបញ្ជាទិញ និងការទូទាត់ដើម្បីរក្សាទិន្នន័យស៊ីសង្វាក់ និងងាយស្រួលសួរ',
            'បានបញ្ចូល Axios ជាមួយ Vue សម្រាប់ CRUD operations នៅក្នុង admin dashboard: admins អាចបង្កើត/ធ្វើបច្ចុប្បន្នភាពផលិតផល កែសម្រួលស្តុក បញ្ជាក់ការបញ្ជាទិញ និងមើលការវិភាគការលក់ពេលវេលាពិត'
          ]
        },
        {
          role: 'អ្នកអភិវឌ្ឍន៍កម្មវិធីវេបអន្តរកម្ម',
          company: 'AIKIMI Technology',
          dateRange: '2021 - 2022',
          achievements: [
            'បានអភិវឌ្ឍកម្មវិធីវេបសម្រាប់អតិថិជនដើម្បីគ្រប់គ្រងស្តុក និងការលក់របស់ពួកគេដោយប្រើ Django REST Framework និង Vue.js',
            'បានអនុវត្ត APIs ដែលមានសុវត្ថិភាពដោយប្រើ Django REST Framework រួមមាន authentication (JWT) role-based permissions (admin vs customer) និង endpoints សម្រាប់ផលិតផល ការបញ្ជាទិញ ការទូទាត់ និងរបាយការណ៍',
            'បានរចនា PostgreSQL database schemas ជាមួយទំនាក់ទំនងរវាងអ្នកប្រើប្រាស់ ផលិតផល ប្រភេទ ស្តុក ការបញ្ជាទិញ និងការទូទាត់ដើម្បីរក្សាទិន្នន័យស៊ីសង្វាក់ និងងាយស្រួលសួរ',
            'បានបញ្ចូល Axios ជាមួយ Vue សម្រាប់ CRUD operations នៅក្នុង admin dashboard: admins អាចបង្កើត/ធ្វើបច្ចុប្បន្នភាពផលិតផល កែសម្រួលស្តុក បញ្ជាក់ការបញ្ជាទិញ និងមើលការវិភាគការលក់ពេលវេលាពិត'
          ]
        }
      ]
    },
    // Education Section
    education: {
      title: 'ការអប់រំ',
      description: 'មើលសង្ខេបអំពីប្រវត្តិការសិក្សា និងសមិទ្ធិផលរបស់ខ្ញុំ។',
      viewCertificate: 'មើលវិញ្ញាបនបត្រ',
      certificateNA: 'គ្មានវិញ្ញាបនបត្រ',
      downloadCertificate: 'ទាញយកវិញ្ញាបនបត្រ',
      keyHighlights: 'ចំណុចសំខាន់ៗ:',
      close: 'បិទ',
      download: 'ទាញយក',
      status: {
        inProgress: 'កំពុងសិក្សា',
        graduated: 'បានបញ្ចប់',
        completed: 'បានបញ្ចប់',
        onHold: 'ផ្អាក'
      },
      items: [
        {
          degree: 'បរិញ្ញាបត្រវិទ្យាសាស្ត្រកុំព្យូទ័រ និងវិស្វកម្ម',
          institution: 'សាកលវិទ្យាល័យ ACLEDA',
          location: 'ភ្នំពេញ កម្ពុជា',
          dateRange: '2023 - 2027',
          status: 'កំពុងសិក្សា',
          description: [
            'រៀនជំនាញវិទ្យាសាស្ត្រកុំព្យូទ័រ និងវិស្វកម្មដោយផ្តោតលើការអភិវឌ្ឍន៍វេប ការរចនាមូលដ្ឋានទិន្នន័យ និងគោលការណ៍វិស្វកម្មកម្មវិធី។',
            'ការងារសិក្សាឯកទេសក្នុង algorithms data structures web technologies និង system design។',
            'ការចូលរួមយ៉ាងសកម្មក្នុងការប្រកួតកូដ និងព្រឹត្តិការណ៍បច្ចេកវិទ្យា។'
          ],
          highlights: [
            'ឆ្នាំទី៣ (សម័យទី១)',
            'ឯកទេសការអភិវឌ្ឍន៍វេប',
            'ការទទួលស្គាល់ Dean\'s List',
            'សមាជិក Programming Club',
            'អ្នកចូលរួមព្រឹត្តិការណ៍បច្ចេកវិទ្យា'
          ]
        },
        {
          degree: 'មធ្យមសិក្សាអេឡិចត្រូនិច និងរ៉ូបូត',
          institution: 'វិទ្យាល័យវិជ្ជាជីវៈ Juang Jing',
          location: 'តៃវ៉ាន់',
          dateRange: '2023 - 2024',
          status: 'បានបញ្ចប់',
          description: [
            'ការបណ្តុះបណ្តាលវិជ្ជាជីវៈឯកទេសក្នុងប្រព័ន្ធអេឡិចត្រូនិច និងបច្ចេកវិទ្យារ៉ូបូត។',
            'បទពិសោធន៍ជាក់ស្តែងជាមួយការសរសេរកម្មវិធី microcontroller និងប្រព័ន្ធដាក់បញ្ចូល។',
            'បទពិសោធន៍ការសិក្សាឆ្លងវប្បធម៌នៅក្នុងបរិយាកាសអប់រំអន្តរជាតិ។'
          ],
          highlights: [
            'ការរចនាសៀគ្វីអេឡិចត្រូនិច',
            'ការសរសេរកម្មវិធីរ៉ូបូត',
            'ប្រព័ន្ធ Microcontroller',
            'បទពិសោធន៍អន្តរជាតិ',
            'ពានរង្វាន់ឧត្តមភាពបច្ចេកទេស'
          ]
        },
        {
          degree: 'វិញ្ញាបនបត្រមធ្យមសិក្សា',
          institution: 'វិទ្យាល័យ Bat Doeng',
          location: 'កម្ពុជា',
          dateRange: '2020 - 2023',
          status: 'បានបញ្ចប់',
          description: [
            'បានបញ្ចប់ការអប់រំមធ្យមសិក្សាដោយមានការសម្តែងល្អក្នុងគណិតវិទ្យា និងវិទ្យាសាស្ត្រ។',
            'បានអភិវឌ្ឍការចាប់អារម្មណ៍មូលដ្ឋានក្នុងការសរសេរកម្មវិធីកុំព្យូទ័រ និងបច្ចេកវិទ្យា។',
            'ការចូលរួមយ៉ាងសកម្មក្នុងក្លឹបបច្ចេកវិទ្យាសាលា និងសកម្មភាព STEM។'
          ],
          highlights: [
            'ចំណែក 10% ខាងលើនៃថ្នាក់',
            'ឧត្តមភាព STEM',
            'មេក្លឹបបច្ចេកវិទ្យា',
            'ពានរង្វាន់គណិតវិទ្យា',
            'អ្នកចូលរួម Science Fair'
          ]
        },
        {
          degree: 'វិញ្ញាបនបត្រមធ្យមសិក្សាទាប',
          institution: 'វិទ្យាល័យ Bat Doeng',
          location: 'កម្ពុជា',
          dateRange: '2017 - 2020',
          status: 'បានបញ្ចប់',
          description: [
            'ការអប់រំមូលដ្ឋានគ្របដណ្តប់លើមុខវិជ្ជាសិក្សាស្នូល និងភាសាកុំព្យូទ័រមូលដ្ឋាន។',
            'ការប៉ះពាល់ដំបូងទៅនឹងគំនិតការសរសេរកម្មវិធីកុំព្យូទ័រ និងបច្ចេកវិទ្យាឌីជីថល។',
            'ការសម្តែងល្អក្នុងមុខវិជ្ជាគណិតវិទ្យា និងវិទ្យាសាស្ត្រ។'
          ],
          highlights: [
            'ឧត្តមភាពសិក្សា',
            'វិញ្ញាបនបត្រភាសាកុំព្យូទ័រ',
            'សមត្ថភាពគណិតវិទ្យា',
            'តួនាទីអ្នកដឹកនាំសិស្ស'
          ]
        },
        {
          degree: 'វិញ្ញាបនបត្រអប់រំបឋម',
          institution: 'សាលាបឋមសិក្សា Trapeang Thmor',
          location: 'កម្ពុជា',
          dateRange: '2010 - 2017',
          status: 'បានបញ្ចប់',
          description: [
            'ការអប់រំបឋមសិក្សាគ្របដណ្តប់លើជំនាញសិក្សាមូលដ្ឋាន និងការប៉ះពាល់បច្ចេកវិទ្យាដំបូង។',
            'ការអភិវឌ្ឍមូលដ្ឋានរឹងមាំក្នុងមុខវិជ្ជាស្នូលរួមមានគណិតវិទ្យា និងភាសាសិល្បៈ។',
            'ការបង្ហាញដំបូងនៃការចាប់អារម្មណ៍ក្នុងបច្ចេកវិទ្យា និងការដោះស្រាយបញ្ហា។'
          ],
          highlights: [
            'ការសម្តែងសិក្សាល្អឥតខ្ចោះ',
            'ពានរង្វាន់វត្តមានល្អឥតខ្ចោះ',
            'ការចាប់អារម្មណ៍បច្ចេកវិទ្យាដំបូង',
            'សមាជិកក្រុមប្រឹក្សាសិស្ស'
          ]
        }
      ]
    },
    // Skills Section - Khmer
    skills: {
      title: 'ជំនាញ',
      frontend: 'ផ្នែកមុខ',
      backend: 'ផ្នែកក្រោយ',
      database: 'មូលដ្ឋានទិន្នន័យ',
      tools: 'ឧបករណ៍',
      items: {
        frontend: [
          'Vue.js',
          'Vue 3 (Composition API)',
          'JavaScript',
          'HTML5',
          'CSS3',
          'Tailwind CSS',
          'Responsive Design',
          'UI/UX Design'
        ],
        backend: [
          'Django REST Framework',
          'Python',
          'RESTful APIs',
          'JWT Authentication',
          'PostgreSQL',
          'Database Design'
        ],
        tools: [
          'Git',
          'Version Control',
          'Axios',
          'Web Service',
          'Database Management',
          'Problem Solving'
        ]
      }
    },
    // Contact Section
    contact: {
      title: 'ទាក់ទងមកខ្ញុំ',
      description: 'សូមទាក់ទងមកខ្ញុំប្រសិនបើអ្នកចង់សហការ ឬគ្រាន់តែសួរសុខទុក្ខ!',
      contactInfo: 'ព័ត៌មានទំនាក់ទំនង',
      phone: 'ទូរស័ព្ទ',
      email: 'អ៊ីមែល',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      facebook: 'Facebook',
      telegram: 'Telegram',
      viewProjects: 'មើលគម្រោង',
      professionalProfile: 'ប្រវត្តិរូបវិជ្ជាជីវៈ',
      socialProfile: 'ប្រវត្តិរូបសង្គម',
      instantMessaging: 'ការផ្ញើសារភ្លាមៗ'
    },
    // Footer
    footer: {
      allRightsReserved: 'រក្សាសិទ្ធិគ្រប់យ៉ាង។'
    },
    // Common
    common: {
      backToTop: 'ត្រឡប់ទៅលើ',
      loading: 'កំពុងផ្ទុក...',
      error: 'មានកំហុសកើតឡើង'
    },
    // Personal Info
    personalInfo: {
      name: 'ម៉ឹង គីមហៀង'
    }
  },
  zh: {
    // Navigation
    nav: {
      home: '首页',
      about: '关于我',
      skills: '技能',
      projects: '项目',
      experience: '经验',
      education: '教育',
      contact: '联系'
    },
    // Hero Section
    hero: {
      roles: [
        'Web应用开发者',
        '前端开发者',
        'Vue.js开发者',
        'UI/UX设计师',
        '全栈开发者'
      ],
      taglines: [
        '充满激情的Web开发者和UI/UX设计师',
        '使用Vue.js构建响应式Web界面',
        '创造美观且功能性的用户体验',
        '将想法转化为交互式Web应用程序',
        '用干净的代码打造现代解决方案'
      ],
      viewProjects: '查看项目',
      viewCV: '查看简历',
      downloadCV: '下载简历'
    },
    // About Section
    about: {
      title: '关于我',
      text: 'ACLEDA大学计算机科学与工程专业三年级（第一学期）学生，积极主动且注重细节。热衷于Web开发和UI/UX设计，在问题解决、数据库设计和构建响应式Web界面方面拥有扎实的技能。始终渴望将学术和技术知识应用到实际项目中，学习新技术，并为开发团队做出有效贡献。',
      location: '位置',
      experience: '工作年限',
      status: '状态',
      statusValue: '开放机会'
    },
    // Skills Section
    skills: {
      title: '技能',
      frontend: '前端',
      backend: '后端',
      database: '数据库',
      tools: '工具',
      items: {
        frontend: [
          'Vue.js',
          'Vue 3 (Composition API)',
          'JavaScript',
          'HTML5',
          'CSS3',
          'Tailwind CSS',
          '响应式设计',
          'UI/UX设计'
        ],
        backend: [
          'Django REST Framework',
          'Python',
          'RESTful APIs',
          'JWT身份验证',
          'PostgreSQL',
          '数据库设计'
        ],
        tools: [
          'Git',
          '版本控制',
          'Axios',
          'Web服务',
          '数据库管理',
          '问题解决'
        ]
      }
    },
    // Projects Section
    projects: {
      title: '项目',
      items: [
        {
          title: '带管理后台的电子商务Web应用程序',
          description: '一个全栈电子商务解决方案，包含产品目录、购物车、结账系统和订单跟踪。具有全面的管理后台，用于管理产品、库存、订单、用户和实时销售分析。'
        },
        {
          title: '库存和销售管理Web应用程序',
          description: '使用Django REST Framework和Vue.js管理库存和销售的Web应用程序。具有全面的管理后台，用于管理产品、库存、订单、用户和实时销售分析。'
        }
      ],
      github: 'GitHub',
      liveDemo: '在线演示'
    },
    // Experience Section
    experience: {
      title: '经验',
      viewDetails: '查看详情',
      hideDetails: '隐藏详情',
      items: [
        {
          role: '电子商务Web应用程序开发者',
          company: 'ACLEDA大学',
          dateRange: '2023 - 2025',
          achievements: [
            '构建了完整的电子商务Web应用程序，包含产品目录、购物车、结账和订单跟踪，以及用于管理产品、库存、订单和用户的独立管理后台',
            '使用Vue.js（Composition API）和Tailwind CSS开发前端，包含可重用的产品卡片、过滤器、模态框和表格组件',
            '使用Django REST Framework实现安全API，包括身份验证（JWT）、基于角色的权限（管理员vs客户）以及产品、订单、支付和报告的端点',
            '设计PostgreSQL数据库模式，建立用户、产品、类别、库存、订单和支付之间的关系，以保持数据一致性和易于查询',
            '将Axios与Vue集成，用于管理后台的CRUD操作：管理员可以创建/更新产品、调整库存、确认订单并实时查看销售分析',
            '添加响应式布局和移动优先UI，使商店和管理后台在桌面、平板和手机上都能流畅运行'
          ]
        },
        {
          role: 'Web应用程序开发者',
          company: 'Sekai Technologies',
          dateRange: '2022 - 2023',
          achievements: [
            '为客户开发了使用Django REST Framework和Vue.js管理库存和销售的Web应用程序',
            '使用Django REST Framework实现安全API，包括身份验证（JWT）、基于角色的权限（管理员vs客户）以及产品、订单、支付和报告的端点',
            '设计PostgreSQL数据库模式，建立用户、产品、类别、库存、订单和支付之间的关系，以保持数据一致性和易于查询',
            '将Axios与Vue集成，用于管理后台的CRUD操作：管理员可以创建/更新产品、调整库存、确认订单并实时查看销售分析'
          ]
        },
        {
          role: '实习Web应用程序开发者',
          company: 'AIKIMI Technology',
          dateRange: '2021 - 2022',
          achievements: [
            '为客户开发了使用Django REST Framework和Vue.js管理库存和销售的Web应用程序',
            '使用Django REST Framework实现安全API，包括身份验证（JWT）、基于角色的权限（管理员vs客户）以及产品、订单、支付和报告的端点',
            '设计PostgreSQL数据库模式，建立用户、产品、类别、库存、订单和支付之间的关系，以保持数据一致性和易于查询',
            '将Axios与Vue集成，用于管理后台的CRUD操作：管理员可以创建/更新产品、调整库存、确认订单并实时查看销售分析'
          ]
        }
      ]
    },
    // Education Section
    education: {
      title: '教育',
      description: '快速了解我的学术背景和成就。',
      viewCertificate: '查看证书',
      certificateNA: '无证书',
      downloadCertificate: '下载证书',
      keyHighlights: '主要亮点：',
      close: '关闭',
      download: '下载',
      status: {
        inProgress: '进行中',
        graduated: '已毕业',
        completed: '已完成',
        onHold: '暂停'
      },
      items: [
        {
          degree: '计算机科学与工程学士',
          institution: 'ACLEDA大学',
          location: '柬埔寨金边',
          dateRange: '2023 - 2027',
          status: '进行中',
          description: [
            '主修计算机科学与工程，专注于Web开发、数据库设计和软件工程原理。',
            '在算法、数据结构、Web技术和系统设计方面的专业课程。',
            '积极参与编程竞赛和技术活动。'
          ],
          highlights: [
            '三年级（第一学期）',
            'Web开发专业',
            '院长名单认可',
            '编程俱乐部成员',
            '技术活动参与者'
          ]
        },
        {
          degree: '电子机器人高中',
          institution: 'Juang Jing职业高中',
          location: '台湾',
          dateRange: '2023 - 2024',
          status: '已完成',
          description: [
            '电子系统和机器人技术的专业职业培训。',
            '微控制器编程和嵌入式系统的实践经验。',
            '在国际教育环境中的跨文化学习体验。'
          ],
          highlights: [
            '电子电路设计',
            '机器人编程',
            '微控制器系统',
            '国际经验',
            '技术卓越奖'
          ]
        },
        {
          degree: '高中文凭',
          institution: 'Bat Doeng高中',
          location: '柬埔寨',
          dateRange: '2020 - 2023',
          status: '已毕业',
          description: [
            '完成中等教育，在数学和科学方面表现优异。',
            '培养了对计算机编程和技术的初步兴趣。',
            '积极参与学校技术俱乐部和STEM活动。'
          ],
          highlights: [
            '班级前10%',
            'STEM卓越',
            '技术俱乐部负责人',
            '数学奖',
            '科学展览参与者'
          ]
        },
        {
          degree: '初中证书',
          institution: 'Bat Doeng中学',
          location: '柬埔寨',
          dateRange: '2017 - 2020',
          status: '已完成',
          description: [
            '涵盖核心学科和基本计算机素养的基础教育。',
            '首次接触计算机编程概念和数字技术。',
            '在数学和科学科目方面表现优异。'
          ],
          highlights: [
            '学术卓越',
            '计算机素养证书',
            '数学熟练',
            '学生领导角色'
          ]
        },
        {
          degree: '小学教育证书',
          institution: 'Trapeang Thmor小学',
          location: '柬埔寨',
          dateRange: '2010 - 2017',
          status: '已完成',
          description: [
            '涵盖基本学术技能和早期技术接触的小学教育。',
            '在包括数学和语言艺术在内的核心学科中建立坚实基础。',
            '早期表现出对技术和问题解决的兴趣。'
          ],
          highlights: [
            '出色的学术表现',
            '完美出勤奖',
            '早期技术兴趣',
            '学生会成员'
          ]
        }
      ]
    },
    // Contact Section
    contact: {
      title: '联系我',
      description: '如果您想合作或只是打个招呼，请随时联系我！',
      contactInfo: '联系信息',
      phone: '电话',
      email: '邮箱',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      facebook: 'Facebook',
      telegram: 'Telegram',
      viewProjects: '查看项目',
      professionalProfile: '专业档案',
      socialProfile: '社交档案',
      instantMessaging: '即时消息'
    },
    // Footer
    footer: {
      allRightsReserved: '版权所有。'
    },
    // Common
    common: {
      backToTop: '返回顶部',
      loading: '加载中...',
      error: '发生错误'
    },
    // Personal Info
    personalInfo: {
      name: '孟 精賢'
    }
  }
}

// Composable function
export function useLanguage() {
  const setLanguage = (langCode) => {
    if (LANGUAGES[langCode]) {
      currentLanguage.value = langCode
      localStorage.setItem('portfolio-language', langCode)
    }
  }

  // Translation function - will be reactive when used in computed properties that track currentLanguage
  const t = (key) => {
    const keys = key.split('.')
    let value = translations[currentLanguage.value]
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        // Fallback to English if translation not found
        value = translations.en
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object' && fallbackKey in value) {
            value = value[fallbackKey]
          } else {
            return key // Return key if no translation found
          }
        }
        break
      }
    }
    
    return value || key
  }

  const currentLang = computed(() => LANGUAGES[currentLanguage.value])

  // Reactive translation key - changes when language changes, forces re-renders
  const translationKey = computed(() => currentLanguage.value)

  // Initialize language from localStorage
  const initLanguage = () => {
    const saved = localStorage.getItem('portfolio-language')
    if (saved && LANGUAGES[saved]) {
      currentLanguage.value = saved
    }
  }

  return {
    currentLanguage, // Return ref directly for better reactivity
    currentLang,
    setLanguage,
    t,
    initLanguage,
    LANGUAGES,
    translationKey // Expose translation key for forcing reactivity
  }
}
