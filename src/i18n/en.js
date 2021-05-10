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
      close: 'Close',
      remove: 'Remove',
    },
  rules:
    {
      required: 'Required field',
      phoneOrEmail: 'Provide at least one of the 2 - phone or e-mail',
      invalidDate: 'Invalid date',
      invalidEmail: 'Invalid e-mail',
    },
  stepOne:
    {
      title: 'Personal information',
      salutation: 'Salutation',
      salutationTypes:
      [
        'Mr.',
        'Mrs.'
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
      help: 'Attach images or PDF, DOC(x), XLS(x) documents - up to 2 MB',
      photo: 'You can provide a photo of yourself',
      status: 'Status: {status}',
    },
  stepFive:
    {
      title: 'Privacy policy',
      startDate: 'When can you start?',
      ccTitle: 'Carbon copy',
      carbonCopy: 'Send me a copy of this application by e-mail.',
      privacyPolicy: 'I have read the <a href="https://yawik.org/demo/en/content/applications-privacy-policy" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation(); return true;">Privacy policy</a> and I accept it.', // the link won't work without the onClick handler
    },
  dropZone:
    {
      dragDrop: 'Drag and drop files, or',
      clickHere: 'click here',
      chooseManually: 'to choose manually'
    },
  preview:
    {
      title: 'Application Form',
      email: 'E-mail',
      phone: 'Tel',
      address: 'Address',
      canStart: 'Can start on',
      acceptTerms: 'I have read and accept the Privacy Policy.'
    }
};
