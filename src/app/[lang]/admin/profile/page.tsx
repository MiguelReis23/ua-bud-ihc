import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import {ProfileCard} from "@/components/profile-card"
import { getDictionary } from "@/lib/get-dictionary"
import { AdminHeader } from "@/components/admin-header"

export default async function AdminProfilePage(params: {lang: string}) {
    const dictionary = await getDictionary(params.lang)
    
    return (
        <>
            <AdminHeader dictionary={dictionary} />
            <main className="flex flex-col items-center h-screen py-12">
                <div className="w-full max-w-4xl px-4 md:px-6">
                    <div className="mb-8 text-center">
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Profile</h1>
                    </div>
                </div>
                <ProfileCard 
                    avatarSrc="/EC.jpg"
                    avatarAlt="EC"
                    avatarFallback="EC"
                    name="Emídio Costa"
                    jobTitle="STIC"
                    email="EmCosta@ua.pt"
                    department="STIC - 27"
                    />
            </main>
        </>
    )
};
