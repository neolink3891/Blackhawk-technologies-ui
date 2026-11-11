import { A, B, H3, Mail, UL, type LegalSection } from "@/components/site/LegalPage";
import { SEKRO_LEGAL, SEKRO_PATHS } from "@/lib/sekro-legal";

// Spanish version of terms-en.tsx. Keep both in step: same sections, same facts, same TODOs.
// TODO(legal): the whole document needs legal review (see terms-en.tsx), including this translation.

export const termsIntro = (
  <>
    <p>
      Estos términos son el acuerdo entre tú y {SEKRO_LEGAL.company} para usar Sekro. Al crear una cuenta, los aceptas.
      Léelos junto con nuestra <A href={SEKRO_PATHS.privacy.es}>Política de privacidad</A>.
    </p>
  </>
);

export const termsSections: LegalSection[] = [
  {
    id: "about",
    title: "Quiénes somos y qué es Sekro",
    body: (
      <>
        <p>
          Sekro es un servicio de {SEKRO_LEGAL.company}, sociedad registrada en Inglaterra y Gales (número de sociedad{" "}
          {SEKRO_LEGAL.companyNumber}), con domicilio social en {SEKRO_LEGAL.registeredOffice} («nosotros»).
        </p>
        <p>
          Sekro te permite ocultar contenido cifrado de extremo a extremo tras imágenes de aspecto normal y compartirlo
          con tus contactos: una foto, un vídeo (de hasta 7 minutos), un audio (de hasta 10 minutos) o un texto (de hasta
          5000 caracteres) y, con una foto, un vídeo o un audio, una nota oculta opcional. También puedes chatear con tus
          contactos. Las fotos y los textos viajan dentro de la propia imagen; los vídeos y los audios se guardan, cifrados,
          en nuestros servidores. Escríbenos a <Mail />.
        </p>
      </>
    ),
  },
  {
    id: "eligibility",
    title: "Quién puede usar Sekro",
    body: (
      <UL>
        <li>
          Debes tener <B>18 años o más</B>.
        </li>
        <li>Debes poder celebrar un contrato vinculante y no tener prohibido por ley el uso de Sekro.</li>
        <li>No puedes usar Sekro si hemos cerrado definitivamente una cuenta tuya anteriormente.</li>
      </UL>
    ),
  },
  {
    id: "account",
    title: "Tu cuenta",
    body: (
      <>
        <UL>
          <li>Usa un correo electrónico real que controles y mantén tus datos actualizados.</li>
          <li>
            Protege tu contraseña y tus dispositivos. Eres responsable de lo que ocurra en tu cuenta. Avísanos de
            inmediato en <Mail /> si crees que otra persona tiene acceso a ella.
          </li>
          <li>Tu nombre de usuario no puede suplantar a nadie ni ser ofensivo.</li>
          <li>Una persona, una cuenta. No vendas, transfieras ni compartas tu cuenta.</li>
        </UL>
        <H3>Tu frase de contraseña de Sekro</H3>
        <p>
          Tus claves de cifrado están protegidas por una frase de contraseña que solo tú conoces. Nunca la recibimos y no
          podemos restablecerla.{" "}
          <B>
            Si pierdes tu frase de contraseña y todos tus dispositivos con sesión iniciada, nadie podrá recuperar el
            contenido cifrado que te enviaron, tampoco nosotros.
          </B>{" "}
          Puedes crear claves nuevas, pero lo que se cifró para tus claves antiguas seguirá siendo ilegible. Tu
          contraseña de inicio de sesión es distinta y se puede restablecer por correo.
        </p>
      </>
    ),
  },
  {
    id: "your-content",
    title: "Tu contenido",
    body: (
      <>
        <p>
          Lo que creas y envías es tuyo. Solo nos das el permiso necesario para guardarlo, transmitirlo y mostrarlo a las
          personas que elijas, para que Sekro funcione. Como el contenido está cifrado de extremo a extremo, no podemos
          verlo.
        </p>
        <p>
          Eres responsable de lo que envías. Asegúrate de tener derecho a compartirlo y de que las personas que aparecen
          están de acuerdo. Recuerda que las imágenes de portada no están cifradas y que quienes lo reciben pueden verlo,
          y quizá guardarlo.
        </p>
        <p>
          Sekro intenta impedir las capturas y grabaciones de pantalla del contenido revelado y avisa a quien lo envió cuando
          detecta una, pero no siempre puede evitarlas (siempre se puede fotografiar la pantalla con otro dispositivo).
        </p>
        <p>
          Puedes borrar un Sekro de vídeo o audio que hayas creado con «Eliminar en todas partes»: a partir de entonces no
          se puede reproducir en ningún sitio, tampoco en las copias compartidas fuera de la app. Un Sekro de foto o de
          texto lleva su contenido dentro de la imagen, así que, una vez enviado o compartido, no puedes recuperarlo.
        </p>
      </>
    ),
  },
  {
    id: "acceptable-use",
    title: "Uso aceptable",
    body: (
      <>
        <p>No puedes usar Sekro para crear, enviar, guardar o compartir, ni para intentar:</p>
        <UL>
          <li>nada ilegal, ni que anime o ayude a alguien a infringir la ley;</li>
          <li>
            <B>material de abuso sexual infantil</B>, ni nada que sexualice, explote o ponga en peligro a menores;
          </li>
          <li>acosar, intimidar, hostigar o amenazar a nadie;</li>
          <li>compartir imágenes íntimas de alguien sin su consentimiento, ni amenazar con hacerlo;</li>
          <li>promover la violencia, el terrorismo o el odio contra personas;</li>
          <li>enviar spam, estafas o mensajes masivos no solicitados;</li>
          <li>enviar malware o cualquier cosa diseñada para dañar dispositivos o datos;</li>
          <li>suplantar a alguien o engañar sobre quién eres;</li>
          <li>
            vulnerar o eludir la seguridad, los límites de uso o la moderación de Sekro, acceder a cuentas ajenas,
            sobrecargar nuestros servidores, o extraer datos o hacer ingeniería inversa del servicio salvo donde la ley lo
            permita.
          </li>
        </UL>
        <H3>Tolerancia cero con la explotación infantil</H3>
        {/* TODO(legal): confirm the NCA / IWF reporting process, as in terms-en.tsx. */}
        <p>
          Cerramos definitivamente cualquier cuenta que comparta material de abuso sexual infantil o explote a menores, y
          lo denunciamos a las autoridades competentes, incluidas la National Crime Agency (NCA) y la Internet Watch
          Foundation (IWF) del Reino Unido.
        </p>
      </>
    ),
  },
  {
    id: "moderation",
    title: "Denuncias y moderación",
    body: (
      <>
        <UL>
          <li>
            Puedes denunciar desde la app cualquier mensaje o Sekro que recibas. Puedes elegir un motivo (abuso o acoso,
            contenido ilegal, spam u otro), añadir una nota y bloquear al remitente al mismo tiempo.
          </li>
          <li>
            Al denunciar, tu dispositivo nos envía lo que reveló (la foto, el vídeo, el audio o el texto, y la nota oculta
            que llevara), junto con el archivo del Sekro y quién lo envió y cuándo. Es la única forma en que podemos ver contenido cifrado. Solo revisamos lo que se nos denuncia.
          </li>
          <li>
            Si comprobamos que se han incumplido estos términos, podemos suspender tu cuenta durante un tiempo o cerrarla
            definitivamente, según la gravedad. Una cuenta suspendida o cerrada pierde la sesión en todos sus
            dispositivos.
          </li>
          <li>
            También podemos actuar a partir de información externa a la app (por ejemplo, una solicitud válida de las
            autoridades).
          </li>
        </UL>
        <H3>Recursos</H3>
        {/* TODO(legal): decide and state a response time for appeals. */}
        <p>
          Si crees que nos hemos equivocado, escribe a <Mail /> desde el correo de tu cuenta, con tu nombre de usuario y
          por qué crees que la decisión es errónea. Una persona lo revisará y te comunicará el resultado.
        </p>
      </>
    ),
  },
  {
    id: "law-enforcement",
    title: "Autoridades",
    body: (
      <>
        {/* TODO(legal): add the law-enforcement request process, as in terms-en.tsx. */}
        <p>
          Respondemos a las solicitudes legales válidas conforme a la ley del Reino Unido. Solo podemos facilitar los
          datos que tenemos: datos de la cuenta (como tu nombre de usuario, tu correo y cuándo te registraste) y
          metadatos (como con quién estás conectado y cuándo se enviaron y entregaron los mensajes), además de lo que se
          nos haya denunciado. No podemos facilitar el contenido de tus Sekros ni de tus mensajes, porque no tenemos las
          claves para descifrarlo, y no vamos a crear una forma de hacerlo.
        </p>
      </>
    ),
  },
  {
    id: "availability",
    title: "Disponibilidad y cambios en Sekro",
    body: (
      <>
        <p>
          Trabajamos para que Sekro funcione y sea seguro, pero no podemos garantizar que esté siempre disponible ni libre
          de errores. Puede que tengamos que pausarlo por mantenimiento o seguridad. Podemos añadir, cambiar o quitar
          funciones. Si un cambio te afecta de forma importante, te avisaremos con antelación siempre que sea razonable.
        </p>
        <p>
          Sekro no sustituye a una copia de seguridad. Guarda bien tu frase de contraseña; consulta «Tu frase de
          contraseña de Sekro» más arriba.
        </p>
      </>
    ),
  },
  {
    id: "as-is",
    title: "Sekro se ofrece «tal cual»",
    body: (
      <p>
        Sekro se ofrece «tal cual» y «según disponibilidad». En la medida en que la ley lo permita, no ofrecemos más
        garantías sobre Sekro que las de estos términos. Nada de lo dispuesto en estos términos afecta a tus derechos
        legales como consumidor.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Nuestra responsabilidad",
    body: (
      <>
        {/* TODO(legal): the £100 cap is a placeholder figure; see terms-en.tsx. */}
        <UL>
          <li>
            No excluimos ni limitamos nuestra responsabilidad cuando hacerlo sea ilegal, incluida la responsabilidad por
            muerte o lesiones causadas por nuestra negligencia, o por fraude.
          </li>
          <li>
            No respondemos de pérdidas que no fueran previsibles, de pérdidas empresariales, ni de pérdidas causadas por
            hechos fuera de nuestro control razonable, por contenido que te envíen otros usuarios o por la pérdida de tu
            frase de contraseña, tu contraseña o tu dispositivo.
          </li>
          <li>En los demás casos, y en la medida en que la ley lo permita, nuestra responsabilidad total ante ti se limita a 100 £.</li>
        </UL>
      </>
    ),
  },
  {
    id: "termination",
    title: "Fin de este acuerdo",
    body: (
      <>
        <p>
          Puedes dejar de usar Sekro cuando quieras y eliminar tu cuenta desde la app, en Perfil › Cuenta › Eliminar
          cuenta (consulta <A href={SEKRO_PATHS.deleteAccount.es}>Eliminar tu cuenta de Sekro</A> y la{" "}
          <A href={`${SEKRO_PATHS.privacy.es}#delete-account`}>Política de privacidad</A>).
        </p>
        <p>
          Podemos suspender o cerrar tu cuenta si incumples estos términos de forma grave o reiterada, si la ley lo exige
          o si dejamos de ofrecer Sekro. Siempre que sea razonable, te explicaremos el motivo y te avisaremos con
          antelación.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Cambios en estos términos",
    body: (
      <p>
        Podemos actualizar estos términos. Cambiaremos la fecha de «Última actualización» y, si los cambios son
        importantes, te avisaremos en la app o por correo antes de que entren en vigor. Si sigues usando Sekro después,
        se aplicarán los nuevos términos. Si no estás de acuerdo, puedes dejar de usar Sekro y eliminar tu cuenta.
      </p>
    ),
  },
  {
    id: "law",
    title: "Ley aplicable",
    body: (
      <>
        {/* TODO(legal): confirm wording for consumers outside England and Wales, as in terms-en.tsx. */}
        <p>
          Estos términos se rigen por la ley de Inglaterra y Gales, y los tribunales de Inglaterra y Gales son los
          competentes. Si vives en otra parte del Reino Unido o en otro país, conservas la protección de las leyes de
          consumo obligatorias de tu lugar de residencia y también puedes acudir a los tribunales de tu país.
        </p>
      </>
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
