import { WelcomeEmailTemplate } from '@/src/components/emailTemplates/welcome';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 *
 * Send account verification mail to given email address
 *
 * @param verificationInstanceId
 * @param email
 * @param name
 * @returns send mail to given mail id
 */

export const sendAccountVerificationMail = async (
  verificationInstanceId: string,
  email: string,
  name: string
) => {
  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: [email],
    subject: 'Welcome to ExcaliShare',
    react: WelcomeEmailTemplate({
      firstName: name,
      verificationInstanceId: verificationInstanceId,
    }),
  });
  return { data, error };
};
