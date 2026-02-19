
import { PageHeader } from '../components/page-header'

export const SuccessStoriesPage = () => {
    return `
    ${PageHeader(
        'Success Stories',
        'Celebrating the professional breakthroughs of SNSCPHS graduates',
        '/static/images/pharmacy-success.jpg',
        'Success Stories'
    )}

    <!-- Featured Achievement -->
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl overflow-hidden shadow-2xl border border-primary-200">
                <div class="grid lg:grid-cols-2 gap-8">
                    <div class="h-96 lg:h-auto relative overflow-hidden">
                        <img src="https://snscphs.org/wp-content/uploads/2023/04/success-main.jpg" alt="Pharma Success" class="w-full h-full object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        <div class="absolute bottom-6 left-6 text-white text-xl font-bold">
                            <i class="fas fa-trophy mr-2 text-yellow-400"></i> GPAT 2024 Top Rankers
                        </div>
                    </div>
                    <div class="p-8 lg:p-12 flex flex-col justify-center">
                        <div class="inline-flex items-center bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 w-fit">
                            <i class="fas fa-certificate mr-2"></i> Featured Achievement
                        </div>
                        <h2 class="text-4xl font-bold text-gray-900 mb-4">Excellence in National Competition</h2>
                        <p class="text-gray-700 text-lg mb-6 leading-relaxed">
                            Our B.Pharm students have consistently secured top ranks in the Graduate Pharmacy Aptitude Test (GPAT), paving their way into India's premier research institutions. This reflects our commitment to rigorous academic training and competitive exam preparation.
                        </p>
                        <a href="/academics/b-pharm" class="text-primary-600 hover:text-primary-700 font-bold flex items-center">
                            Explore B.Pharm Program <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Placement Highlights -->
    <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl font-bold mb-12">Placement Highlights</h2>
            <div class="grid md:grid-cols-3 gap-8 text-left">
                <div class="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-blue-500">
                    <h3 class="text-xl font-bold mb-3">Clinical Research</h3>
                    <p class="text-gray-600 mb-6">Our Pharm.D graduates are placed as Clinical Pharmacists in leading multi-specialty hospitals with average CTC of 6 LPA.</p>
                    <span class="text-sm font-bold text-blue-600 uppercase tracking-widest">Industry Leader</span>
                </div>
                 <div class="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-green-500">
                    <h3 class="text-xl font-bold mb-3">Manufacturing & QA</h3>
                    <p class="text-gray-600 mb-6">B.Pharm graduates secured placements in top MNCs like Sun Pharma and Dr. Reddy's in production and quality roles.</p>
                    <span class="text-sm font-bold text-green-600 uppercase tracking-widest">MNC Placement</span>
                </div>
                 <div class="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-purple-500">
                    <h3 class="text-xl font-bold mb-3">Pharma Entrepreneurs</h3>
                    <p class="text-gray-600 mb-6">Leveraging iHub, 5 students have launched dedicated pharma retail and formulation startups in the last 2 years.</p>
                    <span class="text-sm font-bold text-purple-600 uppercase tracking-widest">iHub Success</span>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-primary-600 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-4xl font-bold mb-4">Start Your Professional Success Story</h2>
            <p class="text-xl mb-8 opacity-90">Join SNSCPHS and build a prestigious career in the global pharmaceutical industry.</p>
            <a href="/admissions" class="bg-white text-primary-600 px-10 py-4 rounded-xl font-bold text-lg shadow-xl transition hover:bg-gray-100">
                Join Now
            </a>
        </div>
    </section>
    `;
};
