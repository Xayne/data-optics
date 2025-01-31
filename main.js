// Handle incoming messages
window.addEventListener('message', (event) => {
  // Verify origin for security
  if (event.origin !== 'YOUR_PARENT_ORIGIN') return;
  
  const { type, data } = event.data;
  // Handle message types
  switch(type) {
    case 'init':
      // Initialize iframe content
      break;
    // Add more cases as needed
  }
});

// Send message to parent
function sendToParent(type, data) {
  window.parent.postMessage({ type, data }, 'YOUR_PARENT_ORIGIN');
}
