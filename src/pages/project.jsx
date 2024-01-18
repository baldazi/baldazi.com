import React from 'react';
import { MdSchool } from "react-icons/md";
function Projet() {
    return (
        <div className="hero min-h-screen bg-base-300">
            <div className="flex content-between items-center justify-center flex-wrap gap-3 text-center">
                {/* conflistik card */}
                <div className="border rounded-md shadow md:w-96 relative mx-5 hover:-translate-y-1 shadow-gray-400">
                    {/* header */}
                    <h3 className="absolute -translate-y-1/2 left-1/2 -translate-x-1/2 border bg-violet-900 text-white italic rounded-md px-1">Conflistik</h3>
                    {/* body */}
                    <div className="p-2">
                        <div className="flex justify-center gap-1">
                            <MdSchool size={32}/>
                        </div>
                        
                        <p>Application Mobile Android</p>
                    </div>
                </div>
                {/* stage card */}
                <div className="border rounded-md shadow md:w-96 relative mx-5 hover:-translate-y-1 shadow-gray-400">
                    {/* header */}
                    <h3 className="absolute -translate-y-1/2 left-1/2 -translate-x-1/2 border bg-violet-900 text-white italic rounded-md px-1">Stage</h3>
                    {/* body */}
                    <div className="p-2">
                        <div className="flex justify-center gap-1">
                            <MdSchool size={32}/>
                        </div>
                        
                        <p>Application Mobile Android</p>
                    </div>
                </div>
                {/* stage card */}
                <div className="border rounded-md shadow md:w-96 relative mx-5 hover:-translate-y-1 shadow-gray-400">
                    {/* header */}
                    <h3 className="absolute -translate-y-1/2 left-1/2 -translate-x-1/2 border bg-violet-900 text-white italic rounded-md px-1">Stage</h3>
                    {/* body */}
                    <div className="p-2">
                        <div className="flex justify-center gap-1">
                            <MdSchool size={32}/>
                        </div>
                        
                        <p>Application Web</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Projet;