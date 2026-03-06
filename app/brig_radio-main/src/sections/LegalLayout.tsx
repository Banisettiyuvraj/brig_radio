import { ArrowLeft, Clock, ShieldCheck } from 'lucide-react';
import { legalContent } from './legalContent';
import type { LegalPageType } from './legalContent';

interface LegalLayoutProps {
    type: LegalPageType;
    onBack: () => void;
}

const LegalLayout = ({ type, onBack }: LegalLayoutProps) => {
    const content = legalContent[type];

    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Navigation */}
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-primary-blue hover:text-brig-text-dark transition-colors mb-12 group"
                >
                    <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                    <span className="font-medium">Back to Home</span>
                </button>

                {/* Header */}
                <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100 mb-10">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center">
                            <ShieldCheck className="w-8 h-8 text-primary-blue" />
                        </div>
                        <div>
                            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">{content.title}</h1>
                            <div className="flex items-center gap-2 text-gray-500 mt-2">
                                <Clock className="w-4 h-4" />
                                <span className="text-sm">Last updated: {content.lastUpdated}</span>
                            </div>
                        </div>
                    </div>

                    <div className="h-px bg-gray-100 w-full mb-10" />

                    {/* Body Content */}
                    <div className="space-y-12">
                        {content.sections.map((section, idx) => (
                            <div key={idx} className="space-y-4">
                                <h2 className="text-xl font-bold text-gray-900">{section.heading}</h2>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {section.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Note */}
                <div className="text-center text-gray-500 text-sm">
                    <p>© 2026 Brilliant Grammar School Educational Society’s Group of Institutions. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default LegalLayout;
