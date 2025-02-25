import React, { useState } from 'react'


function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const applications = [
        { aplicationName: 'Gmail.com: Temiraliev_Argen', applicationURL: 'temiraliev0304@gmail.com' },
        { aplicationName: 'Telegram: Temiraliev_Argen', applicationURL: 'https://t.me/Temiraliev_Argen' },
        { aplicationName: 'LinkedIn: Temiraliev_Argen', applicationURL: 'https://kg.linkedin.com/in/argen-zholdoshvai-uulu-3796a62b1' },
        { aplicationName: 'WhatsApp: Temiraliev_Argen', applicationURL: '+996555560686' },
        { aplicationName: 'GitHab: Temiraliev_Argen', applicationURL: 'https://github.com/ArgenTemiraliev' },        
    ]

    const token = '7285487708:AAH5eEGIlF15OJWNl2Ue_Z45Y-g7sGsfR38'
    const API = `https://api.telegram.org/bot${token}/sendMessage`
    const chat_id = '@partfolio_data'

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const text = ` Имя:${name}\n Email: ${email}\n Сообщение: ${message}`;
        
        try {
          await fetch(API, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: chat_id, text })
          });
          setName('');
          setEmail('');
          setMessage('');
        } catch (error) {
          alert('Ошибка отправки сообщения!');
        }
      };

  return (
    <section className="bg-gradient-to-r from-black via-gray-800 to-indigo-700 text-white py-16 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-6">Свяжитесь с нами</h2>
        <p className="text-lg opacity-80 mb-8">Оставьте сообщение, и мы свяжемся с вами в ближайшее время.</p>
              <div className="flex flex-col md:flex-row justify-between items-start gap-8">
              <div className="text-center m-auto">
  {applications.map((application, index) => (
    <div className="py-4 mb-3 border-b border-gray-300">
      <a href={application.applicationURL} target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-white transition-colors"  > {application.aplicationName}</a>
    </div>
  ))}
</div>


         
          <form className="w-full max-w-md space-y-4" onSubmit={handleSubmit}>
            <input type="text" placeholder="Ваше имя" className="w-full p-4 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"value={name}  onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Ваш email" className="w-full p-4 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" value={email} onChange={(e) => setEmail(e.target.value)}  />
            <textarea placeholder="Ваше сообщение" rows="5" className="w-full p-4 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
            <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 rounded-lg transition">Отправить</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
