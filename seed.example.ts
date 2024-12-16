import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Create user
    const user = await prisma.user.create({
        data: {
            name: 'Bushy Brows',
        },
    });
    console.log('Profile created:', user);

    // Create Links
    console.log('Creating Links...');
    console.log('Links object is null.');

    // Create Sections
    console.log('Creating Sections...');
    const section_projects = await prisma.sections.create({
        data: {
            title: 'Projects',
            subSections: {
                create: [
                ]
            },
        },
    });
    console.log('Section created:', section_projects);
    const section_blog = await prisma.sections.create({
        data: {
            title: 'Blog',
            subSections: {
                create: [
                {
                    title: 'How I Built My Portfolio',
                    description: 'Details on creating my portfolio website with modern frameworks.',
                }
                ]
            },
        },
    });
    console.log('Section created:', section_blog);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
