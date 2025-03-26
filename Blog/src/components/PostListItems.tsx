import React from "react";
import { Link } from "react-router-dom";

const PostListItems: React.FC = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      <div className="md:hidden xl:block xl:w-1/3">
      
      </div>
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/test" className="text-4xl font-semibold">
          Lorem ipsum dolor sit, amet consectetur
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link className="text-blue-800">Ariyaman</Link>
          <span>on</span>
          <Link className="text-blue-800">web design</Link>
          <span>2 days ago</span>
        </div>
        <p>
          kjhsafdljhadsfljhdsaf;jhsaf;ljhdsf;ljhdsaflhjdsf;jhdsfljsdfldsflkjdsf
          lkkjdsflkjdsaflkjdsflksaflksdf'lklljfdlijadsfdlkjdsaflkjdsaf;lkjdsaf;
          lkjjdsfd;lkjsaf;lkjdsaf;lkjsfd;lkjsaf;lkjdsf;lkjdsdf;lkjdsf;lkjdsf;
          lkjsf;lkkjdsf;ljds;lkfjdsa;lkfjdsa;lkfjdsa;lkfjdsaa;lfkjdsa;lfkjdsf;kjdsf;lkj1j
        </p>
        <Link to="/text" className="underline text-blue-800 text-sm">
          Read More
        </Link>
      </div>
    </div>
  );
};
export default PostListItems;
