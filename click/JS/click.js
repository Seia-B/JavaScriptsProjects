// Get the paragraph element
const paragraph = document.getElementById('myParagraph');
const messageDiv = document.getElementById('message');

// Function to be called when paragraph is double clicked
function handleDoubleClick() {
    // Add visual feedback
    paragraph.classList.add('clicked');
    
    // Show success message
    messageDiv.textContent = '🎉 Success! You double-clicked the paragraph!';
    messageDiv.classList.add('show', 'success');
    
    // Log to console
    console.log('Paragraph was double-clicked!');
    
    // Reset after 2 seconds
    setTimeout(() => {
        paragraph.classList.remove('clicked');
        messageDiv.classList.remove('show');
    }, 2000);
}

// Add the ondblclick event handler to the paragraph
paragraph.ondblclick = handleDoubleClick;