import React from "react";

type Props = {};


export default function GoUPButton(props: Props) {

    function scrollUp() {
        window.scrollTo(0, 0);
        console.log("Scrolling up");
    }

    return (
        <div className="fixed bottom-10 right-10 z-20">
            <button
                onClick={scrollUp}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
                Go to top
            </button>
        </div>
    )
}
