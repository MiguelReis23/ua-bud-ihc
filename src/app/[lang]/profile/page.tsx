import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import {ProfileCard} from "@/components/profile-card"
import { getDictionary } from "@/lib/get-dictionary"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default async function ProfilePage(params: {lang: string}) {
    const dictionary = await getDictionary(params.lang)
    return (
        <>
            <SiteHeader dictionary={dictionary} />
            <main className="flex flex-col items-center h-screen py-12">
                <div className="w-full max-w-4xl px-4 md:px-6">
                    <div className="mb-8 text-center">
                        <h1 className="text-4xl font-bold">Profile</h1>
                    </div>
                </div>
                <ProfileCard 
                    avatarSrc="/KC.jpg"
                    avatarAlt="KC"
                    avatarFallback="KC"
                    name="Kushwaha Chopra"
                    jobTitle="Teacher"
                    email="Kupra@ua.pt"
                    department="DETI - 04"
                    />
            </main>
            <SiteFooter dictionary={dictionary} />
        </>
    )
};
