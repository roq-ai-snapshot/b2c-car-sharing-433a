interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Fleet Manager', 'Admin', 'Customer', 'Operations Staff', 'Business Owner', 'Manager'],
  tenantName: 'Company',
  applicationName: 'B2C Car sharing',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read company information',
    'Read car information',
    'Read location information',
    'Read operation status',
  ],
  ownerAbilities: ['Manage users', 'Manage companies', 'Manage car models', 'Manage bookings'],
  getQuoteUrl: 'https://app.roq.ai/proposal/47da8138-714e-4d15-b18c-485708f3ab56',
};
