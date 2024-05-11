import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import {ProfileCard} from "@/components/profile-card"

export default function ProfilePage() {
    return (
        <>
            <main className="flex flex-col items-center h-screen py-12">
                <div className="w-full max-w-4xl px-4 md:px-6">
                    <div className="mb-8 text-center">
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Profile</h1>
                    </div>
                </div>
                <ProfileCard 
                    avatarSrc="https://avatars.githubusercontent.com/u/38387065?v=4"
                    avatarAlt="KC"
                    avatarFallback="KC"
                    name="Kushwaha Chopra"
                    jobTitle="Teacher"
                    email="Kupra@ua.pt"
                    department="DETI - 04"
                    />
            </main>
        </>
    )
};
