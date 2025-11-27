// Producto abstracto
 interface Notifications{
  send(message: string): void;
}


// Producto concreto email
 class EmailNotifications implements Notifications
{
  send(message: string): void {
   console.log(`${message} desde Email`);
  }
}

// Producto concreto sms
export class SmsNotifications implements Notifications
{
  send(message: string): void {
   console.log(`${message} desde SMS`);
  }
}

// Creador
export interface Notificator{
  createNotification(): Notifications
}

// Creador concreto para email
export class EmailNotificator implements Notificator{
  createNotification(): Notifications {
   return new EmailNotifications()
  }
}


// Creador concreto para sms
export class SmsNotificator implements Notificator{
  createNotification(): Notifications {
   return new SmsNotifications()
  }
}

// Uso
const emailFactory = new EmailNotificator()
const smsFactory = new SmsNotificator()

const email = emailFactory.createNotification()
email.send("Hola")

const sms = smsFactory.createNotification()
sms.send("Hola")