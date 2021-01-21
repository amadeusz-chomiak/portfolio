import { useStore } from './useStore'

interface Mail {
  to: string
  subject: string
  body: string
}

interface MailTemplates {
  cooperationRequestPL: Mail
}

const templates: MailTemplates = {
  cooperationRequestPL: {
    to: 'zlecenie@amadeusz.dev',
    subject: 'Rozpocznijmy współpracę',
    body: `Wypełnienie tych kilku informacji zajmie Ci maksymalnie kilka minut i pozwoli na przygotowanie dla Ciebie planu działania.


1. Kontakt
Imię:
Nazwisko:
NIP firmy (jeśli posiadasz):
Adres obecnej strony internetowej (jeśli posiadasz):


2. Czego potrzebujesz
Opisz do czego potrzebujesz strony? Jaki problem ma rozwiązać?


Jaka najwyższa cena byłaby dla Ciebie komfortowa?
Jej podanie ułatwi mi, dopasowanie skali projektu do Twoich potrzeb.


Jeśli posiadasz projekt strony (to jak ma wyglądać strona), dodaj go do maila.
W przeciwnym razie czy chcesz, abym go dla Ciebie wykonał?


3. Dodatkowe uwagi
Opisz wszelkie dodatkowe wymagania:


PS. Wysłanie tego maila nie zobowiązuje Cię do niczego,
umowę podpiszemy, gdy uzgodnimy plan działania (otrzymasz go za darmo).`,
  },
}

export const useMail = (templateKey: keyof typeof templates) => {
  const { to, subject, body } = templates[templateKey]
  const mailto = encodeURI(`mailto:${to}?subject=${subject}&body=${body}`)

  const send = () => {
    window.open(mailto)
    setTimeout(() => {
      useStore.requestCooperation.set('manual', false)
      useStore.requestCooperation.set('showModal', true)
    }, 500)
  }

  return {
    mailto,
    send,
    to,
    subject,
    body,
  }
}
