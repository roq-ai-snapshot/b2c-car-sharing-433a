import * as yup from 'yup';

export const carNameValidationSchema = yup.object().shape({
  model: yup.string().required(),
  manufacturer: yup.string().required(),
  year: yup.number().integer().required(),
  color: yup.string().nullable(),
  license_plate: yup.string().nullable(),
  company_id: yup.string().nullable().required(),
});
