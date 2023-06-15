import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Recipe } from './Recipes';
import { ChildCategory } from './ChildCategory';

@Entity()
export class ParentCategory {
  @PrimaryGeneratedColumn()
  parent_category_id: number;

  @Column()
  name: string;

  @Column()
  slug: string;

  @OneToMany(
    () => ChildCategory,
    (childCategory) => childCategory.parentCategory,
  )
  childCategories: ChildCategory[];

  @OneToMany(() => Recipe, (recipe) => recipe.parentCategory)
  recipes: Recipe[];
}
