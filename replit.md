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