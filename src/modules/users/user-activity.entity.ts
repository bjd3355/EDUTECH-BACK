// src/modules/users/user-activity.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./users.entity";

@Entity("user_activities")
export class UserActivity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  action: string;

  @Column({ type: "date" })
  date: string;

  @Column()
  details: string;

  @Column({ nullable: true })
  ip: string;

  @ManyToOne(() => User, (user) => user.activites, { onDelete: "CASCADE" })
  user: User;
}
