import react from "react";

export const userStoreContext = react.createContext();

const UserStoreProvider =({children})=>{

    const [profile, setProfile] = react.useState(null)

    const userStore = {
        profile: profile,
        updateProfile : (profile)=>{setProfile(profile)}
    }

    return(
        <userStoreContext.Provider value={userStore}>
            {children}
        </userStoreContext.Provider>
    )
}
export default UserStoreProvider