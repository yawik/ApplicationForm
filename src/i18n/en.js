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
  files:
    {
      photoRejected: 'File is larger than 2 MB',
      attachmentsRejected: '{count} file(s) were rejected as they are larger than 2 MB'
    },
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
        {
          value: 1,
          label: 'Mr.',
        },
        {
          value: 2,
          label: 'Mrs.',
        },
      ],
      firstName: 'First name',
      lastName: 'Last name',
      street: 'Street address',
      houseNumber: 'House No.',
      zipCode: 'Postal code',
      city: 'City',
      country: 'Country',
      phone: 'Phone number',
      email: 'E-mail address',
      social:
        {
          title: 'Social profiles',
          import: 'Import data from your social profiles',
          attach: 'Attach profile',
          detach: 'Detach profile',
          view: 'View profile data',
        }
    },
  stepTwo:
    {
      title: 'Cover letter',
      description: 'You can write something about you that you think will help the recruiter to pick you for the job.'
    },
  stepThree:
    {
      title: 'Questions',
      startDate: 'When can you start?',
      expectedSalary: 'What is your salary expectation?',
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
      expectedSalary: 'Expected salary',
      acceptTerms: 'I have read and accept the Privacy Policy.'
    },
  salary:
    {
      periodTitle: 'Period',
      period:
        {
          1: 'annually',
          2: 'monthly',
          3: 'hourly',
        },
      amount: 'Expected amount',
      currency: 'Currency',
    }
};
