import { useEffect, useState } from "react";

export default useOnlineStatus = () => {
    const [userState, setUserState] = useState(true);

    useEffect(() => {
        window.addEventListener('online', () => setUserState(true));
        window.addEventListener('offline', () => setUserState(false));
    }, []);

    return userState;
}