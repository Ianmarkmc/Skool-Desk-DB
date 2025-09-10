SKOOL desk DB
Project Description
SKOOL desk DB is a Node.js and Express API for managing a school database. It uses Prisma as an ORM to provide RESTful endpoints for students, teachers, courses, classes, and enrollments.

Technologies Used
Node.js: JavaScript runtime.

Express.js: Node.js web framework.

Prisma: ORM for database access.

nodemon: Automatically restarts the server during development.

Getting Started
Prerequisites
Ensure Node.js is installed.

Installation
Clone the repository.

Navigate to the project directory.

cd "SKOOL desk DB"

Install dependencies.

npm install

Generate the Prisma client.

npx prisma generate

Start the API server.

npm run dev

The server will start on port 4001.

API Endpoints
The API provides the following endpoints for managing school data:

Students
GET /students - Retrieve all students.

GET /students/:id - Retrieve a single student by ID.

POST /students - Create a new student.

PUT /students/:id - Update a student by ID.

DELETE /students/:id - Delete a student by ID.

Teachers
GET /teachers - Retrieve all teachers.

GET /teachers/:id - Retrieve a single teacher by ID.

POST /teachers - Create a new teacher.

PUT /teachers/:id - Update a teacher by ID.

DELETE /teachers/:id - Delete a teacher by ID.

Courses
GET /courses - Retrieve all courses.

GET /courses/:id - Retrieve a single course by ID.

POST /courses - Create a new course.

PUT /courses/:id - Update a course by ID.

DELETE /courses/:id - Delete a course by ID.

Classes
GET /classes - Retrieve all classes.

GET /classes/:id - Retrieve a single class by ID.

POST /classes - Create a new class.

PUT /classes/:id - Update a class by ID.

DELETE /classes/:id - Delete a class by ID.

Enrollments
GET /enrollments - Retrieve all enrollments.

GET /enrollments/:id - Retrieve a single enrollment by ID.

POST /enrollments - Create a new enrollment.

PUT /enrollments/:id - Update an enrollment by ID.

DELETE /enrollments/:id - Delete an enrollment by ID.
