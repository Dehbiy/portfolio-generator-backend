-- CreateTable
CREATE TABLE "User" (
    "name" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT,
    "description" TEXT
);

-- CreateTable
CREATE TABLE "Sections" (
    "title" TEXT NOT NULL PRIMARY KEY
);

-- CreateTable
CREATE TABLE "SubSections" (
    "_id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "link" TEXT,
    "start_date" DATETIME,
    "end_date" DATETIME,
    "sectionsId" TEXT NOT NULL,
    CONSTRAINT "SubSections_sectionsId_fkey" FOREIGN KEY ("sectionsId") REFERENCES "Sections" ("title") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
