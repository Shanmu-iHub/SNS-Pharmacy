
import { PageHeader } from '../components/page-header'

export const FacilitiesPage = () => {
    return `
    ${PageHeader(
        'Advanced Pharmacy Infrastructure',
        'State-of-the-art laboratory facilities and learning spaces designed for future pharmaceutical excellence',
        '/static/images/hero5.png',
        'Facilities'
    )}

    <!-- Advanced Labs -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <span class="text-primary-600 font-bold tracking-wider uppercase text-sm mb-2 block">Research & Learning</span>
                <h2 class="text-4xl font-bold text-gray-900 mb-6">Cutting-Edge Pharmacy Labs</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Our laboratories are equipped with the latest pharmaceutical machinery and instruments to provide hands-on experience in drug development and analysis. 
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Pharmaceutics Lab -->
                <div class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                    <div class="h-64 overflow-hidden relative">
                         <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                        <img src="https://snscphs.org/wp-content/uploads/2023/04/lab-1.jpg" alt="Pharmaceutics Lab" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-8 bg-white relative z-20">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">Pharmaceutics Lab</h3>
                        <p class="text-gray-600 leading-relaxed text-sm">
                            Focuses on the formulation and development of various dosage forms like tablets, capsules, and liquid orals using modern technology.
                        </p>
                    </div>
                </div>

                <!-- Pharmaceutical Chemistry Lab -->
                <div class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                    <div class="h-64 overflow-hidden relative">
                         <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                        <img src="https://snscphs.org/wp-content/uploads/2023/04/lab-2.jpg" alt="Pharmaceutical Chemistry Lab" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-8 bg-white relative z-20">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">Pharmaceutical Chemistry</h3>
                        <p class="text-gray-600 leading-relaxed text-sm">
                            Equipped for the synthesis and analysis of chemical medicinal substances, fostering expertise in drug composition and behavior.
                        </p>
                    </div>
                </div>

                <!-- Pharmacology Lab -->
                <div class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                    <div class="h-64 overflow-hidden relative">
                         <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                        <img src="https://snscphs.org/wp-content/uploads/2023/04/lab-3.jpg" alt="Pharmacology Lab" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-8 bg-white relative z-20">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">Pharmacology Lab</h3>
                        <p class="text-gray-600 leading-relaxed text-sm">
                            Dedicated to studying the effects of drugs on biological systems, providing critical insights into drug action and safety.
                        </p>
                    </div>
                </div>

                <!-- Pharmacognosy Lab -->
                <div class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                    <div class="h-64 overflow-hidden relative">
                         <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                        <img src="https://snscphs.org/wp-content/uploads/2023/04/lab-4.jpg" alt="Pharmacognosy Lab" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-8 bg-white relative z-20">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">Pharmacognosy Lab</h3>
                        <p class="text-gray-600 leading-relaxed text-sm">
                            Focuses on medicines derived from natural sources, identifying and analyzing medicinal plants and herbal formulations.
                        </p>
                    </div>
                </div>

                <!-- Language Lab -->
                <div class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                    <div class="h-64 overflow-hidden relative">
                         <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                        <img src="https://snscphs.org/wp-content/uploads/2023/04/lab-5.jpg" alt="Language Lab" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-8 bg-white relative z-20">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">Communication & Tech Hub</h3>
                        <p class="text-gray-600 leading-relaxed text-sm">
                            Enhancing communication skills and technological proficiency, essential for pharmaceutical marketing and professional networking.
                        </p>
                    </div>
                </div>

                <!-- Pharmacy Library -->
                <div class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                    <div class="h-64 overflow-hidden relative">
                         <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                        <img src="https://snscphs.org/wp-content/uploads/2023/04/library.jpg" alt="Pharmacy Library" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-8 bg-white relative z-20">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">Central Library</h3>
                        <p class="text-gray-600 leading-relaxed text-sm">
                            A vast collection of pharmaceutical books, journals, and digital resources to support academic excellence and research.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Other Infrastructure -->
    <section class="py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-4 gap-8">
                <div class="bg-white rounded-xl p-8 text-center shadow-lg hover:-translate-y-2 transition duration-300">
                    <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-wifi text-3xl text-purple-600"></i>
                    </div>
                    <h3 class="font-bold text-gray-900 text-lg mb-2">Smart Campus</h3>
                    <p class="text-sm text-gray-600">Fully Wi-Fi enabled campus with smart classrooms</p>
                </div>
                <div class="bg-white rounded-xl p-8 text-center shadow-lg hover:-translate-y-2 transition duration-300">
                    <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-bus text-3xl text-blue-600"></i>
                    </div>
                    <h3 class="font-bold text-gray-900 text-lg mb-2">Transport</h3>
                    <p class="text-sm text-gray-600">Extensive bus connectivity across Coimbatore</p>
                </div>
                <div class="bg-white rounded-xl p-8 text-center shadow-lg hover:-translate-y-2 transition duration-300">
                    <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-bed text-3xl text-green-600"></i>
                    </div>
                    <h3 class="font-bold text-gray-900 text-lg mb-2">Hostel</h3>
                    <p class="text-sm text-gray-600">Comfortable residential facilities for students</p>
                </div>
                <div class="bg-white rounded-xl p-8 text-center shadow-lg hover:-translate-y-2 transition duration-300">
                    <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-utensils text-3xl text-primary-600"></i>
                    </div>
                    <h3 class="font-bold text-gray-900 text-lg mb-2">Dining</h3>
                    <p class="text-sm text-gray-600">Hygienic cafeteria and dining halls</p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white relative overflow-hidden">
        <div class="absolute inset-0 bg-black/10"></div>
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 class="text-4xl lg:text-5xl font-bold mb-6">Discover Our World-Class Campus</h2>
            <p class="text-xl lg:text-2xl mb-10 text-white/90 font-light">
                Experience the perfect blend of technology and education. Schedule your visit today.
            </p>
            <a href="/contact" class="bg-white text-primary-600 hover:bg-gray-100 px-10 py-5 rounded-xl font-bold text-xl shadow-xl transition transform hover:scale-105 inline-block">
                Schedule Campus Tour
            </a>
        </div>
    </section>
    `;
};
