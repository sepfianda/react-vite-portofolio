import React from 'react'

const Contact = () => {
    return (
        <div className="bg-indigo-50">
        <div className="container mx-auto p-10">
            <div className="grid grid-cols-2">
                <div className="flex flex-col justify-center">
                    <div>
                    <p className="text-slate-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolore iste iusto illum sit quis, tempora dolorum eveniet vitae laboriosam iure earum ad numquam veniam repellat blanditiis dolor beatae facere.</p>
                    </div>
                </div>
            <div>
            <form action="">
                <div class="w-full px-2 mb-4">
                <label For="name" class="font-bold">Name</label>
                <input type="text" id="name" class="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-1"/>
                </div>
            </form>
            <form action="">
                <div class="w-full px-2 mb-4">
                <label For="email" class="font-bold">Email</label>
                <input type="email" id="email" class="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-1"/>
                </div>
            </form>
            <form action="">
                <div class="w-full px-2 mb-4">
                <label For="message" class="font-bold">Message</label>
                <textarea type="message" id="message" class="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-1 h-32"/>
                </div>
                <div class="w-full px-2 text-center">
                <button class="text-base font-semibold text-black bg-slate-200 py-1 px-5 mb-4 rectangle-full w-1/4 hover:opacity-80 hover:shadow-lg">SUBMIT</button>
                </div>
            </form>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Contact