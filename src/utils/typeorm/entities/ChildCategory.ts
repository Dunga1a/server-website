import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ParentCategory } from './ParentCategory';
import { Recipe } from './Recipes';

@Entity()
export class ChildCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  sub_slug: string;

  @ManyToOne(
    () => ParentCategory,
    (parentCategory) => parentCategory.childCategories,
  )
  @JoinColumn({ name: 'parent_id' })
  parentCategory: ParentCategory;

  @OneToMany(() => Recipe, (recipe) => recipe.childCategory)
  recipes: Recipe[];
}
