# Smart Student Report System — React + Vite

A React + Vite front-end academic prototype. Existing Admin, Teacher, Student, Parent, report and analytics workflows have been retained and are mounted inside the React application. Navigation uses the HTML-style paths supported by Vite and the included Vercel rewrite.

## Requirements
- Node.js 18 or newer
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite (normally http://localhost:5173).

## Production build
```bash
npm run build
npm run preview
```
The production output is created in `dist/`.

## Modules
- **Admin:** create and manage student, teacher and parent accounts; activate/deactivate accounts; view member directory.
- **Teacher:** view students, manage marks, attendance, CGPA and remarks.
- **Student:** view personal profile, marks and academic progress.
- **Parent:** view the linked student's profile and performance.
- **Performance Analytics:** subject-wise marks, average, attendance, grade and CGPA.
- **Academic Report:** student report view and teacher report editing.

## Login and sign up
- Login uses role, username and password. Parent login also requires the linked student's university ID.
- The login page includes Student and Parent self-sign-up. Student sign-up requires a unique university ID. Parent sign-up requires an existing student's university ID.
- Admin and Teacher accounts are created by Admin from the Admin dashboard; this prevents unrestricted privileged-account creation.
- Demo accounts and records are stored in browser Local Storage. The default demo admin is created automatically in a new browser profile: username `admin`, password `admin123`. These details are documented here for the reviewer and are not displayed on the login page.

## GitHub and Vercel deployment
1. Create a GitHub repository and push this project folder (include `package.json`, `index.html`, `src/`, `public/`, and `vercel.json`).
2. In Vercel, choose **Add New → Project**, import the GitHub repository.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy, then open the generated URL and test login, signup, role dashboards, report and analytics routes.

`vercel.json` routes direct page requests back through the React entry point so paths such as `/login.html` and `/analytics.html` work after deployment.

## Important academic-prototype limitation
Local Storage is browser-specific and does not synchronize data between devices. Passwords are stored in browser storage and are not securely protected. Do not enter real sensitive student information. A production system needs a backend, database, hashed passwords, server-side authorization and HTTPS.
