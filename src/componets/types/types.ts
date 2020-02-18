export  type PostType = {
    id:number
    post:string
    likesCount:number |null
}

export type ContactsType = {
    github:string | null
    vk:string |null
    facebook:string | null
    instagram:string | null
    twitter:string | null
    website:string | null
    youtube:string | null
    mainLink:string | null
}


export type PhotosType ={
    small:string | null
    large:string | null
}

export type ProfileType = {
    id:number
    lookingForAJob:string | null
    lookingForAJobDescription:string |null
    fullName:string | null
    contacts:ContactsType
    photos: PhotosType
}

export type UserType ={
    id:number
    name:string
    status:string
    photo:PhotosType
    followed:boolean

}