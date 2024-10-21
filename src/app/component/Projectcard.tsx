import React from 'react';
import { CodeBracketIcon ,EyeIcon} from '@heroicons/react/24/solid';
import Link from 'next/link';

interface cardProop {
	imagesUrl: string,
	title: string,
	description: string
	tag:string[]
	gitUrl?:string,
	previewUrl?:string
}


const Projectcard: React.FC<cardProop> = ({imagesUrl, title, description, gitUrl,previewUrl }) => {
	return (
    <div>
      <div
        className="w-80 h-96 rounded-t-xl rounded-b-xl flex flex-col items-center relative group"
        style={{
          background: `url(${imagesUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          marginBottom: 0,
          padding: 0,
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          {gitUrl && (
            <Link
              href={gitUrl}
              className="h-11 w-11 border-2 mr-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <CodeBracketIcon className="h-7 w-7 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
            </Link>
          )}

          {previewUrl && (
            <Link
              href={previewUrl}
              className="h-11 w-11 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <EyeIcon className="h-7 w-7 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
            </Link>
          )}
        </div>
      </div>

      <div className="text-white ">
        <h3 className="text-xl mt-1 italic">{title}</h3>
        <p className="text-pink-700">{description}</p>
      </div>
    </div>
  );
}





 export default Projectcard 

