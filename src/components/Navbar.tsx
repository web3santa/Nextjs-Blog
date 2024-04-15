import { SwatchBook } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-neutral-100">
        <div className="container">
          <div className="flex-1">
            <Link href="/">
              <SwatchBook color="blue" />
            </Link>
          </div>
          <div className="flex-none">
            <Link href="/create" className="btn btn-ghost">
              Create Post
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
