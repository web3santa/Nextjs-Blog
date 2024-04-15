// import PostCard from "@/components/PostCard";
import axios from "axios";
import { db } from "./lib/db";
import PostCard from "@/components/PostCard";

async function getPosts() {
  const response = await db.post.findMany({
    select: {
      id: true,
      name: true,
      content: true,
      tag: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return response;
}

export default async function Home() {
  const dataPost = await getPosts();

  return (
    <main
      className="grid items-center justify-center md:grid-cols-2
    lg:grid-cols-3 gap-4 mt-10"
    >
      {dataPost?.map((post: any) => (
        <PostCard key={post.id} post={post} />
      ))}
    </main>
  );
}
