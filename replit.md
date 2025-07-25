# PDF Tools Application

## Overview

This is a full-stack PDF processing application built with React/TypeScript frontend and Express.js backend. The application provides various PDF manipulation tools including merge, split, compress, and file conversion capabilities. It uses a modern tech stack with shadcn/ui components, Tailwind CSS, and Drizzle ORM with PostgreSQL for data persistence.

## User Preferences

Preferred communication style: Simple, everyday language.
Preferred explanation language: Korean for technical explanations.
Preferred SEO approach: Comprehensive multi-language global SEO targeting international users.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation
- **Internationalization**: Custom i18n system with 12+ language support
- **SEO**: Multi-language SEO optimization with hreflang tags
- **Content Pages**: Help Center and FAQ pages with SEO optimization
- **Mobile Optimization**: Responsive design with touch-friendly interface

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **File Processing**: PDF-lib for PDF manipulation, Multer for file uploads
- **API Design**: RESTful endpoints with proper error handling
- **Development**: Hot reloading with Vite middleware integration

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Schema Management**: Drizzle migrations in `/migrations` directory
- **Job Tracking**: Database table for PDF processing jobs with status tracking
- **Fallback Storage**: In-memory storage implementation for development

## Key Components

### Multi-Language System
- **MultiLangSEOHead**: SEO-optimized head component with automatic hreflang generation
- **LanguageSwitcher**: Language switcher with dropdown, compact, and horizontal variants
- **i18n System**: Custom internationalization with 12+ language support (English, Spanish, French, German, Korean, Japanese, Chinese, Portuguese, Italian, Russian, Arabic)
- **Translation Management**: Structured translation system with nested keys for maintainability
- **URL Localization**: Language-specific URL routing (e.g., /es/merge-pdf, /ko/merge-pdf)
- **RTL Support**: Right-to-left language support for Arabic

### SEO Enhancement Features
- **Hreflang Tags**: Automatic generation of language alternative URLs
- **Structured Data**: Multi-language schema.org markup with language variants
- **Meta Tag Optimization**: Localized titles, descriptions, and keywords
- **Open Graph**: Multi-language social media optimization
- **Canonical URLs**: Language-specific canonical tag management

### PDF Processing Service
- **Location**: `server/services/pdf-processor.ts`
- **Capabilities**: Merge, split, compress, and convert PDF files
- **Dependencies**: PDF-lib for PDF manipulation, Archiver for ZIP creation
- **File Handling**: Temporary file management with cleanup

### Storage Layer
- **Interface**: `IStorage` in `server/storage.ts`
- **Implementation**: `MemStorage` class for in-memory job tracking
- **Job Management**: CRUD operations for PDF processing jobs
- **Cleanup**: Automatic cleanup of old jobs

### File Upload System
- **Component**: `FileUpload` in `client/src/components/pdf-tools/`
- **Features**: Drag-and-drop, file validation, size limits
- **Integration**: React Dropzone for enhanced UX
- **Validation**: Client-side file type and size validation

### Content Pages
- **Blog**: `/blog` - 10 comprehensive SEO-optimized articles (800+ words each) for AdSense approval
- **Help Center**: `/help-center` - User guides and tutorials for PDF tools
- **FAQ Page**: `/faq` - Comprehensive frequently asked questions with SEO optimization
- **API Documentation**: `/api-docs` - Complete developer documentation for REST API
- **Status Page**: `/status` - Real-time service status and uptime monitoring
- **Privacy Policy**: `/privacy-policy` - GDPR compliant privacy policy with data protection details
- **Terms of Service**: `/terms-of-service` - Legal terms and user agreement for PDF tools usage
- **Cookie Policy**: `/cookie-policy` - GDPR/CCPA compliant cookie policy with browser management guides
- **Security Page**: `/security` - Comprehensive security measures and file protection policies
- **About Page**: `/about` - Company introduction, mission, values, and team information
- **Features**: Collapsible sections, category filtering, keyword highlighting, code examples, live updates
- **SEO**: Structured data, meta tags, and keyword optimization for search engines

### Blog Implementation (January 2025)
- **10 SEO-Optimized Articles**: Each 800+ words targeting high-volume keywords
- **AdSense Ready**: Natural English content, well-structured, compliant with policies
- **Search and Filtering**: Category-based filtering and keyword search functionality
- **Multi-language Support**: Blog available in all 12+ supported languages
- **Topics Covered**: PDF merging, compression, conversion, security, splitting, image conversion, editing best practices, tool comparisons, future trends
- **Navigation Integration**: Blog menu added to header with proper multi-language routing
- **✅ FULLY RESOLVED**: Google crawler accessibility - All 10 blog posts visible with complete 800+ word content

### SEO Enhancement (January 2025)
- **Robots.txt**: Comprehensive robots.txt file for pdfo.dev domain with proper crawling directives
- **XML Sitemap**: Multi-language sitemap.xml with hreflang tags for international SEO
- **Search Engine Optimization**: Blocked sensitive paths (/api/, /uploads/, /admin/, /tmp/)
- **Social Media Crawlers**: Allowed Facebook, Twitter, LinkedIn, WhatsApp, and Telegram bots
- **Crawl Rate**: 1-second crawl delay for respectful indexing
- **Priority Structure**: Homepage (1.0), PDF tools (0.9), Blog (0.8), static pages (0.4-0.7)
- **Complete SEO Meta Tags**: Title, description, keywords, Open Graph, Twitter Cards, Schema.org
- **Crawlable Content**: Search engine bots can read HTML content with proper tool descriptions
- **Server-Side SEO**: SEO templates with page-specific metadata for all PDF tools and blog pages
- **Favicon System**: Red document-shaped favicon with SVG format for all devices and browsers

### Deployment Configuration (January 2025)
- **Render Deployment**: Successfully deployed to https://pdf-w71a.onrender.com/ with Node.js support
- **Static Files**: robots.txt, sitemap.xml, favicon.svg properly configured and serving
- **SEO Assets**: All SEO files accessible with correct content-types
- **Google AdSense**: Meta tag added to all pages (ca-pub-3472753117675617)
- **Site Configuration**: pdfo.dev domain properly configured in all SEO files

### Brand Identity (January 2025)
- **Favicon Design**: Red document shape with gradient fill matching main logo design
- **Multi-Device Support**: SVG favicon for modern browsers, 16x16 and 180x180 variants
- **Apple Touch Icon**: 180x180 SVG icon for iOS devices with proper background
- **Web App Manifest**: PWA-ready manifest for installation on mobile devices
- **Brand Colors**: Primary red (#dc2626) with gradient to dark red (#991b1b)
- **Theme Color**: Consistent red theme across all platforms and browsers

### UI Components
- **Design System**: shadcn/ui with custom PDF tools theme
- **Component Library**: Comprehensive set of reusable components
- **Accessibility**: ARIA-compliant components from Radix UI
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Mobile Optimization**: Touch-friendly buttons, optimized spacing, and responsive typography
- **Progressive Enhancement**: Smaller screens receive optimized layouts and interactions

## Data Flow

### PDF Processing Workflow
1. **File Upload**: User selects files through drag-and-drop or file picker
2. **Validation**: Client-side validation for file type, size, and count
3. **API Request**: FormData sent to appropriate endpoint (`/api/pdf/merge`, `/api/pdf/split`, etc.)
4. **Job Creation**: Server creates job record with unique ID and processing status
5. **Processing**: PDF processor service manipulates files using PDF-lib
6. **Response**: Processed file returned as blob with job status update
7. **Download**: Client receives blob and triggers download

### Data Persistence
- **Job Tracking**: Each PDF operation creates a job record in PostgreSQL
- **Status Management**: Jobs track processing, completed, and failed states
- **Cleanup**: Background cleanup of old jobs and temporary files
- **Error Handling**: Comprehensive error tracking and user feedback

## External Dependencies

### Core Libraries
- **PDF Processing**: pdf-lib for PDF manipulation
- **File Upload**: multer for server-side file handling
- **Database**: @neondatabase/serverless for PostgreSQL connection
- **ORM**: drizzle-orm for database operations
- **Validation**: zod for schema validation

### UI Dependencies
- **Component Library**: @radix-ui/* for accessible components
- **Styling**: tailwindcss for utility-first CSS
- **Icons**: lucide-react for consistent iconography
- **State Management**: @tanstack/react-query for server state

### Development Tools
- **Build**: vite for fast development and builds
- **TypeScript**: Full TypeScript support across frontend and backend
- **Linting**: ESLint configuration for code quality
- **Hot Reload**: Vite HMR for rapid development

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds React app to `dist/public`
- **Backend**: esbuild bundles Express server to `dist/index.js`
- **Assets**: Static files served from built frontend
- **Environment**: Production build optimizations enabled

### Environment Configuration
- **Database**: PostgreSQL connection via `DATABASE_URL` environment variable
- **File Storage**: Temporary file handling with cleanup
- **Security**: File type validation and size limits
- **Error Handling**: Comprehensive error logging and user feedback

### Hosting Requirements
- **Node.js**: Server environment for Express backend
- **PostgreSQL**: Database for job tracking and persistence
- **File System**: Temporary directory for file processing
- **Memory**: Sufficient RAM for PDF processing operations

The application is designed to be scalable and maintainable, with clear separation of concerns between frontend and backend, proper error handling, and a robust file processing pipeline.