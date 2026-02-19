
import { PageHeader } from '../components/page-header'

export const BPharmPage = () => {
    return `
    ${PageHeader(
        'B. Pharm (Bachelor of Pharmacy)',
        'Foundation of Pharmaceutical Science: A 4-year undergraduate program focusing on drug discovery, pharmaceutical formulation, and clinical pharmacy practices',
        '/static/images/hero.png',
        'B. Pharm'
    )}

    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 class="text-4xl font-bold mb-6">Course Overview</h2>
                    <p class="text-lg text-gray-700 leading-relaxed mb-6">
                        The Bachelor of Pharmacy (B.Pharm) is an undergraduate academic program in the field of pharmacy. The students learn the methods and process of preparing drugs and how the dispensing of drugs and medicines takes place. 
                    </p>
                    <p class="text-lg text-gray-700 leading-relaxed">
                        At SNSCPHS, we integrate Design Thinking into the curriculum, encouraging students to empathize with patient needs and ideate innovative delivery systems.
                    </p>
                </div>
                <div class="bg-primary-50 rounded-2xl p-8">
                    <h3 class="text-2xl font-bold mb-6 font-display text-primary-700">Course Highlights</h3>
                    <ul class="space-y-4">
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-primary-600 mt-1 mr-3"></i>
                            <span class="text-gray-700">PCI Approved Curriculum</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-primary-600 mt-1 mr-3"></i>
                            <span class="text-gray-700">Advanced Pharmaceutics Labs</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-primary-600 mt-1 mr-3"></i>
                            <span class="text-gray-700">Industrial Training & Visits</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check-circle text-primary-600 mt-1 mr-3"></i>
                            <span class="text-gray-700">Focus on Drug Discovery</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    `;
};

export const DPharmPage = () => {
    return `
    ${PageHeader(
        'D. Pharm (Diploma in Pharmacy)',
        'Professional Skill Building: A 2-year diploma program designed to produce skilled pharmacy technicians for hospitals and retail pharmacies',
        '/static/images/hero.png',
        'D. Pharm'
    )}

    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 class="text-4xl font-bold mb-6">Practical Learning</h2>
                    <p class="text-lg text-gray-700 leading-relaxed mb-6">
                        The Diploma in Pharmacy (D.Pharm) is a foundation course in the field of pharmacy. It covers the basics of pharmacy education, including the application of chemistry in the pharmaceutical industry, and pharmacy practice.
                    </p>
                </div>
                <div class="bg-blue-50 rounded-2xl p-8 border-l-4 border-blue-500">
                    <h3 class="text-2xl font-bold mb-4">Core Objectives</h3>
                    <ul class="space-y-4 text-gray-700">
                        <li class="flex items-center"><i class="fas fa-vial mr-3 text-blue-500"></i>Hospital Pharmacy Training</li>
                        <li class="flex items-center"><i class="fas fa-capsules mr-3 text-blue-500"></i>Patient Counseling Skills</li>
                        <li class="flex items-center"><i class="fas fa-laptop-medical mr-3 text-blue-500"></i>Inventory Management</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    `;
};

export const MPharmPage = () => {
    return `
    ${PageHeader(
        'M. Pharm (Pharmaceutics)',
        'Advanced Research Excellence: A 2-year postgraduate program focusing on advanced drug delivery systems and pharmaceutical research',
        '/static/images/hero.png',
        'M. Pharm'
    )}

    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold mb-4">Specialization in Pharmaceutics</h2>
                <p class="text-xl text-gray-600">Developing the next generation of pharmaceutical research scientists.</p>
            </div>
        </div>
    </section>
    `;
};

export const PharmDPage = () => {
    return `
    ${PageHeader(
        'Pharm. D (Doctor of Pharmacy)',
        'Clinical Mastery: A 6-year professional doctorate program focusing on clinical pharmacy, ward rounds, and patient-centered care',
        '/static/images/hero.png',
        'Pharm. D'
    )}
    `;
};
