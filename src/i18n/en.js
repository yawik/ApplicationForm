export default
{
  localeName: 'English',
  previewForm: 'Preview application',
  abortForm: 'Abort application',
  submitting: 'Submit your application',
  submitFailed: 'Submit failed',
  success: 'Success',
  applicationWasSent: 'Application was received.',
  goHome: 'Go to homepage',
  fileNotFound: 'Page not found',
  buttons:
    {
      finish: 'Finish',
      continue: 'Continue',
      back: 'Back',
      send: 'Send',
      cancel: 'Cancel',
    },
  rules:
    {
      required: 'Required field',
      phoneOrEmail: 'Provide at least one of the 2 - phone or e-mail',
      invalidDate: 'Invalid date'
    },
  stepOne:
    {
      title: 'Personal information',
      salutation: 'Salutation',
      salutationTypes:
      [
        'Mr.',
        'Mrs.',
        'Ms.'
      ],
      firstName: 'First name',
      lastName: 'Last name',
      street: 'Street address',
      houseNumber: 'House No.',
      zipCode: 'Postal code',
      city: 'City',
      country: 'Country',
      phone: 'Phone number',
      email: 'E-mail address'
    },
  stepTwo:
    {
      title: 'Cover letter',
      description: 'You can write something about you that you think will help the recruiter to pick you for the job.'
    },
  stepThree:
    {
      title: 'Social profiles',
      import: 'Import data from your social profiles',
      attach: 'Attach profile',
      detach: 'Detach profile',
      view: 'View profile data',
    },
  stepFour:
    {
      title: 'Attachments',
      help: 'Attach images or PDF documents - up to 2 MB (Drag & Drop supported)',
      status: 'Status: {status}',
    },
  stepFive:
    {
      title: 'Privacy policy',
      startDate: 'When can you start?',
      ccTitle: 'Carbon copy',
      carbonCopy: 'Send me a copy of this application by e-mail.',
      privacyPolicy: 'I have read the <a href="https://yawik.org/demo/en/content/applications-privacy-policy" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation(); return true;">Privacy policy</a> and I accept it.', // the link won't work without the onClick handler
    }
};
