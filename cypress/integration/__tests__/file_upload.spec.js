// All files to test upload must be in ./fixtures folder
describe('file upload use cases', () => {
    it ('simple file upload', () => {
        cy.visit('http://automationpractice.com/index.php?controller=contact');
        cy.wait(7000);
        
        const yourFixturePath = 'image2.jpg';
        cy.get('#fileUpload').attachFile(yourFixturePath);
    });

    it ('Drag and Drop file upload', () => {
        cy.visit('https://css-tricks.com/drag-and-drop-file-uploading/');
        cy.get(':nth-child(4) > .button').click();
        
        const yourFixturePath = 'image2.jpg';
        cy.get('#file').attachFile(yourFixturePath);
        cy.get('.box__success').contains('Done!');
    });

    it ('Upload multiple files', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');
        const yourFixturePath = 'image2.jpg';
        const yourFixturePath1 = 'upload.txt';
        const yourFixturePath2 = 'example.json';

        cy.get('#filesToUpload')
            .attachFile(yourFixturePath)
            .attachFile(yourFixturePath1)
            .attachFile(yourFixturePath2);
        cy.get(':nth-child(6) > strong').contains('Files You Selected');
    });

    it ('Change file name while uploading', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');
        const yourFixturePath = 'image2.jpg';
        cy.get('#filesToUpload')
            .attachFile({ filePath: yourFixturePath, fileName: 'newName.txt' })
        cy.get(':nth-child(6) > strong').contains('Files You Selected');
    });
});