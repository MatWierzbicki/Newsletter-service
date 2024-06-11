interface User {
  userid: number;
  phonenumber: string;
}

interface Subscription {
  userid: number;
  optedin: boolean;
}

interface NewsletterLog {
  userid: number;
  phonenumber: string;
  message: string;
}

const users: User[] = [
  { userid: 1, phonenumber: '+48123456789' },
  { userid: 2, phonenumber: '+48123456788' },
  { userid: 3, phonenumber: '+48123456787' },
];

const subscriptions: Subscription[] = [
  { userid: 1, optedin: true },
  { userid: 2, optedin: false },
  { userid: 3, optedin: false },
];

const newsletterLogs: NewsletterLog[] = [];

export const dbMock = {
  query: async (query: string, params?: any[]) => {
    if (query.includes('FROM events')) {
      return { rows: users };
    } else if (query.includes('FROM subscriptions')) {
      const userId = params ? params[0] : undefined;
      const userSubscription = subscriptions.filter(
        sub => sub.userid === userId
      );
      return { rows: userSubscription };
    } else if (query.includes('INSERT INTO newsletter_logs')) {
      if (params) {
        const [userid, phonenumber, message] = params;
        newsletterLogs.push({ userid, phonenumber, message });
      }
      return { rows: [] };
    }
    return { rows: [] };
  },
  connect: async () => {
    console.log('Mock database connected');
  },
};
