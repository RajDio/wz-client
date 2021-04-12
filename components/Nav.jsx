export default function Nav () {
    return (
        <div className="flex justify-between m-10">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="white">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
            </div>
            <div className=" flex justify-center">
                <div className="text-lg text-dark-100 my-2 mx-10">Home</div>
                <div className="text-lg text-dark-100 my-2 mx-10">About</div>
                <div className="text-lg text-dark-100 my-2 mx-10">Subscription</div>
                <div className="text-lg text-dark-100 my-2 mx-10">Sign Up</div>
            </div>
            <div></div>
        </div>
    )
}