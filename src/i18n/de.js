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
      close: 'Schließen',
      remove: 'Löschen',
      preview: 'Preview'
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
          {
            value: 1,
            label: 'Herr',
          },
          {
            value: 2,
            label: 'Frau',
          },
        ],
      firstName: 'Vorname',
      lastName: 'Name',
      street: 'Strasse',
      houseNumber: 'Hausnummer',
      zipCode: 'PLZ',
      city: 'Ort',
      country: 'Land',
      phone: 'Telefon',
      email: 'E-Mail',
      social:
        {
          title: 'Soziale Profile',
          import: 'Daten aus sozialen Profilen importieren',
          attach: 'Profil hinzufügen',
          detach: 'Profil entfernen',
          view: 'Profil ansehen',
        }
    },
  stepTwo:
    {
      title: 'Anschreiben',
      description: 'Sie können etwas über sich schreiben, von dem Sie glauben, dass es dem Personalverantwortlichen helfen wird, Sie für die Stelle auszuwählen.'
    },
  stepThree:
    {
      title: 'Fragen',
      startDate: 'frühester Eintrittstermin?',
      immediately: 'sofort',
      expectedSalary: 'Wie hoch ist ihre Gehaltsvorstellung?',
    },
  stepFour:
    {
      title: 'Anhänge',
      help: 'Bilder oder PDF-, DOC(x)-, XLS(x)-Dokumente anhängen - bis zu 2 MB',
      photo: 'Sie können ein Bewerbungsfoto hochladen',
      status: 'Status: {status}',
    },
  stepFive:
    {
      title: 'Datenschutz',
      ccTitle: 'CC',
      carbonCopy: 'Senden sie mir eine Kopie meiner Datein an meine E-Mail.',
      privacyPolicy: 'Ich habe die <a href="https://yawik.org/demo/en/content/applications-privacy-policy" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation(); return true;">Datenschutzbestimmungen</a> gelesen und akzeptiere sie.', // the link won't work without the onClick handler
    },
  dropZone:
    {
      dragDrop: 'Sie können Dokumente hier ablegen - oder ',
      clickHere: 'klicken Sie hier',
      chooseManually: ', um Dateien manuell zu wählen.'
    },
  preview:
    {
      title: 'Voransicht Bewerbung',
      email: 'E-Mail',
      phone: 'Tel.',
      contact: 'Kontakt',
      address: 'Anschrift',
      canStart: 'frühester Eintrittstermin.',
      expectedSalary: 'Gehaltsvorstellung',
      acceptTerms: 'Ich habe die Datenschutzbestimmungen gelesen und akzeptiere sie.'
    },
  salary:
    {
      periodTitle: 'Zeitraum',
      period:
        {
          1: 'Jahr',
          2: 'Monat',
          3: 'Stunde',
        },
      amount: 'Gehaltsvorstellung',
      currency: 'Währung',
    }
};
