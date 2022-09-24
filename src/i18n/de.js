export default
{
  localeName: 'Deutsch',
  previewForm: 'Vorschau',
  abortForm: 'Abbrechen',
  noteAbort: 'alle Formular Daten werden gelöscht.',
  submitting: 'Bewerbung absenden',
  submitFailed: 'Versand fehlgeschlagen',
  success: 'Success',
  applicationWasSent: 'Bewerbung wurde versendet.',
  goHome: 'Gehe zur Homepage',
  fileNotFound: 'Seite nicht gefunden',
  Imprint: 'Impressum',
  Privacy: 'Datenschutz',
  files:
    {
      photoRejected: 'Das Foto ist größer als 9 MB',
      attachmentsRejected: '{count} Dateien wurden abgelehnt, weil sie insgesamt größer als 9 MB sind'
    },
  buttons:
    {
      finish: 'Beenden',
      continue: 'Weiter',
      back: 'Zurück',
      send: 'Absenden',
      cancel: 'Abbrechen',
      close: 'Schließen',
      remove: 'Löschen',
      preview: 'Vorschau',
      contact: 'Kontakt'
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
        {
          Mister: 'Herr',
          Missis: 'Frau',
        },
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
      help: 'Bilder oder PDF-, DOC(x)-, XLS(x)-Dokumente anhängen - bis zu 9 MB',
      photo: 'Sie können ein Bewerbungsfoto hochladen',
      status: 'Status: {status}',
    },
  stepFive:
    {
      title: 'Datenschutz',
      ccTitle: 'Kopie meiner Daten',
      carbonCopy: 'Senden sie mir eine Kopie meiner Datein an meine E-Mail.',
      privacyPolicy: 'Hinweis zum Datenschutz: Nach dem Absenden der eingegebenen Daten werden diese auf unserem Server verarbeitet und in einer Mail an die für die Bearbeitung zuständige Person weitergeleitet. Wir sichern Ihnen dabei ein Höchstmaß an Vertraulichkeit zu und versichern die Einhaltung aller gesetzlichen Vorschriften. Weitere Informationen zur Datenverarbeitung erhalten Sie auf unserer <a href="{0}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation(); return true;">Datenschutzbestimmungen</a>.' // the link won't work without the onClick handler
    },
  dropZone:
    {
      dragDrop: 'Sie können Dokumente hier ablegen - oder ',
      clickHere: 'klicken Sie hier',
      chooseManually: ', um Dateien manuell zu wählen.'
    },
  preview:
    {
      title: 'Vorschau',
      email: 'E-Mail',
      phone: 'Tel.',
      contact: 'Kontakt',
      address: 'Anschrift',
      canStart: 'frühester Eintrittstermin',
      expectedSalary: 'Gehaltsvorstellung',
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
    },
  label: {
    username: 'Benutzername',
    password: 'Passwort',
    subject: 'Betreff',
    company: 'Firmenname',
  },
  copyright: '\xA9 {year} YAWIK',
  login: 'Anmelden',
  pageTitleApplication: 'Bewerbung auf: {title}',
  speculativeApplication: 'Initiativbewerbung',
  yourLogo: 'Hier könnte ihr Logo stehen!',
  logout: 'Abmelden',
  sidebar:
    {
      changeLogo: 'Logo ändern',
      changeOrg: 'Firmennamen ändern'
    },
};
