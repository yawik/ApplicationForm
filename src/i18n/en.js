export default
{
  localeName: 'English',
  previewForm: 'Preview',
  abortForm: 'Abort',
  noteAbort: 'all form data will be deleted.',
  submitting: 'Submit your application',
  submitFailed: 'Submit failed',
  success: 'Success',
  applicationWasSent: 'Application was received.',
  goHome: 'Go to homepage',
  fileNotFound: 'Page not found',
  Imprint: 'Imprint',
  Privacy: 'Privacy',
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
      preview: 'Preview',
      contact: 'Contact'
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
        {
          Mister: 'Mr.',
          Missis: 'Mrs.'
        },
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
      immediately: 'Immediately',
      expectedSalary: 'What is your salary expectation?',
    },
  stepFour:
    {
      title: 'Attachments',
      help: 'Attach images or PDF, DOC(x), XLS(x) documents - up to 9 MB',
      photo: 'You can provide a photo of yourself',
      status: 'Status: {status}',
    },
  stepFive:
    {
      title: 'Privacy policy',
      ccTitle: 'Carbon copy',
      carbonCopy: 'Send me a copy of this application by e-mail.',
      privacyPolicy: 'Note on data protection: After sending the entered data, it will be processed on our server and forwarded in an email to the person responsible for processing. We assure you of the highest level of confidentiality and compliance with all legal requirements. For more information on data processing, please refer to our <a href="{0}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation(); return true;">Privacy policy</a>.' // the link won't work without the onClick handler
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
      contact: 'Contact',
      address: 'Address',
      canStart: 'Can start on',
      expectedSalary: 'Expected salary',
    },
  salary:
    {
      periodTitle: 'Period',
      period:
        {
          1: 'Year',
          2: 'Month',
          3: 'Hour',
        },
      amount: 'Expected amount',
      currency: 'Currency',
    },
  label: {
    username: 'Username',
    password: 'Password',
    subject: 'Subject',
    company: 'Organization name',
  },
  copyright: '\xA9 {year} YAWIK',
  login: 'Login',
  pageTitleApplication: 'Apply for: {title}',
  speculativeApplication: 'Speculative Application',
  yourLogo: 'your logo could be here!',
  logout: 'Logout',
  sidebar:
    {
      changeLogo: 'Change logo',
      changeOrg: 'Change company'
    },
};
