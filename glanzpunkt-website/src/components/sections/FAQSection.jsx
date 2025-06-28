import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const { t } = useTranslation();
  const [openItems, setOpenItems] = useState(new Set());

  const faqData = [
    {
      id: 1,
      question: "Wie kann ich einen Termin buchen?",
      answer: "Sie können ganz einfach online über unser Buchungsformular einen Termin vereinbaren. Alternativ können Sie uns auch telefonisch unter +49 30 12345678 erreichen oder eine E-Mail an info@glanzpunkt.de senden. Wir melden uns innerhalb von 24 Stunden bei Ihnen zurück."
    },
    {
      id: 2,
      question: "Welche Reinigungsservices bieten Sie an?",
      answer: "Wir bieten eine Vielzahl von Reinigungsservices an: Hausreinigung, Büroreinigung, Fensterreinigung, Teppichreinigung, Umzugsreinigung und Grundreinigung. Jeder Service kann individuell an Ihre Bedürfnisse angepasst werden."
    },
    {
      id: 3,
      question: "Wie werden die Preise berechnet?",
      answer: "Unsere Preise basieren auf verschiedenen Faktoren wie der Art der Reinigung, der Größe der zu reinigenden Fläche, der Häufigkeit und dem Aufwand. Wir bieten kostenlose Besichtigungen an, um Ihnen ein genaues Angebot zu erstellen. Regelmäßige Reinigungen erhalten attraktive Rabatte."
    },
    {
      id: 4,
      question: "Sind Sie versichert und lizenziert?",
      answer: "Ja, wir sind vollständig versichert und lizenziert. Alle unsere Mitarbeiter sind geschult, zuverlässig und vertrauenswürdig. Wir verfügen über alle notwendigen Versicherungen für Haftpflicht und Schäden."
    },
    {
      id: 5,
      question: "Welche Reinigungsmittel verwenden Sie?",
      answer: "Wir verwenden ausschließlich hochwertige, umweltfreundliche Reinigungsmittel, die sowohl effektiv als auch sicher für Ihre Familie und Haustiere sind. Auf Wunsch können wir auch spezielle allergikerfreundliche oder biologische Produkte verwenden."
    },
    {
      id: 6,
      question: "Kann ich regelmäßige Reinigungstermine vereinbaren?",
      answer: "Absolut! Wir bieten flexible Reinigungspläne an - wöchentlich, zweiwöchentlich oder monatlich. Regelmäßige Kunden erhalten attraktive Rabatte und haben Priorität bei der Terminvergabe."
    },
    {
      id: 7,
      question: "Was passiert, wenn ich mit der Reinigung nicht zufrieden bin?",
      answer: "Ihre Zufriedenheit ist unsere Priorität. Falls Sie mit unserem Service nicht vollständig zufrieden sind, kommen wir innerhalb von 24 Stunden kostenlos zurück, um eventuelle Probleme zu beheben. Wir bieten eine 100%ige Zufriedenheitsgarantie."
    },
    {
      id: 8,
      question: "Muss ich während der Reinigung anwesend sein?",
      answer: "Nein, Sie müssen nicht anwesend sein. Viele unserer Kunden geben uns einen Schlüssel oder nutzen Schlüsselboxen. Alle unsere Mitarbeiter sind vertrauenswürdig und bonded. Wir können auch zu Zeiten kommen, die für Sie am besten passen."
    },
    {
      id: 9,
      question: "Welche Zahlungsmethoden akzeptieren Sie?",
      answer: "Wir akzeptieren verschiedene Zahlungsmethoden: Bargeld, Banküberweisung, EC-Karte und alle gängigen Kreditkarten. Für regelmäßige Services bieten wir auch bequeme Lastschriftverfahren an."
    },
    {
      id: 10,
      question: "Wie weit im Voraus sollte ich buchen?",
      answer: "Wir empfehlen, mindestens 2-3 Tage im Voraus zu buchen, um Ihren Wunschtermin zu sichern. Für dringende Reinigungen versuchen wir jedoch auch kurzfristige Termine zu ermöglichen. Kontaktieren Sie uns einfach!"
    }
  ];

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-blue-100 rounded-full">
              <HelpCircle className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Häufig gestellte Fragen
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hier finden Sie Antworten auf die häufigsten Fragen zu unseren Reinigungsservices. 
            Falls Sie weitere Fragen haben, kontaktieren Sie uns gerne!
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item) => {
            const isOpen = openItems.has(item.id);
            
            return (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </div>
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-700 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <div className="bg-blue-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Haben Sie weitere Fragen?
            </h3>
            <p className="text-gray-600 mb-6">
              Unser freundliches Team steht Ihnen gerne zur Verfügung und beantwortet 
              alle Ihre Fragen zu unseren Reinigungsservices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+4930123456789"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Jetzt anrufen
              </a>
              <a
                href="mailto:info@glanzpunkt.de"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-medium rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors"
              >
                E-Mail senden
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

