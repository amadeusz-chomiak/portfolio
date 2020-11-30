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
    body: `Wypełnienie tych kilku informacji zajmie Ci maksymalnie 5 minut i pozwoli na przygotowanie dla Ciebie planu działania.


1. Kontakt
Imię:
Nazwisko:
NIP firmy (jeśli posiadasz):
Adres obecnej strony internetowej (jeśli posiadasz):

2. Czego potrzebujesz
Jeśli masz wątpliwości, poniższe informacje możemy ustalić na spotkaniu przez Skype.
Opisz do czego potrzebujesz strony?

Jaka najwyższa cena byłaby dla Ciebie komfortowa?
Jej podanie ułatwi mi, dopasowanie skali projektu do Twoich potrzeb.

Jeśli posiadasz projekt strony, dodaj go do maila.
W przeciwnym razie czy chcesz, abym go dla Ciebie wykonał?


3. Wymagane funkcje (dopisz TAK do wybranych)
Proste i tanie:
Potrzebuję systemów społecznościowych (newsletter, powiadomienia push, komentarze):

Zaawansowane:
Zaawansowane SEO (optymalizacja w wynikach wyszukiwania każdej części strony):
Potrzebuję systemu płatności:
Potrzebuję wielu wersji językowych:

4. Dodatkowe uwagi
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
