const mapping: Record<string, string> = {
  bookings: 'booking',
  'car-names': 'car_name',
  companies: 'company',
  locations: 'location',
  operations: 'operation',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
