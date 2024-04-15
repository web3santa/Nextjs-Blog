import { db } from "@/app/lib/db";
import BackButton from "@/components/BackButton";
import ButtonAction from "@/components/ButtonAction";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/router";
import React, { FC } from "react";

interface BlogDetailPageProps {
  params: {
    id: string;
  };
}

async function getPost(id: string) {
  const response = await db.post.findFirst({
    where: {
      id: id,
    },
    select: {
      id: true,
      name: true,
      content: true,
      tag: true,
    },
  });

  return response;
}

const BlogDetailPage: FC<BlogDetailPageProps> = async ({ params }) => {
  const post = await getPost(params.id);

  return (
    <div>
      <BackButton />
      <div className="mb-8">
        <h2 className="text-2xl font-bold my-4">{post?.name}</h2>
        <ButtonAction id={params.id} />
      </div>
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
        {post?.tag?.name}
      </div>
      <p className="text-slate-100">{post?.content}</p>
    </div>
  );
};

export default BlogDetailPage;
