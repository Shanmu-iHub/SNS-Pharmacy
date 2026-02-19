
import { PageHeader } from '../components/page-header'

// Transport Page
export const TransportPage = () => {
    return `
    ${PageHeader(
        'Transport Services',
        'Safe and Reliable Connectivity Across Coimbatore',
        '/static/images/SNS_BUS.jpg',
        'Transport'
    )}

    <!-- Key Features -->
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold mb-4">Why Choose Our Transport</h2>
                <p class="text-xl text-gray-600">A dedicated fleet of buses ensuring punctual and safe travel for our pharmacy students.</p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="bg-primary-50 rounded-2xl p-8 text-center border border-primary-100">
                    <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                        <i class="fas fa-bus text-3xl text-primary-600"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2">Extensive Reach</h3>
                    <p class="text-gray-600 text-sm">Covering all major parts of Coimbatore city and suburbs.</p>
                </div>
                
                <div class="bg-primary-50 rounded-2xl p-8 text-center border border-primary-100">
                    <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                        <i class="fas fa-map-marked-alt text-3xl text-primary-600"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2">GPS Tracking</h3>
                    <p class="text-gray-600 text-sm">Real-time monitoring for safety and route optimization.</p>
                </div>
                
                <div class="bg-primary-50 rounded-2xl p-8 text-center border border-primary-100">
                    <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                        <i class="fas fa-shield-alt text-3xl text-primary-600"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2">Safety First</h3>
                    <p class="text-gray-600 text-sm">Trained drivers and speed governors installed in every vehicle.</p>
                </div>
                
                <div class="bg-primary-50 rounded-2xl p-8 text-center border border-primary-100">
                    <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                        <i class="fas fa-clock text-3xl text-primary-600"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2">Punctuality</h3>
                    <p class="text-gray-600 text-sm">Buses scheduled to reach campus before 8:45 AM daily.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Coverage Areas -->
    <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold text-center mb-12">Major Coverage Areas</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="bg-white p-6 rounded-xl shadow-sm border-l-4 border-primary-500">
                    <h4 class="font-bold text-lg mb-2">Central Coimbatore</h4>
                    <p class="text-gray-600 text-sm">RS Puram, Gandhipuram, Town Hall, Race Course</p>
                </div>
                <div class="bg-white p-6 rounded-xl shadow-sm border-l-4 border-primary-500">
                    <h4 class="font-bold text-lg mb-2">North Coimbatore</h4>
                    <p class="text-gray-600 text-sm">Saravanampatti, Thudiyalur, Periyanaickenpalayam</p>
                </div>
                <div class="bg-white p-6 rounded-xl shadow-sm border-l-4 border-primary-500">
                    <h4 class="font-bold text-lg mb-2">East Coimbatore</h4>
                    <p class="text-gray-600 text-sm">Peelamedu, Singanallur, Ramanathapuram, Hope College</p>
                </div>
                <div class="bg-white p-6 rounded-xl shadow-sm border-l-4 border-primary-500">
                    <h4 class="font-bold text-lg mb-2">West Coimbatore</h4>
                    <p class="text-gray-600 text-sm">Vadavalli, Saibaba Colony, Koundampalayam</p>
                </div>
                 <div class="bg-white p-6 rounded-xl shadow-sm border-l-4 border-primary-500">
                    <h4 class="font-bold text-lg mb-2">Mettupalayam Road</h4>
                    <p class="text-gray-600 text-sm">Karamadai, Mettupalayam, Press Colony</p>
                </div>
                <div class="bg-white p-6 rounded-xl shadow-sm border-l-4 border-primary-500">
                    <h4 class="font-bold text-lg mb-2">Avinashi Road</h4>
                    <p class="text-gray-600 text-sm">Neelambur, Chinniyampalayam, KMCH</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact -->
    <section class="py-16 bg-primary-600 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl font-bold mb-4">Transport Inquiries</h2>
            <p class="text-xl mb-8">For route details and transport fee structure, contact our transport office.</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+917550316701" class="bg-white text-primary-600 px-8 py-4 rounded-xl font-bold shadow-lg transition hover:bg-gray-100 flex items-center justify-center">
                    <i class="fas fa-phone mr-2"></i> +91 75503 16701
                </a>
                <a href="mailto:college@snscphs.org" class="bg-primary-700 text-white border border-primary-400 px-8 py-4 rounded-xl font-bold shadow-lg transition hover:bg-primary-800 flex items-center justify-center">
                    <i class="fas fa-envelope mr-2"></i> college@snscphs.org
                </a>
            </div>
        </div>
    </section>
    `;
};
