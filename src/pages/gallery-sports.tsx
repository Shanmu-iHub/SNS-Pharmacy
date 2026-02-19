
import { PageHeader } from '../components/page-header'

// Gallery Page
export const GalleryPage = () => {
    return `
    ${PageHeader(
        'Campus Gallery',
        'Visualizing Excellence in Pharmacy Education',
        '/static/images/hero5.png',
        'Gallery'
    )}

    <!-- Pharmacy Life -->
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl font-bold text-center mb-12">Life @ SNSCPHS</h2>
            
            <div class="grid md:grid-cols-3 gap-8">
                <!-- Academic Life -->
                <div class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                    <div class="h-64 overflow-hidden">
                        <img src="https://snscphs.org/wp-content/uploads/2023/04/gallery-1.jpg" alt="Academic Life" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-6">
                        <h3 class="text-2xl font-bold mb-2">Research Oriented Learning</h3>
                        <p class="text-gray-600">Students engaged in pharmaceutical research and innovative laboratory practices.</p>
                    </div>
                </div>
                
                <!-- Collaborative Work -->
                <div class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                    <div class="h-64 overflow-hidden">
                        <img src="https://snscphs.org/wp-content/uploads/2023/04/gallery-2.jpg" alt="Collaborative Work" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-6">
                        <h3 class="text-2xl font-bold mb-2">Design Thinking Projects</h3>
                        <p class="text-gray-600">Collaborative sessions focused on patient-centered healthcare solutions.</p>
                    </div>
                </div>
                
                <!-- Happy Environment -->
                <div class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                    <div class="h-64 overflow-hidden">
                        <img src="https://snscphs.org/wp-content/uploads/2023/04/gallery-3.jpg" alt="Campus Life" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-6">
                        <h3 class="text-2xl font-bold mb-2">Vibrant Campus</h3>
                        <p class="text-gray-600">A positive and inclusive atmosphere fostering holistic student growth.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
};

// Sports & Clubs Page (Life at SNS)
export const SportsClubsPage = () => {
    return `
    ${PageHeader(
        'Life at SNS',
        'SPINE & 100+ Clubs: Beyond Academic Excellence',
        '/static/images/gym.jpg',
        'Life at SNS'
    )}

    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold mb-4">SNS SPINE Activity Center</h2>
                <p class="text-xl text-gray-600">Our 5-level world-class activity center for comprehensive student development.</p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="bg-gray-50 p-8 rounded-2xl text-center shadow-md">
                    <i class="fas fa-swimmer text-4xl text-primary-600 mb-4"></i>
                    <h3 class="text-xl font-bold mb-2">Swimming</h3>
                    <p class="text-sm text-gray-600">Professional-grade ozonized pool with coaching.</p>
                </div>
                <div class="bg-gray-50 p-8 rounded-2xl text-center shadow-md">
                    <i class="fas fa-baseball-ball text-4xl text-primary-600 mb-4"></i>
                    <h3 class="text-xl font-bold mb-2">Indoor Cricket</h3>
                    <p class="text-sm text-gray-600">All-weather nets and bowling machines.</p>
                </div>
                <div class="bg-gray-50 p-8 rounded-2xl text-center shadow-md">
                    <i class="fas fa-dumbbell text-4xl text-primary-600 mb-4"></i>
                    <h3 class="text-xl font-bold mb-2">Fitness Center</h3>
                    <p class="text-sm text-gray-600">Fully equipped gym for mental and physical health.</p>
                </div>
                <div class="bg-gray-50 p-8 rounded-2xl text-center shadow-md">
                    <i class="fas fa-music text-4xl text-primary-600 mb-4"></i>
                    <h3 class="text-xl font-bold mb-2">Art & Music</h3>
                    <p class="text-sm text-gray-600">Professional studios for creative expression.</p>
                </div>
            </div>
        </div>
    </section>
    `;
};

// Brochure Page
export const BrochurePage = () => {
    return `
    ${PageHeader(
        'Digital Brochure',
        'Download the SNSCPHS Prospectus',
        '/static/images/hero.png',
        'Brochure'
    )}

    <section class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-12 text-center shadow-2xl">
                <i class="fas fa-file-pdf text-8xl text-red-600 mb-8"></i>
                <h2 class="text-4xl font-bold mb-4">Pharmacy Prospectus</h2>
                <p class="text-xl text-gray-700 mb-10">
                    Explore our programs, world-class labs, and the unique Design Thinking curriculum.
                </p>
                
                <a href="https://snscphs.org/brochure/" target="_blank" class="bg-primary-600 hover:bg-primary-700 text-white px-12 py-5 rounded-2xl font-bold text-xl shadow-xl transition transform hover:scale-105 inline-flex items-center">
                    <i class="fas fa-download mr-3"></i>
                    Download Brochure
                </a>
            </div>
        </div>
    </section>
    `;
};
