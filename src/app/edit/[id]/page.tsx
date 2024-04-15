"use client";
import BackButton from "@/components/BackButton";
import FormPost from "@/components/FormPost";
import { FormInputPost } from "@/types";
import { Post } from "@prisma/client";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface EditPostPageProps {
  params: {
    id: string;
  };
}

const EditPostPage: FC<EditPostPageProps> = ({ params }) => {
  const { id } = params;
  const router = useRouter();

  const handleEditPost: SubmitHandler<FormInputPost> = (data) => {
    mutate(data);
  };

  // fetch list tags
  const { data, isLoading } = useQuery<Post>({
    queryKey: ["posts", id],
    queryFn: async () => {
      const response = await axios.get(`/api/posts/${id}`);
      return response.data;
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (newPost: FormInputPost) => {
      return axios.patch(`/api/posts/${id}`, newPost);
    },
    onError: (error) => {
      console.log(error);
    },
    onSuccess: () => {
      // Invalidate and refetch
      router.push("/");
      router.refresh();
    },
  });

  if (isLoading) {
    return (
      <div>
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  console.log(data);

  return (
    <div>
      <BackButton />
      <h1 className="text-2xl my-4 font-bold text-center">Edit Post</h1>
      <FormPost
        isPending={isPending}
        submit={handleEditPost}
        initialValue={data}
        isEditing={true}
      />
    </div>
  );
};

export default EditPostPage;
