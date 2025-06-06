"use client";

import useAuthModal from "@/app/hooks/useAuthModal";
import useUploadModal from "@/app/hooks/useUploadModal";
import { useUser } from "@/app/hooks/useUser";
import { AiOutlinePlus } from "react-icons/ai";
import { TbPlaylist } from "react-icons/tb";

const Library = () => {
    const authModal = useAuthModal();
    const uploadModal = useUploadModal();
    const {user} = useUser();

    const onClick = () => {
        //Handle Upload Later
        if (!user) {
            return authModal.onOpen();
        } 
        // TODO:check for subscription
        
        return uploadModal.onOpen();
    };
    return (
        <div>
            <div className="flex flex-col">
                <div className="flex item-center justify-between px-5 pt-4">
                    <div className="inline-flex items-center gap-x-2">
                        <TbPlaylist className="text-neutral-400" size={26} />
                        <p className="text-neutral-400 font-medium text-md">
                            Your Library
                        </p>
                    </div>
                    <AiOutlinePlus onClick={onClick} size={20} className="text-neutral-400 cursor-pointer hover:text-white transition"/>
                </div>
                <div className="flex flex-col gap-y-2 mt-4 px-3">
                    List of Songs !
                </div>
            </div>
        </div>
    );
}

export default Library;