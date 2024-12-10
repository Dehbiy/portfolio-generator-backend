import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

    // Create a user
    const user = await prisma.user.create({
        data: {
            name: "John Doe",
            email: "john.doe@example.com",
            description: "A sample user profile for testing.",
        },
    });

    console.log('User created:', user);

    // Create sections
    const section1 = await prisma.sections.create({
        data: {
            title: "Projects",
            subSections: {
                create: [
                    {
                        title: "Project 1",
                        description: "This is the first project.",
                        link: "https://github.com/project1",
                        start_date: new Date("2023-01-01"),
                        end_date: new Date("2023-12-31"),
                    },
                    {
                        title: "Project 2",
                        description: "This is the second project.",
                        link: "https://github.com/project2",
                        start_date: new Date("2023-02-01"),
                        end_date: new Date("2023-08-01"),
                    },
                ],
            },
        },
    });

    const section2 = await prisma.sections.create({
        data: {
            title: "Blog",
            subSections: {
                create: [
                    {
                        title: "Blog Post 1",
                        description: "An introduction to my blog.",
                        link: "https://example.com/blog/post1",
                        start_date: new Date("2023-03-01"),
                    },
                    {
                        title: "Blog Post 2",
                        description: "How to create a REST API with Node.js",
                        link: "https://example.com/blog/post2",
                        start_date: new Date("2023-05-15"),
                    },
                ],
            },
        },
    });

    console.log('Sections created:', section1, section2);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
