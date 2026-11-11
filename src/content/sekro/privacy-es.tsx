import { A, B, H3, Mail, UL, type LegalSection } from "@/components/site/LegalPage";
import { SEKRO_FIGURES, SEKRO_LEGAL, SEKRO_PATHS } from "@/lib/sekro-legal";

// Spanish version of privacy-en.tsx. Keep both in step: same sections, same facts, same TODOs.
// Neutral Spanish with "tú" (as in the app, valid for es-ES and es-419).
// TODO(legal): have the Spanish translation reviewed together with the English text.

export const privacyIntro = (
  <>
    <p>
      Sekro te permite enviar fotos, vídeos, audios, textos y mensajes cifrados de extremo a extremo, ocultos tras
      imágenes de aspecto normal. Esta política explica qué datos recogemos cuando usas Sekro, qué no podemos ver y qué
      opciones tienes.
    </p>
    <p>
      En resumen: no podemos leer tus Sekros ni tus mensajes. Guardamos los datos de tu cuenta y la información de
      entrega necesaria para que el servicio funcione, y no mostramos anuncios, no te rastreamos ni vendemos tus datos.
    </p>
  </>
);

export const privacySections: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Quiénes somos",
    body: (
      <>
        <p>
          Sekro es un servicio de <B>{SEKRO_LEGAL.company}</B>, sociedad registrada en Inglaterra y Gales (número de
          sociedad {SEKRO_LEGAL.companyNumber}), con domicilio social en {SEKRO_LEGAL.registeredOffice}. Somos el
          responsable del tratamiento de los datos personales descritos en esta política.
        </p>
        <p>
          Preguntas sobre privacidad o solicitudes sobre tus datos: <Mail />.
        </p>
        {/* TODO(legal): ICO registration number and EU representative (Art. 27), as in privacy-en.tsx. */}
      </>
    ),
  },
  {
    id: "what-we-cannot-see",
    title: "Lo que no podemos ver",
    body: (
      <>
        <p>Un Sekro puede ocultar una de estas cosas, la que tú elijas:</p>
        <UL>
          <li>
            una <B>foto</B> o un <B>texto</B> (de hasta 5000 caracteres): viaja dentro de la propia imagen, así que no se
            sube nada más;
          </li>
          <li>
            un <B>vídeo</B> (de hasta 7 minutos) o un <B>audio</B> (de hasta 10 minutos): se cifra en tu dispositivo y se
            guarda en nuestros servidores como un archivo cifrado; la imagen solo contiene un enlace cifrado a ese
            archivo y la clave para abrirlo.
          </li>
        </UL>
        <p>
          Una foto, un vídeo o un audio también pueden llevar una <B>nota oculta</B> opcional (de hasta 5000 caracteres),
          cifrada junto con ellos.
        </p>
        <p>
          Todo esto, y el texto de tus mensajes del chat, se <B>cifra de extremo a extremo</B> en tu dispositivo antes de
          llegar a nosotros. Solo pueden abrir un Sekro las personas para quienes se creó y tú. No tenemos las claves, así
          que no podemos descifrarlo ni dárselo a nadie. El contenido revelado solo se muestra dentro de Sekro, y la app
          no permite guardarlo, copiarlo ni compartirlo; solo se puede guardar o compartir la imagen.
        </p>
        <p>
          Tus claves privadas nunca salen de tu dispositivo sin protección. Si haces una copia de seguridad en tu cuenta,
          esa copia va cifrada con tu frase de contraseña de Sekro, que nunca sale de tu dispositivo. No podemos abrirla.
        </p>
        <p>
          <B>La imagen de portada no está cifrada.</B> Un Sekro es un archivo de imagen normal (PNG) con el contenido
          cifrado oculto dentro. La imagen que eliges como portada la puede ver cualquiera que tenga el archivo, y
          nosotros guardamos ese archivo para entregarlo. No miramos las portadas, pero elige portadas que no te importe
          que vean otras personas.
        </p>
        <H3>La única excepción: las denuncias</H3>
        <p>
          Si denuncias un mensaje o un Sekro que has recibido, <B>tu</B> dispositivo, que ya puede leerlo, lo descifra y
          nos envía una copia para que la revisemos. Consulta «Denuncias y moderación» más abajo. Ningún otro contenido
          cifrado es legible para nosotros.
        </p>
      </>
    ),
  },
  {
    id: "what-we-collect",
    title: "Qué datos recogemos",
    body: (
      <>
        <H3>Datos de la cuenta</H3>
        <UL>
          <li>Tu nombre de usuario, tu correo electrónico y si lo has verificado.</li>
          <li>Un hash de tu contraseña (con Argon2id). Nunca guardamos la contraseña en sí.</li>
          <li>
            El idioma de la app (para que nuestros correos lleguen en tu idioma y un teléfono nuevo pueda usarlo), y
            cuándo creaste tu cuenta y aceptaste los Términos.
          </li>
          <li>
            Un nombre visible y una foto de perfil, si los añades (Perfil › Cuenta). Tu nombre visible se muestra junto a
            tu nombre de usuario a quienes pueden encontrarte; tu foto de perfil, solo a tus contactos.
          </li>
          <li>
            Códigos de un solo uso, guardados como hash, para verificar tu correo y restablecer tu contraseña (caducan en
            minutos).
          </li>
        </UL>

        <H3>Claves de cifrado</H3>
        <UL>
          <li>
            Tus claves <B>públicas</B>, para que tus contactos puedan cifrar para ti y comprobar tus firmas. Si
            restableces tus claves, conservamos las públicas antiguas para poder seguir comprobando firmas antiguas.
          </li>
          <li>
            Tu <B>copia de seguridad cifrada de las claves</B> y los parámetros usados para cifrarla. No podemos
            descifrarla.
          </li>
          <li>
            Una lista cifrada de las claves de quienes te han enviado Sekros (para que sigan abriéndose en tus otros
            dispositivos). Está sellada para tu cuenta y no podemos leerla.
          </li>
        </UL>

        <H3>Contactos</H3>
        <UL>
          <li>
            Tus contactos, las invitaciones que envías y recibes (y si se aceptaron) y a quién has bloqueado.
          </li>
          <li>
            Otros usuarios verificados pueden encontrarte buscando el principio de tu nombre de usuario. Tu correo nunca
            se muestra ni se puede buscar.
          </li>
        </UL>

        <H3>Mensajes y Sekros</H3>
        <UL>
          <li>
            Metadatos de los mensajes: quién lo envía, para quién es, el tipo de mensaje, cuándo se envió, se entregó y se
            leyó, y qué versiones de clave se usaron. El texto de los mensajes solo se guarda cifrado.
          </li>
          <li>
            Los archivos de imagen de los Sekros que envías o guardas en tu Galería (un Sekro de foto o de texto va
            entero dentro de su imagen), y su tamaño y suma de comprobación. Los detalles de tu Galería (por ejemplo, para
            quién era un Sekro y de qué tipo es) van cifrados para tu cuenta.
          </li>
          <li>
            Los archivos de vídeo y audio cifrados, su tamaño y si cada uno es un vídeo o un audio (para aplicar el límite
            de tamaño). No podemos reproducirlos.
          </li>
          <li>
            Avisos de captura y grabación de pantalla: si alguien hace una captura o graba su pantalla mientras tiene
            revelado un Sekro que le enviaste (en un chat o abierto desde un archivo), su app nos lo comunica. Solo
            guardamos el tipo de aviso (captura o grabación), el identificador del mensaje al que se refiere (ninguno si el
            Sekro se abrió desde un archivo) y la hora, como una entrada en el chat que ven ambas personas. La
            captura o la grabación en sí nunca nos llega.
          </li>
          <li>
            Presencia: si estás en línea y cuándo te conectaste por última vez, visible solo para tus contactos. El
            indicador de «escribiendo» se transmite en directo y no se guarda.
          </li>
          <li>Notificaciones sobre invitaciones de contacto.</li>
        </UL>

        <H3>Dispositivos y notificaciones push</H3>
        <UL>
          <li>
            Por cada instalación de la app: un identificador aleatorio de instalación, el nombre y la plataforma del
            dispositivo, cuándo estuvo activo por última vez y el token push que Apple nos da para enviar notificaciones.
          </li>
          <li>Registros de las sesiones iniciadas, para que sigas conectado y puedas cerrar sesión en todos los dispositivos.</li>
        </UL>

        <H3>Direcciones IP y registros de seguridad</H3>
        <UL>
          <li>
            Tu dirección IP llega a nuestros servidores cuando la app se conecta. Solo la guardamos para limitar los
            intentos de restablecer la contraseña, y esos registros se borran solos en unas dos horas.
          </li>
          <li>
            Nuestros servidores guardan registros técnicos (por ejemplo, qué función se usó, el resultado y el
            identificador de tu cuenta) para mantener Sekro seguro y en funcionamiento. Nunca contienen contraseñas,
            códigos, claves, contenido de mensajes ni imágenes.
          </li>
        </UL>
        {/* TODO(legal): ALB / CloudFront access logs, as in privacy-en.tsx. */}

        <H3>En tu dispositivo</H3>
        <p>
          Tus claves desbloqueadas, una copia local cifrada de tus chats y tu Galería, y tus ajustes se quedan en tu
          teléfono. No tenemos acceso a ellos. El icono de la app que elijas (Perfil › Apariencia) lo guarda iOS en tu
          teléfono y nunca nos llega. Tu elección de idioma se guarda en tu teléfono y también en tu cuenta, como se
          indica arriba; las notificaciones push se muestran en el idioma de tu teléfono.
        </p>
      </>
    ),
  },
  {
    id: "permissions",
    title: "Micrófono, fotos y otros permisos del teléfono",
    body: (
      <>
        <UL>
          <li>
            <B>Micrófono</B>: solo se usa mientras grabas audio para un Sekro (Crear › Audio › Grabar audio, o el botón
            del micrófono en un chat). La grabación se comprime y se cifra en tu teléfono antes de subirse, así que solo
            recibimos el archivo cifrado y nunca podemos escucharla. Sekro no usa el micrófono en ningún otro momento.
          </li>
          <li>
            <B>Fototeca</B>: para elegir una foto, un vídeo, una imagen de portada o una foto de perfil, Sekro usa el
            selector de fotos del iPhone, que solo le da a la app lo que eliges, no el resto de tu fototeca. Los vídeos
            que eliges se comprimen y se cifran en tu teléfono. Cuando guardas un Sekro en Fotos, iOS te pide permiso solo
            para añadir fotos: Sekro puede añadir la imagen, pero no puede ver tu fototeca.
          </li>
          <li>
            <B>Archivos</B>: un archivo de vídeo o audio que eliges en Archivos solo se lee cuando lo eliges, y se procesa
            en tu teléfono de la misma forma.
          </li>
          <li>
            <B>Notificaciones</B>: Sekro te lo pide la primera vez que envías o recibes una invitación de contacto. Puedes
            desactivarlas en cualquier momento en los Ajustes del iPhone.
          </li>
        </UL>
        <p>
          Sekro no usa tu cámara, tu ubicación ni la agenda de tu teléfono. Puedes cambiar cualquier permiso en los
          Ajustes del iPhone.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "Para qué usamos tus datos y con qué base legal",
    body: (
      <>
        {/* TODO(legal): review the lawful bases, as in privacy-en.tsx. */}
        <UL>
          <li>
            <B>Para prestar Sekro</B> (tu cuenta, tus contactos, la entrega de mensajes y Sekros, la sincronización
            entre dispositivos, las notificaciones push y los correos de la cuenta). Base legal: la ejecución de nuestro
            contrato contigo.
          </li>
          <li>
            <B>Para mantener Sekro seguro</B> (límites de uso, prevención de abusos, revisión de denuncias, suspensión
            de cuentas). Base legal: nuestro interés legítimo en ofrecer un servicio seguro y fiable y, cuando
            corresponda, nuestras obligaciones legales.
          </li>
          <li>
            <B>Para cumplir la ley</B>, por ejemplo al responder a solicitudes legales válidas. Base legal: obligación
            legal.
          </li>
        </UL>
        <p>
          No usamos tus datos para publicidad, no creamos perfiles sobre ti, no usamos herramientas de rastreo ni de
          analítica en la app y no vendemos ni alquilamos tus datos a nadie.
        </p>
        <p>
          Las notificaciones push son genéricas (por ejemplo, «Tienes un mensaje nuevo») y nunca incluyen el contenido
          de los mensajes ni nombres.
        </p>
      </>
    ),
  },
  {
    id: "reports",
    title: "Denuncias y moderación",
    body: (
      <>
        <p>
          Cuando denuncias algo que has recibido, tu dispositivo nos envía lo que reveló: la foto, el vídeo o el audio,
          o el texto (de un Sekro de texto o de un mensaje del chat), junto con la nota oculta que llevara. También envía
          el archivo de imagen del Sekro, el motivo que elegiste, el comentario que añadas, quién lo envió y cuándo, desde
          dónde lo denunciaste (un chat o un Sekro abierto desde un archivo) y tu cuenta. Puedes denunciar a un remitente
          aunque ya lo hayas bloqueado, y también puedes bloquearlo al mismo tiempo.
        </p>
        <p>
          Solo un número reducido de personal autorizado puede revisar las denuncias. Las usamos para decidir si tomamos
          medidas, como suspender o cerrar definitivamente una cuenta. Registramos la decisión y el motivo en la cuenta
          denunciada. Podemos compartir el contenido denunciado con las autoridades cuando la ley lo exija o cuando se
          trate de explotación sexual infantil (consulta los Términos del servicio y nuestras{" "}
          <A href={SEKRO_PATHS.childSafety.es}>Normas de protección infantil</A>).
        </p>
      </>
    ),
  },
  {
    id: "processors",
    title: "Con quién compartimos datos",
    body: (
      <>
        <p>Trabajamos con pocos proveedores, que tratan datos por cuenta nuestra y bajo contrato:</p>
        <UL>
          <li>
            <B>Amazon Web Services</B>: alojamiento de nuestros servidores y almacenamiento de los archivos de Sekro, en
            el Reino Unido (región de Londres).
          </li>
          {/* TODO(legal): MongoDB Atlas region, as in privacy-en.tsx. */}
          <li>
            <B>MongoDB Atlas</B>: nuestra base de datos.
          </li>
          <li>
            <B>Apple</B>: entrega de notificaciones push a tu iPhone.
          </li>
          {/* TODO(legal): confirm the production email provider, as in privacy-en.tsx. */}
          <li>
            <B>Microsoft (Microsoft 365)</B>: envío de los correos de la cuenta, como los códigos de verificación y de
            restablecimiento de contraseña.
          </li>
        </UL>
        <p>
          No compartimos tus datos con nadie más, salvo cuando la ley lo exija (consulta «Autoridades» en los Términos
          del servicio) o en caso de venta o reorganización de nuestra empresa, en cuyo caso esta política seguiría
          aplicándose.
        </p>
        <H3>Transferencias internacionales</H3>
        {/* TODO(legal): confirm the transfer safeguards, as in privacy-en.tsx. */}
        <p>
          Algunos proveedores pueden tratar datos fuera del Reino Unido. En ese caso, nos basamos en las garantías que
          reconoce la ley, como las decisiones de adecuación del Reino Unido o el Acuerdo Internacional de Transferencia
          de Datos (IDTA) o su Anexo.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "Cuánto tiempo guardamos los datos",
    body: (
      <>
        <UL>
          <li>
            <B>Datos de la cuenta, claves y contactos</B>: mientras exista tu cuenta.
          </li>
          <li>
            <B>Mensajes, y Sekros de foto y de texto enviados en un chat</B>: hasta que ambas personas los eliminen. «Eliminar para mí» quita
            un mensaje de tu vista en todos tus dispositivos; la otra persona conserva su copia. Cuando ambas personas lo han
            eliminado, el mensaje y su archivo de Sekro se borran de nuestros servidores. Guardamos un registro breve de
            que se eliminó (su identificador y la hora, sin contenido) durante un máximo de 120 días para que todos tus
            dispositivos también lo quiten.
          </li>
          <li>
            <B>Archivos subidos que nunca se envían ni se guardan</B>: se borran automáticamente a las 24 horas.
          </li>
          <li>
            <B>Elementos de la Galería</B>: se borran cuando los eliminas.
          </li>
          <li>
            <B>Archivos de vídeo y audio cifrados</B>: se borran cuando ya nada hace referencia a ellos (ningún elemento
            de la Galería ni ningún mensaje que alguna de las dos personas conserve), o de inmediato si eliges «Eliminar
            en todas partes» en un Sekro de vídeo o audio que creaste (en la Galería, o en uno que enviaste en un chat).
            Una vez borrado el archivo, ese Sekro deja de funcionar en todas partes, también en las copias guardadas o
            compartidas fuera de la app: muestra «Este vídeo (o audio) ya no está disponible».
          </li>
          <li>
            <B>Sekros de foto y de texto ya enviados</B>: su contenido va dentro de la imagen, así que una copia que
            alguien haya recibido o guardado sigue funcionando dondequiera que esté, y no podemos recuperarla.
          </li>
          <li>
            <B>Denuncias</B>: se conservan mientras están abiertas y se eliminan {SEKRO_FIGURES.reportRetentionDays} días
            (12 meses) después de resolverse. El contenido compartido con una denuncia (lo que mostró el dispositivo de
            quien denuncia y la imagen del Sekro) se elimina con ella y, en cualquier caso, a más tardar{" "}
            {SEKRO_FIGURES.moderationFileDays} días después de que nos llegara.
          </li>
          <li>
            <B>Registros de seguridad</B> (los registros técnicos de nuestros servidores): {SEKRO_FIGURES.serverLogDays}{" "}
            días.
          </li>
          <li>
            <B>Registros de límites de uso (incluidas las direcciones IP)</B>: unas dos horas. Códigos de correo y de
            restablecimiento de contraseña: unos minutos.
          </li>
        </UL>
      </>
    ),
  },
  {
    id: "delete-account",
    title: "Eliminar tu cuenta",
    body: (
      <>
        <p>
          Puedes eliminar tu cuenta desde la app: <B>Perfil › Cuenta › Eliminar cuenta</B>. Te pediremos tu contraseña y
          una confirmación. Es inmediato y no se puede deshacer. Si no puedes usar la app, escribe a <Mail /> desde el
          correo de tu cuenta y lo haremos por ti {SEKRO_LEGAL.emailDeletionDeadline.es}.
        </p>
        <p>
          Borramos de inmediato: los datos de tu cuenta (nombre de usuario, correo, hash de la contraseña, nombre visible,
          foto de perfil), tus claves públicas, la copia de seguridad de tus claves y las claves de remitentes guardadas,
          tus contactos, invitaciones y bloqueos, tus dispositivos y tokens push, tus notificaciones, tu Galería y sus
          archivos, y los archivos de vídeo y audio que solo usabas tú. Se cierra la sesión en todos tus dispositivos, y
          la app borra de ellos tus claves y mensajes.
        </p>
        <p>Algunas cosas se conservan:</p>
        <UL>
          <li>
            Los mensajes y Sekros de una conversación que la otra persona no ha eliminado siguen disponibles para ella,
            también en nuestros servidores, hasta que los elimine. Las copias en sus dispositivos y los archivos de Sekro
            compartidos fuera de la app quedan fuera de nuestro alcance.
          </li>
          <li>
            Las denuncias sobre ti o hechas por ti se conservan para la moderación durante el plazo indicado arriba, con
            tu nombre de usuario.
          </li>
          <li>
            Los registros de tus sesiones cerradas (un identificador de cuenta, sin datos personales) caducan en un plazo
            de {SEKRO_FIGURES.sessionRecordDays} días. Nos permiten indicar a tus otros dispositivos que borren tus datos.
          </li>
          <li>
            Los registros de seguridad se guardan durante el plazo indicado arriba, y conservamos lo que la ley nos obligue
            a guardar.
          </li>
        </UL>
        <p>
          También puedes cerrar sesión en Sekro en tu dispositivo cuando quieras. Al cerrar sesión se eliminan tus
          claves y tu historial de chats local de ese dispositivo.
        </p>
        <p>
          Instrucciones paso a paso, y cómo eliminar mensajes y Sekros concretos:{" "}
          <A href={SEKRO_PATHS.deleteAccount.es}>Eliminar tu cuenta de Sekro</A>.
        </p>
      </>
    ),
  },
  {
    id: "rights",
    title: "Tus derechos",
    body: (
      <>
        <p>
          Según la normativa de protección de datos del Reino Unido (el UK GDPR y la Data Protection Act 2018), tienes
          derecho a:
        </p>
        <UL>
          <li>obtener una copia de los datos personales que tenemos sobre ti (acceso);</li>
          <li>corregir los datos inexactos;</li>
          <li>
            que se borren tus datos (consulta <A href={SEKRO_PATHS.deleteAccount.es}>Eliminar tu cuenta de Sekro</A>);
          </li>
          <li>recibir tus datos en un formato portable;</li>
          <li>oponerte al uso de tus datos o pedirnos que lo limitemos.</li>
        </UL>
        <p>
          Para ejercer cualquiera de estos derechos, escribe a <Mail />. Puede que te pidamos que confirmes la solicitud
          desde el correo de tu cuenta. Te responderemos en el plazo de un mes, sin coste. Como el contenido de tus Sekros
          y mensajes está cifrado, no podemos incluirlo en la copia de tus datos; está en tus dispositivos.
        </p>
        <p>
          Si no estás conforme con cómo tratamos tus datos, cuéntanoslo primero. También puedes presentar una
          reclamación ante la autoridad de protección de datos del Reino Unido, la Information Commissioner's Office
          (ICO): <A href="https://ico.org.uk/make-a-complaint/">ico.org.uk</A>.
        </p>
        <H3>Si vives en la Unión Europea o en Latinoamérica</H3>
        {/* TODO(legal): review the EU and Latin America wording, as in privacy-en.tsx. */}
        <p>
          Si estás en la Unión Europea, tienes los mismos derechos según el RGPD y también puedes reclamar ante la
          autoridad de protección de datos de tu país (en España, la Agencia Española de Protección de Datos). Muchos
          países de Latinoamérica te reconocen derechos similares, a menudo llamados derechos ARCO (acceso,
          rectificación, cancelación y oposición). Escríbenos a la misma dirección y los atenderemos; también puedes
          dirigirte a la autoridad de protección de datos de tu país.
        </p>
      </>
    ),
  },
  {
    id: "age",
    title: "Edad mínima",
    body: (
      <p>
        Sekro es solo para personas de <B>18 años o más</B>. No recogemos a sabiendas datos de menores. Si crees que
        alguien menor de 18 años usa Sekro, escríbenos y cerraremos la cuenta.
      </p>
    ),
  },
  {
    id: "security",
    title: "Seguridad",
    body: (
      <p>
        El contenido se cifra en tu dispositivo con criptografía moderna y estándar (P-256, AES-256-GCM), y las
        conexiones con nuestros servidores van cifradas. Las contraseñas se guardan como hash con Argon2id y limitamos al
        mínimo el acceso a nuestros sistemas. Ningún sistema es totalmente seguro, así que usa una contraseña y una frase
        de contraseña robustas y mantén tu teléfono bloqueado.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Cambios en esta política",
    body: (
      <p>
        Podemos actualizar esta política a medida que Sekro cambie. Cambiaremos la fecha de «Última actualización» y, si
        los cambios son importantes, te avisaremos en la app o por correo antes de que entren en vigor.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contacto",
    body: (
      <p>
        {SEKRO_LEGAL.company}, {SEKRO_LEGAL.registeredOffice}. Correo: <Mail />.
      </p>
    ),
  },
];
