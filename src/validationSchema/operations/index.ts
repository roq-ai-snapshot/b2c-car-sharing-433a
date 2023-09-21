import * as yup from 'yup';

export const operationValidationSchema = yup.object().shape({
  type: yup.string().required(),
  status: yup.string().nullable(),
  start_time: yup.date().required(),
  end_time: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
  car_id: yup.string().nullable().required(),
});
