import { ApiProperty } from '@nestjs/swagger';
import { Relation } from 'src/modules/importand/entities/importand.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Todo {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  title: string;

  @ApiProperty()
  @Column({ default: false })
  isCompleted: boolean;

  @OneToMany((type) => Relation, (relation) => relation.isCompleted)
  photos: Relation[];
}
