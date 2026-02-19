
import { PageHeader } from '../components/page-header'

// Innovation Hub Page
export const InnovationPage = () => {
    return `
    ${PageHeader(
        'SNS Innovation Hub (iHub)',
        'Powered by India\'s First Patented GenAI Design Thinking Framework | Specialized for Pharmacy Innovation',
        '/static/images/pillar_industry.jpg',
        'Innovation Hub'
    )}

    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-12">
                <div>
                    <h2 class="text-4xl font-bold mb-6">Innovation in Pharmacy</h2>
                    <p class="text-lg text-gray-700 leading-relaxed mb-6">
                        SNS iHub at SNSCPHS is a unique ecosystem where pharmaceutical science meets Design Thinking. We empower students to move beyond traditional pharmacy roles and become innovators in drug delivery, patient care, and healthcare technology.
                    </p>
                    <p class="text-lg text-gray-700 leading-relaxed">
                        Our <strong class="text-primary-600">patented GenAI-powered Design Thinking framework</strong> helps pharmacy students identify unmet patient needs and develop novel solutions, from advanced formulations to digital health tools.
                    </p>
                </div>
                <div class="bg-primary-50 rounded-2xl p-8 border-l-4 border-primary-500">
                    <h3 class="text-2xl font-bold mb-6">Pharmacy Innovation Focus</h3>
                    <ul class="space-y-3">
                        <li class="flex items-start"><i class="fas fa-capsules text-primary-600 mr-3 mt-1"></i><span>Drug Formulation & Design</span></li>
                        <li class="flex items-start"><i class="fas fa-microscope text-primary-600 mr-3 mt-1"></i><span>Novel Drug Delivery Systems (NDDS)</span></li>
                        <li class="flex items-start"><i class="fas fa-laptop-medical text-primary-600 mr-3 mt-1"></i><span>Digital Healthcare & Tele-pharmacy</span></li>
                        <li class="flex items-start"><i class="fas fa-vial text-primary-600 mr-3 mt-1"></i><span>Clinical Research & Data Analytics</span></li>
                        <li class="flex items-start"><i class="fas fa-leaf text-primary-600 mr-3 mt-1"></i><span>Herbal Product Development</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Tech Verticals -->
    <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl font-bold text-center mb-12">Technology Integration</h2>
            <div class="grid md:grid-cols-3 gap-8">
                <div class="bg-white rounded-xl p-8 shadow-md">
                    <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        <i class="fas fa-robot text-2xl text-blue-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-4">AI in Drug Discovery</h3>
                    <p class="text-gray-700">Using GenAI to predict drug-target interactions and optimize molecular structures.</p>
                </div>
                <div class="bg-white rounded-xl p-8 shadow-md">
                    <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                        <i class="fas fa-cube text-2xl text-purple-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-4">3D Printing of Drugs</h3>
                    <p class="text-gray-700">Additive manufacturing for personalized dosage forms and complex delivery geometries.</p>
                </div>
                <div class="bg-white rounded-xl p-8 shadow-md">
                    <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                        <i class="fas fa-network-wired text-2xl text-green-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-4">Smart Packaging</h3>
                    <p class="text-gray-700">IoT-enabled pharmaceutical packaging for real-time monitoring and patient adherence.</p>
                </div>
            </div>
        </div>
    </section>
    `;
};

// About Page
export const AboutPage = () => {
    return `
    ${PageHeader(
        'About SNSCPHS',
        'India\'s First Design Thinking Pharmacy College',
        '/static/images/hero.png',
        'About Us'
    )}

    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
                <div class="relative">
                    <img src="https://snscphs.org/wp-content/uploads/2023/04/about-img.jpg" alt="SNS Pharmacy College" class="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]">
                </div>
                
                <div>
                    <span class="text-primary-600 font-bold tracking-wider uppercase text-sm mb-2 block">Our Identity</span>
                    <h2 class="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                        Pioneering <span class="text-primary-600">Design Thinking</span> in Pharmaceutical Sciences
                    </h2>
                    <p class="text-lg text-gray-600 leading-relaxed mb-6">
                        SNS College of Pharmacy and Health Sciences (SNSCPHS), established in 2019, is a premier institution dedicated to excellence in pharmaceutical education. We are approved by PCI, New Delhi, and affiliated to The Tamil Nadu Dr. M.G.R. Medical University.
                    </p>
                    <p class="text-lg text-gray-600 leading-relaxed mb-8">
                        Our mission is to nurture common minds into exceptional pharmaceutical professionals through our unique Design Thinking framework, fostering an entrepreneurial mindset in every student.
                    </p>

                    <div class="grid grid-cols-2 gap-6">
                        <div class="p-4 bg-primary-50 rounded-xl">
                            <h4 class="font-bold text-primary-700 text-lg">PCI Approved</h4>
                            <p class="text-gray-600 text-sm font-medium">Industry Standard Compliance</p>
                        </div>
                        <div class="p-4 bg-primary-50 rounded-xl">
                            <h4 class="font-bold text-primary-700 text-lg">MGR Affiliated</h4>
                            <p class="text-gray-600 text-sm font-medium">Academic Excellence</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
};

// Contact Page
export const ContactPage = () => {
    return `
    ${PageHeader(
        'Contact SNSCPHS',
        'Reach out to Coimbatore\'s leading Pharmacy College',
        '/static/images/hero.png',
        'Contact Us'
    )}

    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-12">
                <div>
                    <h2 class="text-3xl font-bold mb-8">Connect With Us</h2>
                    <div class="space-y-8">
                        <div class="flex items-start">
                            <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                <i class="fas fa-map-marker-alt text-primary-600"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-xl mb-1">Campus Address</h3>
                                <p class="text-gray-700">SNS Kalvi Nagar, Sathy Main Road (NH-209),<br>Vazhiyampalayam, Saravanampatti,<br>Coimbatore - 641035.</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                             <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                <i class="fas fa-phone text-primary-600"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-xl mb-1">Phone Numbers</h3>
                                <p class="text-gray-700">Admission: +91 75503 16701<br>Helpline: +91 75503 16702</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                             <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                <i class="fas fa-envelope text-primary-600"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-xl mb-1">Email Address</h3>
                                <p class="text-gray-700">college@snscphs.org</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-xl">
                    <h3 class="text-2xl font-bold mb-6 text-center">Admission Enquiry</h3>
                    <form action="#" class="space-y-4">
                        <input type="text" placeholder="Full Name *" class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none">
                        <input type="email" placeholder="Email Address *" class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none">
                        <input type="tel" placeholder="Phone Number *" class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none">
                        <select class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none">
                            <option value="">Select Program of Interest</option>
                            <option value="bpharm">B. Pharm</option>
                            <option value="dpharm">D. Pharm</option>
                            <option value="mpharm">M. Pharm</option>
                            <option value="pharmd">Pharm. D</option>
                        </select>
                        <textarea placeholder="Your Message" rows="4" class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none"></textarea>
                        <button class="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-xl transition shadow-lg">Submit Enquiry</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    `;
};

// Admissions Page
export const AdmissionsPage = () => {
    return `
    ${PageHeader(
        'Admissions 2024-25',
        'Begin your journey towards a specialized career in Pharmacy',
        '/static/images/hero.png',
        'Admissions'
    )}

    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold mb-4">Undergraduate & Postgraduate Programs</h2>
                <p class="text-xl text-gray-600">Choose the right pathway for your pharmaceutical career</p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- B.Pharm -->
                <div class="bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition group">
                    <h3 class="text-2xl font-bold mb-2 group-hover:text-primary-600 transition">B. Pharm</h3>
                    <p class="text-sm text-primary-600 font-bold mb-4">4 Years Program</p>
                    <p class="text-gray-600 text-sm mb-6">Bachelor of Pharmacy - Comprehensive study of drug discovery, development, and delivery.</p>
                    <a href="/academics/b-pharm" class="text-primary-600 font-bold flex items-center group-hover:underline">Learn More <i class="fas fa-arrow-right ml-2 text-xs"></i></a>
                </div>

                <!-- D.Pharm -->
                <div class="bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition group">
                    <h3 class="text-2xl font-bold mb-2 group-hover:text-primary-600 transition">D. Pharm</h3>
                    <p class="text-sm text-primary-600 font-bold mb-4">2 Years Program</p>
                    <p class="text-gray-600 text-sm mb-6">Diploma in Pharmacy - Essential training for pharmacy technicians and retail pharmacy careers.</p>
                    <a href="/academics/d-pharm" class="text-primary-600 font-bold flex items-center group-hover:underline">Learn More <i class="fas fa-arrow-right ml-2 text-xs"></i></a>
                </div>

                <!-- M.Pharm -->
                <div class="bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition group">
                    <h3 class="text-2xl font-bold mb-2 group-hover:text-primary-600 transition">M. Pharm</h3>
                    <p class="text-sm text-primary-600 font-bold mb-4">2 Years Program</p>
                    <p class="text-gray-600 text-sm mb-6">Master of Pharmacy - Specialization in Pharmaceutics with advanced research focus.</p>
                    <a href="/academics/m-pharm" class="text-primary-600 font-bold flex items-center group-hover:underline">Learn More <i class="fas fa-arrow-right ml-2 text-xs"></i></a>
                </div>

                <!-- Pharm.D -->
                <div class="bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition group">
                    <h3 class="text-2xl font-bold mb-2 group-hover:text-primary-600 transition">Pharm. D</h3>
                    <p class="text-sm text-primary-600 font-bold mb-4">6 Years Program</p>
                    <p class="text-gray-600 text-sm mb-6">Doctor of Pharmacy - Clinical pharmacy focus with extensive ward round participation.</p>
                    <a href="/academics/pharm-d" class="text-primary-600 font-bold flex items-center group-hover:underline">Learn More <i class="fas fa-arrow-right ml-2 text-xs"></i></a>
                </div>
            </div>
        </div>
    </section>
    `;
};
