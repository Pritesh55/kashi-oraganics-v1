import React from 'react'

const FormInput = () => {
    return (
        <>
            <div className="flex flex-col gap-2">
                <label htmlFor="full-name" className="leading-4 text-sm text-gray-600">
                    first_name {first_name}
                </label>

                <input type="text" id="full-name" name="full-name"
                    // ------------------------------------
                    onChange={(e) => setFirst_name(e.target.value)}
                    value={first_name}
                    // ------------------------------------

                    className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-6 transition-colors duration-200 ease-in-out" />
            </div>
        </>
    )
}

export default FormInput