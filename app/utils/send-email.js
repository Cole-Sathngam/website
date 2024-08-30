// /app/utils/send-email.js

export async function sendEmail(data) {
  const apiEndpoint = '/api/email';

  try {
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    const result = await response.json();
    alert(result.message);
    return result;
  } catch (error) {
    alert(error.message);
    throw error;
  }
}