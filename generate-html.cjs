// File: scripts/generate-html.cjs
const fs = require('fs');
const path = require('path');

// Define the pages and their titles
const pages = [
    {name: '/', title: 'Index'},
    {name: '/groups', title: 'Groups'},
    {name: '/meetings', title: 'Index'},
    {name: '/about', title: 'About'},
];

// Directory where the HTML files will be created
const outputDir = path.resolve(__dirname, './');


// Template for the HTML file
const htmlTemplate = (title) => `
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <link href="/favicon.ico" rel="icon" type="image/x-icon">
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <title>${title}</title>
</head>
<body>
<div id="root"></div>
<script src="/src/main.tsx" type="module"></script>
</body>
</html>
`;

// Generate the HTML files
pages.forEach(({name, title}) => {
    const filePath = path.join(outputDir, `${name}/index.html`);
    const dirPath = path.dirname(filePath);

    // Ensure the directory exists
    fs.mkdirSync(dirPath, {recursive: true});

    // Write the HTML file
    fs.writeFileSync(filePath, htmlTemplate(title), 'utf-8');
    console.log(`Generated: ${filePath}`);
});


// Get latest ID from meetings data
const meetings = require("./src/data/meetings/meetings.ts").default;
const latestMeeting = meetings.reduce((latest, meeting) => {
    return !latest || meeting.id > latest.id ? meeting : latest;
});

// Generate the latest meetings HTML files
for (let i = 0; i < latestMeeting.id; i++) {
    const filePath = path.join(outputDir, `meetings/${i}/index.html`);
    const dirPath = path.dirname(filePath);

    // Ensure the directory exists
    fs.mkdirSync(dirPath, {recursive: true});

    // Write the HTML file
    fs.writeFileSync(filePath, htmlTemplate(`Meeting ${i}`), 'utf-8');
    console.log(`Generated: ${filePath}`);
}