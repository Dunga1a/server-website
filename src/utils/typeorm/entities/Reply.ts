import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './User';
import { Comment } from './Comment';

@Entity()
export class Reply {
  @PrimaryGeneratedColumn()
  reply_id: number;

  @Column()
  comment_id: number;

  @Column()
  user_id: number;

  @Column()
  content: string;

  @Column()
  create_at: Date;

  @Column()
  update_at: Date;

  @ManyToOne(() => User, (user) => user.replies)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Comment, (comment) => comment.replies)
  @JoinColumn({ name: 'comment_id' })
  comment: Comment;
}
