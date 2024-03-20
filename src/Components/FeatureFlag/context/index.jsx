import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCalls from "../data";

export const FeatureFlagContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
    const [loading, setLoading] = useState(false);
    const [enabledFlags, setEnabledFlags] = useState({});

    async function fetchFeatureFlags() {
        try {
            //original service call
            setLoading(true);
            const response = await featureFlagsDataServiceCalls();
            setEnabledFlags(response)
        } catch (err) {
            console.log(err);
            throw new Error(err)
        }finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchFeatureFlags();
    }, [])

    return (
        <FeatureFlagContext.Provider value={{ loading, enabledFlags }}>
            {children}
        </FeatureFlagContext.Provider>
    )
}