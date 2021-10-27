import { Connection } from 'typeorm';
import { Relation } from '../entities/importand.entity';

export const relationProviders = [
  {
    provide: 'IMPORTAND_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Relation),
    inject: ['DATABASE_CONNECTION'],
  },
];
