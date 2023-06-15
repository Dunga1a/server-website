import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Recipe } from './Recipes';

@Entity()
export class Instruction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  recipe_id: number;

  @Column()
  step_number: number;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column()
  image: string;

  @ManyToOne(() => Recipe, (recipe) => recipe.instructions)
  @JoinColumn({ name: 'recipe_id' })
  recipe: Recipe;
}
