import React from 'react';

const MandatoryDisclosures = () => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto text-center px-6 sm:px-12 md:px-24">
                <h2 className="text-3xl sm:text-4xl font-bold text-indigo-800 mb-8">Mandatory Disclosures</h2>
                <p className="text-lg sm:text-xl text-gray-600 mb-12">
                    Our mandatory disclosures are coming soon. Stay tuned for more information.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <p className="text-gray-700 text-2xl font-semibold">Coming Soon</p>
                    <p className="text-gray-600 mt-4">
                        We're working on providing the mandatory disclosures. Please check back later for updates.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MandatoryDisclosures;
