declare module 'emailjs-com' {
    type EmailJSResponseStatus = {
      status: number;
      text: string;
    };
  
    interface EmailJSResult {
      status: number;
      text: string;
    }
  
    interface EmailJSOptions {
      service_id: string;
      template_id: string;
      user_id?: string;
    }
  
    interface EmailJSSendFormOptions {
      serviceID: string;
      templateID: string;
      form: HTMLFormElement;
      user_id?: string;
    }
  
    interface EmailJS {
      init(user_id: string): void;
      send(serviceID: string, templateID: string, templateParams: any, userID?: string): Promise<EmailJSResult>;
      sendForm(options: EmailJSSendFormOptions): Promise<EmailJSResult>;
      userID(): string | null;
    }
  
    const emailjs: EmailJS;
    export = emailjs;
  }
  