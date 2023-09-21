import * as yup from 'yup';

export const locationValidationSchema = yup.object().shape({
  latitude: yup.string().required(),
  longitude: yup.string().required(),
  address: yup.string().nullable(),
  city: yup.string().nullable(),
  country: yup.string().nullable(),
  car_id: yup.string().nullable().required(),
});
