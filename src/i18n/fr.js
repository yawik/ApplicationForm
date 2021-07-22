export default
{
  localeName: 'French',
  previewForm: 'Aperçu',
  abortForm: 'Annuler',
  noteAbort: 'toutes les données du formulaire seront supprimées.',
  submitting: 'Envoyez votre candidature.',
  submitFailed: 'L\'envoi a échoué',
  success: 'Succès',
  applicationWasSent: 'La demande a été envoyée.',
  goHome: 'Allez à la page d\'accueil',
  fileNotFound: 'Page non trouvée',
  Imprint: 'Mentions légales',
  Privacy: 'Protection des données',
  files:
    {
      photoRejected: 'La photo est plus grande que 9 MB',
      attachmentsRejected: '{count} Dateien wurden abgelehnt, weil sie insgesamt größer als 9 MB sind'
    },
  buttons:
    {
      finish: 'Sortie',
      continue: 'Suivant',
      back: 'Retour',
      send: 'Soumettre',
      cancel: 'Abbrechen',
      close: 'Schließen',
      remove: 'Supprimer',
      preview: 'Aperçu',
      contact: 'Contact'
    },
  rules:
    {
      required: 'Champ obligatoire',
      phoneOrEmail: 'Veuillez indiquer un numéro de téléphone ou une adresse électronique.',
      invalidDate: 'date non valable'
    },
  stepOne:
    {
      title: 'Données personnelles',
      salutation: 'Salutation',
      salutationTypes:
        {
          Mister: 'M',
          Missis: 'Mme',
        },
      firstName: 'Prénom',
      lastName: 'Nom',
      street: 'Rue',
      houseNumber: 'Numéro de maison',
      zipCode: 'PLZ',
      city: 'Localisation',
      country: 'Pays',
      phone: 'Téléphone',
      email: 'E-Mail',
      social:
        {
          title: 'Soziale Profile',
          import: 'Importer des données à partir de profils sociaux',
        }
    },
  stepTwo:
    {
      title: 'Lettre de motivation',
      description: 'Vous pouvez écrire quelque chose sur vous-même qui, selon vous, aidera le recruteur à vous sélectionner pour le poste.'
    },
  stepThree:
    {
      title: 'Questions',
      startDate: 'Date de début au plus tôt?',
      immediately: 'immediatement',
      expectedSalary: 'Quelles sont leurs attentes en matière de salaire?',
    },
  stepFour:
    {
      title: 'Annexes',
      help: 'Joignez des images ou des documents PDF, DOC(x), XLS(x) - jusqu\'à 9 MB',
      photo: 'Vous pouvez télécharger une photo de candidature',
      status: 'Statut: {status}',
    },
  stepFive:
    {
      title: 'Protection des données',
      ccTitle: 'Copie des données',
      carbonCopy: 'Envoyez-moi une copie de mes fichiers à mon adresse électronique.',
      privacyPolicy: 'Note sur la protection des données : Après l\'envoi des données saisies, celles-ci seront traitées sur notre serveur et transmises dans un courriel à la personne responsable du traitement. Nous vous garantissons le plus haut niveau de confidentialité et le respect de toutes les réglementations légales. De plus amples informations sur le traitement des données sont disponibles sur notre <a href="{0}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation() ; return true ;">Politique de confidentialité</a>.' // the link won't work without the onClick handler
    },
  dropZone:
    {
      dragDrop: 'Sie können Dokumente hier ablegen - oder ',
      clickHere: 'klicken Sie hier',
      chooseManually: ', um Dateien manuell zu wählen.'
    },
  preview:
    {
      title: 'Aperçu',
      email: 'E-Mail',
      phone: 'Tel.',
      contact: 'Contact',
      address: 'Adresse',
      canStart: 'date de début la plus proche',
      expectedSalary: 'Exigence salariale',
    },
  salary:
    {
      periodTitle: 'Période',
      period:
        {
          1: 'Année',
          2: 'Mois',
          3: 'Heure',
        },
      amount: 'Exigence salariale',
      currency: 'Monnaie',
    },
  label: {
    username: 'Nom d\'utilisateur',
    password: 'Mot de passe',
    subject: 'Sujet',
    company: 'Nom de la société',
  },
  copyright: '\xA9 {year} YAWIK',
  login: 'Connectez-vous',
  pageTitleApplication: 'Bewerbung auf: {title}',
  speculativeApplication: 'Demande non sollicitée',
  yourLogo: 'Votre logo pourrait être ici!',
  logout: 'Déconnexion',
  sidebar:
    {
      changeLogo: 'Changer le logo',
      changeOrg: 'Changer le nom de la société'
    },
};
