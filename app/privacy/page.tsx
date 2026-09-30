import type { Metadata } from "next";
import { ContactChannels, LegalDocument, type LegalSection } from "@/components/LegalDocument";
import { SITE_URL } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Cómo Scorpk recopila, usa y protege los datos en el sitio, la extensión de VS Code, el CLI y la app Android, incluido el uso de datos de las APIs de Google.",
  alternates: { canonical: `${SITE_URL}/privacy` },
};

/** Permisos de la app Android y para qué se usan (divulgación destacada). */
const PERMISSIONS: [string, string][] = [
  [
    "Micrófono",
    "Dictar órdenes y detectar la frase «Oye Scorpk». La detección de la frase ocurre en el dispositivo con un modelo local y su audio no se envía a ningún servidor. El dictado de una orden usa el servicio de reconocimiento de voz de Android, que puede procesar el audio según las políticas de su proveedor.",
  ],
  [
    "Cámara",
    "Tomar una foto solo cuando usted pulsa el botón de cámara del asistente, y controlar la linterna. Las fotos se envían a la IA únicamente si usted las incluye en su consulta.",
  ],
  [
    "Mostrar sobre otras aplicaciones",
    "Dibujar el asistente flotante y la iluminación de bordes sobre la aplicación que esté usando.",
  ],
  [
    "Servicio de accesibilidad",
    "Ejecutar acciones que usted pide: leer el texto visible en pantalla, pulsar botones, escribir en un campo, hacer gestos, usar acciones globales (atrás, inicio, notificaciones, recientes) y capturar la pantalla cuando activa la función «Ver la pantalla». Scorpk no usa este servicio para vigilar su actividad en segundo plano ni para recopilar contraseñas o datos financieros, y no envía el contenido de la pantalla a ningún servidor salvo la captura que usted decide enviar a la IA.",
  ],
  [
    "Acceso a notificaciones",
    "Solo para controlar la reproducción de Spotify mediante las sesiones de medios del sistema. Scorpk no lee, guarda ni transmite el contenido de sus notificaciones.",
  ],
  [
    "Calendario",
    "Consultar su agenda y crear eventos con recordatorio cuando usted lo pide.",
  ],
  [
    "Contactos",
    "Buscar un contacto por nombre para llamarlo, escribirle por WhatsApp o redactarle un correo. Los contactos no se copian ni se envían a Scorpk.",
  ],
  [
    "Notificaciones y servicio en primer plano",
    "Mostrar el aviso persistente mientras la escucha de «Oye Scorpk» está activa, que usted puede desactivar en Configuración.",
  ],
  [
    "Lista de aplicaciones instaladas, alarmas e internet",
    "Abrir aplicaciones por su nombre, programar alarmas y temporizadores, y comunicarse con los servicios descritos en esta política.",
  ],
];

const SECTIONS: LegalSection[] = [
  {
    id: "alcance",
    title: "Quiénes somos y alcance",
    content: (
      <>
        <p>
          Scorpk es un ecosistema de asistentes de inteligencia artificial. Esta política describe cómo se tratan los
          datos personales en los siguientes productos, que comparten una misma cuenta:
        </p>
        <ul>
          <li>
            El sitio web <a href={SITE_URL}>scorpk.tech</a> y las cuentas de usuario.
          </li>
          <li>La extensión de Scorpk para Visual Studio Code.</li>
          <li>El CLI de Scorpk para la terminal.</li>
          <li>Scorpk Assistant, la aplicación de asistente de voz y automatización para Android.</li>
        </ul>
        <p>
          «Scorpk», «nosotros» y «nuestro» se refieren al equipo que opera estos productos. Al usarlos, usted acepta el
          tratamiento descrito aquí. Si no está de acuerdo, no los utilice.
        </p>
      </>
    ),
  },
  {
    id: "datos",
    title: "Datos que recopilamos",
    content: (
      <>
        <h3>Cuenta y perfil</h3>
        <p>
          Correo electrónico y contraseña, o, si inicia sesión con Google o GitHub, los datos básicos que ese proveedor
          comparta (correo, nombre y foto de perfil). Las contraseñas las gestiona Supabase Authentication y se guardan
          con hash: Scorpk no puede leerlas. Opcionalmente puede añadir un nombre completo y una palabra de activación
          personalizada.
        </p>

        <h3>Suscripción y pagos</h3>
        <p>
          Los pagos los procesa Stripe. Scorpk no recibe ni almacena números de tarjeta. Guardamos únicamente el
          identificador de cliente y de suscripción de Stripe, el plan, el estado y la fecha de renovación.
        </p>

        <h3>Datos técnicos de sesión</h3>
        <ul>
          <li>Cookies de sesión estrictamente necesarias para mantener su inicio de sesión.</li>
          <li>
            Una cookie temporal (5 minutos) que recuerda a dónde volver tras iniciar sesión desde la extensión o el CLI.
          </li>
          <li>
            Un código de un solo uso, de 2 minutos de vida, que se borra al canjearse y permite vincular la extensión o el
            CLI con su cuenta sin exponer credenciales.
          </li>
          <li>
            Registros técnicos de las solicitudes (dirección IP, tipo de navegador, errores) que genera el proveedor de
            alojamiento por seguridad y diagnóstico.
          </li>
        </ul>

        <h3>Datos de la app Android</h3>
        <p>
          <strong>Se guardan solo en su dispositivo:</strong> el historial de conversaciones y comandos, sus preferencias,
          la sesión de su cuenta y los tokens de acceso de los servicios que conecte (Google, GitHub). Estos últimos
          se cifran con una clave del Android Keystore y Scorpk no los guarda en sus servidores.
        </p>
        <p>
          <strong>Se sincronizan con su cuenta</strong> únicamente si inicia sesión: los datos de su perfil (nombre y
          palabra de activación), sus tareas y qué conectores tiene activados (proveedor y permisos concedidos).
        </p>

        <h3>Contenido que envía a la IA</h3>
        <p>
          Para responder, el texto de sus órdenes y mensajes, el historial reciente de la conversación (hasta 10
          mensajes) y los archivos, imágenes, capturas de pantalla o fotos que usted adjunte o active expresamente se
          envían al proveedor de inferencia de IA (ver «Con quién compartimos los datos»). Si continúa una
          conversación, también viajan los mensajes previos de esa conversación, que es lo que permite responder con
          contexto.
        </p>
        <p>
          En la extensión y el CLI, el agente trabaja sobre sus archivos de forma local; solo el contenido que el agente
          incluye en cada solicitud se transmite al proveedor de IA que usted haya elegido, con sus propias claves o con la
          cuenta que haya conectado, y bajo las condiciones de ese proveedor.
        </p>
      </>
    ),
  },
  {
    id: "permisos",
    title: "Permisos de la app Android",
    content: (
      <>
        <p>
          Scorpk Assistant solicita permisos del sistema solo cuando usted activa la función que los necesita, y puede
          revocarlos en cualquier momento desde los ajustes de Android o desde Configuración → Permisos. Estos son los
          permisos y su finalidad:
        </p>
        <dl className="mt-5 divide-y divide-border overflow-hidden rounded-xl border border-border">
          {PERMISSIONS.map(([name, purpose]) => (
            <div key={name} className="grid gap-1 px-5 py-4 sm:grid-cols-[210px_1fr] sm:gap-6">
              <dt className="text-sm font-medium text-foreground">{name}</dt>
              <dd className="text-sm leading-relaxed text-muted">{purpose}</dd>
            </div>
          ))}
        </dl>
        <p>
          Algunas aplicaciones de terceros, como las bancarias, pueden restringir su funcionamiento mientras haya
          servicios de accesibilidad o de acceso a notificaciones activos. Scorpk no busca eludir esas medidas de
          seguridad; puede desactivar esos servicios en los ajustes de Android cuando lo necesite.
        </p>
      </>
    ),
  },
  {
    id: "google",
    title: "Datos de las APIs de Google",
    content: (
      <>
        <p>
          Si usted conecta Google Drive o Gmail en la app, Scorpk solicita acceso de <strong>solo lectura</strong> a
          través de su cuenta de Google:
        </p>
        <ul>
          <li>
            <code>drive.readonly</code>: buscar archivos por nombre y listar sus archivos más recientes (nombre, tipo,
            fecha y enlace).
          </li>
          <li>
            <code>gmail.readonly</code>: contar los correos sin leer y mostrar el remitente y el asunto de los más
            recientes, o de los que coincidan con una búsqueda que usted pida. Scorpk no envía, borra ni modifica
            correos ni archivos.
          </li>
        </ul>
        <p>
          Estos datos se consultan en el momento en que usted lo pide, se muestran en la app y{" "}
          <strong>no se almacenan en los servidores de Scorpk</strong>. El resultado mostrado puede quedar en el historial
          local de su dispositivo, que usted puede borrar en Cuenta → Borrar historial. Los resultados de Gmail, Drive,
          GitHub y del calendario se excluyen del contexto que se envía a la IA en mensajes posteriores.
        </p>
        <p>
          El uso y la transferencia por parte de Scorpk de la información recibida de las APIs de Google se ajustarán a la{" "}
          <a href="https://developers.google.com/terms/api-services-user-data-policy">
            Política de datos de usuario de los servicios de API de Google
          </a>
          , incluidos los requisitos de uso limitado. En concreto:
        </p>
        <ul>
          <li>Solo usamos los datos de Google para ofrecer las funciones que usted solicita y que se ven en la app.</li>
          <li>No transferimos esos datos a terceros, salvo lo necesario para prestar el servicio, por seguridad o por obligación legal.</li>
          <li>No los usamos para publicidad, ni personalizada ni de otro tipo, ni los vendemos.</li>
          <li>Ninguna persona lee esos datos, salvo con su consentimiento expreso, por seguridad o abuso, o por exigencia legal.</li>
          <li>No los usamos para desarrollar, mejorar ni entrenar modelos de IA o de aprendizaje automático.</li>
        </ul>
        <p>
          Puede revocar el acceso en cualquier momento desde Conectores → Desconectar, o en{" "}
          <a href="https://myaccount.google.com/permissions">myaccount.google.com/permissions</a>.
        </p>
      </>
    ),
  },
  {
    id: "uso",
    title: "Cómo usamos los datos",
    content: (
      <>
        <ul>
          <li>Crear y autenticar su cuenta y mantener su sesión.</li>
          <li>Ejecutar las órdenes y acciones que usted solicita en el dispositivo y en los servicios que conecta.</li>
          <li>Generar respuestas con modelos de IA y transcribir o leer en voz alta las respuestas.</li>
          <li>Gestionar su plan, cobros y cancelaciones.</li>
          <li>Sincronizar su perfil, tareas y conectores entre sus dispositivos.</li>
          <li>Proteger el servicio, prevenir abusos y diagnosticar errores.</li>
          <li>Cumplir obligaciones legales y atender sus solicitudes.</li>
        </ul>
        <p>
          <strong>Scorpk no vende ni alquila datos personales</strong>, no muestra publicidad y no crea perfiles
          publicitarios.
        </p>
      </>
    ),
  },
  {
    id: "terceros",
    title: "Con quién compartimos los datos",
    content: (
      <>
        <p>
          Compartimos datos solo con los proveedores necesarios para prestar el servicio, que los tratan bajo sus propias
          políticas y nuestras instrucciones:
        </p>
        <ul>
          <li>
            <strong>Supabase:</strong> autenticación y base de datos de cuentas, perfiles, tareas y conectores.
          </li>
          <li>
            <strong>Stripe:</strong> cobros y facturación de la suscripción Pro.
          </li>
          <li>
            <strong>Fireworks AI:</strong> inferencia de los modelos de IA de la app Android (órdenes, historial reciente y
            las imágenes o archivos que usted adjunte).
          </li>
          <li>
            <strong>Proveedores de IA que usted elige</strong> en la extensión y el CLI (por ejemplo OpenAI, Anthropic,
            Google, Groq, DeepSeek u OpenRouter).
          </li>
          <li>
            <strong>Google y GitHub:</strong> inicio de sesión y, si usted los conecta, acceso a Drive, Gmail o GitHub.
          </li>
          <li>
            <strong>Proveedor de alojamiento y de reconocimiento de voz de Android:</strong> infraestructura técnica del
            sitio y dictado.
          </li>
        </ul>
        <p>
          Podemos divulgar información cuando una ley, una orden judicial o una autoridad competente lo exija, o para
          proteger la seguridad de los usuarios y del servicio. Algunos proveedores están ubicados en otros países, por
          lo que sus datos pueden transferirse y tratarse fuera de su país de residencia con las garantías que exige la
          normativa aplicable.
        </p>
      </>
    ),
  },
  {
    id: "seguridad",
    title: "Seguridad",
    content: (
      <>
        <p>Aplicamos medidas técnicas y organizativas razonables para proteger los datos:</p>
        <ul>
          <li>Comunicaciones cifradas con HTTPS.</li>
          <li>
            En Android, la sesión y los tokens de los conectores se cifran con AES-256-GCM usando una clave no exportable
            del Android Keystore.
          </li>
          <li>Las contraseñas se almacenan con hash y nunca en texto plano.</li>
          <li>Los códigos de vinculación de la extensión y el CLI son de un solo uso y caducan en minutos.</li>
          <li>Las claves con privilegios de administración se usan únicamente en el servidor.</li>
        </ul>
        <p>
          Ningún sistema es infalible. Si detecta una vulnerabilidad, le agradecemos que la reporte por los canales de
          contacto indicados abajo.
        </p>
      </>
    ),
  },
  {
    id: "conservacion",
    title: "Conservación y eliminación",
    content: (
      <>
        <ul>
          <li>Los datos de cuenta y perfil se conservan mientras su cuenta esté activa.</li>
          <li>
            El historial de la app Android vive en su dispositivo: puede borrarlo en Cuenta → Borrar historial, o
            eliminarlo todo desinstalando la app.
          </li>
          <li>
            Al desconectar un conector se elimina su registro en su cuenta y, cuando ningún otro conector usa esa misma
            cuenta de Google o GitHub, también su token de acceso del dispositivo.
          </li>
          <li>
            Puede solicitar la eliminación de su cuenta y datos asociados por los canales de contacto. La atenderemos en un
            plazo razonable, no mayor a 30 días, salvo que debamos conservar cierta información por obligaciones legales,
            contables o de facturación.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "derechos",
    title: "Sus derechos",
    content: (
      <>
        <p>
          Conforme a la normativa de protección de datos aplicable (por ejemplo, la Ley 1581 de 2012 en Colombia, el RGPD
          en la Unión Europea o la CCPA en California), usted puede solicitar el acceso, la rectificación, la
          actualización y la supresión de sus datos, oponerse a su tratamiento, pedir su portabilidad y retirar en
          cualquier momento el consentimiento que haya otorgado, sin efecto retroactivo.
        </p>
        <p>
          También puede presentar una reclamación ante la autoridad de protección de datos de su país. Para ejercer sus
          derechos, use los canales de contacto de esta política.
        </p>
      </>
    ),
  },
  {
    id: "menores",
    title: "Menores de edad",
    content: (
      <p>
        Los productos de Scorpk no están dirigidos a menores de edad sin la autorización de sus padres o tutores, y no
        recopilamos a sabiendas datos de menores de 13 años. Si cree que un menor nos ha entregado datos, contáctenos y
        los eliminaremos.
      </p>
    ),
  },
  {
    id: "cambios",
    title: "Cambios en esta política",
    content: (
      <p>
        Podemos actualizar esta política para reflejar cambios en el servicio o en la ley. Publicaremos la versión vigente
        en esta página con su fecha de actualización y, si el cambio es sustancial, lo avisaremos en el sitio o en la app.
        El uso continuado de los productos después del cambio supone su aceptación.
      </p>
    ),
  },
  {
    id: "contacto",
    title: "Contacto",
    content: <ContactChannels />,
  },
];

export default function PrivacyPage() {
  return (
    <LegalDocument
      title="Política de privacidad"
      intro={
        <p>
          Su privacidad importa. Este documento explica, en lenguaje claro, qué datos trata Scorpk, para qué, con quién los
          comparte y qué control tiene usted sobre ellos.
        </p>
      }
      sections={SECTIONS}
      other={{ href: "/terms", label: "Términos y condiciones" }}
    />
  );
}
