export const dataFormData = (formData: FormData) => {
  const email = formData.get("email") as string;
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const username = formData.get("username") as string;

  return {
    email,
    name,
    phone,
    subject,
    message,
    password,
    confirmPassword,
    firstName,
    lastName,
    username,
  };
};
