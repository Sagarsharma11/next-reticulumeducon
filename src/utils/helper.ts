export const sendToWhatsApp = (number: string, formData: any) => {
  const { firstName, lastName, email, phone, query } = formData;
  if (!firstName || !phone || !query) {
    alert("Please fill in your First Name, Phone Number, and Query before sending.");
    return;
  }

  const text = `*New Website Inquiry*\n\n*Name:* ${firstName} ${lastName}\n*Email:* ${email || 'N/A'}\n*Phone:* ${phone}\n*Query:* ${query}`;
  const encodedText = encodeURIComponent(text);
  const url = `https://wa.me/91${number}?text=${encodedText}`;
  window.open(url, "_blank");
};