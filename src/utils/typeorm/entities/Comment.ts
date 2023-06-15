import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Recipe } from './Recipes';
import { User } from './User';
import { Reply } from './Reply';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  comment_id: number;

  @Column()
  recipe_id: number;

  @Column()
  user_id: number;

  @Column()
  content: string;

  @Column({ name: 'created_at' })
  created_at: Date;

  @Column({ name: 'updated_at' })
  updated_at: Date;

  @ManyToOne(() => User, (user) => user.comments)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Recipe, (recipe) => recipe.comments)
  @JoinColumn({ name: 'recipe_id' })
  recipe: Recipe;

  @OneToMany(() => Reply, (reply) => reply.comment)
  replies: Reply[];
}
