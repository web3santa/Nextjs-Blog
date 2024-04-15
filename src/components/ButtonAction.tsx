"use client";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

interface ButtonActionProps {
  id: string;
}

const ButtonAction: FC<ButtonActionProps> = ({ id }) => {
  const router = useRouter();

  const { mutate } = useMutation({
    mutationFn: async () => {
      return await axios.delete(`/api/posts/${id}`);
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

  return (
    <div>
      <Link href={`/edit/${id}`} className="btn mr-2">
        <Pencil /> Edit
      </Link>
      <button onClick={() => mutate()} className="btn btn-error">
        <Trash2 />
        Delete
      </button>
    </div>
  );
};

export default ButtonAction;
