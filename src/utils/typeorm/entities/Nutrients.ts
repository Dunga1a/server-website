import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Recipe } from './Recipes';

@Entity()
export class Nutrient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  value: number;

  @Column()
  quantity: number;

  @ManyToOne(() => Recipe, (recipe) => recipe.nutrients)
  @JoinColumn({ name: 'recipe_id' })
  recipe: Recipe;
}
