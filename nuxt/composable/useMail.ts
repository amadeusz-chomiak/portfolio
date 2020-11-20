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
    subject: 'Zlecenie na',
    body: `Wypełnienie tych kilku informacji zajmie Ci maksymalnie 5 minut i pozwoli na przygotowanie dla Ciebie planu działania.


1. Kontakt
Imię:
Nazwisko:
NIP firmy (jeśli posiadasz):


2. Czego potrzebujesz
Jeśli masz wątpliwości, poniższe informacje możemy ustalić na spotkaniu przez Skype.
Opisz do czego potrzebujesz strony?

Ile wynosi Twój maksymalny budżet? Jego podanie ułatwi mi, dopasowanie skali projektu do Twoich potrzeb.

Jeśli posiadasz projekt strony, umieść go w załączniku do maila, w przeciwnym razie mogę go dla Ciebie wykonać.


3. Wymagane funkcje (usuń zbędne odpowiedzi)
Proste i tanie:
Potrzebuję systemów społecznościowych (newsletter, powiadomienia push, komentarze) TAK / NIE

Zaawansowane:
Zaawansowane SEO (optymalizacja w wynikach wyszukiwania, każdej części strony) TAK / NIE
Potrzebuję systemu płatności TAK / NIE
Potrzebuję wielu wersji językowych TAK / NIE


PS. Wysłanie tego maila nie zobowiązuje Cię do niczego, umowę podpiszemy, gdy uzgodnimy plan działania.

Tag ZLECENIE#87 (proszę nie usuwaj go)`,
  },
}

export const useMail = (templateKey: keyof typeof templates) => {
  const { to, subject, body } = templates[templateKey]
  const mailto = encodeURI(`mailto:${to}?subject=${subject}&body=${body}`)

  const send = () => {
    window.open(mailto)
    setTimeout(() => {
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
