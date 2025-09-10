const express = require('express');
const { PrismaClient } = require('./generated/prisma');
const prisma = new PrismaClient();

const server = express();

server.get('/', (req, res) => {
  res.send('School Database API is Live and Running!');
});

server.get('/', (req, res) => {
  res.send('School Database API is Live and Running!');
});

server.get('/students', async (req, res) => {
  try {
    console.log("Attempting to connect to the database...");
    const students = await prisma.student.findMany();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch students.' });
  }
});

server.get('/students/:id', async (req, res) => {
  try {
    const student = await prisma.student.findUnique({
      where: { id: parseInt(req.params.id) },
    });
    if (student) {
      res.json(student);
    } else {
      res.status(404).json({ error: 'Student not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch student.' });
  }
});

server.post('/students', async (req, res) => {
  try {
    const newStudent = await prisma.student.create({
      data: req.body,
    });
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create student.' });
  }
});

server.put('/students/:id', async (req, res) => {
  try {
    const updatedStudent = await prisma.student.update({
      where: { id: parseInt(req.params.id) },
      data: req.body,
    });
    res.json(updatedStudent);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update student.' });
  }
});

server.delete('/students/:id', async (req, res) => {
  try {
    await prisma.student.delete({
      where: { id: parseInt(req.params.id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete student.' });
  }
});

server.get('/teachers', async (req, res) => {
  try {
    const teachers = await prisma.teacher.findMany();
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch teachers.' });
  }
});

server.get('/teachers/:id', async (req, res) => {
  try {
    const teacher = await prisma.teacher.findUnique({
      where: { id: parseInt(req.params.id) },
    });
    if (teacher) {
      res.json(teacher);
    } else {
      res.status(404).json({ error: 'Teacher not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch teacher.' });
  }
});

server.post('/teachers', async (req, res) => {
  try {
    const newTeacher = await prisma.teacher.create({
      data: req.body,
    });
    res.status(201).json(newTeacher);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create teacher.' });
  }
});

server.put('/teachers/:id', async (req, res) => {
  try {
    const updatedTeacher = await prisma.teacher.update({
      where: { id: parseInt(req.params.id) },
      data: req.body,
    });
    res.json(updatedTeacher);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update teacher.' });
  }
});

server.delete('/teachers/:id', async (req, res) => {
  try {
    await prisma.teacher.delete({
      where: { id: parseInt(req.params.id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete teacher.' });
  }
});

server.get('/courses', async (req, res) => {
  try {
    const courses = await prisma.course.findMany();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch courses.' });
  }
});

server.get('/courses/:id', async (req, res) => {
  try {
    const course = await prisma.course.findUnique({
      where: { id: parseInt(req.params.id) },
    });
    if (course) {
      res.json(course);
    } else {
      res.status(404).json({ error: 'Course not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch course.' });
  }
});

server.post('/courses', async (req, res) => {
  try {
    const newCourse = await prisma.course.create({
      data: req.body,
    });
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create course.' });
  }
});

server.put('/courses/:id', async (req, res) => {
  try {
    const updatedCourse = await prisma.course.update({
      where: { id: parseInt(req.params.id) },
      data: req.body,
    });
    res.json(updatedCourse);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update course.' });
  }
});

server.delete('/courses/:id', async (req, res) => {
  try {
    await prisma.course.delete({
      where: { id: parseInt(req.params.id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete course.' });
  }
});

server.get('/classes', async (req, res) => {
  try {
    const classes = await prisma.class.findMany({
      include: {
        teacher: true,
        course: true,
      },
    });
    res.json(classes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch classes.' });
  }
});

server.get('/classes/:id', async (req, res) => {
  try {
    const schoolClass = await prisma.class.findUnique({
      where: { id: parseInt(req.params.id) },
      include: {
        teacher: true,
        course: true,
      },
    });
    if (schoolClass) {
      res.json(schoolClass);
    } else {
      res.status(404).json({ error: 'Class not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch class.' });
  }
});

server.post('/classes', async (req, res) => {
  try {
    const newClass = await prisma.class.create({
      data: req.body,
    });
    res.status(201).json(newClass);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create class.' });
  }
});

server.put('/classes/:id', async (req, res) => {
  try {
    const updatedClass = await prisma.class.update({
      where: { id: parseInt(req.params.id) },
      data: req.body,
    });
    res.json(updatedClass);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update class.' });
  }
});

server.delete('/classes/:id', async (req, res) => {
  try {
    await prisma.class.delete({
      where: { id: parseInt(req.params.id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete class.' });
  }
});

server.get('/enrollments', async (req, res) => {
  try {
    const enrollments = await prisma.enrollment.findMany({
      include: {
        student: true,
        class: true,
      },
    });
    res.json(enrollments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch enrollments.' });
  }
});

server.get('/enrollments/:id', async (req, res) => {
  try {
    const enrollment = await prisma.enrollment.findUnique({
      where: { id: parseInt(req.params.id) },
      include: {
        student: true,
        class: true,
      },
    });
    if (enrollment) {
      res.json(enrollment);
    } else {
      res.status(404).json({ error: 'Enrollment not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch enrollment.' });
  }
});

server.post('/enrollments', async (req, res) => {
  try {
    const newEnrollment = await prisma.enrollment.create({
      data: req.body,
    });
    res.status(201).json(newEnrollment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create enrollment.' });
  }
});

server.put('/enrollments/:id', async (req, res) => {
  try {
    const updatedEnrollment = await prisma.enrollment.update({
      where: { id: parseInt(req.params.id) },
      data: req.body,
    });
    res.json(updatedEnrollment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update enrollment.' });
  }
});

server.delete('/enrollments/:id', async (req, res) => {
  try {
    await prisma.enrollment.delete({
      where: { id: parseInt(req.params.id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete enrollment.' });
  }
});

const PORT = 4001;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
















