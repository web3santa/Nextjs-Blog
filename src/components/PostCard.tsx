import { Tag } from "@prisma/client";
import Link from "next/link";
import React, { FC } from "react";
// id        String   @id @default(cuid())
// name      String   @db.VarChar(225)
// content   String
// createdAt DateTime @default(now())
// updatedAt DateTime @updatedAt
// tag       Tag?     @relation(fields: [tagId], references: [id])
// tagId     String?

interface PostCardProps {
  post: {
    id: string;
    name: string;
    content: string;
    tag: Tag;
  };
}

const PostCard: FC<PostCardProps> = ({ post }) => {
  const { id, name, content, tag } = post;
  return (
    <div className="card w-full bg-base-100 shadow-xl border">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{content.slice(0, 30)}</p>

        <div className="card-actions justify-end">
          <div className="badge badge-info gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-4 h-4 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
            {tag?.name}
          </div>
          <Link href={`/blog/${id}`} className="hover:underline">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
