# Demo Web Application Implementation Plan

This document outlines the implementation plan for the sample web application that demonstrates the full technology stack of the Cloudflare Monorepo Starter.

## Overview

The demo web application will showcase:

- **TanStack Start** - Modern full-stack React framework
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/UI** - Beautiful and accessible component library
- **Better Auth** - Secure authentication solution
- **Convex.Dev** - Real-time backend with database

## Phase 2: TanStack Start Web Application

### Goals

- Create a modern, performant web application using TanStack Start
- Integrate with the existing monorepo structure
- Set up development and build processes

### Implementation Steps

#### 2.1 Project Setup

- Generate new TanStack Start application in `apps/web-app/`
- Configure as a monorepo workspace package
- Set up proper TypeScript configuration extending `@repo/typescript-config`

#### 2.2 Development Integration

- Add development scripts that integrate with existing Just commands
- Configure Turborepo to include the web app in build/dev/test pipelines
- Set up hot reloading and development server

#### 2.3 Routing Structure

```
/                    - Homepage with feature overview
/dashboard          - Main application dashboard (auth required)
/auth/login         - Login page
/auth/register      - Registration page
/profile            - User profile management
/api/*              - API routes (delegated to Workers)
```

#### 2.4 File Structure

```
apps/web-app/
├── src/
│   ├── routes/          # File-based routing
│   ├── components/      # Reusable components
│   ├── lib/            # Utilities and configurations
│   └── hooks/          # Custom React hooks
├── public/             # Static assets
├── package.json        # Dependencies and scripts
└── app.config.ts       # TanStack Start configuration
```

#### 2.5 Configuration

- Configure TanStack Start for server-side rendering
- Set up proper meta tags and SEO optimization
- Configure build output for Cloudflare Pages deployment

## Phase 3: UI/Styling Integration

### Goals

- Implement beautiful, responsive design with Tailwind CSS
- Integrate Shadcn/UI for consistent, accessible components
- Create a cohesive design system

### Implementation Steps

#### 3.1 Tailwind CSS Setup

- Install and configure Tailwind CSS with PostCSS
- Set up custom theme configuration
- Configure Tailwind with Shadcn/UI compatibility

#### 3.2 Shadcn/UI Integration

- Initialize Shadcn/UI configuration
- Install core components: Button, Input, Card, Dialog, etc.
- Set up component customization and theming

#### 3.3 Design System

- Create consistent spacing, typography, and color schemes
- Implement dark/light mode support
- Create reusable layout components

#### 3.4 Sample Pages

- Design and implement homepage with feature showcase
- Create dashboard layout with navigation
- Build responsive authentication forms
- Implement user profile interface

## Phase 4: Better Auth Implementation

### Goals

- Secure user authentication and session management
- Integration with Cloudflare Workers for auth endpoints
- Seamless user experience with proper error handling

### Implementation Steps

#### 4.1 Auth Worker Setup

- Create dedicated Cloudflare Worker in `apps/auth-worker/`
- Configure Better Auth with appropriate adapters
- Set up database for user storage (integrate with Convex or D1)

#### 4.2 Authentication Features

- Email/password authentication
- Session management with secure cookies
- Password reset functionality
- Email verification (optional)

#### 4.3 Frontend Integration

- Create auth context and hooks for React
- Implement login/registration forms with validation
- Add protected route wrapper components
- Handle authentication state across the application

#### 4.4 Security Configuration

- Configure CORS for cross-origin requests
- Set up secure session management
- Implement proper error handling and rate limiting

## Phase 5: Convex.Dev Backend Integration

### Goals

- Real-time backend with database functionality
- Seamless integration with Cloudflare Workers
- Demonstrate full-stack data flow

### Implementation Steps

#### 5.1 Convex Setup

- Initialize Convex backend project
- Configure database schema for demo application
- Set up real-time subscriptions

#### 5.2 API Workers

- Create Cloudflare Workers in `apps/api-worker/` that interface with Convex
- Implement CRUD operations for demo data
- Set up proper error handling and validation

#### 5.3 Data Layer

- Design database schema for demo features (todos, user profiles, etc.)
- Implement real-time data synchronization
- Create proper data access patterns

#### 5.4 Frontend Integration

- Set up Convex client in the web application
- Implement real-time UI updates
- Create data fetching hooks and components

## Demo Application Features

The completed demo will include:

### Core Features

- **User Authentication** - Sign up, log in, profile management
- **Real-time Todo App** - Create, update, delete todos with real-time sync
- **Dashboard** - Overview of user data and application features
- **Responsive Design** - Works perfectly on desktop and mobile

### Technical Demonstrations

- **Server-Side Rendering** - Fast initial page loads
- **Real-time Updates** - Live data synchronization
- **Type Safety** - End-to-end TypeScript types
- **Component Library** - Consistent UI with Shadcn/UI
- **Authentication Flow** - Secure user management
- **API Integration** - Workers communicating with external services

## Success Criteria

- ✅ Web application builds and runs in development
- ✅ Authentication flow works end-to-end
- ✅ Real-time data synchronization functions properly
- ✅ Responsive design works on all device sizes
- ✅ Integration with monorepo tooling (build, test, deploy)
- ✅ Clear documentation for developers to extend the demo

This implementation plan will result in a production-ready sample application that demonstrates best practices for building modern web applications with the Cloudflare ecosystem.
