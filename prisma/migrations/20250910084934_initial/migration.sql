-- CreateTable
CREATE TABLE "public"."Student" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "dateOfBirth" DATE NOT NULL,
    "contactNumber" TEXT,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Teacher" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Teacher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Course" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Class" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "semester" TEXT NOT NULL,
    "teacherId" INTEGER NOT NULL,
    "courseId" INTEGER NOT NULL,

    CONSTRAINT "Class_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Enrollment" (
    "id" SERIAL NOT NULL,
    "grade" TEXT NOT NULL,
    "studentId" INTEGER NOT NULL,
    "classId" INTEGER NOT NULL,

    CONSTRAINT "Enrollment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_email_key" ON "public"."Teacher"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Course_code_key" ON "public"."Course"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Enrollment_studentId_classId_key" ON "public"."Enrollment"("studentId", "classId");

-- AddForeignKey
ALTER TABLE "public"."Class" ADD CONSTRAINT "Class_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "public"."Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Class" ADD CONSTRAINT "Class_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "public"."Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Enrollment" ADD CONSTRAINT "Enrollment_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "public"."Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Enrollment" ADD CONSTRAINT "Enrollment_classId_fkey" FOREIGN KEY ("classId") REFERENCES "public"."Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
