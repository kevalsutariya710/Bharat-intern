import React from 'react'

const Contact = () => {

    let Data = (e) => {
        e.preventDefault();
        alert("Send Successfully")

    }

    return (
        <>
            <div className="container mx-auto md:px-6">
                <section className="mb-5">
                    <div className="relative h-[300px] overflow-hidden"></div>
                    <div className="container px-6 md:px-12">
                        <div className="block rounded-lg px-6 py-12 border border-dashed shadow-xl -mt-[250px]">
                            <div className="mb-12 grid gap-x-6 md:grid-cols-2 lg:grid-cols-3">
                                <div className="mx-auto mb-12 text-center lg:mb-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                                        />
                                    </svg>
                                    <h6 className="font-medium">India</h6>
                                </div>
                                <div className="mx-auto mb-12 text-center lg:mb-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                        />
                                    </svg>
                                    <h6 className="font-medium"> Ahmedabad, Gujarat</h6>
                                </div>
                                <div className="mx-auto mb-6 text-center md:mb-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                        />
                                    </svg>
                                    <h6 className="font-medium">+91 1112223334</h6>
                                </div>

                            </div>
                            <div className="mx-auto max-w-[700px]">
                                <form onSubmit={Data}>
                                    <div className="relative mb-6" data-te-input-wrapper-init="">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        >
                                            Name
                                        </label>
                                        <input
                                            className="appearance-none block w-full text-gray-700 border border-gray-200 rounded-xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="grid-last-name"
                                            type="text"
                                            placeholder="Write your name..."
                                            name='name'

                                        />
                                    </div>
                                    <div className="relative mb-6" data-te-input-wrapper-init="">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        >
                                            Email
                                        </label>
                                        <input
                                            className="appearance-none block w-full text-gray-700 border border-gray-200 rounded-xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="grid-last-name"
                                            type="text"
                                            placeholder="Write your email..."
                                            name='email'

                                        />
                                    </div>
                                    <div className="relative mb-6" data-te-input-wrapper-init="">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="grid-last-name"
                                        >
                                            Message
                                        </label>

                                        <textarea id="message" rows="4" className="appearance-none block p-2.5 w-full text-sm rounded-xl border border-gray-200 focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Write your message here..."
                                            name='message'

                                        ></textarea>
                                    </div>

                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                        Send
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default Contact