import React, { useEffect, useState } from 'react'

const Home = () => {


    const [allData, setAllData] = useState([])


    let fetchData = async () => {

        await fetch("http://localhost:5000/getdata")
            .then((res) => res.json())
            .then((data) => setAllData(data));
    }

    useEffect(() => {

        fetchData()
    }, [allData])

    return (
        <div className="bg-white py-7">
            <div className="mx-auto max-w-7xl py-7 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Blog
                </h2>

                <div className='g-6 flex h-full flex-wrap items-center justify-center lg:justify-between'>

                    {

                        allData.data && allData.data.map((data) => {

                            return (
                                <div key={data._id}>
                                    <article article className="flex mt-10 max-w-xl flex-col items-start justify-between">

                                        <div className="group relative">
                                            <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-blue-500 transition delay-75 duration-200">
                                                <span className="absolute inset-0" />
                                                {data.title}
                                            </h3>
                                            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                                                {data.description}
                                            </p>
                                        </div>
                                        <div className="relative mt-8 flex items-center gap-x-4">

                                            <div className="text-sm leading-6">
                                                <p className="font-semibold text-gray-900">

                                                    <span className="absolute inset-0" />
                                                    <span className='font-normal'>Author is :</span> {data.authorName}

                                                </p>

                                            </div>
                                        </div>
                                    </article>
                                </div>
                            )

                        })


                    }
                </div>
            </div>
        </div >

    )
}

export default Home