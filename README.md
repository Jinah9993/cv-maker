# CV Maker
A React-based web application that allows users to create and preview their resumes/CVs. The application includes sections for general information, education, experience, and skills, and lets users download their CVs as PDF files.

## Features
- Input fields for general information, education, work experience, and skills.
- Real-time CV preview on the right side of the screen.
- Option to download the generated CV as a PDF.
- Responsive layout for mobile and desktop screens.

## Technololgies Used
- Frontend: React, JavaScript, CSS
- Libraries:
    html2pdf.js (for downloading the CV as a PDF)
    React hooks (useState, useRef) for managing state and references.
    CSS for styling the layout and components.  

## Installation
To run this project locally, follow these steps:
1. Clone the repository:
### git clone https://github.com/Jinah9993/cv-maker.git
2. Navigate into the project directory:
### cd cv-maker
3. Install dependencies:
### npm install
4. Start the application:
### npm start
This will open the app in your browser at http://localhost:3000

## Future Improvments
- Additional sections: add more sections to the CV such as awards, certifications...
- PDF page size and scaling so the CV can fit into one page, no matter the content length
- Font size, add description box..