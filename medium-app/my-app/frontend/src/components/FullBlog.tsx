import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./Blogcard"

export const FullBlog = ({blog} : {blog: Blog})=> {
    return <div>
        <Appbar />
        <div className="flex justify-center">
            <div className="max-w-screen-xl grid grid-cols-12 px-24 pt-12">
                <div className="col-span-8">
                    <div className="text-3xl font-extrabold"> 
                        {blog.title}
                    </div>
                    <div className="text-slate-500 pt-2">
                        Posted on 2nd Dec 2023
                    </div>
                    <div className="p-4">
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-4"> 
                    <div className="text-slate-600 text-lg">
                        Author
                    </div>
                    <div className="flex">
                        <div className="pr-4 flex flex-col justify-center">
                            <Avatar size="big" name={blog.author.name || "Anoymous"}/>
                        </div>
                        <div>
                            <div className="text-xl font-bold">
                                {blog.author.name || "Anonymous"}
                            </div>
                            <div className="pt-2 text-slate-500">
                                Random catch phrase aouth the authors ability to gather info
                            </div>
                        </div>
                    </div> 

                </div>
        </div>

        </div>
    </div> 
}