SMART STUDENT REPORT SYSTEM — PROJECT GUIDE

1. HOW TO RUN
- Extract the ZIP file.
- Open the extracted folder in VS Code.
- Open index.html with Live Server (recommended) or open it in a browser.
- No npm installation is required.

2. INITIAL ADMIN LOGIN
Username: admin
Password: admin123
The initial admin account is created automatically in this browser's Local Storage.

3. ADMIN WORKFLOW
- Login as admin.
- In Add a member, choose Student, Teacher or Parent.
- For a student, manually enter the university ID provided by the university. The system does NOT generate student IDs.
- Fill student details, including name, department, branch, academic year, email, parent ID, phone numbers, username and password.
- Add a teacher with username, password, manually entered Teacher University ID, and the subjects they teach (enter multiple subjects separated by commas, for example Python, Java, DBMS). Assigned subjects are shown on the teacher dashboard and in the admin All Members table.
- Add a parent only after adding the student. Enter the student's existing university ID in Linked student university ID.
- Use Activate/Deactivate to control account status. Inactive users cannot log in.
- Remove accounts from the All members table.

4. PARENT LOGIN
Choose Parent, then enter parent username, parent password, AND the linked student's university ID.

5. TEACHER WORKFLOW
- Login with an active teacher account. The teacher dashboard displays the subjects assigned by the admin under My Teaching Subjects.
- Choose Manage report for a student.
- Add a subject, enter internal marks (0–30) and external marks (0–70), then Add / update marks.
- Add / update marks edits an existing subject with the same name.
- Enter the subject name and choose Remove selected subject to remove it.
- Update attendance, CGPA and teacher remarks and save.
- Grades are automatic: 90–100 A+, 80–89 A, 70–79 B, 60–69 C, 50–59 D, below 50 F.

6. STUDENT AND PARENT
- Students see only their own profile and report.
- Parents see only the student linked to their parent account.
- Student and parent modules include report and analytics access.

7. IMPORTANT PROJECT LIMITATION
This is a front-end academic prototype using browser Local Storage. Data is stored only in the browser and is not shared across different computers or browsers. Passwords are not securely protected in this demo. For a real university deployment, use a backend (for example Node.js/Python), a database, server-side role checks, password hashing, HTTPS and audit logs. Do not use real sensitive student data in this demo.

8. RESET DEMO DATA
To reset the browser data, open browser Developer Tools → Application/Storage → Local Storage and delete keys:
- srs_database_v2
- srs_session_v2
Then refresh the page. The default admin account will be recreated.
