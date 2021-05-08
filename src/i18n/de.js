export default
{
  localeName: 'Deutsch',
  previewForm: 'Voransicht der Bewerbung',
  abortForm: 'Bewerbung abbrechen',
  submitting: 'Bewerbung absenden',
  submitFailed: 'Versand fehlgeschlagen',
  success: 'Success',
  applicationWasSent: 'Bewerbung wurde versendet.',
  goHome: 'Gehe zur Homepage',
  fileNotFound: 'Seite nicht gefunden',
  buttons:
    {
      finish: 'Beenden',
      continue: 'Weiter',
      back: 'Zurück',
      send: 'Absenden',
      cancel: 'Abbrechen',
    },
  rules:
    {
      required: 'Pflichtfeld',
      phoneOrEmail: 'Bitte geben sie entweder eine Telefonnummer oder eine E-Mail Adresse an',
      invalidDate: 'ungültiges Datum'
    },
  stepOne:
    {
      title: 'Persönliche Angaben',
      salutation: 'Anrede',
      salutationTypes:
      [
        'Herr',
        'Frau',
        'Froilain'
      ],
      firstName: 'Vorname',
      lastName: 'Name',
      street: 'Strasse',
      houseNumber: 'Hausnummer',
      zipCode: 'PLZ',
      city: 'Ort',
      country: 'Land',
      phone: 'Telefon',
      email: 'E-Mail'
    },
  stepTwo:
    {
      title: 'Anschreiben',
      description: 'You can write something about you that you think will help the recruiter to pick you for the job.'
    },
  stepThree:
    {
      title: 'Soziale Profile',
      import: 'Daten aus sozialen Profilen importieren',
      attach: 'Profil hinzufügen',
      detach: 'Profil entfernen',
      view: 'Profil ansehen',
    },
  stepFour:
    {
      title: 'Anhänge',
      help: 'Fügen sie Bilder oder PDF Dokumente der Bewerbung hinzu - bis zu 2 MB (Drag & Drop ist möglich)',
      status: 'Status: {status}',
    },
  stepFive:
    {
      title: 'Datenschutzbestimmung',
      startDate: 'frühester Eintrittstermin?',
      ccTitle: 'CC',
      carbonCopy: 'Senden sie mir eine Kopie meiner Datein an meine E-Mail.',
      privacyPolicy: 'Ich habe die <a href="https://yawik.org/demo/en/content/applications-privacy-policy" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation(); return true;">Datenschutzbestimmungen</a> gelesen und akzeptiere sie.', // the link won't work without the onClick handler
    }
};
