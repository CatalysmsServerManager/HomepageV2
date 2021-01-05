export interface IPlan {
  analytics: string;
  commands: string;
  inventory: string;
  isPopular?: boolean;
  jobs: string;
  location: string;
  name: string;
  notifications: string;
  price: string;
  servers: string;
  teleports: string;
}

export const planData: IPlan[] = [
  {
    name: 'Contributor',
    price: '5',
    servers: '4',
    commands: '75',
    jobs: '50',
    notifications: '25',
    teleports: '25',
    location: '5 days',
    inventory: '3 days',
    analytics: '5 days'
  },
  {
    name: 'Sponsor',
    price: '10',
    servers: '5',
    commands: '150',
    jobs: '100',
    notifications: '50',
    teleports: '100',
    location: '1 week',
    inventory: '5 days',
    analytics: '1 week',
    isPopular: true
  },
  {
    name: 'Enterprise',
    price: '20',
    servers: '20',
    commands: 'unlimited',
    jobs: 'unlimited',
    notifications: 'unlimited',
    teleports: 'unlimited',
    location: '2 weeks',
    inventory: '10 days',
    analytics: '1 month'
  }];
