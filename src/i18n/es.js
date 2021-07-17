export default
{
  localeName: 'Espaniol',
  previewForm: 'Vista previa',
  abortForm: 'Cancelar',
  noteAbort: 'se borrarán todos los datos del formulario.',
  submitting: 'Enviar solicitud',
  submitFailed: 'Envío fallido',
  success: 'Success',
  applicationWasSent: 'La solicitud ha sido enviada.',
  goHome: 'Ir a la página de inicio',
  fileNotFound: 'Página no encontrada',
  Imprint: 'Impresionante',
  Privacy: 'Protección de datos',
  files:
    {
      photoRejected: 'La foto tiene más de 9 MB',
      attachmentsRejected: 'Los archivos de {count} fueron rechazados porque son mayores de 9 MB en total.'
    },
  buttons:
    {
      finish: 'Salir',
      continue: 'Siguiente',
      back: 'Volver',
      send: 'Enviar',
      cancel: 'Cancelar',
      close: 'Cerrar',
      remove: 'Borrar',
      preview: 'Vista previa',
      contact: 'Contacte con'
    },
  rules:
    {
      required: 'Campo obligatorio',
      phoneOrEmail: 'Indique un número de teléfono o una dirección de correo electrónico',
      invalidDate: 'fecha no válida'
    },
  stepOne:
    {
      title: 'Datos personales',
      salutation: 'Saludo',
      salutationTypes:
        {
          Mister: 'Sr.',
          Missis: 'Sra.',
        },
      firstName: 'Nombre de pila',
      lastName: 'Nombre',
      street: 'Calle',
      houseNumber: 'Número de casa',
      zipCode: 'PLZ',
      city: 'Ubicación',
      country: 'País',
      phone: 'Teléfono',
      email: 'E-Mail',
      social:
        {
          title: 'Perfiles sociales',
          import: 'Importar datos de perfiles sociales',
        }
    },
  stepTwo:
    {
      title: 'Carta de presentación',
      description: 'Puedes escribir algo sobre ti que creas que ayudará al reclutador a seleccionarte para el trabajo.'
    },
  stepThree:
    {
      title: 'Preguntas',
      startDate: '¿Fecha de inicio más temprana?',
      immediately: 'inmediatamente',
      expectedSalary: '¿Cuál es su expectativa salarial?',
    },
  stepFour:
    {
      title: 'Anexos',
      help: 'Adjuntar imágenes o documentos PDF, DOC(x), XLS(x) - hasta 9 MB',
      photo: 'Puedes subir una foto de la solicitud',
      status: 'Status: {status}',
    },
  stepFive:
    {
      title: 'Protección de datos',
      ccTitle: 'Copia de mis datos',
      carbonCopy: 'Envíame una copia de mis archivos a mi correo electrónico.',
      privacyPolicy: 'Nota sobre la protección de datos: Tras el envío de los datos introducidos, éstos serán procesados en nuestro servidor y enviados por correo electrónico a la persona responsable del procesamiento. Le aseguramos el máximo nivel de confidencialidad y el cumplimiento de todas las normas legales. Puede encontrar más información sobre el tratamiento de datos en nuestra <a href="{0}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation(); return true;">Política de privacidad</a>.' // the link won't work without the onClick handler
    },
  dropZone:
    {
      dragDrop: 'Sie können Dokumente hier ablegen - oder ',
      clickHere: 'klicken Sie hier',
      chooseManually: ', um Dateien manuell zu wählen.'
    },
  preview:
    {
      title: 'Vista previa',
      email: 'E-Mail',
      phone: 'Tel.',
      contact: 'Contacte con',
      address: 'Dirección',
      canStart: 'fecha de entrada más temprana',
      expectedSalary: 'Requisitos salariales',
    },
  salary:
    {
      periodTitle: 'Periodo',
      period:
        {
          1: 'Año',
          2: 'Mes',
          3: 'Hora',
        },
      amount: 'Requisitos salariales',
      currency: 'Moneda',
    },
  label: {
    username: 'Nombre de usuario',
    password: 'Contraseña',
    subject: 'Asunto'
  },
  copyright: '\xA9 {year} YAWIK',
  login: 'Entrar en el sistema',
  pageTitleApplication: 'Applicazione a: {title}',
  speculativeApplication: 'Solicitud no solicitada',
  yourLogo: '¡Su logotipo podría estar aquí!'
};
