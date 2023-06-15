import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ChildCategory } from './ChildCategory';
import { ParentCategory } from './ParentCategory';
import { Ingredient } from './Ingredients';
import { Nutrient } from './Nutrients';
import { Instruction } from './Instructions';
import { Comment } from './Comment';

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_child: number;

  @Column()
  id_parent: number;

  @Column()
  title: string;

  @Column()
  prep_time: number;

  @Column()
  cook_time: number;

  @Column()
  course: string;

  @Column()
  cuisine: string;

  @Column({ nullable: true })
  servings: number;

  @Column()
  content: string;

  @Column()
  slug: string;

  @Column('simple-array')
  image: string[];

  @ManyToOne(() => ChildCategory, (childCategory) => childCategory.recipes)
  @JoinColumn({ name: 'id_child' })
  childCategory: ChildCategory;

  @ManyToOne(() => ParentCategory, (parentCategory) => parentCategory.recipes)
  @JoinColumn({ name: 'id_parent' })
  parentCategory: ParentCategory;

  @OneToMany(() => Ingredient, (ingredient) => ingredient.recipe)
  ingredients: Ingredient[];

  @OneToMany(() => Nutrient, (nutrient) => nutrient.recipe)
  nutrients: Nutrient[];

  @OneToMany(() => Instruction, (instruction) => instruction.recipe)
  instructions: Instruction[];

  @OneToMany(() => Comment, (comment) => comment.recipe)
  comments: Comment[];
}
