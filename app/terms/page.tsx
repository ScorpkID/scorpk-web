import type { Metadata } from "next";
import Link from "next/link";
import { ContactChannels, LegalDocument, type LegalSection } from "@/components/LegalDocument";
import { SITE_URL } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description:
    "Condiciones de uso del sitio, la extensión de VS Code, el CLI y la app Android de Scorpk: cuentas, planes, uso aceptable, IA y responsabilidades.",
  alternates: { canonical: `${SITE_URL}/terms` },
};

const SECTIONS: LegalSection[] = [
  {
    id: "aceptacion",
    title: "Aceptación y alcance",
    content: (
      <>
        <p>
          Estos términos regulan el acceso y el uso de los productos de Scorpk: el sitio <a href={SITE_URL}>scorpk.tech</a>{" "}
          y las cuentas de usuario, la extensión para Visual Studio Code, el CLI y Scorpk Assistant, la aplicación de
          asistente de voz y automatización para Android (en conjunto, el «Servicio»).
        </p>
        <p>
          Al crear una cuenta, instalar o usar el Servicio, usted declara que los ha leído y los acepta, junto con la{" "}
          <Link href="/privacy">Política de privacidad</Link>. Si actúa en nombre de una organización, declara tener
          autoridad para obligarla. Si no está de acuerdo, no use el Servicio.
        </p>
      </>
    ),
  },
  {
    id: "cuenta",
    title: "Su cuenta",
    content: (
      <>
        <ul>
          <li>Debe tener la mayoría de edad en su país, o contar con la autorización de sus padres o tutores.</li>
          <li>Debe entregar información veraz y mantenerla actualizada.</li>
          <li>
            Es responsable de proteger sus credenciales y de toda la actividad realizada con su cuenta. Avísenos de
            inmediato si sospecha un uso no autorizado.
          </li>
          <li>
            Si inicia sesión con Google o GitHub, también rigen los términos de esos proveedores. Una cuenta es personal
            y no puede cederse ni compartirse sin nuestra autorización.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "servicio",
    title: "Descripción del Servicio",
    content: (
      <>
        <p>
          Scorpk ofrece agentes y asistentes de inteligencia artificial: en el editor y la terminal, para programar; y en
          Android, para controlar el dispositivo y servicios conectados mediante voz y texto (abrir aplicaciones, alarmas,
          música, agenda, mensajes, lectura de pantalla y más).
        </p>
        <p>
          Existe un plan gratuito y un plan de pago (Pro) con funciones adicionales. Las funciones, los límites, los
          modelos de IA y las integraciones disponibles pueden cambiar; algunas pueden estar en fase de pruebas y no
          ofrecen la estabilidad de una versión final.
        </p>
      </>
    ),
  },
  {
    id: "uso-aceptable",
    title: "Uso aceptable",
    content: (
      <>
        <p>Usted se compromete a no usar el Servicio para:</p>
        <ul>
          <li>Infringir la ley o derechos de terceros, ni cometer fraude o suplantar a otras personas.</li>
          <li>
            Acceder sin autorización a cuentas, dispositivos, aplicaciones o datos ajenos, ni usar la automatización de
            Scorpk para eludir controles de seguridad de otras aplicaciones o servicios.
          </li>
          <li>Crear o distribuir software malicioso, o realizar ataques, extracción masiva de datos o spam.</li>
          <li>
            Interferir con el funcionamiento del Servicio, sobrepasar o evadir sus límites, o revender el acceso sin
            autorización.
          </li>
          <li>
            Descompilar o aplicar ingeniería inversa a lo que no esté publicado como código abierto, salvo donde la ley lo
            permita.
          </li>
          <li>Enviar contenido ilegal, o datos de terceros sin contar con el derecho o el consentimiento para ello.</li>
        </ul>
        <p>
          Los componentes que Scorpk publica como código abierto se rigen además por la licencia indicada en su
          repositorio.
        </p>
      </>
    ),
  },
  {
    id: "ia",
    title: "Contenido y acciones de la IA",
    content: (
      <>
        <p>
          Las respuestas, el código y las acciones propuestas o ejecutadas por modelos de IA pueden ser incompletos,
          inexactos o inadecuados para su situación. Scorpk no ofrece asesoría legal, financiera, médica ni profesional
          de ningún tipo.
        </p>
        <ul>
          <li>Usted es responsable de revisar los resultados antes de usarlos, y los cambios en su código antes de aplicarlos.</li>
          <li>
            Las acciones automáticas (llamar, escribir mensajes, crear eventos, pulsar botones, abrir enlaces) se ejecutan
            a partir de sus órdenes. El reconocimiento de voz y la interpretación pueden equivocarse: revise lo que
            Scorpk va a hacer cuando la acción tenga consecuencias.
          </li>
          <li>
            Las respuestas de la IA pueden ser similares para distintos usuarios y no garantizamos que estén libres de
            derechos de terceros.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "android",
    title: "Permisos y automatización en Android",
    content: (
      <>
        <p>
          La app requiere permisos sensibles del sistema (micrófono, cámara, servicio de accesibilidad, superposición,
          calendario, contactos, entre otros) que usted concede voluntariamente y puede revocar en cualquier momento.
          Cómo se usa cada uno se explica en la <Link href="/privacy#permisos">Política de privacidad</Link>.
        </p>
        <ul>
          <li>
            Al activar el servicio de accesibilidad, usted autoriza a Scorpk a realizar en su dispositivo las acciones que
            usted le ordene. No lo active si no desea ese comportamiento.
          </li>
          <li>
            Algunas aplicaciones de terceros, como las bancarias o de pagos, pueden bloquearse o negarse a funcionar
            mientras haya servicios de accesibilidad activos. Scorpk no busca eludir esas medidas de seguridad, y usted es
            responsable de desactivar esos servicios cuando lo requiera.
          </li>
          <li>
            Usted es responsable del uso que haga de la cámara, la pantalla y el micrófono, incluido obtener el
            consentimiento de terceros cuando corresponda.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "terceros",
    title: "Servicios de terceros",
    content: (
      <p>
        El Servicio se integra con proveedores independientes, como Google, GitHub, Spotify, WhatsApp, Supabase, Stripe,
        Fireworks AI y los proveedores de IA que usted elija. Su uso se rige por los términos de cada uno; Scorpk no los
        controla ni responde por su disponibilidad, contenido o políticas, y estos pueden cambiar o retirar sus interfaces
        sin previo aviso. Las marcas de terceros pertenecen a sus respectivos titulares y su mención no implica
        afiliación ni respaldo.
      </p>
    ),
  },
  {
    id: "planes",
    title: "Planes, pagos y cancelación",
    content: (
      <>
        <ul>
          <li>
            El plan Pro se cobra por suscripción recurrente al precio vigente publicado en{" "}
            <Link href="/pricing">la página de precios</Link>, a través de Stripe. Los impuestos aplicables se muestran al
            pagar.
          </li>
          <li>
            En la app Android, los comandos locales, «Oye Scorpk» y los conectores son gratuitos; las funciones de IA
            (lenguaje natural, chat con modelos y visión de pantalla y cámara) forman parte del plan Pro y requieren
            iniciar sesión. Podemos ajustar qué incluye cada plan avisando con antelación razonable.
          </li>
          <li>
            La suscripción se renueva automáticamente cada período hasta que se cancele. Puede cancelarla en cualquier
            momento desde el portal de facturación de <Link href="/account">su cuenta</Link>; conservará el acceso Pro
            hasta el final del período ya pagado.
          </li>
          <li>
            Salvo que la ley aplicable disponga otra cosa, los pagos ya realizados no son reembolsables ni se prorratean
            por cancelaciones a mitad de período.
          </li>
          <li>
            Podemos cambiar los precios o los planes avisando con antelación razonable; el cambio aplicará desde la
            siguiente renovación.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "propiedad",
    title: "Propiedad intelectual",
    content: (
      <>
        <p>
          Scorpk conserva todos los derechos sobre el Servicio: software, diseño, marca, nombre y logotipo, sin perjuicio
          de las licencias de código abierto aplicables. Se le concede una licencia personal, limitada, revocable y no
          exclusiva para usar el Servicio conforme a estos términos.
        </p>
        <p>
          Usted conserva la titularidad de su contenido y su código. Nos otorga el permiso limitado necesario para
          procesarlos (incluido enviarlos a los proveedores de IA que usted use) únicamente para prestarle el Servicio.
        </p>
      </>
    ),
  },
  {
    id: "disponibilidad",
    title: "Disponibilidad, suspensión y terminación",
    content: (
      <>
        <p>
          Procuramos mantener el Servicio disponible, pero no garantizamos que sea ininterrumpido ni libre de errores.
          Podemos modificar, suspender o discontinuar funciones, con aviso cuando sea razonable.
        </p>
        <p>
          La app Android ofrece actualizaciones dentro de la propia aplicación. Algunas versiones antiguas pueden dejar de
          funcionar y requerir que usted actualice para seguir usando el Servicio; la instalación siempre necesita su
          confirmación en Android.
        </p>
        <p>
          Podemos suspender o cerrar una cuenta que incumpla estos términos o ponga en riesgo la seguridad del Servicio o de
          otros usuarios. Usted puede dejar de usar el Servicio y solicitar el cierre de su cuenta cuando quiera; al
          hacerlo, se aplicará lo descrito en la Política de privacidad sobre conservación y eliminación de datos.
        </p>
      </>
    ),
  },
  {
    id: "garantias",
    title: "Exclusión de garantías",
    content: (
      <p>
        En la medida permitida por la ley, el Servicio se ofrece «tal cual» y «según disponibilidad», sin garantías de
        ningún tipo, expresas o implícitas, incluidas las de comerciabilidad, idoneidad para un fin particular, exactitud
        de los resultados de la IA y ausencia de errores. Esto no limita los derechos irrenunciables que la ley reconozca a
        los consumidores.
      </p>
    ),
  },
  {
    id: "responsabilidad",
    title: "Limitación de responsabilidad",
    content: (
      <>
        <p>
          En la medida permitida por la ley, Scorpk no será responsable por daños indirectos, incidentales, especiales o
          consecuentes, ni por pérdida de datos, beneficios, ingresos u oportunidades, derivados del uso o la imposibilidad
          de usar el Servicio, incluidos los efectos de acciones automáticas ejecutadas por indicación suya o de
          resultados de la IA.
        </p>
        <p>
          La responsabilidad total de Scorpk frente a usted por cualquier reclamo relacionado con el Servicio no superará
          lo que usted haya pagado a Scorpk durante los doce meses anteriores al hecho que dio origen al reclamo. Nada de
          esto excluye la responsabilidad que no pueda limitarse conforme a la ley, como la derivada de dolo o culpa grave.
        </p>
        <p>
          Usted responderá por los perjuicios que cause a Scorpk o a terceros por usar el Servicio en contravención de
          estos términos.
        </p>
      </>
    ),
  },
  {
    id: "ley",
    title: "Ley aplicable y controversias",
    content: (
      <p>
        Estos términos se rigen por las leyes de la jurisdicción en la que el titular de Scorpk tiene su domicilio
        principal, sin perjuicio de las normas de protección al consumidor de imperativo cumplimiento en el país de
        residencia del usuario. Antes de iniciar cualquier reclamación, las partes procurarán resolver la controversia de
        buena fe a través de los canales de contacto.
      </p>
    ),
  },
  {
    id: "cambios",
    title: "Cambios en los términos",
    content: (
      <p>
        Podemos actualizar estos términos. Publicaremos la versión vigente en esta página con su fecha de actualización y,
        si el cambio es sustancial, lo avisaremos en el sitio o en la app. Si continúa usando el Servicio después de que el
        cambio entre en vigor, lo acepta; si no está de acuerdo, debe dejar de usarlo.
      </p>
    ),
  },
  {
    id: "contacto",
    title: "Contacto",
    content: <ContactChannels />,
  },
];

export default function TermsPage() {
  return (
    <LegalDocument
      title="Términos y condiciones"
      intro={
        <p>
          Estas son las reglas para usar Scorpk. Están escritas para que sean claras: qué puede esperar de nosotros, qué
          esperamos de usted y cómo funcionan las cuentas, los planes y la inteligencia artificial.
        </p>
      }
      sections={SECTIONS}
      other={{ href: "/privacy", label: "Política de privacidad" }}
    />
  );
}
