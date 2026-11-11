import { A, B, Mail, OL, UL, type LegalSection } from "@/components/site/LegalPage";
import { SEKRO_LEGAL, SEKRO_PATHS } from "@/lib/sekro-legal";

// Spanish version of child-safety-en.tsx. Keep both in step: same sections, same facts (see the notes there).
// UI labels are the apps' es-ES strings.

export const childSafetyIntro = (
  <>
    <p>
      Sekro lo ofrece {SEKRO_LEGAL.company}. Estas son nuestras normas contra el abuso y la explotación sexual infantil,
      cómo denunciarlos y qué hacemos cuando recibimos una denuncia.
    </p>
  </>
);

export const childSafetySections: LegalSection[] = [
  {
    id: "zero-tolerance",
    title: "Tolerancia cero",
    body: (
      <>
        <p>
          Sekro prohíbe el <B>material de abuso sexual infantil (CSAM)</B> y cualquier forma de <B>abuso y explotación
          sexual infantil (CSAE)</B>. Esto incluye:
        </p>
        <UL>
          <li>crear, enviar, guardar o compartir material de abuso sexual infantil, o pedirlo;</li>
          <li>el grooming: contactar con un menor o ganarse su confianza con fines sexuales;</li>
          <li>la sextorsión: amenazar con compartir imágenes íntimas, o exigirlas, para coaccionar o explotar a alguien;</li>
          <li>cualquier contenido que sexualice a menores, incluidos dibujos, textos o material generado con IA;</li>
          <li>cualquier otro uso de Sekro para explotar o poner en peligro a menores.</li>
        </UL>
        <p>
          Sekro es solo para personas de <B>18 años o más</B>. Si crees que alguien menor de 18 años usa Sekro, avísanos en{" "}
          <Mail to={SEKRO_LEGAL.safetyEmail} /> y cerraremos la cuenta.
        </p>
      </>
    ),
  },
  {
    id: "how-to-report",
    title: "Cómo denunciar",
    body: (
      <>
        <p>Desde la app, en iPhone y Android, puedes denunciar cualquier mensaje o Sekro que hayas recibido:</p>
        <UL>
          <li>
            <B>En un chat</B>: mantén pulsado el mensaje y toca <B>Denunciar</B>.
          </li>
          <li>
            <B>Mientras ves un Sekro revelado</B>: toca el botón de la bandera (<B>Denunciar</B>) en la parte superior.
          </li>
          <li>
            <B>Un Sekro que abriste desde Fotos o Archivos</B> (Inicio › Abrir): toca <B>Denunciar</B> debajo de la
            imagen.
          </li>
        </UL>
        <p>Después:</p>
        <OL>
          <li>
            En «¿Por qué lo denuncias?», elige <B>Contenido ilegal</B>.
          </li>
          <li>
            En <B>Añade una nota (opcional)</B>, indica que afecta a un menor, para que podamos darle prioridad.
          </li>
          <li>
            También puedes marcar <B>Bloquear también</B> a quien lo envió. Luego toca <B>Enviar denuncia</B>.
          </li>
        </OL>
        <p>
          También puedes escribir a <Mail to={SEKRO_LEGAL.safetyEmail} />, con el nombre de usuario de la cuenta
          implicada y lo que ha pasado. No adjuntes imágenes de abuso sexual infantil a un correo: denúncialas desde la
          app, que nos las envía de forma segura.
        </p>
        <p>
          Los Sekros y los mensajes están <B>cifrados de extremo a extremo</B>, así que nosotros no podemos verlos. Al
          denunciar, tu dispositivo, que ya puede leer el contenido, nos envía lo que ha revelado (la foto, el vídeo, el
          audio o el texto, y cualquier nota oculta), junto con la imagen del Sekro, el motivo y la nota que indicaste, y
          quién lo envió y cuándo. Eso es lo que revisamos. Si un menor está en peligro inmediato, llama primero a la
          policía (999 en el Reino Unido, 112 en la Unión Europea).
        </p>
      </>
    ),
  },
  {
    id: "what-we-do",
    title: "Qué hacemos",
    body: (
      <UL>
        <li>
          <B>Revisamos las denuncias</B>, y las que afectan a menores van primero. Solo un pequeño número de personal
          autorizado puede ver el contenido denunciado.
        </li>
        <li>
          <B>Cerramos de forma permanente la cuenta</B> de cualquier persona que comparta material de abuso sexual
          infantil o explote a menores. Una cuenta cerrada pierde la sesión en todos sus dispositivos al instante y no
          puede volver a iniciarla, y su titular no puede eliminarla para eludir la moderación.
        </li>
        <li>
          <B>Denunciamos el material aparente de abuso sexual infantil</B> al National Center for Missing &amp; Exploited
          Children (NCMEC) y a la National Crime Agency (NCA) del Reino Unido, incluido su mando Child Exploitation and
          Online Protection (CEOP), y les facilitamos la denuncia y la información que tenemos sobre la cuenta.
        </li>
        <li>
          <B>Colaboramos con las autoridades.</B> Respondemos a las solicitudes legales válidas y facilitamos los datos
          que tenemos (datos de la cuenta, metadatos de conexión y entrega, y todo lo que se nos haya denunciado). No
          podemos facilitar el contenido de Sekros o mensajes que no se hayan denunciado, porque no tenemos las claves
          para descifrarlo.
        </li>
      </UL>
    ),
  },
  {
    id: "laws",
    title: "Cumplimiento de las leyes de protección infantil",
    body: (
      <p>
        Cumplimos las leyes de protección infantil que nos son aplicables: en el Reino Unido, donde tenemos nuestra sede,
        entre ellas la Online Safety Act 2023 y las leyes contra las imágenes indecentes de menores, y las leyes de los
        países donde Sekro está disponible. Consulta también nuestros{" "}
        <A href={SEKRO_PATHS.terms.es}>Términos del servicio</A> y nuestra{" "}
        <A href={SEKRO_PATHS.privacy.es}>Política de privacidad</A>.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contacto para la protección infantil",
    body: (
      <p>
        Para cualquier asunto relacionado con la protección infantil en Sekro, escribe a{" "}
        <Mail to={SEKRO_LEGAL.safetyEmail} />. {SEKRO_LEGAL.company}, {SEKRO_LEGAL.registeredOffice}.
      </p>
    ),
  },
];
