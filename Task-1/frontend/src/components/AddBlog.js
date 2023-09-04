import React, { useState } from 'react'
import axios from 'axios'

const AddBlog = () => {

    const [blogData, setBlogData] = useState({
        title: "",
        description: "",
        author: "",
    });

    let handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setBlogData({ ...blogData, [name]: value })
    }

    let sendData = (e) => {
        e.preventDefault();

        axios.post('http://localhost:5000/addblog', blogData, {
            method: 'POST',
            header: {
                "content-type": "application/json",
                Accept: 'application/json',
                "Access-Control-Allow-Origin": "*",
            },
        })
            .then(res => {
                alert('Successful');
                setBlogData({
                    title: "",
                    description: "",
                    author: "",
                })
            })
            .catch(err => console.log(err))
    }


    return (

        <section className="mt-7">
            <div className="h-full">
                {/* Left column container with background*/}
                <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                    <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                        <img
                            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="w-full"
                            alt="Sample"
                        />
                    </div>
                    {/* Right column container */}
                    <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">

                        <form onSubmit={sendData}>

                            <div className="flex flex-row items-center justify-center lg:justify-start">
                                <p className="mb-0 mr-4 text-2xl">Add Blog</p>

                            </div>

                            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">

                            </div>

                            <div className="relative mb-6 w-80" data-te-input-wrapper-init="">

                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                >
                                    Title
                                </label>
                                <input
                                    className="appearance-none block w-full text-gray-700 border border-gray-200 rounded-xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-last-name"
                                    type="text"
                                    placeholder="Write your title..."
                                    name='title'
                                    value={blogData.title}
                                    onChange={handleInput}
                                />

                            </div>

                            <div className="relative mb-6 w-96" data-te-input-wrapper-init="">

                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="grid-last-name"
                                >
                                    Description
                                </label>

                                <textarea id="message" rows="4" className="appearance-none block p-2.5 w-full text-sm rounded-xl border border-gray-200 focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Write your thoughts here..."
                                    name='description'
                                    value={blogData.description}
                                    onChange={handleInput}
                                ></textarea>
                            </div>

                            <div className="relative mb-6 w-80" data-te-input-wrapper-init="">

                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="grid-last-name"
                                >
                                    Author Name
                                </label>
                                <input
                                    className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded-xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-last-name"
                                    type="text"
                                    placeholder="Write author name"
                                    name='author'
                                    value={blogData.author}
                                    onChange={handleInput}
                                />
                            </div>
                            

                            <div className="text-center lg:text-left">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                    Add
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default AddBlog