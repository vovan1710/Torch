import { Language } from './global';

export const  contactInfo: IСontactInfo =  {
  title: {
    UA: 'Співробітництво',
    RU: 'Cотрудничество'
  },
  description: {
    UA: 'Приймаємо замовлення на виробництво з урахуванням Ваших побажань і пропонуємо такі варіанти взаємовигідної співпраці: <br><br>  Корпоративні замовлення (ми можемо виготовити продукцію з символікою Вашої компанії).<br>Оптові поставки нашої продукції. <br> Співробітництво за моделлю дропшіпінг. <br> Ми також завжди відкриті для Ваших пропозицій!',
    RU: 'Принимаем заказы на производство с учетом Ваших пожеланий и предлагаем такие варианты взаимовыгодного сотрудничества: <br> <br> Корпоративные заказы (мы можем изготовить продукцию с символикой Вашей компании). <br> Оптовые поставки нашей продукции. <br> Сотрудничество по модели дропшипинг. <br> Мы также всегда открыты для Ваших предложений!'
  },
  email: 'info@torch.com',
  phone: '+38 093 123 22 23',
  address: 'м. Киів',
  schedule: 'ПН-ПТ: з 9:00 до 18:00СБ-НД: -'
}

export const contactForm: IContactForm = {
  title: {
    UA: "Напишіть нам",
    RU: 'Свяжитесь с нами'
  },
  name: {
    UA: "Ім'я",
    RU: 'Имя'
  },
  email: {
    UA: "Email",
    RU: 'Email'
  },
  subject: {
    UA: 'Тема',
    RU: 'Тема'
  },
  message: {
    UA: 'Ваше повідомлення',
    RU: 'Ваше сообщение'
  },
  sendButton: {
    UA: 'Відправити',
    RU: 'Отправить'
  },
  sendMessage: {
    UA: 'Повідомлення успішно відправлено! Дякуємо за контакт з нами!',
    RU: 'Сообщение успешно отправлено!'
  }
}

interface IСontactInfo {
  title: Language;
  description: Language;
  phone: string;
  address: string;
  email: string;
  schedule: string;
}

interface IContactForm {
  title: Language;
  name: Language;
  email: Language;
  subject: Language;
  message: Language;
  sendButton: Language;
  sendMessage: Language;
}

