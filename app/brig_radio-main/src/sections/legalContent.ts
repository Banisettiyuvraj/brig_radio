export type LegalPageType = 'privacy' | 'terms' | 'cookies';

export const legalContent = {
    privacy: {
        title: 'Privacy Policy',
        lastUpdated: 'February 28, 2026',
        sections: [
            {
                heading: '1. Introduction',
                content: `Welcome to BrigRadio, the official campus platform for Brilliant Grammar School Educational Society’s Group of Institutions. We are committed to protecting your personal information and your right to privacy.`,
            },
            {
                heading: '2. Information We Collect',
                content: `We collect information you provide directly (such as name, student ID, and email) and information automatically collected through your use of the platform (such as campus activity, access logs, and performance data).`,
            },
            {
                heading: '3. How We Use Your Information',
                content: `Your data is used specifically for institutional communication, academic progress tracking, placement notifications, and ensuring campus security. We do not sell your personal data to third parties.`,
            },
            {
                heading: '4. Data Security',
                content: `We implement end-to-end encryption and administrative controls to protect your data within the institution's private servers.`,
            },
        ],
    },
    terms: {
        title: 'Terms of Service',
        lastUpdated: 'February 28, 2026',
        sections: [
            {
                heading: '1. Acceptance of Terms',
                content: `By accessing or using BrigRadio, you agree to comply with and be bound by these Terms of Service. These terms apply to all students, faculty, and administrative staff.`,
            },
            {
                heading: '2. User Responsibilities',
                content: `Users are responsible for maintaining the confidentiality of their accounts and for all activities that occur under their account. Harassment, unauthorized data scraping, and misrepresentation are strictly prohibited.`,
            },
            {
                heading: '3. Institutional Guidelines',
                content: `BrigRadio is an extension of the campus environment. All usage must align with the code of conduct of Brilliant Grammar School Educational Society’s Group of Institutions.`,
            },
            {
                heading: '4. Limitation of Liability',
                content: `The institution provides this platform as a service and is not liable for indirect or consequential damages resulting from your use or inability to use the platform.`,
            },
        ],
    },
    cookies: {
        title: 'Cookie Policy',
        lastUpdated: 'February 28, 2026',
        sections: [
            {
                heading: '1. What are Cookies?',
                content: `Cookies are small text files stored on your device to enhance your browsing experience. BrigRadio uses strictly necessary and analytical cookies.`,
            },
            {
                heading: '2. Essential Cookies',
                content: `These cookies are necessary for the platform to function, such as maintaining your login session and security tokens.`,
            },
            {
                heading: '3. Analytical Cookies',
                content: `We use limited analytical cookies to understand how members interact with the campus platform, helping us improve features and accessibility.`,
            },
            {
                heading: '4. Managing Cookies',
                content: `You can control or disable cookies through your browser settings, though some parts of BrigRadio may not function correctly if you do so.`,
            },
        ],
    },
};
