'use server';

export async function submitContact(_prevState: any, formData: FormData) {
  console.log('submitContact', formData.get('email'), formData.get('message'));
  
  // Validate form
  if (!formData.get('email') || !formData.get('message')) {
    return {message: 'Please fill out all fields'};
  }

  // wait 4 seconds
  await new Promise((resolve) => setTimeout(resolve, 4000));

  return {message: 'Response received!'};
}