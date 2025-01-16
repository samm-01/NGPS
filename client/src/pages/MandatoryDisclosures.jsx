import React from 'react';

const MandatoryDisclosures = () => {
    const generalInformation = [
        { id: 1, label: "Name of the School", value: "Your School Name" },
        { id: 2, label: "Affiliation No. (If Applicable)", value: "1234567" },
        { id: 3, label: "School Code (If Applicable)", value: "98765" },
        { id: 4, label: "Complete Address with PIN Code", value: "Your School Address, PIN Code" },
        { id: 5, label: "Principal Name & Qualification", value: "Principal Name, M.A., M.Ed." },
        { id: 6, label: "School Email ID", value: "school@example.com" },
        { id: 7, label: "Contact Details (Landline/Mobile)", value: "+91-9876543210" },
    ];
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-6 sm:px-12 md:px-24">
                <h2 className="text-3xl sm:text-4xl font-bold text-indigo-800 mb-8 text-center">
                    Mandatory Disclosures Check
                </h2>

                {/* Section A: General Information */}
                <div className="mb-12">
                    <h3 className="text-2xl font-semibold text-orange-600 mb-4">A. General Information</h3>
                    <table className="w-full border-collapse border border-gray-300 text-left">
                        <thead className="bg-indigo-800 text-white">
                            <tr>
                                <th className="border border-gray-300 px-4 py-2">S. No.</th>
                                <th className="border border-gray-300 px-4 py-2">Information</th>
                                <th className="border border-gray-300 px-4 py-2">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {generalInformation.map((info) => (
                                <tr key={info.id}>
                                    <td className="border border-gray-300 px-4 py-2">{info.id}</td>
                                    <td className="border border-gray-300 px-4 py-2">{info.label}</td>
                                    <td className="border border-gray-300 px-4 py-2">{info.value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Section B: Documents and Information */}
                <div>
                    <h3 className="text-2xl font-semibold text-orange-600 mb-4">B. Documents and Information</h3>
                    <table className="w-full border-collapse border border-gray-300 text-left">
                        <thead className="bg-indigo-800 text-white">
                            <tr>
                                <th className="border border-gray-300 px-4 py-2">S. No.</th>
                                <th className="border border-gray-300 px-4 py-2">Documents/Information</th>
                                <th className="border border-gray-300 px-4 py-2">Download</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">1</td>
                                <td className="border border-gray-300 px-4 py-2">Copies of Affiliation/Upgradation Letter</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <a
                                        href="/uploads/affiliation-letter.pdf"
                                        className="text-indigo-600 underline hover:text-indigo-800"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Download
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">2</td>
                                <td className="border border-gray-300 px-4 py-2">Copies of Societies/Trust/Company Registration</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <a
                                        href="/uploads/Society-Certificate.pdf"
                                        className="text-indigo-600 underline hover:text-indigo-800"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Download
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">3</td>
                                <td className="border border-gray-300 px-4 py-2">Copy of NOC (If Applicable)</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <a
                                        href="/uploads/noc.pdf"
                                        className="text-indigo-600 underline hover:text-indigo-800"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Download
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default MandatoryDisclosures;
