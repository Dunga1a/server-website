import { ChildCategory } from './entities/ChildCategory';
import { Comment } from './entities/Comment';
import { Ingredient } from './entities/Ingredients';
import { Instruction } from './entities/Instructions';
import { Nutrient } from './entities/Nutrients';
import { ParentCategory } from './entities/ParentCategory';
import { Recipe } from './entities/Recipes';
import { Reply } from './entities/Reply';
import { Role } from './entities/Role';
import { User } from './entities/User';

const entities = [
  Role,
  User,
  ParentCategory,
  ChildCategory,
  Recipe,
  Ingredient,
  Instruction,
  Nutrient,
  Comment,
  Reply,
];

export default entities;

export {
  Role,
  User,
  ParentCategory,
  ChildCategory,
  Recipe,
  Ingredient,
  Instruction,
  Nutrient,
  Comment,
  Reply,
};
