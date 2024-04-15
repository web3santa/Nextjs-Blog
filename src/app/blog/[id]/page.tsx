import BackButton from "@/components/BackButton";
import ButtonAction from "@/components/ButtonAction";
import React from "react";

const BlogDetailPage = () => {
  return (
    <div>
      <BackButton />
      <div className="mb-8">
        <h2 className="text-2xl font-bold my-4">Post one</h2>
        <ButtonAction />
      </div>
      <p className="text-slate-100">Post one Content</p>
    </div>
  );
};

export default BlogDetailPage;
