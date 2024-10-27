# 📋 Custom Forms Application

### 🌟 Overview
A versatile web application for creating customizable forms, quizzes, surveys, polls, and questionnaires! Inspired by Google Forms, but with a unique twist. Here, users can design "templates" (customizable sets of questions), and others can fill out "forms" (with their specific answers), making it ideal for diverse use cases.

### 🎯 Key Features
- **📝 Template Creation**: Define sets of questions with options for single-line text, multi-line text, integers, checkboxes, and more.
- **🔐 User Access Control**: Only authenticated users can fill forms, leave comments, and give likes. Non-authenticated users have read-only access.
- **📊 Results & Analysis**: View filled forms and analyze aggregated answers (e.g., average values for numeric fields) with charts powered by Tremor.
- **⚙️ Full Text Search**: Quickly find templates by title, description, or tags with our robust search functionality.
- **👤 Admin Controls**: Comprehensive admin page for user management and template editing. Admins can view, edit, and even remove access.

---

### 🛠️ Tech Stack
- **Frontend**: Next.js (monolithic), Tailwind CSS, Next UI, Tremor (for results charts), React DnD Kit (drag-and-drop).
- **Backend**: MySQL (AWS RDS), Drizzle ORM, optimized full-text search with MATCH & AGAINST.
- **Storage**: Cloudflare R2 for image storage.
- **Authentication**: Auth.js (social logins with GitHub, Discord), bcrypt.js for security.
- **Internationalization**: `next-intl` (English and Spanish support).
- **Email Notifications**: Resend to email users a copy of their responses.

---

### ⚡ Main Functionalities

#### 🏗️ Template Management
- **Question Types**: Add up to 4 of each type (single-line text, multi-line text, integers, checkboxes).
- **Order & Customization**: Drag-and-drop questions to reorder, specify visibility in filled-out form tables.
- **Settings**: Configure title, description (Markdown supported), topics, images, tags, and access control (public, restricted).

#### 💬 User & Form Interactions
- **Comments & Likes**: Templates allow comments and likes (one like per user per template).
- **Admin Role**: Admins have full edit/view rights across all templates and forms.
- **Personalized Dashboard**: Users can manage their templates and filled forms with sortable tables.

#### 📈 Analysis & Visualization
- **Result Aggregation**: Automatic aggregation of results, e.g., most common answers or numeric averages.
- **Charts & Graphs**: Visualize data in real-time using Tremor charts in the results section.

---

### 🖥️ Interface
- **Main Page**:
  - Gallery of latest templates with author, description, and image.
  - Top 5 most popular templates.
  - Tag cloud for quick access.
- **Template Tabs**:
  - General settings, questions, results, and comments.
  - Dynamic question management: Add, delete, and edit.
  - View filled forms and analyze results.

---

### 🔍 Advanced Search
- **Global Search**: Full-text search across templates.
- **Tag Filtering**: Find templates by tags in the search results page.

---

### 🔒 Security & Optimization
- **Auth Security**: bcrypt.js for password hashing, form validation with `react-hook-form` and Zod.
- **Infinite Scroll**: Main template gallery supports infinite scroll.
- **Optimized DB Queries**: Full-text indexes and efficient querying without full DB scans.

---

### 📱 Responsive Design
The app is fully responsive, adapting to various screen resolutions and mobile devices for an optimal user experience.

---

### 🚀 Optional Features
- **📧 Email Copy of Responses**: Users can opt-in to receive their filled form responses via email.
- **📜 Extended Question Types**: Add "choose from list" questions with predefined options.

---

### 🏗️ Tech Stack Summary
| Tech             | Purpose                       |
|------------------|-------------------------------|
| Next.js          | Frontend & Backend            |
| MySQL (AWS)      | Database                      |
| Drizzle ORM      | Database Access               |
| Cloudflare R2    | Image Storage                 |
| Auth.js          | Authentication (social login) |
| Tremor           | Data Visualization            |
| Tailwind CSS     | Styling                       |
| Resend           | Email Notifications           |
| Next UI          | Component Library             |

---

**Get started with this powerful tool for all your customizable form needs!** 📝🌐

**Developed by [Jonas](https://github.com/MRJonas343)
