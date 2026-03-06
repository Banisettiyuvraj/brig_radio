# BrigRadio (CampusWave) - High-Level Production Sitemap

Home (/)
│
├── Public Pages (SEO Indexed)
│   ├── Features (/features)
│   ├── About Us (/about)
│   │   ├── Our Mission
│   │   ├── Leadership (/leadership)
│   │   └── Campus Partners
│   ├── Solutions (/solutions)
│   │   ├── For Students
│   │   ├── For Faculty
│   │   └── For Administration
│   ├── Radio & Media (/media)
│   │   ├── Live Broadcast (/live)
│   │   ├── Weekly Schedule (/schedule)
│   │   ├── Podcast Archive (/podcasts)
│   │   └── Trending Clips
│   ├── Blog / Campus News (/blog)
│   │   ├── Announcements
│   │   ├── Event Coverage
│   │   └── Student Spotlights
│   ├── Contact Us (/contact)
│   └── Careers (/careers)
│
├── Authentication (Private)
│   ├── Login (/auth/login)
│   ├── Sign Up (/auth/register)
│   ├── Forgot Password (/auth/reset-password)
│   ├── OTP Verification (/auth/verify)
│   └── Onboarding Wizard (/onboarding)
│
├── User Dashboard (Private - Logged In)
│   ├── Overview (/dashboard)
│   ├── My Radio (/dashboard/my-radio)
│   │   ├── Favorites
│   │   ├── Listening History
│   │   └── Requests & Dedications
│   ├── Academic Services (/dashboard/academic)
│   │   ├── Placement Updates
│   │   ├── Exam Notifications
│   │   └── Digital ID Card
│   ├── Communication (/dashboard/messages)
│   │   ├── Inbox
│   │   └── Campus Forums
│   ├── Profile Management (/settings/profile)
│   │   ├── Security Settings
│   │   └── Notification Preferences
│   └── Logout (/auth/logout)
│
├── Admin Panel (Restricted - Internal)
│   ├── Analytics Dashboard (/admin)
│   ├── User Management (/admin/users)
│   │   ├── Directory
│   │   └── Roles & Permissions
│   ├── Content Management (/admin/cms)
│   │   ├── Blog Editor
│   │   ├── Schedule Manager
│   │   └── Media Library
│   ├── Broadcast Controls (/admin/broadcast)
│   │   ├── Stream Status
│   │   └── Emergency Alerts
│   └── System Settings (/admin/settings)
│
├── Support & Resources
│   ├── Help Center (/help)
│   ├── Community Guidelines (/guidelines)
│   ├── Support Tickets (/support/tickets)
│   ├── Live Support (/support/chat)
│   └── System Status (/status)
│
├── Legal & Compliance
│   ├── Terms of Service (/legal/terms)
│   ├── Privacy Policy (/legal/privacy)
│   ├── Cookie Policy (/legal/cookies)
│   ├── Accessibility (/legal/accessibility)
│   └── Refund Policy (/legal/refund)
│
└── Utility Pages
    ├── 404 Not Found
    ├── 500 Server Error
    ├── Maintenance Mode
    ├── Sitemap (HTML Index)
    └── Global Search (/search)

---

## Optimization & Growth Notes
- **SEO Strategy**: Public-facing pages (Home, About, Media, Blog) are set to be indexed for maximum visibility.
- **Privacy & Security**: All dashboard, auth, and admin routes include `noindex` directives to stay hidden from public search engines.
- **Mobile-First Design**: Sitemap hierarchy is structured to support simplified mobile navigation and quick-access tab bars.
- **Scalability**: Designed to easily integrate future institutional modules like 'Alumni Portals' or 'Resource Booking'.
