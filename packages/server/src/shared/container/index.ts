import { container } from 'tsyringe';

import { AppointmentsRepository } from '@modules/appointments/infra/typeorm/repositories';
import { IAppointmentsRepository } from '@modules/appointments/repositories';
import { UsersRepository } from '@modules/users/infra/typeorm/repositories';
import { IUsersRepository } from '@modules/users/repositories';

container.registerSingleton<IAppointmentsRepository>(
  'AppointmentsRepository',
  AppointmentsRepository
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);