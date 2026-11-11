import { A, B, Mail, OL, UL, type LegalSection } from "@/components/site/LegalPage";
import { SEKRO_FIGURES, SEKRO_LEGAL, SEKRO_PATHS } from "@/lib/sekro-legal";

// Spanish version of delete-account-en.tsx. Keep both in step: same sections, same facts.
// UI labels are the apps' es-ES strings (as the rest of the Spanish pages: "vídeo").

export const deleteAccountIntro = (
  <>
    <p>
      Puedes eliminar tu cuenta de Sekro, y los datos asociados, cuando quieras. Sekro lo ofrece {SEKRO_LEGAL.company}.
      Esta página explica cómo hacerlo, con o sin la app, qué se elimina y qué conservamos y durante cuánto tiempo.
    </p>
  </>
);

export const deleteAccountSections: LegalSection[] = [
  {
    id: "in-the-app",
    title: "Eliminar tu cuenta desde la app",
    body: (
      <>
        <p>Es igual en iPhone y en Android:</p>
        <OL>
          <li>
            Abre Sekro y ve a la pestaña <B>Perfil</B>.
          </li>
          <li>
            Toca <B>Cuenta</B>.
          </li>
          <li>
            Toca <B>Eliminar cuenta</B>.
          </li>
          <li>
            Escribe tu contraseña de inicio de sesión para confirmar y toca <B>Eliminar cuenta</B>.
          </li>
          <li>
            Cuando aparezca «¿Eliminar tu cuenta para siempre?», toca <B>Eliminar cuenta</B> otra vez.
          </li>
        </OL>
        <p>
          Tu cuenta se elimina en el acto y no se puede deshacer. Se cierra la sesión en todos los dispositivos en los
          que la tenías abierta, y la app borra de ellos tus claves y tus mensajes.
        </p>
      </>
    ),
  },
  {
    id: "without-the-app",
    title: "Sin la app",
    body: (
      <p>
        Si no puedes usar la app, escribe a <Mail /> desde el correo electrónico registrado en tu cuenta de Sekro e
        indica tu nombre de usuario. Confirmaremos la solicitud contigo y eliminaremos tu cuenta {SEKRO_LEGAL.emailDeletionDeadline.es}. Todo lo que se describe a continuación se aplica igual.
      </p>
    ),
  },
  {
    id: "what-is-deleted",
    title: "Qué se elimina",
    body: (
      <>
        <p>Al eliminarse tu cuenta, borramos de nuestros servidores, de inmediato:</p>
        <UL>
          <li>
            tu <B>cuenta</B>: nombre de usuario, correo electrónico, hash de la contraseña e idioma de la app;
          </li>
          <li>
            tu <B>perfil</B>: nombre visible y foto de perfil;
          </li>
          <li>
            tus <B>contactos</B>, las invitaciones que enviaste y recibiste, y tus bloqueos;
          </li>
          <li>
            tus <B>mensajes</B>: se quitan de tu lado de cada conversación, y los que la otra persona ya había eliminado
            se borran definitivamente (más abajo se explica qué pasa con los que aún conserva);
          </li>
          <li>
            los <B>elementos de tu Galería y sus archivos</B>, y los Sekros de foto y los archivos cifrados de vídeo y
            audio que subiste y que nadie más conserva;
          </li>
          <li>
            tus <B>claves de cifrado</B>: tus claves públicas, la <B>copia de seguridad cifrada de tus claves</B> y las
            claves de remitentes guardadas;
          </li>
          <li>
            tus <B>dispositivos y tokens push</B>, tus notificaciones y cualquier código de verificación de correo o de
            restablecimiento de contraseña.
          </li>
        </UL>
        <p>
          Si en ese momento no se puede borrar algún archivo del almacenamiento (por ejemplo, por una caída breve), queda
          en cola y lo borra automáticamente un proceso de limpieza que se ejecuta cada hora.
        </p>
      </>
    ),
  },
  {
    id: "what-is-kept",
    title: "Qué conservamos y durante cuánto tiempo",
    body: (
      <UL>
        <li>
          <B>Las conversaciones que la otra persona aún conserva.</B> Los mensajes y Sekros que intercambiaste con
          alguien siguen disponibles para esa persona, también en nuestros servidores, hasta que ella también los
          elimine; entonces se borran. Las copias en sus dispositivos y las imágenes de Sekro guardadas o compartidas
          fuera de la app quedan fuera de nuestro alcance. Guardamos un breve registro de que un mensaje se eliminó (su
          identificador y la hora, sin contenido) durante un máximo de {SEKRO_FIGURES.tombstoneDays} días, para que sus
          dispositivos también lo quiten.
        </li>
        <li>
          <B>Denuncias.</B> Las denuncias sobre ti o hechas por ti se conservan para la moderación, con tu nombre de
          usuario. Una denuncia se conserva mientras está abierta y se elimina {SEKRO_FIGURES.reportRetentionDays} días
          (12 meses) después de resolverse. El contenido que quien denuncia decidió compartir con la denuncia (lo que
          mostró su dispositivo y la imagen del Sekro) se elimina con ella y, en cualquier caso, a más tardar{" "}
          {SEKRO_FIGURES.moderationFileDays} días después de que nos llegara.
        </li>
        <li>
          <B>Registros del servidor.</B> Los registros técnicos de nuestros servidores, que pueden incluir el
          identificador de tu cuenta, se conservan {SEKRO_FIGURES.serverLogDays} días. Nunca contienen contraseñas,
          códigos, claves, contenido de mensajes ni imágenes.
        </li>
        <li>
          <B>Los registros de tus sesiones cerradas</B> (un identificador de cuenta, sin datos personales) caducan en un
          plazo de {SEKRO_FIGURES.sessionRecordDays} días. Nos permiten indicar a tus otros dispositivos que borren tus
          datos.
        </li>
        <li>Lo que la ley nos obligue a conservar.</li>
      </UL>
    ),
  },
  {
    id: "individual-items",
    title: "Eliminar mensajes y Sekros concretos",
    body: (
      <>
        <p>No hace falta eliminar tu cuenta para borrar algo:</p>
        <UL>
          <li>
            <B>Un mensaje del chat</B>: mantenlo pulsado y toca <B>Eliminar para mí</B>. Se elimina de todos tus
            dispositivos; la otra persona conserva su copia. Cuando ambas personas lo han eliminado, se borra de nuestros
            servidores.
          </li>
          <li>
            <B>Un elemento de la Galería</B>: ábrelo y toca <B>Eliminar</B>. Se elimina de todos tus dispositivos. Las
            copias que ya enviaste se quedan en esos chats.
          </li>
        </UL>
        <p>
          <B>Eliminar en todas partes</B> retira un <B>Sekro de vídeo o audio que hayas creado</B>, incluidas las copias
          que enviaste:
        </p>
        <UL>
          <li>
            en un chat, mantén pulsado uno que enviaste y toca <B>Eliminar vídeo en todas partes</B> (o{" "}
            <B>Eliminar audio en todas partes</B>);
          </li>
          <li>
            en la Galería, ábrelo, toca <B>Eliminar</B> y luego <B>Eliminar en todas partes…</B>.
          </li>
        </UL>
        <p>
          Se elimina de tu Galería (incluidas las copias que compartiste) y de todos los chats a los que lo enviaste, y el
          archivo cifrado se borra de nuestros servidores en el acto. Las personas a las que se lo enviaste conservan la
          imagen de portada, pero ven «Este vídeo ya no está disponible.» (o «Este audio ya no está disponible.»), y las
          copias guardadas o compartidas fuera de la app también dejan de funcionar.
        </p>
        <p>
          Los Sekros de foto y de texto llevan su contenido dentro de la imagen, así que <B>Eliminar en todas partes</B>{" "}
          no está disponible para ellos: una copia que alguien haya recibido o guardado sigue funcionando y no podemos
          retirarla. Si quieres retirar un Sekro de vídeo o audio, usa <B>Eliminar en todas partes</B> antes de eliminar
          tu cuenta; después, sigue disponible para quienes lo conserven, hasta que lo eliminen.
        </p>
      </>
    ),
  },
  {
    id: "no-recovery",
    title: "El contenido eliminado no se puede recuperar",
    body: (
      <p>
        Tus Sekros y mensajes están cifrados de extremo a extremo, y nunca tenemos las claves para abrirlos. Cuando se
        elimina un mensaje, un Sekro o tu cuenta (con la copia de seguridad cifrada de tus claves), nadie puede
        recuperarlo, ni siquiera nosotros. Si vuelves a registrarte más adelante, será una cuenta nueva con claves nuevas.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Preguntas",
    body: (
      <p>
        Escribe a <Mail />. Encontrarás más información sobre cómo tratamos tus datos en la{" "}
        <A href={SEKRO_PATHS.privacy.es}>Política de privacidad de Sekro</A>. {SEKRO_LEGAL.company},{" "}
        {SEKRO_LEGAL.registeredOffice}.
      </p>
    ),
  },
];
