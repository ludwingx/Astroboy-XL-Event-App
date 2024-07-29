async function fetchClients() {
  try {
      const response = await fetch('http://localhost:3000/api/clients');
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const data = await response.json();
      // Process your data here
  } catch (error) {
      console.error('Error fetching clients:', error);
  }
}
