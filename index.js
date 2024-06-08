#!/usr/bin/env node

import { exec } from 'child_process';
import path from 'path';
import fs from 'fs';

const projectName = process.argv[2] || 'graphql-react-app';

const repoUrl = 'https://github.com/TuvalSimha/graphql-react-app-starter.git';

exec(`git clone ${repoUrl} ${projectName}`, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error cloning repository: ${error}`);
        return;
    }

    console.log(stdout);
    console.error(stderr);

    // Change directory to the project folder
    const projectPath = path.join(process.cwd(), projectName);

    // Remove the .git directory to disconnect from the template repository
    fs.rmSync(path.join(projectPath, '.git'), { recursive: true, force: true });

    console.log('Project setup complete.');
});
