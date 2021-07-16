export default
{
  localeName: 'Italian',
  previewForm: 'Anteprima',
  abortForm: 'Cancella',
  noteAbort: 'tutti i dati del modulo saranno cancellati.',
  submitting: 'Inviare l\'applicazione',
  submitFailed: 'Spedizione fallita',
  success: 'Success',
  applicationWasSent: 'La domanda è stata inviata.',
  goHome: 'Vai alla homepage',
  fileNotFound: 'Seite nicht gefunden',
  Imprint: 'Impronta',
  Privacy: 'Protezione di dati',
  files:
    {
      photoRejected: 'La foto è più grande di 9 MB',
      attachmentsRejected: 'I file {count} sono stati rifiutati perché sono più grandi di 9 MB in totale.'
    },
  buttons:
    {
      finish: 'Uscita',
      continue: 'Ulteriori',
      back: 'Indietro',
      send: 'Invia',
      cancel: 'Cancella',
      close: 'Chiudere',
      remove: 'Cancellare',
      preview: 'Anteprima',
      contact: 'Contatta'
    },
  rules:
    {
      required: 'Pflichtfeld',
      phoneOrEmail: 'Bitte geben sie entweder eine Telefonnummer oder eine E-Mail Adresse an',
      invalidDate: 'ungültiges Datum'
    },
  stepOne:
    {
      title: 'Dettagli personali',
      salutation: 'Anrede',
      salutationTypes:
        {
          Mister: 'Signor',
          Missis: 'Signora',
        },
      firstName: 'Nome e cognome',
      lastName: 'Nome',
      street: 'Via',
      houseNumber: 'Numero civico',
      zipCode: 'PLZ',
      city: 'Posizione',
      country: 'Paese',
      phone: 'Telefono',
      email: 'E-Mail',
      social:
        {
          title: 'Profili sociali',
          import: 'Importa i dati dai profili sociali',
        }
    },
  stepTwo:
    {
      title: 'Lettera di presentazione',
      description: 'Puoi scrivere qualcosa su di te che pensi possa aiutare il selezionatore a sceglierti per il lavoro.'
    },
  stepThree:
    {
      title: 'Domande',
      startDate: 'La prima data di inizio?',
      immediately: 'immediatamente',
      expectedSalary: 'Qual è la loro aspettativa di stipendio?',
    },
  stepFour:
    {
      title: 'Allegati',
      help: 'Allegare immagini o documenti PDF, DOC(x), XLS(x) - fino a 9 MB',
      photo: 'Puoi caricare una foto dell\'applicazione',
      status: 'Status: {status}',
    },
  stepFive:
    {
      title: 'Protezione dei dati',
      ccTitle: 'Copia dei miei dati',
      carbonCopy: 'Mandami una copia dei miei file alla mia e-mail.',
      privacyPolicy: 'Nota sulla protezione dei dati: dopo l\'invio dei dati inseriti, questi saranno trattati sul nostro server e inoltrati in una e-mail alla persona responsabile del trattamento. Vi assicuriamo il più alto livello di confidenzialità e il rispetto di tutti i regolamenti legali. Ulteriori informazioni sul trattamento dei dati possono essere trovate sul nostro <a href="{0}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation(); return true;">Privacy Policy</a>.' // the link won't work without the onClick handler
    },
  dropZone:
    {
      dragDrop: 'Sie können Dokumente hier ablegen - oder ',
      clickHere: 'klicken Sie hier',
      chooseManually: ', um Dateien manuell zu wählen.'
    },
  preview:
    {
      title: 'Anteprima',
      email: 'E-Mail',
      phone: 'Tel.',
      contact: 'Contatta',
      address: 'Indirizzo',
      canStart: 'prima data di ingresso',
      expectedSalary: 'Requisito salariale',
    },
  salary:
    {
      periodTitle: 'Periodo',
      period:
        {
          1: 'Anno',
          2: 'Mese',
          3: 'Ora',
        },
      amount: 'Requisito salariale',
      currency: 'Valuta',
    },
  label: {
    username: 'Nome utente',
    password: 'Password',
    subject: 'Oggetto'
  },
  copyright: '\xA9 {year} YAWIK',
  login: 'Anmelden',
  pageTitleApplication: 'Applicazione a: {title}',
  speculativeApplication: 'Applicazione non richiesta',
  yourLogo: 'Il tuo logo potrebbe essere qui!'
};
